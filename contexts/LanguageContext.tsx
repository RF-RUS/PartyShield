'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getTranslations } from '@/lib/i18n'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function readSavedLanguage(): Language {
  if (typeof window === 'undefined') return 'ru'
  try {
    const saved = localStorage.getItem('language')
    if (saved === 'en' || saved === 'ru') return saved
  } catch {}
  return 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('ru')

  useEffect(() => {
    setLangState(readSavedLanguage())
  }, [])

  // Keep the document language in sync for accessibility and SEO.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('language', newLang)
    } catch {}
  }

  const t = getTranslations(lang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
