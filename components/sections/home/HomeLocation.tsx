'use client';

import React from 'react';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeLocation() {
  return (
    <section className="w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className="mb-16">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Контакты и адрес
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Свяжитесь с нами
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columns 1–6: Address, Contact & Opening Hours Table */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <div>
                <h3 className="font-display text-21 text-forest-ink mb-3">
                  {CLINIC_INFO.name}
                </h3>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-4">
                  Дизайн интерьеров, планировка пространства и ремонт домов и коммерческих помещений в Астане.
                </p>
                <a
                  className="inline-block mt-3 font-body text-13 text-[#A90F2D] font-medium hover:underline"
                  href="https://maps.google.com/?q=Astana+Kazakhstan+010000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Открыть карту Астаны →
                </a>
                <div className="flex flex-wrap gap-2 mt-4">
                  {CLINIC_INFO.identityHighlights.map((highlight) => (
                    <span key={highlight} className="bg-[#F5F5F7] border border-[#E2DDE0] px-3 py-1.5 text-12 text-[#1C1C22]">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Hours Table with Today highlighted with --lime */}
            <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.15}>
              <div>
                <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-3 font-semibold">
                  Часы работы
                </span>
                <div className="border border-mist overflow-hidden bg-paper shadow-sm p-4 font-body text-13 text-forest-ink/80">
                  {CLINIC_INFO.schedule.length > 0
                    ? CLINIC_INFO.schedule.map((item) => (
                        <div key={item.day} className="flex justify-between border-b border-mist py-2 last:border-0">
                    <span>{item.day}</span><span>{item.hours}</span>
                        </div>
                      ))
                    : 'Позвоните, чтобы уточнить доступность.'}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Button
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  variant="ghost"
                  size="md"
                >
                  Уточнить доступность
                </Button>
                <Button href="/kontakty/" variant="forest" size="md">
                  Страница контактов
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Columns 7–12: Residential reference image and contact details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-14.jpg"
                  alt="Идеи оформления интерьера от Remont Interior Astana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                  Remont Interior Astana
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.1}>
              <div className="bg-paper border border-mist p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-body text-13 text-forest block mb-1 font-medium uppercase tracking-wider">
                    Услуги по интерьеру
                  </span>
                  <h3 className="font-display text-21 text-forest-ink mb-2">
                    Дизайн, планировка и ремонт
                  </h3>
                  <p className="font-body text-13 text-forest-ink/80 mb-3 leading-relaxed">
                    Дизайн жилых и коммерческих интерьеров, планировка и ремонт в Астане.
                  </p>
                  <div className="flex items-center gap-2 text-13 font-body text-forest">
                    <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                    <span>Телефон: {CLINIC_INFO.contact.phone}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-mist flex flex-wrap items-center justify-between gap-4">
                  <span className="font-body text-13 text-forest-ink/60">
                    {CLINIC_INFO.contact.phone}
                  </span>
                  <Button
                    href="/kontakty/"
                    variant="forest"
                    size="sm"
                  >
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
