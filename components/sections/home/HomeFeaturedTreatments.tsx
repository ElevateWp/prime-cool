import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#183454] block mb-2 font-medium uppercase tracking-wider">
            Our cleaning services
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#183454]">
            Cleaning shaped around your space
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured work: residential improvements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#183454] uppercase tracking-wider block mb-2 font-medium">
                Regular and deep cleaning
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#183454] mb-4">
                A fresh, comfortable home
              </h3>
              <p className="font-body text-15 md:text-17 text-[#183454]/80 leading-relaxed mb-6">
                From regular upkeep to a thorough deep clean, we discuss your priorities and focus on the areas that matter to you.
              </p>
              <div className="p-4 bg-[#F3F8FD] border-l-4 border-[#183454] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#183454]/80">
                <strong className="text-[#183454] font-semibold">Our approach:</strong> Friendly communication and careful attention to detail.
                </span>
              </div>
              <Button href="/regular-house-cleaning/" variant="ghost" size="md">
                Explore regular cleaning
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/cleaning-home.jpg"
                  alt="A freshly cleaned home"
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
                  src="/images/pressure-washing.jpg"
                  alt="Outdoor pressure washing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#183454] uppercase tracking-wider block mb-2 font-medium">
                One-off cleaning and pressure washing
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#183454] mb-4">
                A one-off clean when you need it
              </h3>
              <p className="font-body text-15 md:text-17 text-[#183454]/80 leading-relaxed mb-6">
                Book a standalone home clean or ask us about pressure washing outdoor concrete. We will agree the details with you first.
              </p>
              <div className="p-4 bg-[#F3F8FD] border-l-4 border-[#183454] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#183454]/80">
                  <strong className="text-[#183454] font-semibold">A straightforward service:</strong> Competitive prices and reliable care from start to finish.
                </span>
              </div>
              <Button href="/one-off-cleaning/" variant="ghost" size="md">
                Explore one-off cleaning
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
