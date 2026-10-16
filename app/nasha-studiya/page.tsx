import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { DENTISTS, SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Наша студия',
  description: 'Познакомьтесь с Remont Interior Astana — студией дизайна интерьеров и ремонта в Астане, Казахстан.',
  pathname: '/nasha-studiya/',
});

export default function TeamPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Наша студия', path: '/nasha-studiya/' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">Remont Interior Astana</span>
            <WordRevealH1 text="Дизайн интерьеров в Астане." />
            <ScrubbedParagraph text="Студия жилых и коммерческих интерьеров: планировка пространства, ремонт и продуманная отделка." className="mt-6" />
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-33 text-forest-ink md:text-41">Студия, создающая продуманные пространства.</h2>
            <ScrubbedParagraph text="Мы обсуждаем ваше пространство, задачи проекта и предпочтительный стиль, чтобы предложить подходящий дизайн." size="body" className="mt-4" />
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {DENTISTS.map((person) => <DentistCard key={person.id} dentist={person} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Направления работы</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Интерьерные услуги для вашего пространства</h2>
          </AnimateOnScroll>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => <Link key={service.slug} href={`/${service.slug}/`} className="border border-mist bg-paper p-6 transition-colors hover:border-brand">
              <h3 className="font-display text-21 text-forest-ink">{service.name}</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-ink/75">{service.shortDescription}</p>
              <span className="mt-5 inline-flex font-body text-13 font-semibold text-brand">Подробнее об услуге →</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div><span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">Дизайн интерьеров · Астана, Казахстан</span><h2 className="font-display text-26 md:text-33">Расскажите о своём проекте.</h2></div>
          <Link href="/obsudit-proekt/" className="inline-flex min-h-12 items-center justify-center bg-paper px-6 font-body text-15 font-semibold text-forest">Обсудить проект</Link>
        </div>
      </section>
    </div>
  );
}
