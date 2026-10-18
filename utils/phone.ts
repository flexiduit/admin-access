import { toNumber } from './currency'

export function normalizePhone(phone: string, dialCode = '60'): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith(dialCode)) return digits
  if (digits.startsWith('0')) return `${dialCode}${digits.slice(1)}`
  return `${dialCode}${digits}`
}

export function formatPhone(phone: string): string {
  const normalized = phone.replace(/\D/g, '')
  if (normalized.length < 10) return phone
  const local = normalized.startsWith('60') ? `0${normalized.slice(2)}` : normalized
  return `${local.slice(0, 3)}-${local.slice(3, 6)} ${local.slice(6, 10)}`
}

export function isValidMalaysianPhone(phone: string): boolean {
  const normalized = normalizePhone(phone)
  return /^60[0-9]{8,10}$/.test(normalized) && toNumber(normalized) > 0
}
