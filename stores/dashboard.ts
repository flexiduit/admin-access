import { defineStore } from 'pinia'

interface DashboardState {
  data: number
  loading: boolean
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({
    data: 0,
    loading: false,
  }),

  actions: {
    async fetchDashboard() {
      this.loading = true
      try {
        const res = await $fetch<{ success: boolean; data: { applications: number } }>(
          '/api/auth/dashboard',
          { credentials: 'include' },
        )
        if (res?.success) {
          this.data = res.data?.applications ?? 0
        }
      } finally {
        this.loading = false
      }
    },
  },
})
