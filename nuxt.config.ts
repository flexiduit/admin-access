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
        'FlexiDuit 2026 | Dapatkan Pinjaman dengan Proses Mudah',

      meta: [
        {
          name: 'description',
          content:
            'Kami adalah syarikat berlesen dengan permit dari kerajaan Malaysia'
        }
      ]

    }
  },

  runtimeConfig: {

    public: {

      BRAND:
        'FlexiDuit',

      MAIN_DOMAIN:
        'https://www.flexiduit.asia',

      CURRENCY:
        'RM',

      CURRENCY_ISO:
        'MYR',

      DIAL_CODE:
        '60',

      TURNSTILE_SITEKEY:
        '0x4AAAAAACp7-EuqOY6ruI2y'

    }

  }

})
