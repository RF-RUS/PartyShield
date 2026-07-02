import type { Metadata } from 'next'
import TryContent from './TryContent'

export const metadata: Metadata = {
  title: 'Попробовать',
  description: 'Начните пользоваться PartyShield VPN за одну минуту: выберите план, активируйте через Telegram-бота и подключитесь.',
  alternates: { canonical: '/try/' },
}

export default function Page() {
  return <TryContent />
}
