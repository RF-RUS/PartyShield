import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PartyShield - Безопасный и быстрый VPN',
    template: '%s | PartyShield VPN',
  },
  description: 'Защитите свою приватность с PartyShield. Быстрый, безопасный и надежный VPN-сервис с шифрованием военного уровня.',
  keywords: ['VPN', 'безопасность', 'приватность', 'шифрование', 'PartyShield'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PartyShield - Безопасный и быстрый VPN',
    description: 'Защитите свою приватность с PartyShield. Быстрый, безопасный и надежный VPN-сервис.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PartyShield - Безопасный и быстрый VPN',
    description: 'Защитите свою приватность с PartyShield. Быстрый, безопасный и надежный VPN-сервис.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('language');if(l==='en'||l==='ru'){document.documentElement.lang=l;}}catch(e){}`,
          }}
        />
      </head>
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
