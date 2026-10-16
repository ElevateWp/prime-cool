import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

const GALLERY_IMAGES = [
  { src: '/images/home-gallery/project-09.jpg', alt: 'Идея дизайна интерьера в тёплых тонах' },
  { src: '/images/home-gallery/project-10.jpg', alt: 'Светлый жилой интерьер' },
  { src: '/images/home-gallery/project-11.jpg', alt: 'Материалы и детали отделки интерьера' },
  { src: '/images/home-gallery/project-12.jpg', alt: 'Современное жилое пространство' },
  { src: '/images/home-gallery/project-13.jpg', alt: 'Готовый интерьер с продуманными деталями' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#A90F2D] block mb-2 font-medium uppercase tracking-wider">
            Remont Interior Astana
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C1C22]">
            Идеи интерьера
          </h2>
          <ScrubbedParagraph text="Посмотрите интерьеры и детали для вдохновения. Свяжитесь с нами, чтобы обсудить планы для дома или бизнеса." size="body" className="mt-3 max-w-2xl" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F5F5F7] overflow-hidden border border-[#E2DDE0] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F5F5F7] overflow-hidden border border-[#E2DDE0] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
