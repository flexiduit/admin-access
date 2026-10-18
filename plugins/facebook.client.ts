export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const fbq = function (...args: any[]) {
    ;(fbq as any).queue.push(args)
  } as any
  fbq.queue = [] as any[]
  fbq.loaded = true
  fbq.version = '2.0'
  ;(window as any).fbq = fbq
  ;(window as any)._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  fbq('init', config.public.FACEBOOK_PIXEL_1)
  fbq('init', config.public.FACEBOOK_PIXEL_2)
  fbq('track', 'PageView')
})
