import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, DENTISTS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Home service tips',
  description:
    'Practical AC cleaning, maintenance, installation and home appliance care guidance from Prime Cool in Bahrain.',
  pathname: '/blog/',
});

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Editorial Header with Signature Texture */}
      <section className="relative py-16 md:py-24 border-b border-mist overflow-hidden">
        <TextureBackground variant="blog" className="opacity-20" />

        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Home service tips', path: '/blog/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Home service tips
                </span>
                <WordRevealH1 text="Tips for caring for your AC and home appliances." />
                <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mt-6 max-w-2xl">
                  Read practical guidance on caring for your air conditioner and household appliances. Learn what details to share when arranging cleaning, maintenance or installation, how to describe a service issue and what questions to ask before a visit. For advice about a particular unit or an urgent issue, contact Prime Cool directly at any time.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Editorial Article Index (Hairline-Ruled List) */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="divide-y divide-mist border-t border-b border-mist">
            {BLOG_POSTS.map((post, idx) => {
              const author = DENTISTS.find((d) => d.id === post.authorId) || DENTISTS[0];
              return (
                <AnimateOnScroll key={post.slug} animation="fade-up" delay={idx * 0.1}>
                  <article className="py-8 md:py-10 group transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                      {/* Category & Read Time */}
                      <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-2 font-body text-13 text-forest-ink/60">
                        <span className="text-forest font-medium">{post.category}</span>
                        <span className="tabular-nums">{post.readTime}</span>
                      </div>

                      {/* Title & Excerpt */}
                      <div className="lg:col-span-7">
                        <h2 className="font-display text-21 md:text-26 text-forest-ink group-hover:text-forest transition-colors mb-2">
                          <Link href={`/blog/${post.slug}/`} className="no-underline text-inherit">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        {author && (
                          <span className="font-body text-13 text-forest-ink/60 block">
                            By: {author.name} • {author.title}
                          </span>
                        )}
                      </div>

                      {/* Action */}
                      <div className="lg:col-span-2 text-left lg:text-right">
                        <Link
                          href={`/blog/${post.slug}/`}
                          className="font-body text-13 text-forest font-medium underline underline-offset-4 group-hover:text-forest-light"
                        >
                          Read article →
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
