import type { Metadata } from 'next'
import PricingContent from './PricingContent'

export const metadata: Metadata = {
  title: 'Цены',
  description: 'Гибкие тарифы PartyShield VPN: от базового до VIP. Оплата в рублях или долларах, подключение через Telegram-бота.',
  alternates: { canonical: '/pricing/' },
}

export default function Page() {
  return <PricingContent />
}
