'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Privacy() {
  const { t, lang } = useLanguage()
  
  useEffect(() => {
    document.title = `${t.privacy.title} - PartyShield VPN`
  }, [t])

  const content = lang === 'ru' ? {
    lastUpdated: '30 ноября 2025 г.',
    sections: [
      {
        title: 'Введение',
        content: `Этот документ является неотъемлемой частью Политики конфиденциальности PartyShield. В нем подробно описаны действия по обработке данных, непосредственно связанные с созданием и активностью вашего аккаунта PartyShield, когда вы используете наш VPN-сервис.`,
      },
      {
        title: 'Активность аккаунта',
        content: `PartyShield — это VPN-сервис, не ведущий журналы активности. Когда вы пользуетесь Сервисом, мы НЕ делаем ничего из перечисленного ниже:

• Запись трафика пользователей или содержимого каких-либо сообщений
• Дискриминация в отношении устройств, протоколов или приложений
• Снижение скорости вашего интернет-подключения

Наш бесплатный VPN-сервис также подпадает под действие нашей политики отсутствия журналов активности и, как правило, не имеет ограничений по скорости. Мы оставляем за собой право вводить ограничения скорости в случаях чрезмерного потребления, чтобы обеспечить качество обслуживания для всех пользователей на бесплатных серверах.

Все серверы PartyShield зашифрованы, и мы не ведём журналы данных о сеансах VPN.`,
      },
      {
        title: 'Отчёт о прозрачности',
        content: `Информацию о запросах данных от правоохранительных органов можно найти в нашем Отчёте о прозрачности. Мы стремимся к максимальной прозрачности в вопросах защиты данных наших пользователей.`,
      },
      {
        title: 'Безопасность данных',
        content: `Вся информация, необходимая для поддержки вашего аккаунта, управляется серверами, которые полностью принадлежат и управляются PartyShield или нашими дочерними компаниями. Эти данные всегда хранятся в зашифрованном формате на наших серверах, которые расположены в странах с одними из самых строгих в мире законов о конфиденциальности.

Все серверы PartyShield, независимо от их расположения, используют полное шифрование диска, и в крайне маловероятном случае, если это шифрование будет раскрыто, серверы PartyShield всё равно не будут содержать никаких журналов и данных пользователей.`,
      },
      {
        title: 'Сбор и использование данных',
        content: `Мы собираем минимально необходимую информацию для предоставления наших услуг:

• Информация об аккаунте: telegram id (если предоставлен), имя пользователя
• Техническая информация: версия приложения, тип устройства, операционная система
• Информация о платежах: обрабатывается через защищенные платежные системы, мы не храним данные банковских карт

Мы используем эти данные исключительно для:
• Предоставления и улучшения наших услуг
• Обработки платежей
• Технической поддержки
• Соблюдения юридических обязательств`,
      },
      {
        title: 'Передача данных третьим лицам',
        content: `Мы не продаем и не передаем ваши личные данные третьим лицам, за исключением случаев:

• Когда это необходимо для предоставления услуг (например, обработка платежей)
• Когда это требуется по закону или по запросу правоохранительных органов
• С вашего явного согласия

Все третьи стороны, с которыми мы работаем, обязаны соблюдать строгие стандарты конфиденциальности.`,
      },
      {
        title: 'Ваши права',
        content: `Вы имеете право:

• Получить доступ к вашим личным данным
• Исправить неточные данные
• Ограничить обработку ваших данных
• Перенести ваши данные

Для осуществления этих прав свяжитесь с нами через Telegram-бота @PartyShield_bot или группу поддержки.`,
      },
      {
        title: 'Cookies и отслеживание',
        content: `Мы используем минимальное количество cookies, необходимых для функционирования сайта. Мы не используем cookies для отслеживания пользователей или показа рекламы. Все cookies используются исключительно для технических целей.`,
      },
      {
        title: 'Изменения в политике конфиденциальности',
        content: `Мы можем периодически обновлять эту Политику конфиденциальности. О существенных изменениях мы уведомим вас через наш сайт или по электронной почте. Дата последнего обновления указана в начале документа.`,
      },
      {
        title: 'Контакты',
        content: `Если у вас есть вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами:

• Telegram-бот: @PartyShield_bot
• Группа поддержки: https://t.me/+1aj_Cqy--ztjMDJi
• Email: support@partyshield.space`,
      },
    ],
  } : {
    lastUpdated: 'January 30, 2025',
    sections: [
      {
        title: 'Introduction',
        content: `This document is an integral part of the PartyShield Privacy Policy. It details data processing activities directly related to the creation and activity of your PartyShield account when you use our VPN service.`,
      },
      {
        title: 'Account Activity',
        content: `PartyShield is a no-logs VPN service. When you use the Service, we DO NOT do any of the following:

• Record user traffic or content of any messages
• Discriminate against devices, protocols or applications
• Throttle your internet connection speed

Our free VPN service also falls under our no-logs policy and generally has no speed restrictions. We reserve the right to impose speed restrictions in cases of excessive consumption to ensure service quality for all users on free servers.

All PartyShield servers are encrypted, and we do not keep logs of VPN session data.`,
      },
      {
        title: 'Transparency Report',
        content: `Information about data requests from law enforcement can be found in our Transparency Report. We strive for maximum transparency in protecting our users' data.`,
      },
      {
        title: 'Data Security',
        content: `All information necessary to support your account is managed by servers that are fully owned and operated by PartyShield or our subsidiaries. This data is always stored in encrypted format on our servers, which are located in countries with some of the world's strictest privacy laws.

All PartyShield servers, regardless of their location, use full disk encryption, and in the extremely unlikely event that this encryption is compromised, PartyShield servers will still contain no logs or user data.`,
      },
      {
        title: 'Data Collection and Use',
        content: `We collect the minimum necessary information to provide our services:

• Account information: telegram id (if provided), username
• Technical information: app version, device type, operating system
• Payment information: processed through secure payment systems, we do not store credit card data

We use this data exclusively for:
• Providing and improving our services
• Processing payments
• Technical support
• Compliance with legal obligations`,
      },
      {
        title: 'Data Sharing with Third Parties',
        content: `We do not sell or share your personal data with third parties, except in cases:

• When necessary to provide services (e.g., payment processing)
• When required by law or law enforcement requests
• With your explicit consent

All third parties we work with are required to comply with strict privacy standards.`,
      },
      {
        title: 'Your Rights',
        content: `You have the right to:

• Access your personal data
• Correct inaccurate data
• Restrict processing of your data
• Transfer your data

To exercise these rights, contact us through Telegram bot @PartyShield_bot or support group.`,
      },
      {
        title: 'Cookies and Tracking',
        content: `We use a minimal amount of cookies necessary for the website to function. We do not use cookies to track users or show advertising. All cookies are used exclusively for technical purposes.`,
      },
      {
        title: 'Changes to Privacy Policy',
        content: `We may periodically update this Privacy Policy. We will notify you of significant changes through our website or by email. The date of the last update is indicated at the beginning of the document.`,
      },
      {
        title: 'Contact',
        content: `If you have questions about our Privacy Policy, please contact us:

• Telegram bot: @PartyShield_bot
• Support group: https://t.me/+1aj_Cqy--ztjMDJi
• Email: support@partyshield.space`,
      },
    ],
  }

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.privacy.title}</span>
            </h1>
            <p className="text-gray-400">
              {t.privacy.lastUpdated}: {content.lastUpdated}
            </p>
          </motion.div>

          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <h2 className="text-2xl font-semibold mb-4 text-neon-blue">
                  {section.title}
                </h2>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

