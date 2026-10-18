export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'ms' },
      title: 'FlexiDuit 2026 | Dapatkan Pinjaman dengan Proses Mudah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'title',
          content: 'FlexiDuit 2026 | Dapatkan Pinjaman dengan Proses Mudah',
        },
        {
          name: 'description',
          content:
            'Kami adalah syarikat berlesen dengan permit dari kerajaan Malaysia, menyediakan pakej pinjaman dengan kadar faedah yang sihat dan tempoh bayaran balik yang sesuai untuk menyelesaikan masalah kewangan anda tanpa kerisauan.',
        },
        { property: 'og:title', content: 'FlexiDuit 2026 | Dapatkan Pinjaman dengan Proses Mudah' },
        {
          property: 'og:description',
          content:
            'Kami adalah syarikat berlesen dengan permit dari kerajaan Malaysia, menyediakan pakej pinjaman dengan kadar faedah yang sihat dan tempoh bayaran balik yang sesuai untuk menyelesaikan masalah kewangan anda tanpa kerisauan.',
        },
        { property: 'og:image', content: 'https://www.flexiduit.asia/share-card.png' },
        { property: 'og:url', content: 'https://www.flexiduit.asia/' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#9810FA' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.flexiduit.asia' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  runtimeConfig: {
    jwtSecret: process.env.NUXT_JWT_SECRET || 'flexiduit-dev-secret-change-me',
    public: {
      BRAND: 'FlexiDuit',
      MAIN_DOMAIN: 'https://www.flexiduit.asia',
      MERCHANT: 'flexiduit',
      S3_PUBLIC_BUCKET: 'https://flexiduit-pub.s3.ap-southeast-1.amazonaws.com',
      CURRENCY: 'RM',
      CURRENCY_ISO: 'MYR',
      DIAL_CODE: '60',
      APK_LINK: 'https://play.google.com/store/apps/details?id=id.flexd.asia',
      TURNSTILE_SITEKEY: '0x4AAAAAACp7-EuqOY6ruI2y',
      ONE_SIGNAL_APP_ID: 'a2ab3cb6-07f4-41cc-88e0-a05d658c40f6',
      FACEBOOK_PIXEL_1: '27077245901929481',
      FACEBOOK_PIXEL_2: '28121189420877566',
      GOOGLE_ANALYTICS: 'G-8S29D0L4RD',
      SMARTLOOK: '4c592dec301c9ad09818a4806f5e7ac88445be8c',
      LIVECHAT_LICENSE: '19445271',
    },
  },

  i18n: {
    defaultLocale: 'ms',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'ms', name: 'Bahasa Melayu', iso: 'ms-MY', file: 'ms.json' },
      { code: 'zh', name: '简体中文', iso: 'zh-CN', file: 'zh.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
    ],
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  image: {
    domains: ['flexiduit-pub.s3.ap-southeast-1.amazonaws.com'],
  },

  nitro: {
    preset: 'node-server',
  },

  typescript: {
    strict: true,
    shim: false,
  },
})
