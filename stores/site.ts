import { defineStore } from 'pinia'
import type { PageSeoSettings, SiteConfig } from '~/types/site'

interface SiteState {
  brand: string
  site: SiteConfig
  headCode: string
  bodyCode: string
  pageSeoSettings: PageSeoSettings
}

export const useSiteStore = defineStore('site', {
  state: (): SiteState => ({
    brand: 'FlexiDuit',
    site: {},
    headCode: '',
    bodyCode: '',
    pageSeoSettings: {},
  }),

  actions: {
    setBrand(brand: string) {
      this.brand = brand
    },
    setSite(site: SiteConfig) {
      this.site = site
    },
    setCodes(head: string, body: string) {
      this.headCode = head
      this.bodyCode = body
    },
    setSeo(seo: PageSeoSettings) {
      this.pageSeoSettings = seo
    },
  },
})
