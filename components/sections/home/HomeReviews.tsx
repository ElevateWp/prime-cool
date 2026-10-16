import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const HIGHLIGHTS = [
  { name: 'Service for your home', quote: 'Tell us what your home needs and we will discuss the right service.' },
  { name: 'Clear service arrangements', quote: 'We discuss the requested work and timing before the visit.' },
  { name: 'Careful work', quote: 'We aim to leave the work area clean and your service clearly explained.' },
];

export default function HomeReviews() {
  return (
    <section className="w-full bg-paper-secondary py-20 md:py-28 border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12 text-center">
          <span className="font-body text-13 text-forest-light block mb-2 font-medium uppercase tracking-wider">Prime Cool · Bahrain</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Home services, whenever you need them</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((highlight, index) => (
            <AnimateOnScroll key={highlight.name} animation="fade-up" delay={index * 0.1} duration={0.8}>
              <article className="h-full bg-paper border border-mist p-6 md:p-7 shadow-sm">
                <span className="mb-4 block h-1 w-10 bg-brand" />
                <h3 className="font-display text-21 text-forest-ink">{highlight.name}</h3>
                <p className="mt-3 font-body text-15 text-forest-ink/85 leading-relaxed">{highlight.quote}</p>
                <div className="mt-6 border-t border-mist pt-4"><span className="font-body text-12 text-forest-light">Our service approach</span></div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-9 text-center"><Link href="/projects/" className="inline-flex items-center gap-2 font-body text-15 font-semibold text-forest hover:text-forest-light underline underline-offset-4 transition-colors">Explore our services <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}
