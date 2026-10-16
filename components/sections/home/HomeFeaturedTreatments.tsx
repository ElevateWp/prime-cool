import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#17354A] block mb-2 font-medium uppercase tracking-wider">
            Our services
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#17354A]">
            AC and appliance care for your home
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured work: residential improvements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#17354A] uppercase tracking-wider block mb-2 font-medium">
                AC installation
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#17354A] mb-4">
                Comfort for your home
              </h3>
              <ScrubbedParagraph text="Arrange air conditioner installation with Prime Cool across Bahrain. Call to discuss your unit, the room or area it will serve, your location and any fitting requirements. The team can talk through timing and access before agreeing the next steps with you." size="body" className="mb-6" />
              <div className="p-4 bg-[#F1F8FC] border-l-4 border-[#17354A] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#17354A]/80">
                <strong className="text-[#17354A] font-semibold">Our approach:</strong> Discuss the unit, fitting requirements and appointment arrangements before the installation begins.
                </span>
              </div>
              <Button href="/ac-installation/" variant="ghost" size="md">
                Explore AC installation
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/home-gallery/project-01.jpg"
                  alt="Air conditioning service"
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
                  src="/images/home-gallery/project-04.jpg"
                  alt="AC cleaning and maintenance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#17354A] uppercase tracking-wider block mb-2 font-medium">
                AC cleaning and maintenance
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#17354A] mb-4">
                Keep your AC clean and comfortable
              </h3>
              <ScrubbedParagraph text="Talk to Prime Cool about AC cleaning, routine maintenance or a change in how your unit is working. We can also discuss home appliance service enquiries. Share the unit details and what you have noticed so the team can understand your request and talk through a suitable visit." size="body" className="mb-6" />
              <div className="p-4 bg-[#F1F8FC] border-l-4 border-[#17354A] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#17354A]/80">
                  <strong className="text-[#17354A] font-semibold">Clear process:</strong> We will discuss the requested work, availability and timing with you before arranging a visit.
                </span>
              </div>
              <Button href="/ac-maintenance/" variant="ghost" size="md">
                Explore AC cleaning
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
