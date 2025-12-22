'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Shield, Eye, HeadphonesIcon, CheckCircle2, Smartphone, Monitor, Tablet } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      ...t.home.features.speed,
    },
    {
      icon: Shield,
      ...t.home.features.encryption,
    },
    {
      icon: Eye,
      ...t.home.features.anonymity,
    },
    {
      icon: HeadphonesIcon,
      ...t.home.features.support,
    },
  ]

  const testimonials = [
    {
      name: 'Алексей М.',
      text: 'Использую PartyShield уже полгода. Скорость отличная, никаких проблем. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Maria K.',
      text: 'Лучший VPN, который я пробовала. Простая настройка и отличная поддержка.',
      rating: 5,
    },
    {
      name: 'Дмитрий С.',
      text: 'Идеально для работы. Стабильное соединение и высокая скорость.',
      rating: 5,
    },
  ]

  const devices = [
    { icon: Monitor, name: 'Windows' },
    { icon: Monitor, name: 'macOS' },
    { icon: Monitor, name: 'Linux' },
    { icon: Smartphone, name: 'iOS' },
    { icon: Smartphone, name: 'Android' },
    { icon: Tablet, name: 'Tablets' },
  ]

  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-dark-bg to-dark-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">{t.home.title}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/try"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
              >
                {t.home.ctaFree}
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 glass border border-white/20 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                {t.home.ctaPricing}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl card-hover"
              >
                <feature.icon className="w-12 h-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t.home.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <p className="text-neon-blue font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t.home.devices.title}
          </h2>
          <p className="text-center text-gray-400 mb-12">
            {t.home.devices.desc}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl card-hover text-center"
              >
                <device.icon className="w-12 h-12 text-neon-blue mx-auto mb-3" />
                <p className="text-sm font-medium">{device.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

