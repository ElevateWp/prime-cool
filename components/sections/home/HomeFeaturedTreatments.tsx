import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1C1C22] block mb-2 font-medium uppercase tracking-wider">
            Услуги по дизайну интерьера
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C1C22]">
            Дизайн с учётом особенностей вашего пространства
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured work: residential improvements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#1C1C22] uppercase tracking-wider block mb-2 font-medium">
                Дизайн жилых интерьеров
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1C1C22] mb-4">
                Продуманный и уютный дом
              </h3>
              <ScrubbedParagraph text="Продумайте интерьер дома с учётом вашего распорядка, стиля и назначения каждой комнаты." size="body" className="mb-6" />
              <div className="p-4 bg-[#F5F5F7] border-l-4 border-[#1C1C22] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1C1C22]/80">
                <strong className="text-[#1C1C22] font-semibold">Наш подход:</strong> Продуманные планировки и тщательно подобранные детали отделки.
                </span>
              </div>
              <Button href="/dizayn-zhilykh-intererov/" variant="ghost" size="md">
                Смотреть дизайн жилых интерьеров
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-01.jpg"
                  alt="Идеи дизайна жилого интерьера"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Featured project 2: preventive maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-04.jpg"
                  alt="Идеи ремонта интерьера и отделки"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#1C1C22] uppercase tracking-wider block mb-2 font-medium">
                Ремонт интерьера и планировка пространства
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1C1C22] mb-4">
                Планируйте ремонт с ясным пониманием
              </h3>
              <ScrubbedParagraph text="Обсудите концепцию дизайна, материалы и объём проекта до начала ремонтных работ." size="body" className="mb-6" />
              <div className="p-4 bg-[#F5F5F7] border-l-4 border-[#1C1C22] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1C1C22]/80">
                  <strong className="text-[#1C1C22] font-semibold">Понятный процесс:</strong> Обсудим детали и сроки до утверждения проекта.
                </span>
              </div>
              <Button href="/remont-interera/" variant="ghost" size="md">
                Смотреть услуги по ремонту интерьера
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
