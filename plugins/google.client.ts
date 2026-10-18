export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.GOOGLE_ANALYTICS}`
  document.head.appendChild(script)

  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) {
    ;(window as any).dataLayer.push(args)
  }
  ;(window as any).gtag = gtag
  gtag('js', new Date())
  gtag('config', config.public.GOOGLE_ANALYTICS)
})
