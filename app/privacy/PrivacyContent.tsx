'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TELEGRAM_SUPPORT_GROUP_URL, SUPPORT_EMAIL } from '@/lib/constants'

const privacyContent = {
  ru: {
    lastUpdated: '30 ноября 2025 г.',
    sections: [
      {
        title: 'Введение',
        content: `Этот документ является неотъемлемой частью Политики конфиденциальности PartyShield. В нем подробно описаны действия по обработке данных, непосредственно связанные с созданием и активностью вашего аккаунта PartyShield, когда вы используете наш VPN-сервис.`,
      },
      {
        title: 'Активность аккаунта',
        content: `PartyShield — это VPN-сервис, не ведущий журналы активности. Когда вы пользуетесь Сервисом, мы НЕ делаем ничего из перечисленного ниже:\n\n• Запись трафика пользователей или содержимого каких-либо сообщений\n• Дискриминация в отношении устройств, протоколов или приложений\n• Снижение скорости вашего интернет-подключения\n\nНаш бесплатный VPN-сервис также подпадает под действие нашей политики отсутствия журналов активности и, как правило, не имеет ограничений по скорости. Мы оставляем за собой право вводить ограничения скорости в случаях чрезмерного потребления, чтобы обеспечить качество обслуживания для всех пользователей на бесплатных серверах.\n\nВсе серверы PartyShield зашифрованы, и мы не ведём журналы данных о сеансах VPN.`,
      },
      {
        title: 'Отчёт о прозрачности',
        content: `Информацию о запросах данных от правоохранительных органов можно найти в нашем Отчёте о прозрачности. Мы стремимся к максимальной прозрачности в вопросах защиты данных наших пользователей.`,
      },
      {
        title: 'Безопасность данных',
        content: `Вся информация, необходимая для поддержки вашего аккаунта, управляется серверами, которые полностью принадлежат и управляются PartyShield или нашими дочерними компаниями. Эти данные всегда хранятся в зашифрованном формате на наших серверах, которые расположены в странах с одними из самых строгих в мире законов о конфиденциальности.\n\nВсе серверы PartyShield, независимо от их расположения, используют полное шифрование диска, и в крайне маловероятном случае, если это шифрование будет раскрыто, серверы PartyShield всё равно не будут содержать никаких журналов и данных пользователей.`,
      },
      {
        title: 'Сбор и использование данных',
        content: `Мы собираем минимально необходимую информацию для предоставления наших услуг:\n\n• Информация об аккаунте: telegram id (если предоставлен), имя пользователя\n• Техническая информация: версия приложения, тип устройства, операционная система\n• Информация о платежах: обрабатывается через защищенные платежные системы, мы не храним данные банковских карт\n\nМы используем эти данные исключительно для:\n• Предоставления и улучшения наших услуг\n• Обработки платежей\n• Технической поддержки\n• Соблюдения юридических обязательств`,
      },
      {
        title: 'Передача данных третьим лицам',
        content: `Мы не продаем и не передаем ваши личные данные третьим лицам, за исключением случаев:\n\n• Когда это необходимо для предоставления услуг (например, обработка платежей)\n• Когда это требуется по закону или по запросу правоохранительных органов\n• С вашего явного согласия\n\nВсе третьи стороны, с которыми мы работаем, обязаны соблюдать строгие стандарты конфиденциальности.`,
      },
      {
        title: 'Ваши права',
        content: `Вы имеете право:\n\n• Получить доступ к вашим личным данным\n• Исправить неточные данные\n• Ограничить обработку ваших данных\n• Перенести ваши данные\n\nДля осуществления этих прав свяжитесь с нами через Telegram-бота @PartyShield_bot или группу поддержки.`,
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
        content: `Если у вас есть вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами:\n\n• Telegram-бот: @PartyShield_bot\n• Группа поддержки: ${TELEGRAM_SUPPORT_GROUP_URL}\n• Email: ${SUPPORT_EMAIL}`,
      },
    ],
  },
  en: {
    lastUpdated: 'November 30, 2025',
    sections: [
      {
        title: 'Introduction',
        content: `This document is an integral part of the PartyShield Privacy Policy. It details data processing activities directly related to the creation and activity of your PartyShield account when you use our VPN service.`,
      },
      {
        title: 'Account Activity',
        content: `PartyShield is a no-logs VPN service. When you use the Service, we DO NOT do any of the following:\n\n• Record user traffic or content of any messages\n• Discriminate against devices, protocols or applications\n• Throttle your internet connection speed\n\nOur free VPN service also falls under our no-logs policy and generally has no speed restrictions. We reserve the right to impose speed restrictions in cases of excessive consumption to ensure service quality for all users on free servers.\n\nAll PartyShield servers are encrypted, and we do not keep logs of VPN session data.`,
      },
      {
        title: 'Transparency Report',
        content: `Information about data requests from law enforcement can be found in our Transparency Report. We strive for maximum transparency in protecting our users' data.`,
      },
      {
        title: 'Data Security',
        content: `All information necessary to support your account is managed by servers that are fully owned and operated by PartyShield or our subsidiaries. This data is always stored in encrypted format on our servers, which are located in countries with some of the world's strictest privacy laws.\n\nAll PartyShield servers, regardless of their location, use full disk encryption, and in the extremely unlikely event that this encryption is compromised, PartyShield servers will still contain no logs or user data.`,
      },
      {
        title: 'Data Collection and Use',
        content: `We collect the minimum necessary information to provide our services:\n\n• Account information: telegram id (if provided), username\n• Technical information: app version, device type, operating system\n• Payment information: processed through secure payment systems, we do not store credit card data\n\nWe use this data exclusively for:\n• Providing and improving our services\n• Processing payments\n• Technical support\n• Compliance with legal obligations`,
      },
      {
        title: 'Data Sharing with Third Parties',
        content: `We do not sell or share your personal data with third parties, except in cases:\n\n• When necessary to provide services (e.g., payment processing)\n• When required by law or law enforcement requests\n• With your explicit consent\n\nAll third parties we work with are required to comply with strict privacy standards.`,
      },
      {
        title: 'Your Rights',
        content: `You have the right to:\n\n• Access your personal data\n• Correct inaccurate data\n• Restrict processing of your data\n• Transfer your data\n\nTo exercise these rights, contact us through Telegram bot @PartyShield_bot or support group.`,
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
        content: `If you have questions about our Privacy Policy, please contact us:\n\n• Telegram bot: @PartyShield_bot\n• Support group: ${TELEGRAM_SUPPORT_GROUP_URL}\n• Email: ${SUPPORT_EMAIL}`,
      },
    ],
  },
}

export default function Privacy() {
  const { t, lang } = useLanguage()
  const content = privacyContent[lang]

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12 anim-fade">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.privacy.title}</span>
            </h1>
            <p className="text-gray-400">
              {t.privacy.lastUpdated}: {content.lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div
                key={index}
                className={`glass p-8 rounded-xl anim-fade-up delay-${Math.min(index + 1, 8)}`}
              >
                <h2 className="text-2xl font-semibold mb-4 text-neon-blue">
                  {section.title}
                </h2>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
