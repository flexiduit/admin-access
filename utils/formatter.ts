export function formatDate(
  date: string
) {
  return new Date(date)
    .toLocaleDateString('en-MY')
}

export function capitalize(
  text: string
) {
  if (!text) return ''

  return text.charAt(0).toUpperCase() +
    text.slice(1)
}

export function slugify(
  text: string
) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
}
