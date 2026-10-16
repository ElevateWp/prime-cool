import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'Какие интерьерные проекты вы выполняете?',
    answer: 'Мы занимаемся дизайном жилых и коммерческих интерьеров, планировкой пространства и ремонтом.',
    relatedLink: { href: '/dizayn-zhilykh-intererov/', label: 'Посмотреть услуги →' },
  },
  {
    question: 'Где вы находитесь?',
    answer: 'Студия Remont Interior Astana находится в Астане, Акмолинская область, Казахстан.',
    relatedLink: { href: '/kontakty/', label: 'Связаться с нами →' },
  },
  {
    question: 'Поможете продумать планировку интерьера?',
    answer: 'Да. Обсудим планировку комнат и способы сделать пространство удобнее и практичнее.',
    relatedLink: { href: '/planirovka-prostranstva/', label: 'Подробнее о планировке →' },
  },
  {
    question: 'Как обсудить проект?',
    answer: `Позвоните нам по номеру ${CLINIC_INFO.contact.phone} и расскажите о пространстве и своих планах.`,
    relatedLink: { href: '/obsudit-proekt/', label: 'Обсудить проект →' },
  },
  {
    question: 'От чего зависит стоимость проекта?',
    answer: 'Стоимость зависит от объекта, объёма дизайн-проекта, материалов и согласованных работ. Свяжитесь с нами, чтобы обсудить детали.',
    relatedLink: { href: '/kontakty/', label: 'Связаться со студией →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Часто задаваемые вопросы
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Вопросы об интерьерах
            </h2>
            <ScrubbedParagraph text="Ответы на вопросы об интерьерных услугах, планировании проекта и способах связаться с нами." size="body" className="mb-6" />
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Остались вопросы?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Позвоните или напишите нам — будем рады помочь.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Позвонить в студию
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
