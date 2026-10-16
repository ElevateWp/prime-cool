import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

const GALLERY_IMAGES = [
  { src: '/images/home-gallery/project-09.jpg', alt: 'AC and home appliance service' },
  { src: '/images/home-gallery/project-10.jpg', alt: 'Home appliance service' },
  { src: '/images/home-gallery/project-11.jpg', alt: 'AC cleaning and maintenance' },
  { src: '/images/home-gallery/project-12.jpg', alt: 'AC installation' },
  { src: '/images/home-gallery/project-13.jpg', alt: 'Prime Cool service' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#087DB8] block mb-2 font-medium uppercase tracking-wider">
            Prime Cool
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#17354A]">
            Home comfort
          </h2>
          <ScrubbedParagraph text="Explore Prime Cool services for your home. Call us to discuss your AC or appliance needs." size="body" className="mt-3 max-w-2xl" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F1F8FC] overflow-hidden border border-[#D5E5ED] shadow-sm`}
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
              className="aspect-[4/3] relative bg-[#F1F8FC] overflow-hidden border border-[#D5E5ED] shadow-sm"
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
