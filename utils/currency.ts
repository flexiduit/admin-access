export function formatCurrency(
  amount: number,
  currency = 'RM'
) {
  return `${currency}${Number(amount).toFixed(2)}`
}

export function parseCurrency(
  value: string
) {
  return Number(
    value.replace(/[^0-9.-]+/g, '')
  )
}
