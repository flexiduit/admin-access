export const useUserStore =
defineStore('user', () => {
  const data = ref(null)

  const loggedIn =
    ref(false)

  const processing =
    ref(false)

  function login(
    user: any
  ) {
    data.value = user
    loggedIn.value = true
  }

  function logout() {
    data.value = null
    loggedIn.value = false
  }

  return {
    data,
    loggedIn,
    processing,
    login,
    logout
  }
})
