export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title:
        'FlexiDuit 2026 | Dapatkan Pinjaman dengan Proses Mudah'
    }
  },

  runtimeConfig: {
    public: {
      brand: 'FlexiDuit',

      currency: 'RM',

      currencyIso: 'MYR',

      dialCode: '60',

      mainDomain:
        'https://www.flexiduit.asia',

      apkLink:
        'https://play.google.com/store/apps/details?id=id.flexd.asia',

      turnstileSiteKey:
        '0x4AAAAAACp7-EuqOY6ruI2y'
    }
  }
})
