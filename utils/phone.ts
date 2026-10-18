export function cleanPhone(
  phone: string
) {
  return phone.replace(/\D/g, '')
}

export function formatMalaysiaPhone(
  phone: string
) {
  const cleaned = cleanPhone(phone)

  if (cleaned.startsWith('60')) {
    return cleaned
  }

  if (cleaned.startsWith('0')) {
    return `60${cleaned.slice(1)}`
  }

  return cleaned
}
