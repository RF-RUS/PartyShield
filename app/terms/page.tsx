import type { Metadata } from 'next'
import TermsContent from './TermsContent'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение',
  description: 'Пользовательское соглашение PartyShield VPN: условия использования сервиса, платежей и возвратов.',
  alternates: { canonical: '/terms/' },
}

export default function Page() {
  return <TermsContent />
}
