import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Our Team',
  description: 'Contact the Prime Cool team for AC installation, cleaning, maintenance and home appliance services in Bahrain.',
  pathname: '/our-team/',
});

export default function TeamPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Our team', path: '/our-team/' }]} />
          <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">Prime Cool · Bahrain</span>
              <WordRevealH1 text="Here to help keep your home comfortable." />
              <ScrubbedParagraph text="Get in touch with Prime Cool for air conditioning installation, cleaning and maintenance, or home appliance service." className="mt-6" />
            </div>
            <div className="flex justify-center md:col-span-5">
              <div className="relative flex aspect-square w-full max-w-sm items-center justify-center border border-mist bg-paper-secondary p-8">
                <Image src="/images/logo.png" alt="Prime Cool" width={300} height={300} className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-12">
          <article className="border border-mist bg-paper p-7"><span className="font-body text-13 uppercase tracking-wider text-forest-light">Services</span><h2 className="mt-3 font-display text-26 text-forest-ink">AC installation, cleaning and maintenance</h2></article>
          <article className="border border-mist bg-paper p-7"><span className="font-body text-13 uppercase tracking-wider text-forest-light">Home appliances</span><h2 className="mt-3 font-display text-26 text-forest-ink">Installation and service support</h2></article>
          <article className="border border-mist bg-paper p-7"><span className="font-body text-13 uppercase tracking-wider text-forest-light">Availability</span><h2 className="mt-3 font-display text-26 text-forest-ink">Open 24 hours</h2><a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="mt-4 inline-block font-body text-17 font-semibold text-brand">{CLINIC_INFO.contact.phone}</a></article>
        </div>
      </section>
    </div>
  );
}
