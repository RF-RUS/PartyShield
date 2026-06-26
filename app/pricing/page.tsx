'use client'

import { useState, useEffect } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { TELEGRAM_BOT_URL } from '@/lib/constants'

type Currency = 'usd' | 'rub'

function readSavedCurrency(): Currency {
  if (typeof window === 'undefined') return 'rub'
  try {
    const saved = localStorage.getItem('currency')
    if (saved === 'usd' || saved === 'rub') return saved
  } catch {}
  return 'rub'
}

export default function Pricing() {
  const { t } = useLanguage()
  const [currency, setCurrency] = useState<Currency>('rub')

  useEffect(() => {
    setCurrency(readSavedCurrency())
  }, [])

  const handleCurrencyChange = (c: Currency) => {
    setCurrency(c)
    try {
      localStorage.setItem('currency', c)
    } catch {}
  }

  const plans = [
    { ...t.pricing.plans.basic, id: 'basic' },
    { ...t.pricing.plans.standard, id: 'standard' },
    { ...t.pricing.plans.premium, id: 'premium' },
    { ...t.pricing.plans.business, id: 'business' },
  ]

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 anim-fade">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.pricing.title}</span>
            </h1>
            <p className="text-xl text-gray-400">{t.pricing.subtitle}</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="glass p-1 rounded-lg inline-flex">
              <button
                onClick={() => handleCurrencyChange('usd')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  currency === 'usd'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.pricing.currency.usd}
              </button>
              <button
                onClick={() => handleCurrencyChange('rub')}
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
              <div
                key={plan.id}
                className={`glass p-6 rounded-xl card-hover relative anim-fade-up delay-${index + 1} ${
                  ('popular' in plan && plan.popular) ? 'border-2 border-neon-blue' : ''
                }`}
              >
                {('popular' in plan && plan.popular) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    {typeof plan.price === 'object' ? plan.price[currency] : plan.price}
                  </span>
                  {typeof plan.price === 'object' && (
                    <span className="text-gray-400 text-sm ml-2">{t.pricing.perMonth}</span>
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
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white text-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
