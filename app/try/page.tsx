'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Try() {
  const { t } = useLanguage()
  
  useEffect(() => {
    document.title = 'Попробовать PartyShield - Начните за 1 минуту'
  }, [])

  const steps = [
    {
      number: 1,
      ...t.try.steps.step1,
    },
    {
      number: 2,
      ...t.try.steps.step2,
    },
    {
      number: 3,
      ...t.try.steps.step3,
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.try.title}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">{t.try.subtitle}</p>
            
            <a
              href={botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.try.botButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue to-transparent z-0" style={{ width: 'calc(100% - 4rem)' }} />
                )}
                
                <div className="glass p-8 rounded-xl card-hover relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
              <CheckCircle2 className="w-16 h-16 text-neon-green mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Готовы начать?</h3>
              <p className="text-gray-400 mb-6">
                Откройте нашего Telegram-бота и следуйте простым инструкциям. Настройка займет всего несколько минут.
              </p>
              <a
                href={botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Открыть @PartyShield_bot
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

