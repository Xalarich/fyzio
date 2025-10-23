// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
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