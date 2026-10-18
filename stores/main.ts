import { defineStore } from 'pinia'

interface MainState {
  loading: boolean
  ready: boolean
  lang: string
  country: string
  dialCode: string
  currency: string
  currency_iso: string
  phone_no: string
}

export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    loading: false,
    ready: false,
    lang: '',
    country: '',
    dialCode: '60',
    currency: 'RM',
    currency_iso: 'MYR',
    phone_no: '60-',
  }),

  actions: {
    async bootstrap() {
      if (this.ready) return
      this.loading = true
      try {
        const pkgStore = usePackageStore()
        await pkgStore.fetchPackages()
        this.country = 'malaysia'
        this.currency = 'RM'
        this.currency_iso = 'MYR'
        this.dialCode = '60'
        this.lang = 'ms'
        this.ready = true
      } catch (err) {
        console.error('main.bootstrap', err)
      } finally {
        this.loading = false
      }
    },
  },
})
