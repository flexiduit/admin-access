export function formatCurrency(
  value: number | string,
  currency: string = 'RM',
  locale: string = 'ms-MY',
): string {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (!isFinite(num)) return `${currency} 0.00`
  return `${currency} ${num.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export function toNumber(value: string | number | null | undefined): number {
  if (value === null || value === undefined) return 0
  const num = typeof value === 'string' ? parseFloat(value) : value
  return isFinite(num) ? num : 0
}
