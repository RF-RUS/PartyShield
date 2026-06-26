import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: {
    default: 'PartyShield - Безопасный и быстрый VPN',
    template: '%s | PartyShield VPN',
  },
  description: 'Защитите свою приватность с PartyShield. Быстрый, безопасный и надежный VPN-сервис с шифрованием военного уровня.',
  keywords: ['VPN', 'безопасность', 'приватность', 'шифрование', 'PartyShield'],
  openGraph: {
    title: 'PartyShield - Безопасный и быстрый VPN',
    description: 'Защитите свою приватность с PartyShield. Быстрый, безопасный и надежный VPN-сервис.',
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
