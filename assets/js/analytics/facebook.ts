export function initFacebookPixel() {
  !(function (f, b, e, v, n, t, s) {
    if ((f as any).fbq) return

    n = (f as any).fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments)
    }

    if (!(f as any)._fbq)
      (f as any)._fbq = n

    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []

    t = b.createElement(e)
    t.async = true
    t.src = v

    s = b.getElementsByTagName(e)[0]
    s.parentNode?.insertBefore(t, s)

  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  )

  const fbq = (window as any).fbq

  fbq('init', '27077245901929481')
  fbq('init', '28121189420877566')

  fbq('track', 'PageView')
}
