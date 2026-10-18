import { initGoogleAnalytics } from '~/assets/js/analytics/google'

export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8S29D0L4RD'
      }
    ]
  })

  initGoogleAnalytics()
})
