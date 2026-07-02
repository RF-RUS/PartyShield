import type { Metadata } from 'next'
import SupportContent from './SupportContent'

export const metadata: Metadata = {
  title: 'Поддержка',
  description: 'Центр поддержки PartyShield VPN: Telegram-группа, видеоинструкции по настройке и ответы на частые вопросы.',
  alternates: { canonical: '/support/' },
}

export default function Page() {
  return <SupportContent />
}
