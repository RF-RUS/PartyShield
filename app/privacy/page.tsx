import type { Metadata } from 'next'
import PrivacyContent from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности PartyShield VPN: как мы обрабатываем данные и почему не ведём журналы активности.',
  alternates: { canonical: '/privacy/' },
}

export default function Page() {
  return <PrivacyContent />
}
