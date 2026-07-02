import type { Metadata } from 'next'
import ReferContent from './ReferContent'

export const metadata: Metadata = {
  title: 'Реферальная программа',
  description: 'Приглашайте друзей в PartyShield VPN и получайте бонусные недели подписки за каждого приглашённого пользователя.',
  alternates: { canonical: '/refer/' },
}

export default function Page() {
  return <ReferContent />
}
