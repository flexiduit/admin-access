export function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || []

  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', 'G-8S29D0L4RD')
}
