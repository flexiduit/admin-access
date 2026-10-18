export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const smartlook = function (...args: any[]) {
    ;(smartlook as any).api.push(args)
  } as any
  smartlook.api = [] as any[]
  ;(window as any).smartlook = smartlook

  const script = document.createElement('script')
  script.async = true
  script.type = 'text/javascript'
  script.charset = 'utf-8'
  script.src = 'https://web-sdk.smartlook.com/recorder.js'
  document.head.appendChild(script)

  smartlook('init', config.public.SMARTLOOK, { region: 'eu' })
})
