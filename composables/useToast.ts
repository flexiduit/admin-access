import type { ToastType } from '~/stores/toast'

export function useToast() {
  const store = useToastStore()

  function show(message: string, type: ToastType = 'info', timeout = 4000) {
    return store.push(message, type, timeout)
  }

  return {
    success: (m: string, t = 4000) => show(m, 'success', t),
    error: (m: string, t = 5000) => show(m, 'error', t),
    warning: (m: string, t = 4500) => show(m, 'warning', t),
    info: (m: string, t = 4000) => show(m, 'info', t),
    clear: () => store.clear(),
  }
}
