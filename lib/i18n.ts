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
    },
    support: {
      title: 'Центр поддержки',
      subtitle: 'Мы здесь, чтобы помочь',
      telegram: {
        title: 'Telegram-группа поддержки',
        link: 'Присоединиться к группе',
      },
      videos: {
        title: 'Видеоинструкции',
        desc: 'Пошаговые руководства по настройке',
      },
      faq: {
        title: 'Часто задаваемые вопросы',
      },
    },
    refer: {
      title: 'Реферальная программа',
      subtitle: 'Приглашайте друзей и получайте бонусы',
      description: 'Приглашайте друзей использовать PartyShield и получайте вознаграждения за каждого приглашенного пользователя.',
      howItWorks: {
        title: 'Как это работает',
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
      yourReferral: {
        title: 'Ваша реферальная ссылка',
        copy: 'Скопировать ссылку',
        copied: 'Скопировано!',
      },
      stats: {
        title: 'Ваша статистика',
        referrals: 'Приглашено друзей',
        bonus: 'Заработано бонусов',
      },
    },
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление',
    },
    footer: {
      description: 'PartyShield - ваш надежный партнер в защите приватности',
      links: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        about: 'О нас',
        blog: 'Блог',
      },
      social: 'Мы в социальных сетях',
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
          price: { usd: '$7.9', rub: '₽799' },
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
    },
    support: {
      title: 'Support Center',
      subtitle: 'We are here to help',
      telegram: {
        title: 'Telegram Support Group',
        link: 'Join Group',
      },
      videos: {
        title: 'Video Tutorials',
        desc: 'Step-by-step setup guides',
      },
      faq: {
        title: 'Frequently Asked Questions',
      },
    },
    refer: {
      title: 'Referral Program',
      subtitle: 'Invite friends and earn rewards',
      description: 'Invite your friends to use PartyShield and earn rewards for each referred user.',
      howItWorks: {
        title: 'How it works',
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
      yourReferral: {
        title: 'Your referral link',
        copy: 'Copy link',
        copied: 'Copied!',
      },
      stats: {
        title: 'Your statistics',
        referrals: 'Friends referred',
        bonus: 'Bonuses earned',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
    },
    footer: {
      description: 'PartyShield - your reliable partner in privacy protection',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        about: 'About Us',
        blog: 'Blog',
      },
      social: 'Follow us on social media',
    },
  },
} as const

export function getTranslations(lang: Language) {
  return translations[lang]
}

