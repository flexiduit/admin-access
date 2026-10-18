export function useModal() {
  function open(id: string) {
    if (import.meta.client) {
      const el = document.getElementById(id)
      if (el) el.removeAttribute('aria-hidden')
    }
  }

  function close(id: string) {
    if (import.meta.client) {
      const el = document.getElementById(id)
      if (el) el.setAttribute('aria-hidden', 'true')
    }
  }

  function toggle(id: string, force?: boolean) {
    if (import.meta.client) {
      const el = document.getElementById(id)
      if (!el) return
      const isHidden = el.getAttribute('aria-hidden') === 'true'
      const next = force ?? isHidden
      if (next) open(id)
      else close(id)
    }
  }

  return { open, close, toggle }
}
