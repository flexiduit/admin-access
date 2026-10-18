import { defineStore } from 'pinia'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastItem {
  id: number
  type: ToastType
  message: string
  timeout: number
}

let counter = 0

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as ToastItem[],
  }),

  actions: {
    push(message: string, type: ToastType = 'info', timeout = 4000) {
      const id = ++counter
      this.toasts.push({ id, type, message, timeout })
      if (timeout > 0) {
        setTimeout(() => this.remove(id), timeout)
      }
      return id
    },
    remove(id: number) {
      this.toasts = this.toasts.filter((t) => t.id !== id)
    },
    clear() {
      this.toasts = []
    },
  },
})
