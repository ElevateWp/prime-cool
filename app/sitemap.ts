import type { MetadataRoute } from 'next';
import { SERVICES, DENTISTS, BLOG_POSTS } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/our-team', '/book-service', '/emergency-service', '/contact', '/blog', ...SERVICES.map((service) => `/${service.slug}`)];
  const core = routes.map((route) => ({ url: `${BASE_URL}${route}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: route === '' ? 1 : route.includes('book-service') ? 0.9 : 0.8 }));
  const team = DENTISTS.map((person) => ({ url: `${BASE_URL}/our-team/${person.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }));
  const articles = BLOG_POSTS.map((post) => ({ url: `${BASE_URL}/blog/${post.slug}/`, lastModified: new Date(post.lastUpdated), changeFrequency: 'monthly' as const, priority: 0.6 }));
  return [...core, ...team, ...articles];
}
