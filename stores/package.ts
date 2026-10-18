export const usePackageStore =
defineStore('package', () => {
  const data =
    ref<any[]>([])

  const selected =
    ref<any>(null)

  function setPackages(
    packages: any[]
  ) {
    data.value = packages
  }

  function selectPackage(
    item: any
  ) {
    selected.value = item
  }

  return {
    data,
    selected,
    setPackages,
    selectPackage
  }
})
