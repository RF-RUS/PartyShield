'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, Play, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Support() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  useEffect(() => {
    document.title = 'Поддержка - PartyShield VPN'
  }, [])

  const telegramUrl = 'https://t.me/+1aj_Cqy--ztjMDJi'

  const faqItems = [
    {
      question: 'Как начать использовать PartyShield?',
      answer: 'Просто откройте нашего Telegram-бота @PartyShield_bot, выберите тарифный план и следуйте инструкциям. Настройка займет всего несколько минут.',
    },
    {
      question: 'На каких устройствах работает PartyShield?',
      answer: 'PartyShield работает на всех основных платформах: Windows, macOS, Linux, iOS, Android и других устройствах.',
    },
    {
      question: 'Сохраняете ли вы логи?',
      answer: 'Нет, мы не ведем логи вашей активности. Ваша приватность - наш приоритет.',
    },
    {
      question: 'Какова скорость соединения?',
      answer: 'Скорость зависит от выбранного тарифа. Премиум-пользователи получают максимальную скорость с приоритетным доступом к серверам.',
    },
    {
      question: 'Можно ли использовать VPN на нескольких устройствах?',
      answer: 'Да, количество одновременных подключений зависит от вашего тарифного плана. Базовый план поддерживает 1 устройство, Премиум - до 10.',
    },
    {
      question: 'Как получить поддержку?',
      answer: 'Вы можете обратиться в нашу Telegram-группу поддержки или написать боту @PartyShield_bot в раздел Поддержка. Мы отвечаем 24/7.',
    },
  ]

  const getEmbedUrl = (url: string, platform: string) => {
    if (!url || url === '#') return null
    
    if (platform === 'RuTube') {
      // Извлекаем ID из URL RuTube
      const match = url.match(/rutube\.ru\/shorts\/([a-zA-Z0-9]+)/) || url.match(/rutube\.ru\/video\/([a-zA-Z0-9]+)/)
      if (match) {
        return `https://rutube.ru/play/embed/${match[1]}`
      }
    }
    
    if (platform === 'YouTube') {
      // Извлекаем ID из URL YouTube
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/)
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}`
      }
    }
    
    if (platform === 'Rumble') {
      // Rumble embed формат
      const match = url.match(/rumble\.com\/([a-zA-Z0-9]+)/)
      if (match) {
        return `https://rumble.com/embed/${match[1]}/`
      }
    }
    
    return null
  }

  const videoTutorials = [
    {
      title: 'Получение пробной подписки, пошаговая настройка',
      platform: 'RuTube',
      url: 'https://rutube.ru/shorts/a208937b190a7821a07e12323b85d189',
    },
    {
      title: 'Как поделиться подпиской с семьёй?',
      platform: 'RuTube',
      url: 'https://rutube.ru/shorts/1908113e5fcf3a99f85126c5c6e6683e/',
    },
    {
      title: 'Как поделиться реферальной ссылкой?',
      platform: 'RuTube',
      url: 'https://rutube.ru/shorts/33a152b90dbde637b842a941016d5450/',
    },
    {
      title: 'Как обновить настройки подписки?',
      platform: 'RuTube',
      url: 'https://rutube.ru/video/cbdadc4cef7c7469bcc310b324ddfcd4/',
    },
  ]

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
              <span className="text-gradient">{t.support.title}</span>
            </h1>
            <p className="text-xl text-gray-400">{t.support.subtitle}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-xl card-hover"
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-neon-blue mr-4" />
                <h2 className="text-2xl font-semibold">{t.support.telegram.title}</h2>
              </div>
              <p className="text-gray-400 mb-6">
                Присоединяйтесь к нашей группе поддержки в Telegram для получения помощи и общения с другими пользователями.
              </p>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
              >
                {t.support.telegram.link}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">{t.support.videos.title}</h2>
              <p className="text-gray-400">{t.support.videos.desc}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {videoTutorials.map((video, index) => {
                const embedUrl = getEmbedUrl(video.url, video.platform)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass p-6 rounded-xl card-hover"
                  >
                    <div className="aspect-video bg-dark-card rounded-lg mb-4 overflow-hidden">
                      {embedUrl ? (
                        <iframe
                          src={embedUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <a
                            href={video.url !== '#' ? video.url : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
                          >
                            <Play className="w-12 h-12 text-neon-blue mb-2" />
                            <span className="text-sm text-gray-400">Открыть видео</span>
                          </a>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-400">{video.platform}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-2">{t.support.faq.title}</h2>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neon-blue transition-transform flex-shrink-0 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 text-gray-400 border-t border-white/10">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

