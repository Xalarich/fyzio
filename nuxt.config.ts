// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  devtools: { enabled: true },
  srcDir: 'app/',
  // Static hosting (Endora, upload of .output/public via FTP). No Node server runtime is used —
  // `npm run generate` prerenders every route, sitemap.xml and robots.txt into .output/public.
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  // Base URL used by @nuxtjs/sitemap and @nuxtjs/robots to build absolute URLs.
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://marekcon.cz',
    name: 'Fyzioterapie Marek Cón'
  },
  // Keep the cookie policy out of the sitemap (it is noindex anyway).
  sitemap: {
    exclude: ['/zasady-cookies']
  },
  robots: {
    // Disallow nothing public-facing; just point crawlers at the sitemap.
    disallow: ['/zasady-cookies']
  },
  runtimeConfig: {
    public: {
      // Used to build absolute canonical / og:image URLs. Override at build time via NUXT_PUBLIC_SITE_URL.
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://marekcon.cz',
      // GA4 Measurement ID (e.g. G-XXXXXXXXXX). Empty = analytics disabled. Set via NUXT_PUBLIC_GTAG_ID.
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || ''
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
        // canonical is set per-route in app/app.vue (the previous hardcoded value pointed every page at the homepage)
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