export function capitalize(s: string): string {
  if (!s) return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function truncate(s: string, len = 120): string {
  if (s.length <= len) return s
  return `${s.slice(0, len - 1)}…`
}

export function formatDate(date: string | Date, locale = 'ms-MY'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return '-'
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
