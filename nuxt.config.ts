// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  srcDir: 'app/',
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      // These pages are not linked in the nav, so the crawler can't find them.
      // List them explicitly or they won't be generated.
      routes: ['/sluzby/akutni-stavy', '/sluzby/chronicke-stavy']
    }
  },
  runtimeConfig: {
    public: {
      // Single source of truth for the production URL (canonical, sitemap, OG).
      // Overridable at generate time via NUXT_PUBLIC_SITE_URL.
      siteUrl: 'https://marekcon.cz',
      // GA4 Measurement ID (e.g. G-XXXXXXXXXX). Empty = analytics disabled.
      // Set via NUXT_PUBLIC_GTAG_ID before `npm run generate`. The gtag plugin
      // only loads when this is non-empty, and only tracks after cookie opt-in.
      gtagId: ''
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#4f46e5' },
        { name: 'author', content: 'Marek Cón' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Fyzioterapie Marek Cón' },
        { property: 'og:locale', content: 'cs_CZ' },
        { name: 'twitter:site', content: '@fyziomarcon' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' }
        // Canonical is set per-route in app/app.vue (was wrongly global → homepage)
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  tailwindcss: {
    viewer: true,
    cssPath: './assets/css/tailwind.css',
    config: {
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
      ],
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
})