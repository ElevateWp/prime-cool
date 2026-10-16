import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import PanelWipe from '@/components/motion/PanelWipe';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { CLINIC_INFO, DENTISTS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'О Remont Interior Astana',
  description:
    'Узнайте о Remont Interior Astana и нашем подходе к дизайну интерьера, планировке пространства и ремонту.',
  pathname: '/studiya/',
});

const TIMELINE = [
  {
    year: 'Астана, Казахстан',
    title: 'Remont Interior Astana',
    description: 'Наша студия работает с жилыми и коммерческими интерьерами, планировкой пространства и ремонтом. Каждый проект начинается с обсуждения пространства, его назначения и желаемой атмосферы. Мы вместе продумываем планировку, материалы и отделку, а затем согласуем объём работ и дальнейшие шаги.',
  },
];

const APPROACH_STEPS = [
  {
    title: 'Изучаем пространство',
    description: 'Обсуждаем объект, его назначение и ваши ожидания от будущего интерьера.',
  },
  {
    title: 'Планируем объём работ',
    description: 'До начала работ обсуждаем дизайн-проект, материалы, сроки и детали.',
  },
  {
    title: 'Продумываем детали',
    description: 'Планировка, материалы и отделка складываются в целостный интерьер.',
  },
  {
    title: 'Учитываем ваши пожелания',
    description: 'Начинаем обсуждение дизайна с ваших приоритетов и ощущений, которые должно создавать пространство.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'О студии', path: '/studiya/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  О Remont Interior Astana
                </span>
                <WordRevealH1 text="Продуманные интерьеры для жизни." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Remont Interior Astana предлагает дизайн интерьеров, планировку пространства и ремонт жилых и коммерческих помещений в Астане, Казахстан." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Адрес</span>
                    <span className="font-medium text-forest">Астана, Казахстан</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <PanelWipe className="py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-2xl mb-16">
              <span className="font-body text-13 text-paper/60 uppercase tracking-wider block mb-2 font-medium">
                Наша история
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Продуманный подход к каждому пространству
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="relative border-l border-mist/30 pl-8 md:pl-12 space-y-12 max-w-3xl">
            {TIMELINE.map((item, idx) => (
              <AnimateOnScroll
                key={item.year}
                animation="fade-up"
                delay={idx * 0.1}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-forest border-2 border-lime flex items-center justify-center" />
                <span className="font-display text-21 text-lime block mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-21 md:text-26 text-paper mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-15 text-paper/80 leading-relaxed">
                  {item.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </PanelWipe>

      {/* SECTION 3: Our Approach */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Как мы работаем
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Наш подход
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {APPROACH_STEPS.map((step, idx) => (
              <AnimateOnScroll
                key={step.title}
                animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={idx * 0.1}
              >
                <div className="p-8 border border-mist bg-paper flex flex-col justify-between h-full hover:border-forest/40 transition-colors shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest block mb-3 font-medium">
                      Этап 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Equipe Remont Interior Astana */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Наша студия
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink">
                  Remont Interior Astana
                </h2>
              </div>
              <Link
                href="/nasha-studiya/"
                className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
              >
                  Подробнее о студии →
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 justify-items-center gap-10 max-w-md mx-auto">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard key={dentist.id} dentist={dentist} offsetY={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Interior Design Work */}
      <section className="py-20 md:py-32 border-b border-mist overflow-hidden">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Дизайн интерьеров и ремонт
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Пространства для повседневной жизни
                </h2>
                <ScrubbedParagraph text="От первого обсуждения планировки до завершающих деталей мы помогаем создавать жилые и коммерческие пространства с учётом образа жизни и работы людей." size="body" className="mb-6" />
                <div className="space-y-2 font-body text-13 text-forest-ink/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Обсуждаем ваши приоритеты, объём и сроки проекта</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Вместе продумываем планировку, материалы и детали</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.08} className="w-full h-full">
                    <Image
                      src="/images/home-gallery/project-02.jpg"
                      alt="Идеи дизайна интерьера"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                    Дизайн интерьера
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Illustrative Residential Images */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Идеи для проектов
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Идеи интерьерных проектов
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="zoom-in" delay={0.1}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-01.jpg"
                      alt="Идеи дизайна жилого интерьера"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Жилой интерьер
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.2}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-05.jpg"
                      alt="Идеи дизайна коммерческого интерьера"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Коммерческие интерьеры
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.3}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-08.jpg"
                      alt="Идеи ремонта интерьера и планировки пространства"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Ремонт и планировка
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Обсудить стоимость проекта
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Расскажите о своих планах по интерьеру
              </h2>
              <p className="font-body text-15 text-paper/80 mt-2 max-w-xl">
                Позвоните в Remont Interior Astana, чтобы обсудить дизайн или ремонт.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/obsudit-proekt/" variant="lime" size="lg">
                Обсудить проект
              </Button>
              <Button href="/kontakty/" variant="ghost" size="lg" className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10">
                Связаться с нами
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
