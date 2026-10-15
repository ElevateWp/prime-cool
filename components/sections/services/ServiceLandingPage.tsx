import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import { createMetadata, generateMedicalProcedureSchema } from '@/lib/seo';

export default function ServiceLandingPage({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return null;

  const photo = service.beforeAfterCase.beforeImage;
  const servicePath = `/${service.slug}/`;
  const schema = generateMedicalProcedureSchema(service.name, service.shortDescription, servicePath);

  return (
    <div className="flex w-full flex-col bg-paper">
      <JsonLd data={schema} />
      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: servicePath }]} />
          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">
                  FirstChoice Cleaning · Home & exterior cleaning
                </span>
                <WordRevealH1 text={service.name} />
                <p className="mt-6 max-w-2xl font-body text-17 leading-relaxed text-forest-ink/85 md:text-21">
                  {service.tagline}
                </p>
                <p className="mt-4 max-w-2xl font-body text-15 leading-relaxed text-forest-ink/75 md:text-17">
                  {service.shortDescription}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/request-a-quote/" variant="forest" size="lg">Request a Quote</Button>
                  <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="ghost" size="lg">
                    Call {CLINIC_INFO.contact.phone}
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-left" duration={0.8} className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper-secondary shadow-sm">
                <Image src={photo} alt={`${service.name} service`} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              </div>
              <p className="mt-2 font-body text-12 text-forest-light">Cleaning service imagery</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Your service</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">A careful clean, arranged around you</h2>
            <p className="mt-4 max-w-3xl font-body text-15 leading-relaxed text-forest-ink/80 md:text-17">{service.clinicalExplanation}</p>
          </AnimateOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-mist bg-paper p-6 md:p-8">
              <h3 className="mb-5 font-display text-21 text-forest-ink">When this service can help</h3>
              <ul className="space-y-3 font-body text-15 text-forest-ink/80">
                {service.whoNeeds.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-greenAccent" />{item}</li>)}
              </ul>
            </div>
            <div className="border border-mist bg-paper p-6 md:p-8">
              <h3 className="mb-5 font-display text-21 text-forest-ink">Our approach</h3>
              <ul className="space-y-3 font-body text-15 text-forest-ink/80">
                {service.benefits.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orangeAccent" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-mist py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">How it works</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">From first conversation to completion</h2>
          </AnimateOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.procedureSteps.map((step) => (
              <article key={step.stepNumber} className="border border-mist bg-paper p-6">
                <span className="mb-4 block font-display text-33 text-brand">0{step.stepNumber}</span>
                <h3 className="mb-2 font-display text-21 text-forest-ink">{step.title}</h3>
                <p className="mb-4 font-body text-13 leading-relaxed text-forest-ink/75">{step.description}</p>
                <p className="font-body text-12 leading-relaxed text-forest-light">{step.duration}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl font-body text-13 leading-relaxed text-forest-light">Price and timing depend on your property, the areas to be cleaned and the agreed scope. Izzy and Bill will discuss these details with you before confirming the service.</p>
        </div>
      </section>

      {service.faqs.length > 0 && <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-display text-33 text-forest-ink md:text-41">Frequently asked questions</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {service.faqs.map((faq) => <article key={faq.question} className="border border-mist bg-paper p-6">
              <h3 className="mb-3 font-display text-21 text-forest-ink">{faq.question}</h3>
              <p className="font-body text-15 leading-relaxed text-forest-ink/80">{faq.answer}</p>
            </article>)}
          </div>
        </div>
      </section>}

      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div>
            <span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">FirstChoice Cleaning · 5.0 Google rating · 12 reviews</span>
            <h2 className="font-display text-26 md:text-33">Tell us what you would like cleaned.</h2>
          </div>
          <Link href="/request-a-quote/" className="inline-flex min-h-12 items-center justify-center bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-softBlue">Request a cleaning quote</Link>
        </div>
      </section>
    </div>
  );
}

export function getServiceMetadata(slug: string) {
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({ title: service.name, description: service.shortDescription, pathname: `/${service.slug}/` });
}
