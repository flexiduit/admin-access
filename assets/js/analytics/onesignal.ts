declare global {
  interface Window {
    OneSignalDeferred: any[]
  }
}

export function initOneSignal() {
  window.OneSignalDeferred =
    window.OneSignalDeferred || []

  window.OneSignalDeferred.push(
    async (OneSignal: any) => {
      await OneSignal.init({
        appId:
          'a2ab3cb6-07f4-41cc-88e0-a05d658c40f6'
      })
    }
  )
}
