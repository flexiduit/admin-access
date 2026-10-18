export const useSiteStore =
defineStore('site', () => {

  const brand = ref(
    'FlexiDuit'
  )

  const site = ref({})

  const headCode =
    ref('')

  const bodyCode =
    ref('')

  const pageSeoSettings =
    ref({})

  return {
    brand,
    site,
    headCode,
    bodyCode,
    pageSeoSettings
  }

})
