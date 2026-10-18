export const useSiteStore =
defineStore('site', () => {
  const brand =
    ref('FlexiDuit')

  const site = ref({})

  const pageSeoSettings =
    ref({})

  return {
    brand,
    site,
    pageSeoSettings
  }
})
