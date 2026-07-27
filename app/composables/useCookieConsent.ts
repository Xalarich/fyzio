// Cookie consent — shared reactive state + localStorage persistence.
// Two optional categories exist:
//   "maps"      = embedded Google Maps iframe on /kontakt
//   "analytics" = Google Analytics 4 (loaded by app/plugins/gtag.client.js,
//                 which is a no-op until NUXT_PUBLIC_GTAG_ID is set).
// Adding another category means extending ConsentState + the settings UI.

const STORAGE_KEY = 'fyzio-cookie-consent'

export interface ConsentState {
  necessary: true
  maps: boolean
  analytics: boolean
  ts: string | null
}

const defaultState = (): ConsentState => ({ necessary: true, maps: false, analytics: false, ts: null })

// Push the analytics decision into Google Consent Mode v2. No-op until the gtag
// plugin has defined window.gtag. We only use analytics_storage (no ads on this site).
const syncAnalyticsConsent = (granted: boolean) => {
  if (!import.meta.client) return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' })
  }
}

export const useCookieConsent = () => {
  // Shared singletons across components (banner, footer link, map gate, policy page).
  const consent = useState<ConsentState>('cookie-consent', defaultState)
  const decided = useState<boolean>('cookie-consent-decided', () => false)
  const showSettings = useState<boolean>('cookie-consent-settings', () => false)

  const persist = () => {
    if (!import.meta.client) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent.value))
    } catch {
      // storage blocked (private mode / quota) — state still works for this session
    }
  }

  // Client-only: read a previous choice. SSR/prerender always renders the
  // "not decided, all optional off" state, so the static HTML never embeds the
  // iframe nor loads analytics before consent.
  const hydrate = () => {
    if (!import.meta.client) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      consent.value = {
        necessary: true,
        maps: !!parsed.maps,
        analytics: !!parsed.analytics,
        ts: parsed.ts ?? null,
      }
      decided.value = true
      syncAnalyticsConsent(consent.value.analytics)
    } catch {
      // corrupt storage — ignore and show the banner
    }
  }

  const commit = (custom: Partial<Pick<ConsentState, 'maps' | 'analytics'>>) => {
    consent.value = {
      ...consent.value,
      ...custom,
      necessary: true,
      ts: new Date().toISOString(),
    }
    decided.value = true
    showSettings.value = false
    persist()
    syncAnalyticsConsent(consent.value.analytics)
  }

  const acceptAll = () => commit({ maps: true, analytics: true })
  const rejectAll = () => commit({ maps: false, analytics: false })
  const save = (custom: { maps?: boolean; analytics?: boolean }) =>
    commit({
      ...(custom.maps !== undefined ? { maps: !!custom.maps } : {}),
      ...(custom.analytics !== undefined ? { analytics: !!custom.analytics } : {}),
    })

  const has = (category: keyof ConsentState) => consent.value[category] === true
  const openSettings = () => { showSettings.value = true }

  return { consent, decided, showSettings, hydrate, acceptAll, rejectAll, save, has, openSettings }
}
