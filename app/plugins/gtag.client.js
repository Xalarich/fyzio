// Loads Google Analytics 4 with Consent Mode v2.
// Nothing is tracked until the visitor opts in via the cookie banner
// (category "analytics" → useCookieConsent). Disabled entirely when
// NUXT_PUBLIC_GTAG_ID is not set, so the dev/preview build stays clean.
export default defineNuxtPlugin(() => {
  const gtagId = useRuntimeConfig().public.gtagId
  if (!gtagId) return

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  // Default everything to denied — gtag stores no cookies/identifiers until updated.
  // This site has no ads, so the ad_* signals stay denied permanently; only
  // analytics_storage is ever flipped to granted (by the cookie consent state).
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  })

  gtag('js', new Date())
  gtag('config', gtagId, { anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
  document.head.appendChild(script)

  // Honour a decision stored on a previous visit. hydrate() reads localStorage
  // and pushes the analytics decision into Consent Mode via window.gtag (now defined).
  useCookieConsent().hydrate()
})
