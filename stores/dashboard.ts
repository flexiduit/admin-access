export const useDashboardStore =
defineStore('dashboard', () => {
  const data = ref(0)

  const loading =
    ref(false)

  return {
    data,
    loading
  }
})
