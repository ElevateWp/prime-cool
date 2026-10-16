import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'What services do you provide?',
    answer: 'Prime Cool provides AC installation and fitting, air conditioning cleaning, maintenance and repair support, along with home appliance fitting and service enquiries. Call to discuss the unit and work you need.',
    relatedLink: { href: '/ac-installation/', label: 'View services →' },
  },
  {
    question: 'Where do you provide service?',
    answer: 'Prime Cool serves customers across Bahrain. Share your area when you call so the team can discuss availability and arranging a visit for your location.',
    relatedLink: { href: '/contact/', label: 'Contact us →' },
  },
  {
    question: 'Can I arrange AC cleaning?',
    answer: 'Yes. Call to describe your AC unit, the cleaning you need and your location. The team can discuss the request, answer questions and talk through a suitable visit.',
    relatedLink: { href: '/home-appliance-services/', label: 'Learn about home appliance services →' },
  },
  {
    question: 'How do I arrange a service?',
    answer: `Call us at ${CLINIC_INFO.contact.phone} any time. Tell us whether you need installation, cleaning, maintenance or appliance service, and share your location and preferred timing so we can discuss the request.`,
    relatedLink: { href: '/book-service/', label: 'Book a service →' },
  },
  {
    question: 'How is service pricing determined?',
    answer: 'Pricing depends on the service, the type of AC unit or appliance and any additional work that may be needed. Call us with the details and we can discuss the request and relevant pricing factors.',
    relatedLink: { href: '/contact/', label: 'Contact Prime Cool →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Frequently asked questions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Questions about home services
            </h2>
            <ScrubbedParagraph text="Find answers about AC installation, cleaning, maintenance and appliance services, as well as how to reach Prime Cool and arrange a visit. If your question is specific to a unit or service request, call us any time and the team can discuss it with you." size="body" className="mb-6" />
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Have a question?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Call us any time to explain your AC or appliance needs, ask about a service or discuss appointment availability.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Call Prime Cool
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
