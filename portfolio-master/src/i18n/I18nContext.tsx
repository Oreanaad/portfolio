import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Lang, LANGS, Translation, translations } from './translations'

const STORAGE_KEY = 'lang'

/** Stored choice first, then the browser's preference, then English. */
function detectLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && (LANGS as string[]).includes(stored)) return stored as Lang
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Translation
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang())

  // Keeps <html lang> honest for screen readers and search engines.
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    localStorage.setItem(STORAGE_KEY, next)
    setLangState(next)
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'es' : 'en')
  }, [lang, setLang])

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, setLang, toggleLang]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// The hook and its provider share the context object, so they stay in one
// module; that costs fast-refresh for this file only.
// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside an I18nProvider')
  return ctx
}
