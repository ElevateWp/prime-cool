import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const HIGHLIGHTS = [
  { name: 'Дизайн для вас', quote: 'Начинаем с ваших целей, привычек и представления о будущем интерьере.' },
  { name: 'Понятный план проекта', quote: 'До начала работ мы обсуждаем планировку, материалы и объём проекта.' },
  { name: 'Внимание к деталям', quote: 'Отделка и практичные решения складываются в цельный интерьер.' },
];

export default function HomeReviews() {
  return (
    <section className="w-full bg-paper-secondary py-20 md:py-28 border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12 text-center">
          <span className="font-body text-13 text-forest-light block mb-2 font-medium uppercase tracking-wider">Remont Interior Astana · Астана, Казахстан</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Дизайн, в котором важна каждая деталь</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((highlight, index) => (
            <AnimateOnScroll key={highlight.name} animation="fade-up" delay={index * 0.1} duration={0.8}>
              <article className="h-full bg-paper border border-mist p-6 md:p-7 shadow-sm">
                <span className="mb-4 block h-1 w-10 bg-brand" />
                <h3 className="font-display text-21 text-forest-ink">{highlight.name}</h3>
                <p className="mt-3 font-body text-15 text-forest-ink/85 leading-relaxed">{highlight.quote}</p>
                <div className="mt-6 border-t border-mist pt-4"><span className="font-body text-12 text-forest-light">Наш подход к дизайну</span></div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-9 text-center"><Link href="/portfolio/" className="inline-flex items-center gap-2 font-body text-15 font-semibold text-forest hover:text-forest-light underline underline-offset-4 transition-colors">Смотреть идеи интерьеров <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}
