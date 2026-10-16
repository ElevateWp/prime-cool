import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: '24-Hour Emergency AC & Appliance Service',
  description:
    'Need urgent AC or home appliance help in Bahrain? Call Prime Cool any time, 24 hours a day, to discuss the problem and arrange service.',
  pathname: '/emergency-service/',
});

const phoneLink = `tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`;

export default function EmergencyServicePage() {
  return (
    <main className="w-full bg-paper">
      <div className="bg-paper-secondary">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Emergency service', path: '/emergency-service/' }]} />
        </div>
      </div>
      <section className="border-b border-mist bg-[#082C45] py-16 text-white md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-3 font-body text-13 font-semibold uppercase tracking-[0.16em] text-[#D8EDF8]">
                Prime Cool · Available 24 hours
              </p>
              <h1 className="max-w-3xl font-display text-38 leading-tight md:text-52">
                Urgent AC or appliance problem?
              </h1>
              <p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-white/80">
                When your air conditioning stops cooling, starts leaking or makes an unusual sound, or a home appliance suddenly stops working, contact Prime Cool to discuss the problem. Tell the team what has happened, which unit is affected and where you are in Bahrain so they can understand the request and discuss arranging service.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneLink}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#087DB8] px-6 font-body text-15 font-semibold text-white transition-colors hover:bg-[#19A5D8]"
                >
                  Call now: {CLINIC_INFO.contact.phone}
                </a>
                <a
                  href="#what-to-share"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-6 font-body text-15 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  What to tell us
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-6 lg:col-span-4">
              <span className="font-body text-13 font-semibold uppercase tracking-wider text-[#D8EDF8]">
                Call any time
              </span>
              <p className="mt-3 font-display text-26">24-hour contact</p>
              <p className="mt-2 font-body text-15 leading-relaxed text-white/75">
                Speak with Prime Cool about urgent air conditioning and home appliance service. Explain the symptoms and when the problem started, and the team can discuss the next steps with you.
              </p>
              <a href={phoneLink} className="mt-5 inline-block font-body text-19 font-semibold text-white hover:underline">
                {CLINIC_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-secondary py-16 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-2 font-body text-13 font-semibold uppercase tracking-wider text-[#07517D]">Emergency help</p>
            <h2 className="font-display text-30 text-[#17354A] md:text-38">Tell us what has stopped working</h2>
            <p className="mt-4 font-body text-16 leading-relaxed text-[#667D8C]">
              Prime Cool can discuss urgent AC and home appliance issues, including cooling failure, water leaks, unusual noises or an appliance that will not start. When you call, mention whether the problem is ongoing, any changes you have noticed and what you have already checked. This helps the team understand the situation and discuss the most appropriate next step and service arrangements.
            </p>
          </div>

          <div id="what-to-share" className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Which unit is affected?',
                text: 'Let us know whether the issue is with an air conditioner or another home appliance. If you know the unit type or model, share those details too.',
              },
              {
                number: '02',
                title: 'What is happening?',
                text: 'Describe the symptoms, such as no cooling, a leak, unusual sounds or a unit that will not switch on. Mention when you first noticed the change and whether it is getting worse.',
              },
              {
                number: '03',
                title: 'Where are you located?',
                text: 'Share your area in Bahrain, a suitable contact number and any access details the team should know so you can discuss availability and the next steps.',
              },
            ].map((item) => (
              <article key={item.number} className="rounded-lg border border-mist bg-white p-6">
                <span className="font-body text-13 font-bold text-[#087DB8]">{item.number}</span>
                <h3 className="mt-3 font-display text-21 text-[#17354A]">{item.title}</h3>
                <p className="mt-3 font-body text-15 leading-relaxed text-[#667D8C]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto flex max-w-site flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <h2 className="font-display text-26 text-[#17354A]">Need to speak with us now?</h2>
            <p className="mt-2 max-w-xl font-body text-15 leading-relaxed text-[#667D8C]">Prime Cool is available by phone 24 hours a day for urgent AC or home appliance enquiries. Call to describe what is happening and discuss the service options and timing.</p>
          </div>
          <a href={phoneLink} className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#087DB8] px-6 font-body text-15 font-semibold text-white transition-colors hover:bg-[#19A5D8]">
            Call {CLINIC_INFO.contact.phone}
          </a>
        </div>
        <div className="mx-auto mt-4 max-w-site px-6 md:px-12">
          <Link href="/book-service/" className="font-body text-13 font-medium text-[#07517D] underline underline-offset-4 hover:text-[#087DB8]">
            For a non-urgent request, book a service
          </Link>
        </div>
      </section>
    </main>
  );
}
