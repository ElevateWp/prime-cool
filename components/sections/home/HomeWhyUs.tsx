import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

const REASONS = [
  {
    title: 'Пространство для своих задач',
    description: 'Учитываем назначение каждой комнаты и то, что сделает её удобнее и комфортнее.',
  },
  {
    title: 'Понятный план проекта',
    description: 'До начала работ обсуждаем планировку, материалы, сроки и согласованный объём.',
  },
  {
    title: 'Продуманный выбор материалов',
    description: 'Подбираем отделку и детали, которые гармонично сочетаются в интерьере.',
  },
  {
    title: 'Жилые и коммерческие интерьеры',
    description: 'Дизайн интерьеров, планировка пространства, ремонт и отделка для вашего проекта.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Наш подход
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Почему выбирают Remont Interior Astana
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <ScrubbedParagraph text={reason.description} size="body" />
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Residential property imagery */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                    src="/images/home-gallery/project-02.jpg"
                    alt="Светлый и продуманный дизайн интерьера"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#1C1C22]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Дизайн интерьера
                  </div>
                </div>
                {/* Additional residential imagery */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/home-gallery/project-06.jpg"
                    alt="Отделка и мебель в интерьере"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Residential property detail */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F5F5F7] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/home-gallery/project-03.jpg"
                    alt="Идеи планировки интерьера"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1C1C22]/80 text-paper font-body text-12 px-3 py-2 text-center">
                    Планировка пространства
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
