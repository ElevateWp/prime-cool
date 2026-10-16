import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Interior Portfolio', description: 'Browse interior details and design inspiration for Remont Interior Astana.', pathname: '/portfolio/' });
const images = Array.from({ length: 14 }, (_, i) => `project-${String(i + 1).padStart(2, '0')}.jpg`);

export default function PortfolioPage() {
  return <div className="bg-paper">
    <section className="border-b border-mist py-14 md:py-20"><div className="mx-auto max-w-site px-6 md:px-12"><Breadcrumbs items={[{ name: 'Portfolio', path: '/portfolio/' }]} /><p className="mt-8 text-13 font-semibold uppercase tracking-wider text-brand">Interior inspiration</p><h1 className="mt-2 font-display text-41 md:text-52">A closer look at considered spaces.</h1><p className="mt-5 max-w-2xl text-17 leading-relaxed text-forest-ink/75">Explore interior images and details as inspiration for your own home or business project.</p></div></section>
    <section className="bg-paper-secondary py-12 md:py-20"><div className="mx-auto grid max-w-site grid-cols-2 gap-3 px-6 sm:grid-cols-3 md:gap-5 md:px-12">{images.map((image, i) => <figure key={image} className={`relative overflow-hidden bg-mist ${i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}><Image src={`/images/home-gallery/${image}`} alt={`Interior design and finish inspiration ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" /></figure>)}</div></section>
    <section className="bg-forest py-14 text-paper md:py-20"><div className="mx-auto flex max-w-site flex-col justify-between gap-6 px-6 md:flex-row md:items-center md:px-12"><div><p className="mb-2 text-13 font-semibold uppercase tracking-wider text-white/65">Remont Interior Astana</p><h2 className="font-display text-26 md:text-33">Planning a space of your own?</h2></div><Link href="/design-consultation/" className="inline-flex min-h-12 items-center bg-paper px-6 font-semibold text-forest hover:bg-softBlue">Discuss your project</Link></div></section>
  </div>;
}
