// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  runtimeConfig: {
    mail: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587,
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
      to: process.env.MAIL_TO || 'marekcon@seznam.cz',
      from: process.env.MAIL_FROM || 'no-reply@fyzio.local'
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    }
  },
  future: {
    compatibilityVersion: 4,
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
        './content/**/*.md',
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