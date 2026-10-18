export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  ;(window as any).OneSignalDeferred = (window as any).OneSignalDeferred || []
  ;(window as any).OneSignalDeferred.push(async (OneSignal: any) => {
    try {
      await OneSignal.init({ appId: config.public.ONE_SIGNAL_APP_ID })
    } catch (err) {
      console.warn('OneSignal init failed', err)
    }
  })

  const script = document.createElement('script')
  script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js'
  script.defer = true
  document.head.appendChild(script)
})
