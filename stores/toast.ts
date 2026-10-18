export const useToastStore =
defineStore('toast', () => {
  const toasts =
    ref<any[]>([])

  function addToast(
    message: string,
    type = 'success'
  ) {
    toasts.value.push({
      id: Date.now(),
      message,
      type
    })
  }

  function removeToast(
    id: number
  ) {
    toasts.value =
      toasts.value.filter(
        t => t.id !== id
      )
  }

  return {
    toasts,
    addToast,
    removeToast
  }
})
