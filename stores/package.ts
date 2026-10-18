import { defineStore } from 'pinia'
import type { Package } from '~/types/package'

interface PackageState {
  data: Package[]
  selected: number | null
}

export const usePackageStore = defineStore('package', {
  state: (): PackageState => ({
    data: [],
    selected: null,
  }),

  getters: {
    current: (state): Package | null => {
      if (!state.data.length) return null
      if (state.selected === null) return state.data[0] ?? null
      return state.data.find((p) => p.id === state.selected) ?? state.data[0]
    },
  },

  actions: {
    async fetchPackages() {
      const res = await $fetch<{ success: boolean; data: { packages: Package[] } }>('/api/package', {
        credentials: 'include',
      })
      if (res?.success && res.data?.packages) {
        this.data = res.data.packages
        if (this.selected === null && this.data.length) {
          this.selected = this.data[0].id
        }
      }
    },

    select(id: number) {
      this.selected = id
    },
  },
})
