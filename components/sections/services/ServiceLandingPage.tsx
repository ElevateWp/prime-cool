import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
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
                  Remont Interior Astana · Дизайн интерьеров и ремонт
                </span>
                <WordRevealH1 text={service.name} />
                <ScrubbedParagraph text={service.tagline} className="mt-6 max-w-2xl" />
                <ScrubbedParagraph text={service.shortDescription} size="body" className="mt-4 max-w-2xl" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/obsudit-proekt/" variant="forest" size="lg">Обсудить стоимость проекта</Button>
                  <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="ghost" size="lg">
                    Позвонить: {CLINIC_INFO.contact.phone}
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-left" duration={0.8} className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper-secondary shadow-sm">
                <Image src={photo} alt={`${service.name} — пример интерьера`} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              </div>
              <p className="mt-2 font-body text-12 text-forest-light">Пример оформления интерьера</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Услуга</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Продуманный план для вашего пространства</h2>
            <ScrubbedParagraph text={service.clinicalExplanation} size="body" className="mt-4 max-w-3xl" />
          </AnimateOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-mist bg-paper p-6 md:p-8">
              <h3 className="mb-5 font-display text-21 text-forest-ink">Когда может быть полезна эта услуга</h3>
              <ul className="space-y-3 font-body text-15 text-forest-ink/80">
                {service.whoNeeds.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-greenAccent" />{item}</li>)}
              </ul>
            </div>
            <div className="border border-mist bg-paper p-6 md:p-8">
              <h3 className="mb-5 font-display text-21 text-forest-ink">Наш подход</h3>
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
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Этапы работы</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">От первого разговора до завершения</h2>
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
          <p className="mt-6 max-w-3xl font-body text-13 leading-relaxed text-forest-light">Стоимость и сроки зависят от объекта, выбранных материалов и согласованного объёма работ. Свяжитесь с нами, чтобы обсудить ваши планы и дальнейшие шаги.</p>
        </div>
      </section>

      {service.faqs.length > 0 && <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-display text-33 text-forest-ink md:text-41">Часто задаваемые вопросы</h2>
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
            <span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">Remont Interior Astana · Астана, Казахстан</span>
            <h2 className="font-display text-26 md:text-33">Расскажите о своём интерьерном проекте.</h2>
          </div>
          <Link href="/obsudit-proekt/" className="inline-flex min-h-12 items-center justify-center bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-softBlue">Обсудить проект</Link>
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
