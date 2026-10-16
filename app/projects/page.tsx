import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import { SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Home Services',
  description: 'Explore Prime Cool air conditioning and home appliance services in Bahrain.',
  pathname: '/projects/',
});

export default function ServicesOverviewPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Services', path: '/projects/' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Prime Cool · Bahrain</span>
            <WordRevealH1 text="AC and home appliance services." />
            <ScrubbedParagraph text="Explore the air conditioning and home appliance services available from Prime Cool across Bahrain. Whether you are planning a new AC installation, need cleaning or maintenance, or want to discuss an appliance fitting or service issue, call any time to explain what you need and talk through the next steps." className="mt-6 max-w-2xl" />
          </div>
        </div>
      </section>
      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Our services</span><h2 className="font-display text-26 text-forest-ink md:text-33">Support for your home</h2><p className="mt-3 max-w-2xl font-body text-15 leading-relaxed text-forest-ink/75">Choose a service to learn what information to share, how a request can be arranged and what to expect when speaking with Prime Cool.</p></div>
            <div className="border-l-2 border-brand pl-4"><span className="block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Prime Cool</span><span className="mt-1 block font-body text-12 text-forest-light">Available 24 hours · Bahrain</span></div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <AnimateOnScroll key={service.slug} animation="fade-up" delay={index * 0.08} duration={0.8}>
                <Link href={`/${service.slug}/`} className="group block h-full border border-mist bg-paper p-5 shadow-sm transition-colors hover:border-brand">
                  <div className="relative mb-5 flex aspect-square items-center justify-center overflow-hidden bg-paper-secondary p-8"><Image src="/images/logo.png" alt="Prime Cool" width={220} height={220} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div>
                  <h3 className="font-display text-21 text-forest-ink">{service.name}</h3>
                  <p className="mt-2 font-body text-13 leading-relaxed text-forest-light">{service.shortDescription}</p>
                  <span className="mt-4 block font-body text-13 font-semibold text-brand">Learn more →</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
