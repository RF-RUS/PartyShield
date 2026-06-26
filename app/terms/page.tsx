'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TELEGRAM_SUPPORT_GROUP_URL, SUPPORT_EMAIL } from '@/lib/constants'

const termsContent = {
  ru: {
    lastUpdated: '01 апреля 2026 г.',
    sections: [
      {
        title: '1. Общие положения',
        content: `1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует порядок использования онлайн-сервиса (далее — «Сервис»), предоставляемого Администрацией.\n\n1.2. Используя Сервис, включая запуск бота, регистрацию, оплату услуг или получение доступа к материалам, Пользователь подтверждает, что полностью ознакомился с условиями настоящего Соглашения и принимает их в полном объёме.\n\n1.3. В случае несогласия с условиями Соглашения Пользователь обязан прекратить использование Сервиса.`,
      },
      {
        title: '2. Характер услуг и цифровых товаров',
        content: `2.1. Сервис предоставляет цифровые товары и услуги нематериального характера, включая, но не ограничиваясь: информационные материалы, обучающие программы, консультации, цифровые продукты и сервисные услуги.\n\n2.2. Материалы, предоставляемые через Сервис, могут включать:\n• информацию из открытых источников;\n• авторские материалы Администрации и/или третьих лиц;\n• аналитические обзоры, подборки, рекомендации, структурированные данные.\n\n2.3. Пользователь осознаёт и соглашается, что ценность цифровых товаров и услуг Сервиса заключается в систематизации, анализе, форме подачи, сопровождении, поддержке и обновлениях, а не в эксклюзивности отдельных фрагментов информации.\n\n2.4. Сервис не заявляет и не гарантирует уникальность, исключительность или недоступность отдельных элементов материалов вне Сервиса.`,
      },
      {
        title: '3. Отказ от гарантий и ответственности',
        content: `3.1. Сервис предоставляется на условиях «AS IS» («как есть»).\n\n3.2. Администрация не гарантирует:\n• соответствие Сервиса ожиданиям Пользователя;\n• достижение каких-либо финансовых, коммерческих, профессиональных или иных результатов;\n• бесперебойную и безошибочную работу Сервиса.\n\n3.3. Администрация не несёт ответственности за:\n• любые прямые или косвенные убытки, включая упущенную выгоду;\n• последствия применения Пользователем полученных материалов;\n• действия или бездействие третьих лиц;\n• временные технические сбои и ограничения доступа.\n\n3.4. Все решения о применении материалов, рекомендаций и услуг принимаются Пользователем самостоятельно и на его риск.`,
      },
      {
        title: '4. Законность использования',
        content: `4.1. Сервис не предназначен для поощрения, организации или содействия противоправной деятельности.\n\n4.2. Пользователь обязуется использовать Сервис исключительно в рамках применимого законодательства и правил третьих сторон.\n\n4.3. Ответственность за законность использования материалов и услуг Сервиса полностью возлагается на Пользователя.`,
      },
      {
        title: '5. Интеллектуальная собственность',
        content: `5.1. Все материалы, размещённые в Сервисе, охраняются законодательством об интеллектуальной собственности.\n\n5.2. Пользователю запрещается копировать, распространять, перепродавать, передавать третьим лицам или иным образом использовать материалы Сервиса без разрешения правообладателя.\n\n5.3. Нарушение прав интеллектуальной собственности может повлечь ограничение доступа к Сервису без компенсации.`,
      },
      {
        title: '6. Ограничение доступа',
        content: `6.1. Администрация вправе приостановить или ограничить доступ Пользователя к Сервису в случае:\n• нарушения условий настоящего Соглашения;\n• выявления злоупотреблений;\n• требований законодательства или платёжных провайдеров.\n\n6.2. Ограничение доступа не освобождает Пользователя от обязательств, возникших ранее.\n\n6.3. Администрация оставляет за собой право отказывать в обслуживании Пользователям, чьи действия могут создавать повышенные риски для Сервиса, платёжных провайдеров или третьих лиц.`,
      },
      {
        title: '7. Платежи и возвраты',
        content: `7.1. Оплата услуг и цифровых товаров производится на условиях, указанных в Сервисе до момента оплаты.\n\n7.2. В связи с нематериальным характером цифровых товаров и услуг, возврат денежных средств после предоставления доступа не осуществляется, за исключением случаев, указанных ниже.\n\n7.3. Возврат средств возможен только если:\n• услуга не была оказана по технической вине Сервиса;\n• доступ к цифровому товару фактически не был предоставлен.\n\n7.4. Для рассмотрения вопроса о возврате Пользователь обязан обратиться в службу поддержки в течение 24 часов с момента оплаты.\n\n7.5. Решение о возврате принимается Администрацией индивидуально.\n\n7.6. Пользователь подтверждает, что обязуется не инициировать возврат платежа (chargeback) через платёжные системы без предварительного обращения в службу поддержки Сервиса.`,
      },
      {
        title: '8. Конфиденциальность',
        content: `8.1. Администрация может собирать минимально необходимые технические данные для обеспечения работы Сервиса.\n\n8.2. Администрация принимает разумные меры для защиты данных, однако не гарантирует абсолютную безопасность передаваемой информации.`,
      },
      {
        title: '9. Изменение условий',
        content: `9.1. Администрация вправе вносить изменения в настоящее Соглашение.\n\n9.2. Актуальная версия Соглашения публикуется в Сервисе.\n\n9.3. Продолжение использования Сервиса означает согласие Пользователя с обновлёнными условиями.`,
      },
      {
        title: '10. Контактная информация',
        content: `10.1. По всем вопросам Пользователь может обратиться в службу поддержки через форму в самом боте.\n\nИспользуя Сервис (в том числе запуская бота и/или вводя команду /start), Пользователь подтверждает, что ознакомлен с настоящим Соглашением и принимает его условия в полном объёме.`,
      },
    ],
  },
  en: {
    lastUpdated: 'April 01, 2026',
    sections: [
      {
        title: '1. General Provisions',
        content: `1.1. This User Agreement (hereinafter — "Agreement") governs the use of the online service (hereinafter — "Service") provided by the Administration.\n\n1.2. By using the Service, including launching the bot, registering, paying for services, or accessing materials, the User confirms that they have fully read and accept the terms of this Agreement.\n\n1.3. If the User does not agree with the terms of this Agreement, they must cease using the Service.`,
      },
      {
        title: '2. Nature of Services and Digital Products',
        content: `2.1. The Service provides digital goods and services of a non-material nature, including but not limited to: informational materials, educational programs, consultations, digital products, and service services.\n\n2.2. Materials provided through the Service may include:\n• information from open sources;\n• copyrighted materials of the Administration and/or third parties;\n• analytical reviews, collections, recommendations, structured data.\n\n2.3. The User acknowledges and agrees that the value of the Service's digital goods and services lies in systematization, analysis, presentation format, accompaniment, support, and updates, rather than in the exclusivity of individual information fragments.\n\n2.4. The Service does not claim or guarantee the uniqueness, exclusivity, or inaccessibility of individual material elements outside the Service.`,
      },
      {
        title: '3. Disclaimer of Warranties and Liability',
        content: `3.1. The Service is provided on an "AS IS" basis.\n\n3.2. The Administration does not guarantee:\n• that the Service will meet the User's expectations;\n• achievement of any financial, commercial, professional, or other results;\n• uninterrupted and error-free operation of the Service.\n\n3.3. The Administration is not liable for:\n• any direct or indirect losses, including lost profits;\n• consequences of the User's application of received materials;\n• actions or inactions of third parties;\n• temporary technical failures and access restrictions.\n\n3.4. All decisions regarding the application of materials, recommendations, and services are made by the User independently and at their own risk.`,
      },
      {
        title: '4. Lawful Use',
        content: `4.1. The Service is not intended to encourage, organize, or facilitate illegal activities.\n\n4.2. The User agrees to use the Service exclusively within the framework of applicable legislation and third-party rules.\n\n4.3. Responsibility for the lawful use of the Service's materials and services lies entirely with the User.`,
      },
      {
        title: '5. Intellectual Property',
        content: `5.1. All materials posted in the Service are protected by intellectual property legislation.\n\n5.2. The User is prohibited from copying, distributing, reselling, transferring to third parties, or otherwise using the Service's materials without the copyright holder's permission.\n\n5.3. Violation of intellectual property rights may result in restricted access to the Service without compensation.`,
      },
      {
        title: '6. Access Restriction',
        content: `6.1. The Administration reserves the right to suspend or restrict the User's access to the Service in case of:\n• violation of this Agreement's terms;\n• detection of abuses;\n• requirements of legislation or payment providers.\n\n6.2. Access restriction does not release the User from obligations that arose earlier.\n\n6.3. The Administration reserves the right to refuse service to Users whose actions may create increased risks for the Service, payment providers, or third parties.`,
      },
      {
        title: '7. Payments and Refunds',
        content: `7.1. Payment for services and digital goods is made on the terms specified in the Service at the time of payment.\n\n7.2. Due to the non-material nature of digital goods and services, refunds are not provided after access has been granted, except in the cases specified below.\n\n7.3. Refunds are possible only if:\n• the service was not provided due to the Service's technical fault;\n• access to the digital product was not actually granted.\n\n7.4. To request a refund, the User must contact support within 24 hours of payment.\n\n7.5. The refund decision is made by the Administration on a case-by-case basis.\n\n7.6. The User confirms that they will not initiate a chargeback through payment systems without first contacting the Service's support team.`,
      },
      {
        title: '8. Confidentiality',
        content: `8.1. The Administration may collect minimally necessary technical data to ensure the Service's operation.\n\n8.2. The Administration takes reasonable measures to protect data but does not guarantee the absolute security of transmitted information.`,
      },
      {
        title: '9. Changes to Terms',
        content: `9.1. The Administration reserves the right to make changes to this Agreement.\n\n9.2. The current version of the Agreement is published in the Service.\n\n9.3. Continued use of the Service constitutes the User's consent to the updated terms.`,
      },
      {
        title: '10. Contact Information',
        content: `10.1. For any questions, the User may contact the support team through the form in the bot.\n\nBy using the Service (including launching the bot and/or entering the /start command), the User confirms that they have read this Agreement and accept its terms in full.`,
      },
    ],
  },
}

export default function Terms() {
  const { t, lang } = useLanguage()
  const content = termsContent[lang]

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12 anim-fade">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{t.terms.title}</span>
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
