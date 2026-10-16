import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About Prime Cool',
  description: 'Learn about Prime Cool and our air conditioning and home appliance services in Bahrain.',
  pathname: '/about/',
});

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'About us', path: '/about/' }]} />
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">About Prime Cool · Bahrain</span>
                <WordRevealH1 text="Home services, available 24 hours." />
                <ScrubbedParagraph text="Prime Cool provides air conditioning installation, cleaning and maintenance, along with home appliance services across Bahrain." className="mt-6 max-w-2xl" />
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-4 lg:pt-10">
              <div className="border border-mist bg-paper-secondary p-6">
                <span className="block font-body text-13 uppercase tracking-wider text-forest-light">Call any time</span>
                <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="mt-2 block font-display text-26 font-semibold text-forest hover:text-brand">{CLINIC_INFO.contact.phone}</a>
                <p className="mt-2 font-body text-15 text-forest-ink/75">Open 24 hours, every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Our approach</span>
          <h2 className="max-w-3xl font-display text-33 text-forest-ink md:text-41">Straightforward service for your home.</h2>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Tell us what you need', 'Share your AC or appliance details and the service you are looking for.'],
              ['02', 'Arrange a visit', 'Call to discuss availability and a suitable time.'],
              ['03', 'Get the agreed service', 'The requested installation, cleaning or maintenance is carried out.'],
              ['04', 'Review the work', 'The team explains what has been done and answers your questions.'],
            ].map(([number, title, text]) => (
              <article key={number} className="border border-mist bg-paper p-6">
                <span className="font-display text-33 text-brand">{number}</span>
                <h3 className="mt-3 font-display text-21 text-forest-ink">{title}</h3>
                <p className="mt-3 font-body text-15 leading-relaxed text-forest-ink/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">What we do</span>
          <h2 className="font-display text-33 text-forest-ink md:text-41">Services for your home</h2>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => <Link key={service.slug} href={`/${service.slug}/`} className="border border-mist bg-paper p-6 transition-colors hover:border-brand">
              <h3 className="font-display text-21 text-forest-ink">{service.name}</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-ink/75">{service.shortDescription}</p>
              <span className="mt-5 inline-flex font-body text-13 font-semibold text-brand">Learn more →</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div><span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">Prime Cool · Bahrain</span><h2 className="font-display text-26 md:text-33">Need help with your AC or home appliance?</h2></div>
          <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="inline-flex min-h-12 items-center justify-center bg-paper px-6 font-body text-15 font-semibold text-forest">Call Prime Cool</a>
        </div>
      </section>
    </div>
  );
}
