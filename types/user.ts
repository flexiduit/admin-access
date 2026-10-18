export interface User {
  id: number
  name: string
  email: string
  phone: string
  ic?: string
  created_at?: string
}

export interface LoginPayload {
  phone: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data?: {
    user: User
    token: string
  }
}
