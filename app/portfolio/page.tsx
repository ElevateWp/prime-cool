import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Портфолио интерьеров',
  description:
    'Посмотрите идеи дизайна интерьеров и фотографии проектов Remont Interior Astana.',
  pathname: '/portfolio/',
});

const GALLERY = Array.from({ length: 14 }, (_, index) => `project-${String(index + 1).padStart(2, '0')}.jpg`);

export default function TestimonialsPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="relative overflow-hidden border-b border-mist py-16 md:py-24">
        <TextureBackground variant="blog" className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Портфолио', path: '/portfolio/' }]} />
          <div className="mt-8 max-w-3xl">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-ink/60">
                Идеи интерьера
              </span>
              <WordRevealH1 text="Интерьеры и детали отделки." />
              <ScrubbedParagraph text="Изучите идеи палитр, планировок и деталей для вашего дизайн-проекта." className="mt-6 max-w-2xl" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">
                Идеи для проектов
              </span>
              <h2 className="font-display text-26 text-forest-ink md:text-33">Пространства и детали</h2>
            </div>
            <div className="border-l-2 border-greenAccent pl-4">
              <span className="block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Remont Interior Astana</span>
              <span className="mt-1 block font-body text-12 text-forest-light">Жилые и коммерческие интерьеры · Астана</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((image, index) => (
              <AnimateOnScroll key={image} animation="fade-up" delay={(index % 3) * 0.08} duration={0.8}>
                <article className="h-full border border-mist bg-paper p-3 shadow-sm md:p-4">
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image src={`/images/home-gallery/${image}`} alt={`Идея дизайна интерьера ${index + 1}`} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="border-t border-mist pt-4 mt-4"><span className="font-body text-13 font-semibold text-forest-ink">Идея интерьера {String(index + 1).padStart(2, '0')}</span><span className="mt-1 block font-body text-12 text-forest-light">Материалы · планировка · отделка</span></div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div>
            <span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">
              Remont Interior Astana · Астана, Казахстан
            </span>
            <h2 className="font-display text-26 md:text-33">Планируете интерьерный проект?</h2>
          </div>
          <Link
            href="/obsudit-proekt/"
            className="inline-flex min-h-12 items-center justify-center border border-paper bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-[#F2E1E5]"
          >
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  );
}
