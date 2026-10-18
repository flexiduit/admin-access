// nuxt.config.ts

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  vite: {
    css: {
      devSourcemap: true
    }
  }
})
