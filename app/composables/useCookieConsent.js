// Cookie-consent state shared across the app.
// Value is 'granted' | 'denied' | null (null = visitor has not decided yet → show banner).
export const useCookieConsent = () => {
  const cookie = useCookie('cookie_consent', {
    maxAge: 60 * 60 * 24 * 180, // 180 days
    sameSite: 'lax',
    path: '/'
  })

  // useState keeps the choice reactive and in sync across the banner, footer and policy page.
  const consent = useState('cookie_consent', () => cookie.value ?? null)

  // Push the choice into Google Consent Mode (no-op until the gtag plugin has loaded).
  const apply = (value) => {
    if (import.meta.client && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: value,
        ad_user_data: value,
        ad_personalization: value,
        analytics_storage: value
      })
    }
  }

  const accept = () => {
    consent.value = 'granted'
    cookie.value = 'granted'
    apply('granted')
  }

  const decline = () => {
    consent.value = 'denied'
    cookie.value = 'denied'
    apply('denied')
  }

  // Forget the choice so the banner shows again (used by "Nastavení cookies").
  const reset = () => {
    consent.value = null
    cookie.value = null
  }

  return { consent, accept, decline, reset }
}
