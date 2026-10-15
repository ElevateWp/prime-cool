'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { MOTION, isReducedMotion } from '@/lib/motion';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const words = wordsRef.current.filter(Boolean);

    const tl = gsap.timeline({
      delay: 0.5,
    });

    // 0.50s H1 word reveal
    if (words.length > 0) {
      tl.fromTo(
        words,
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out',
        }
      );
    }

    // Supporting paragraph fades up
    if (paraRef.current) {
      tl.fromTo(
        paraRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    // Actions arrive with scale
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current.children,
        { scale: 0.95, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Business information slides in from right
    if (infoRef.current) {
      tl.fromTo(
        infoRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }

    // Service area line
    if (locationRef.current) {
      tl.fromTo(
        locationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const headline = 'A cleaner space, with care.';
  const headlineWords = headline.split(' ');

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-paper overflow-hidden py-12 sm:py-16 md:py-24"
    >
      <Image
        src="/images/cleaning-home.jpg"
        alt="A freshly cleaned home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] grayscale sepia-[0.2]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/95 via-[#FFFFFF]/90 to-[#FFFFFF]/80 md:from-[#FFFFFF]/95 md:via-[#FFFFFF]/90 md:to-[#FFFFFF]/78"
      />

      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columns 1–8: Left-aligned H1, Paragraph, Actions */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Semantic Single H1 */}
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#F4770B]" />
              <span className="font-body text-[11px] text-[#687B91] uppercase tracking-[0.14em]">
                Professional home & exterior cleaning
              </span>
            </div>
            <h1
              ref={h1Ref}
              aria-label={headline}
              className="font-display text-[#183454] text-33 sm:text-41 md:text-52 lg:text-65 xl:text-81 leading-[1.05] tracking-[-0.03em] font-normal mb-6 md:mb-8 max-w-4xl"
            >
              {headlineWords.map((word, idx) => (
                <React.Fragment key={idx}>
                  <span className="inline-block overflow-hidden align-top pb-[0.08em] mr-[0.24em] last:mr-0">
                    <span
                      ref={(el) => {
                        if (el) wordsRef.current[idx] = el;
                      }}
                      className={`inline-block will-change-transform ${['space,', 'care.'].includes(word) ? 'text-[#F4770B]' : ''}`}
                    >
                      {word}
                    </span>
                  </span>
                  {(idx === 1 || idx === 4) && (
                    <br className="hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </h1>

            <p
              ref={paraRef}
              className="font-body text-15 sm:text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8 md:mb-10 max-w-2xl"
            >
              Regular, deep and one-off home cleaning, plus outdoor pressure washing. Friendly, professional service from founders Izzy and Bill.
            </p>

            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <Button href="/request-a-quote/" variant="forest" size="lg" className="w-full sm:w-auto font-medium">
                Request a Quote
              </Button>
              <Button
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto font-medium"
              >
                Call {CLINIC_INFO.contact.phone}
              </Button>
            </div>

            <div
              ref={locationRef}
              className="font-body text-13 text-[#183454]/70 flex flex-wrap items-center gap-2"
            >
              <span className="font-medium text-[#183454]">5.0 Google rating · 12 reviews</span>
              <span className="hidden sm:inline">•</span>
              <span>Home and exterior cleaning</span>
              <span className="hidden sm:inline">•</span>
            </div>
          </div>

          {/* Columns 9–12: Quiet Clinical Credential Brief */}
          <div
            ref={infoRef}
            className="lg:col-span-4 lg:pl-4 flex flex-col justify-center"
          >
            <div className="p-6 sm:p-8 bg-[#F3F8FD] border border-[#DCE6F0] shadow-sm flex flex-col space-y-4">
              <span className="font-body text-13 text-[#183454] uppercase tracking-wider font-semibold">
                FirstChoice Cleaning
              </span>
              <p className="font-body text-13 sm:text-15 text-[#183454]/90 leading-relaxed">
                <strong className="text-[#183454] font-semibold">A cleaner space, with care you can count on.</strong> &mdash; personal service from Izzy and Bill.
              </p>
              <div className="pt-3 border-t border-[#DCE6F0] flex items-center justify-between text-13 font-body text-[#183454]/70">
                <span>Open · Closes 6 PM</span>
                <span className="text-[#183454] font-semibold">+61 480 701 505</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
