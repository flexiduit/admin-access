import { defineStore } from 'pinia'
import type { LoginPayload, LoginResponse, User } from '~/types/user'

interface UserState {
  data: User | null
  loggedIn: boolean
  processing: boolean
  status: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    data: null,
    loggedIn: false,
    processing: false,
    status: null,
  }),

  actions: {
    async fetchSession() {
      try {
        const res = await $fetch<{ success: boolean; data: User | null }>('/api/auth/session', {
          credentials: 'include',
        })
        if (res?.success && res.data) {
          this.data = res.data
          this.loggedIn = true
          this.status = 'active'
        } else {
          this.data = null
          this.loggedIn = false
        }
      } catch {
        this.data = null
        this.loggedIn = false
      }
    },

    async login(payload: LoginPayload): Promise<LoginResponse> {
      this.processing = true
      try {
        const res = await $fetch<LoginResponse>('/api/login', {
          method: 'POST',
          body: payload,
          credentials: 'include',
        })
        if (res.success && res.data) {
          this.data = res.data.user
          this.loggedIn = true
          this.status = 'active'
        }
        return res
      } finally {
        this.processing = false
      }
    },

    async logout() {
      try {
        await $fetch('/api/logout', { method: 'POST', credentials: 'include' })
      } finally {
        this.data = null
        this.loggedIn = false
        this.status = null
        if (import.meta.client) {
          await navigateTo('/login')
        }
      }
    },

    reset() {
      this.data = null
      this.loggedIn = false
      this.status = null
    },
  },
})
