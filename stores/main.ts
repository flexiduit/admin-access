export const useMainStore =
defineStore('main', () => {

  const loading =
    ref(false)

  const ready =
    ref(false)

  const lang =
    ref('ms')

  const country =
    ref('malaysia')

  const dialCode =
    ref('60')

  const currency =
    ref('RM')

  const currencyIso =
    ref('MYR')

  const phoneNo =
    ref('60-')

  return {
    loading,
    ready,
    lang,
    country,
    dialCode,
    currency,
    currencyIso,
    phoneNo
  }

})
