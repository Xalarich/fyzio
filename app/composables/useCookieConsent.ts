// Cookie consent — shared reactive state + localStorage persistence.
// Only one optional category exists today ("maps" = embedded Mapy.cz iframe);
// adding e.g. "analytics" later means extending ConsentState + the settings UI.

const STORAGE_KEY = 'fyzio-cookie-consent'

export interface ConsentState {
  necessary: true
  maps: boolean
  ts: string | null
}

const defaultState = (): ConsentState => ({ necessary: true, maps: false, ts: null })

export const useCookieConsent = () => {
  // Shared singletons across components (banner, footer link, map gate).
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
  // "not decided, maps off" state, so the static HTML never embeds the iframe.
  const hydrate = () => {
    if (!import.meta.client) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      consent.value = { necessary: true, maps: !!parsed.maps, ts: parsed.ts ?? null }
      decided.value = true
    } catch {
      // corrupt storage — ignore and show the banner
    }
  }

  const commit = (custom: Partial<Pick<ConsentState, 'maps'>>) => {
    consent.value = {
      ...consent.value,
      ...custom,
      necessary: true,
      ts: new Date().toISOString(),
    }
    decided.value = true
    showSettings.value = false
    persist()
  }

  const acceptAll = () => commit({ maps: true })
  const rejectAll = () => commit({ maps: false })
  const save = (custom: { maps: boolean }) => commit({ maps: !!custom.maps })

  const has = (category: keyof ConsentState) => consent.value[category] === true
  const openSettings = () => { showSettings.value = true }

  return { consent, decided, showSettings, hydrate, acceptAll, rejectAll, save, has, openSettings }
}
