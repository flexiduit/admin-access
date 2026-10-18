export type LangCode = 'ms' | 'zh' | 'en'

export const LANGUAGES: { code: LangCode; label: string; short: string }[] = [
  { code: 'ms', label: 'Bahasa Melayu', short: 'BM' },
  { code: 'zh', label: '简体中文', short: '中文' },
  { code: 'en', label: 'English', short: 'EN' },
]

export function useLanguage() {
  const { locale, setLocale } = useI18n()

  const currentLocale = computed<LangCode>(() => (locale.value as LangCode) || 'ms')
  const currentLanguage = computed(
    () => LANGUAGES.find((l) => l.code === currentLocale.value) ?? LANGUAGES[0],
  )

  async function changeLanguage(code: LangCode) {
    await setLocale(code)
  }

  return { languages: LANGUAGES, currentLocale, currentLanguage, changeLanguage }
}
