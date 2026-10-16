import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Home comfort
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Comfort through thoughtful service
            </h2>
            <ScrubbedParagraph text="From a new AC fitting to cleaning, maintenance or home appliance service, tell us what your home needs. Prime Cool can discuss the unit, the work you have in mind and appointment arrangements, then explain the next steps before anything is scheduled." size="body" className="mb-6" />
            <Link
              href="/home-appliance-services/"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              View services →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-07.jpg"
                  alt="Air conditioning service"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#082C45]/85 text-white font-body text-12 px-3 py-1">
                  Service information
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-08.jpg"
                  alt="Home appliance service"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#082C45]/85 text-white font-body text-12 px-3 py-1">
                  Service information
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
