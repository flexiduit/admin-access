import { initOneSignal } from '~/assets/js/analytics/onesignal'

export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        src: 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js',
        defer: true
      }
    ]
  })

  initOneSignal()
})
