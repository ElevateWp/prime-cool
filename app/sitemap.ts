import type { MetadataRoute } from 'next';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/studiya', '/portfolio', '/nasha-studiya', '/obsudit-proekt', '/kontakty', ...SERVICES.map((service) => `/${service.slug}`)];
  const core = routes.map((route) => ({ url: `${BASE_URL}${route}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: route === '' ? 1 : route.includes('obsudit-proekt') ? 0.9 : 0.8 }));
  const team = DENTISTS.map((person) => ({ url: `${BASE_URL}/nasha-studiya/${person.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }));
  return [...core, ...team];
}
