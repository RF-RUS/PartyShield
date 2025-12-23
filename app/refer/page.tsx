'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Users, Gift } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type ActiveReferral = {
  name: string
  link: string
}

export default function Refer() {
  const { t } = useLanguage()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  useEffect(() => {
    document.title = `${t.refer.title} - PartyShield VPN`
  }, [t])

  // TODO: заменить на реальные данные из API
  const referralsCount = 3            // всего активных рефералов
  const bonusWeeks = referralsCount * 2 // +2 недели за каждого

  const activeReferrals: ActiveReferral[] = [
    { name: 'Александра Ш.', link: `https://t.me/PartyShield_bot?start=ref_EMnGR1` },
    { name: 'Алексей М.', link: `https://partyshield.space?ref=USER12345&u=2` },
    // { name: 'Alex R.', link: `https://partyshield.space?ref=USER12345&u=3` },
  ]

  const copyReferralLink = async (link: string, index: number) => {
    try {
      await navigator.clipboard.writeText(link)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (e) {
      console.error('Failed to copy: ', e)
    }
  }

  const steps = [
    {
      number: 1,
      ...t.refer.howItWorks.step1,
    },
    {
      number: 2,
      ...t.refer.howItWorks.step2,
    },
    {
      number: 3,
      ...t.refer.howItWorks.step3,
    },
  ]

  const benefits = [
    t.refer.benefits.benefit1,
    t.refer.benefits.benefit2,
    t.refer.benefits.benefit3,
  ]

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок и описание */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.refer.title}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-4">{t.refer.subtitle}</p>

            {/* Явное описание механики: +2 недели за реферала */}
            <p className="text-gray-300 max-w-2xl mx-auto mb-2">
              За каждого приглашённого друга, который оформит подписку, вы получаете +2 недели использования VPN на текущем тарифе.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ваши бонусные недели автоматически прибавляются к действующей подписке после активации реферала.
            </p>
          </motion.div>

          {/* Статистика + активные реферы */}
          <div className="max-w-4xl mx-auto mb-16">
            {/* Статистика: рефералы и бонусные недели */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <div className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-neon-blue mr-3" />
                  <h3 className="text-xl font-semibold">
                    Активных рефералов
                  </h3>
                </div>
                <p className="text-3xl font-bold text-neon-blue">
                  {referralsCount}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Друзья, которые уже оформили подписку по вашей ссылке.
                </p>
              </div>
              <div className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center mb-4">
                  <Gift className="w-8 h-8 text-neon-purple mr-3" />
                  <h3 className="text-xl font-semibold">
                    Заработано бонусов
                  </h3>
                </div>
                <p className="text-3xl font-bold text-neon-purple">
                  +{bonusWeeks} недель
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Бонусные недели, которые добавлены к вашей текущей подписке.
                </p>
              </div>
            </motion.div>

            {/* 3 активных реферала: имя + кнопка копирования/перехода */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-xl card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  Наши активные реферы
                </h3>
                <span className="text-sm text-gray-400">
                  Показаны 3 лучших рефера
                </span>
              </div>

              {activeReferrals.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  У вас пока нет активных рефералов. Поделитесь ссылкой, чтобы получить первые бонусы.
                </p>
              ) : (
                <div className="space-y-3">
                  {activeReferrals.slice(0, 3).map((ref, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/5 rounded-lg px-3 py-3 bg-white/5"
                    >
                      <div className="font-medium text-gray-100">
                        {ref.name}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                        {/* Кнопка перехода в Telegram / по ссылке */}
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Открыть ссылку
                        </a>

                        {/* Кнопка копирования ссылки (аналогичная по стилю) */}
                        <button
                          onClick={() => copyReferralLink(ref.link, index)}
                          className="px-4 py-2 bg-transparent border border-neon-blue/70 rounded-lg font-semibold text-neon-blue text-sm hover:bg-neon-blue/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="w-4 h-4" />
                              Скопировано
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Скопировать
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Как это работает */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">
                {t.refer.howItWorks.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Пригласите друзей по личной ссылке. Как только они оформят подписку, вам автоматически начислится +2 недели VPN за каждого.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue to-transparent z-0"
                      style={{ width: 'calc(100% - 4rem)' }}
                    />
                  )}

                  <div className="glass p-8 rounded-xl card-hover relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-center">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Преимущества */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">
                {t.refer.benefits.title}
              </h2>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="glass p-6 rounded-xl card-hover"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-4"></div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
