'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Pricing() {
  useEffect(() => {
    document.title = 'Цены - PartyShield VPN'
  }, [])
  const { t } = useLanguage()
  const [currency, setCurrency] = useState<'usd' | 'rub'>('rub')

  const plans = [
    {
      ...t.pricing.plans.basic,
      id: 'basic',
    },
    {
      ...t.pricing.plans.standard,
      id: 'standard',
    },
    {
      ...t.pricing.plans.premium,
      id: 'premium',
    },
    {
      ...t.pricing.plans.business,
      id: 'business',
    },
  ]

  const botUrl = 'https://t.me/PartyShield_bot'

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.pricing.title}</span>
            </h1>
            <p className="text-xl text-gray-400">{t.pricing.subtitle}</p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="glass p-1 rounded-lg inline-flex">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  currency === 'usd'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.pricing.currency.usd}
              </button>
              <button
                onClick={() => setCurrency('rub')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  currency === 'rub'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.pricing.currency.rub}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-6 rounded-xl card-hover relative ${
                  ('popular' in plan && plan.popular) ? 'border-2 border-neon-blue' : ''
                }`}
              >
                {('popular' in plan && plan.popular) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    {typeof plan.price === 'object' ? plan.price[currency] : plan.price}
                  </span>
                  {typeof plan.price === 'object' && (
                    <span className="text-gray-400 text-sm ml-2">/месяц</span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-neon-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white text-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

