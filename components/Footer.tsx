'use client'

import Link from 'next/link'
import { Send } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageToggle } from '@/components/LanguageToggle'
import { TELEGRAM_BOT_URL } from '@/lib/constants'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-dark-surface border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gradient">PartyShield</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t.footer.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{t.footer.social}</span>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.linksSection}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy/" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
                  {t.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PartyShield. {t.footer.copyright}</p>
          <LanguageToggle variant="full" />
        </div>
      </div>
    </footer>
  )
}
