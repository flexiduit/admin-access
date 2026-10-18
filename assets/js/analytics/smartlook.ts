declare global {
  interface Window {
    smartlook: any
  }
}

export function initSmartlook() {
  window.smartlook ||
    ((d) => {
      const o: any = function () {
        o.api.push(arguments)
      }

      const h = d.head
      const c = d.createElement('script')

      o.api = []

      c.async = true
      c.src = 'https://web-sdk.smartlook.com/recorder.js'

      h.appendChild(c)

      window.smartlook = o
    })(document)

  window.smartlook(
    'init',
    '4c592dec301c9ad09818a4806f5e7ac88445be8c',
    {
      region: 'eu'
    }
  )
}
