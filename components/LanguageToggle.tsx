'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageToggle({ variant = 'icon' }: { variant?: 'icon' | 'full' }) {
  const { lang, setLang } = useLanguage()

  const toggleLanguage = () => {
    setLang(lang === 'ru' ? 'en' : 'ru')
  }

  if (variant === 'full') {
    return (
      <button
        onClick={toggleLanguage}
        aria-label="Switch language"
        className="flex items-center space-x-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {lang === 'ru' ? 'Русский 🇷🇺' : 'English 🇺🇸'}
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {lang === 'ru' ? '🇷🇺' : '🇺🇸'}
      </span>
    </button>
  )
}
