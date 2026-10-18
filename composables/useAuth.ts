export function useAuth() {
  const userStore = useUserStore()
  const toastStore = useToastStore()

  const isLoggedIn = computed(() => userStore.loggedIn)
  const user = computed(() => userStore.data)

  async function login(phone: string, password: string) {
    try {
      const res = await userStore.login({ phone, password })
      if (!res.success) {
        toastStore.push(res.message || 'Log masuk gagal', 'error')
        return false
      }
      toastStore.push('Log masuk berjaya', 'success')
      return true
    } catch (err: any) {
      toastStore.push(err?.data?.message || 'Log masuk gagal', 'error')
      return false
    }
  }

  async function logout() {
    await userStore.logout()
    toastStore.push('Log keluar berjaya', 'success')
  }

  return { isLoggedIn, user, login, logout }
}
