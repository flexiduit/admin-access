export const usePackageStore =
defineStore('package', () => {

  const data = ref([])

  const selected = ref(null)

  function setData(
    packages: any[]
  ) {

    data.value = packages

  }

  function select(
    item: any
  ) {

    selected.value = item

  }

  return {
    data,
    selected,
    setData,
    select
  }

})
