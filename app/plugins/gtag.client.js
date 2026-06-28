// Loads Google Analytics 4 with Consent Mode v2.
// No analytics/ad storage is used until the visitor opts in via the cookie banner.
// Disabled automatically when NUXT_PUBLIC_GTAG_ID is not set.
export default defineNuxtPlugin(() => {
  const gtagId = useRuntimeConfig().public.gtagId
  if (!gtagId) return

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  // Default everything to denied — gtag stores no cookies/identifiers until updated.
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

  // Honour a decision stored on a previous visit.
  const { consent } = useCookieConsent()
  if (consent.value === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    })
  }
})
