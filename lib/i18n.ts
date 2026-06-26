export type Language = 'ru' | 'en'

export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      pricing: 'Цены',
      try: 'Попробовать',
      support: 'Поддержка',
      refer: 'Реферальная программа',
    },
    home: {
      title: 'Защитите свою приватность с PartyShield',
      subtitle: 'Быстрый, безопасный и надежный VPN-сервис с шифрованием военного уровня',
      ctaFree: 'Попробовать бесплатно',
      ctaPricing: 'Посмотреть тарифы',
      features: {
        speed: {
          title: 'Молниеносная скорость',
          desc: 'Оптимизированные серверы по всему миру для максимальной производительности',
        },
        encryption: {
          title: 'Шифрование военного уровня',
          desc: 'AES-256 шифрование для полной защиты ваших данных',
        },
        anonymity: {
          title: 'Полная анонимность',
          desc: 'Никаких логов, никакого отслеживания. Ваша приватность - наш приоритет',
        },
        support: {
          title: 'Круглосуточная поддержка',
          desc: 'Наша команда всегда готова помочь вам 24/7',
        },
      },
      testimonials: {
        title: 'Что говорят наши пользователи',
      },
      devices: {
        title: 'Работает на всех устройствах',
        desc: 'Защитите все свои устройства одним аккаунтом',
      },
    },
    pricing: {
      title: 'Выберите свой план',
      subtitle: 'Гибкие тарифы для любых потребностей',
      currency: {
        usd: 'USD',
        rub: 'RUB',
      },
      perMonth: '/месяц',
      popular: 'Популярный',
      plans: {
        basic: {
          name: 'Базовый',
          price: { usd: '$1.4', rub: '₽149' },
          features: [
            '1 одновременное подключение',
            'Доступ к серверу в Нидерландах',
            'Стабильная скорость для повседневного использования',
            '100 Гб трафика в месяц',
            'Поддержка в Telegram',
          ],
          cta: 'Купить',
        },
        standard: {
          name: 'Семейный',
          price: { usd: '$2.49', rub: '₽249' },
          features: [
            'До 3 одновременных подключений',
            'Доступ к серверу в Нидерландах',
            'Стабильная скорость для повседневного использования',
            '500 Гб трафика в месяц',
            'Поддержка в Telegram',
          ],
          cta: 'Купить',
          popular: true,
        },
        premium: {
          name: 'Премиум',
          price: { usd: '$4.9', rub: '₽499' },
          features: [
            'До 5 одновременных подключений',
            'Доступ к серверам в Нидерландах, Англии и США',
            'Стабильная скорость для повседневного использования',
            '2 Тб трафика в месяц',
            'Поддержка в Telegram',
          ],
          cta: 'Купить',
        },
        business: {
          name: 'VIP',
          price: { usd: '7.9', rub: '₽799' },
          features: [
            'До 10 одновременных подключений',
            'Все актуальные и новые серверы',
            'Максимальная скорость',
            'Отсутствует ограничение на трафик',
            'Приоритетная поддержка в Telegram',
          ],
          cta: 'Связаться',
        },
      },
    },
    try: {
      title: 'Начните за 1 минуту',
      subtitle: 'Простая настройка в три шага',
      steps: {
        step1: {
          title: 'Выберите план',
          desc: 'Выберите подходящий тарифный план',
        },
        step2: {
          title: 'Активируйте',
          desc: 'Получите доступ через Telegram-бота',
        },
        step3: {
          title: 'Подключитесь',
          desc: 'Настройте VPN на своем устройстве',
        },
      },
      botButton: 'Открыть бота в Telegram',
      readyTitle: 'Готовы начать?',
      readyDesc: 'Откройте нашего Telegram-бота и следуйте простым инструкциям. Настройка займет всего несколько минут.',
      openBot: 'Открыть @PartyShield_bot',
    },
    support: {
      title: 'Центр поддержки',
      subtitle: 'Мы здесь, чтобы помочь',
      telegram: {
        title: 'Telegram-группа поддержки',
        link: 'Присоединиться к группе',
        desc: 'Присоединяйтесь к нашей группе поддержки в Telegram для получения помощи и общения с другими пользователями.',
      },
      videos: {
        title: 'Видеоинструкции',
        desc: 'Пошаговые руководства по настройке',
      },
      openVideo: 'Открыть видео',
      faq: {
        title: 'Часто задаваемые вопросы',
        items: [
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
        ],
      },
    },
    refer: {
      title: 'Реферальная программа',
      subtitle: 'Приглашайте друзей и получайте бонусы',
      description: 'Приглашайте друзей использовать PartyShield и получайте вознаграждения за каждого приглашенного пользователя.',
      bonusMechanic: 'За каждого приглашённого друга, который оформит подписку, вы получаете +2 недели использования VPN на текущем тарифе.',
      bonusAuto: 'Ваши бонусные недели автоматически прибавляются к действующей подписке после активации реферала.',
      activeReferrals: 'Активных рефералов',
      activeReferralsDesc: 'Друзья, которые уже оформили подписку по вашей ссылке.',
      earnedBonuses: 'Заработано бонусов',
      earnedBonusesDesc: 'Бонусные недели, которые добавлены к вашей текущей подписке.',
      topReferrals: 'Наши активные реферы',
      showTop: 'Показаны 3 лучших рефера',
      noReferrals: 'У вас пока нет активных рефералов. Поделитесь ссылкой, чтобы получить первые бонусы.',
      openLink: 'Открыть ссылку',
      copyLink: 'Скопировать',
      copiedLink: 'Скопировано',
      howItWorks: {
        title: 'Как это работает',
        desc: 'Пригласите друзей по личной ссылке. Как только они оформят подписку, вам автоматически начислится +2 недели VPN за каждого.',
        step1: {
          title: 'Получите реферальную ссылку',
          desc: 'Скопируйте вашу уникальную реферальную ссылку',
        },
        step2: {
          title: 'Поделитесь с друзьями',
          desc: 'Отправьте ссылку друзьям через социальные сети, мессенджеры или email',
        },
        step3: {
          title: 'Получайте бонусы',
          desc: 'За каждого друга, который подпишется по вашей ссылке, вы получаете бонус',
        },
      },
      benefits: {
        title: 'Преимущества программы',
        benefit1: 'Бонусы за каждого приглашенного пользователя',
        benefit2: 'Накопительная система вознаграждений',
        benefit3: 'Простое отслеживание рефералов',
      },
    },
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление',
    },
    terms: {
      title: 'Пользовательское соглашение',
    },
    footer: {
      description: 'PartyShield - ваш надежный партнер в защите приватности',
      linksSection: 'Ссылки',
      languageSection: 'Язык',
      links: {
        privacy: 'Политика конфиденциальности',
        terms: 'Пользовательское соглашение',
      },
      social: 'Мы в социальных сетях',
      copyright: 'Все права защищены.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      try: 'Try',
      support: 'Support',
      refer: 'Referral Program',
    },
    home: {
      title: 'Protect Your Privacy with PartyShield',
      subtitle: 'Fast, secure and reliable VPN service with military-grade encryption',
      ctaFree: 'Try Free',
      ctaPricing: 'View Pricing',
      features: {
        speed: {
          title: 'Lightning Fast Speed',
          desc: 'Optimized servers worldwide for maximum performance',
        },
        encryption: {
          title: 'Military-Grade Encryption',
          desc: 'AES-256 encryption for complete data protection',
        },
        anonymity: {
          title: 'Complete Anonymity',
          desc: 'No logs, no tracking. Your privacy is our priority',
        },
        support: {
          title: '24/7 Support',
          desc: 'Our team is always ready to help you around the clock',
        },
      },
      testimonials: {
        title: 'What Our Users Say',
      },
      devices: {
        title: 'Works on All Devices',
        desc: 'Protect all your devices with one account',
      },
    },
    pricing: {
      title: 'Choose Your Plan',
      subtitle: 'Flexible plans for any needs',
      currency: {
        usd: 'USD',
        rub: 'RUB',
      },
      perMonth: '/month',
      popular: 'Popular',
      plans: {
        basic: {
          name: 'Basic',
          price: { usd: '$1.4', rub: '₽149' },
          features: [
            '1 simultaneous connection',
            'Access to server in Netherlands',
            'Stable speed for everyday use',
            '100 GB traffic per month',
            'Support in Telegram',
          ],
          cta: 'Buy',
        },
        standard: {
          name: 'Family',
          price: { usd: '$2.49', rub: '₽249' },
          features: [
            'Up to 3 simultaneous connections',
            'Access to server in Netherlands',
            'Stable speed for everyday use',
            '500 GB traffic per month',
            'Support in Telegram',
          ],
          cta: 'Buy',
          popular: true,
        },
        premium: {
          name: 'Premium',
          price: { usd: '$4.9', rub: '₽499' },
          features: [
            'Up to 5 simultaneous connections',
            'Access to servers in Netherlands, UK and USA',
            'Stable speed for everyday use',
            '2 TB traffic per month',
            'Support in Telegram',
          ],
          cta: 'Buy',
        },
        business: {
          name: 'VIP',
          price: { usd: '7.9', rub: '₽799' },
          features: [
            'Up to 10 simultaneous connections',
            'All current and new servers',
            'Maximum speed',
            'Unlimited traffic',
            'Priority support in Telegram',
          ],
          cta: 'Contact',
        },
      },
    },
    try: {
      title: 'Start in 1 Minute',
      subtitle: 'Simple setup in three steps',
      steps: {
        step1: {
          title: 'Choose Plan',
          desc: 'Select the right plan for you',
        },
        step2: {
          title: 'Activate',
          desc: 'Get access through Telegram bot',
        },
        step3: {
          title: 'Connect',
          desc: 'Set up VPN on your device',
        },
      },
      botButton: 'Open Bot in Telegram',
      readyTitle: 'Ready to start?',
      readyDesc: 'Open our Telegram bot and follow the simple instructions. Setup takes just a few minutes.',
      openBot: 'Open @PartyShield_bot',
    },
    support: {
      title: 'Support Center',
      subtitle: 'We are here to help',
      telegram: {
        title: 'Telegram Support Group',
        link: 'Join Group',
        desc: 'Join our Telegram support group for help and to connect with other users.',
      },
      videos: {
        title: 'Video Tutorials',
        desc: 'Step-by-step setup guides',
      },
      openVideo: 'Open video',
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How to start using PartyShield?',
            answer: 'Simply open our Telegram bot @PartyShield_bot, choose a plan and follow the instructions. Setup takes just a few minutes.',
          },
          {
            question: 'Which devices does PartyShield work on?',
            answer: 'PartyShield works on all major platforms: Windows, macOS, Linux, iOS, Android and other devices.',
          },
          {
            question: 'Do you keep logs?',
            answer: 'No, we do not log your activity. Your privacy is our priority.',
          },
          {
            question: 'What is the connection speed?',
            answer: 'Speed depends on your chosen plan. Premium users get maximum speed with priority access to servers.',
          },
          {
            question: 'Can I use VPN on multiple devices?',
            answer: 'Yes, the number of simultaneous connections depends on your plan. Basic plan supports 1 device, Premium up to 10.',
          },
          {
            question: 'How to get support?',
            answer: 'You can reach out to our Telegram support group or message @PartyShield_bot in the Support section. We respond 24/7.',
          },
        ],
      },
    },
    refer: {
      title: 'Referral Program',
      subtitle: 'Invite friends and earn rewards',
      description: 'Invite your friends to use PartyShield and earn rewards for each referred user.',
      bonusMechanic: 'For each friend who subscribes, you get +2 weeks of VPN usage on your current plan.',
      bonusAuto: 'Your bonus weeks are automatically added to your active subscription after the referred friend activates.',
      activeReferrals: 'Active referrals',
      activeReferralsDesc: 'Friends who have already subscribed using your link.',
      earnedBonuses: 'Bonuses earned',
      earnedBonusesDesc: 'Bonus weeks added to your current subscription.',
      topReferrals: 'Our active referrals',
      showTop: 'Showing top 3 referrals',
      noReferrals: 'You have no active referrals yet. Share your link to earn bonuses.',
      openLink: 'Open link',
      copyLink: 'Copy',
      copiedLink: 'Copied',
      howItWorks: {
        title: 'How it works',
        desc: 'Invite friends via your personal link. Once they subscribe, you automatically get +2 weeks of VPN per referral.',
        step1: {
          title: 'Get your referral link',
          desc: 'Copy your unique referral link',
        },
        step2: {
          title: 'Share with friends',
          desc: 'Send the link to friends via social media, messengers or email',
        },
        step3: {
          title: 'Earn rewards',
          desc: 'For each friend who signs up using your link, you get a bonus',
        },
      },
      benefits: {
        title: 'Program benefits',
        benefit1: 'Bonuses for each referred user',
        benefit2: 'Accumulative reward system',
        benefit3: 'Easy referral tracking',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
    },
    terms: {
      title: 'Terms of Service',
    },
    footer: {
      description: 'PartyShield - your reliable partner in privacy protection',
      linksSection: 'Links',
      languageSection: 'Language',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      social: 'Follow us on social media',
      copyright: 'All rights reserved.',
    },
  },
} as const

export function getTranslations(lang: Language) {
  return translations[lang]
}
