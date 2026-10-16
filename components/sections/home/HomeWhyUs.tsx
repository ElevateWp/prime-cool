import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

const REASONS = [
  {
    title: 'Service for your needs',
    description: 'Tell us the AC or appliance type, explain the service or issue you have in mind and share your Bahrain location. We can discuss the request and what information will help plan the work.',
  },
  {
    title: 'Clear arrangements',
    description: 'We talk through the requested work, access to the unit and appointment timing before a visit, so you can understand what to expect and ask questions in advance.',
  },
  {
    title: 'Careful home service',
    description: 'We aim to keep the work area tidy, communicate clearly while working and explain what has been completed so you can ask any follow-up questions.',
  },
  {
    title: 'AC and appliance support',
    description: 'Discuss AC installation, cleaning, maintenance or repair, along with home appliance fitting and service enquiries, through one local point of contact.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Our approach
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Home services in Bahrain, available 24 hours
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <ScrubbedParagraph text={reason.description} size="body" />
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Residential property imagery */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                    src="/images/home-gallery/project-02.jpg"
                    alt="Prime Cool home service"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#17354A]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    AC service
                  </div>
                </div>
                {/* Additional residential imagery */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/home-gallery/project-06.jpg"
                    alt="Home appliance service"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Residential property detail */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F1F8FC] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/home-gallery/project-03.jpg"
                    alt="Air conditioning maintenance"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#17354A]/80 text-paper font-body text-12 px-3 py-2 text-center">
                    Available 24 hours
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
