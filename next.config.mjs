/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/dizayn-zhilykh-intererov', destination: '/ac-installation', permanent: true },
      { source: '/dizayn-kommercheskikh-intererov', destination: '/ac-cleaning', permanent: true },
      { source: '/remont-interera', destination: '/ac-maintenance', permanent: true },
      { source: '/planirovka-prostranstva', destination: '/home-appliance-services', permanent: true },
      { source: '/obsudit-proekt', destination: '/book-service', permanent: true },
      { source: '/kontakty', destination: '/contact', permanent: true },
      { source: '/studiya', destination: '/about', permanent: true },
      { source: '/nasha-studiya/:path*', destination: '/our-team/:path*', permanent: true },
      { source: '/nasha-studiya', destination: '/our-team', permanent: true },
      { source: '/portfolio', destination: '/projects', permanent: true },
      { source: '/residential-interior-design', destination: '/ac-installation', permanent: true },
      { source: '/commercial-interior-design', destination: '/ac-cleaning', permanent: true },
      { source: '/interior-renovation', destination: '/ac-maintenance', permanent: true },
      { source: '/space-planning', destination: '/home-appliance-services', permanent: true },
      { source: '/design-consultation', destination: '/book-service', permanent: true },
      { source: '/studio', destination: '/about', permanent: true },
      { source: '/our-studio/:path*', destination: '/our-team', permanent: true },
      { source: '/our-studio', destination: '/our-team', permanent: true },
      { source: '/regular-house-cleaning', destination: '/ac-installation', permanent: true },
      { source: '/deep-house-cleaning', destination: '/ac-cleaning', permanent: true },
      { source: '/one-off-cleaning', destination: '/ac-maintenance', permanent: true },
      { source: '/pressure-washing', destination: '/home-appliance-services', permanent: true },
      { source: '/home-extensions', destination: '/ac-installation', permanent: true },
      { source: '/loft-garage-conversions', destination: '/ac-cleaning', permanent: true },
      { source: '/home-refurbishments', destination: '/ac-maintenance', permanent: true },
      { source: '/interior-finishing', destination: '/ac-maintenance', permanent: true },
      { source: '/kitchens-bathrooms', destination: '/home-appliance-services', permanent: true },
      { source: '/roofing-lean-to-improvements', destination: '/home-appliance-services', permanent: true },
      { source: '/request-a-quote', destination: '/book-service', permanent: true },
      { source: '/testimonials', destination: '/projects', permanent: true },
      { source: '/emergency-dentist/:path*', destination: '/contact', permanent: true },
      { source: '/emergency-dentist', destination: '/contact', permanent: true },
    ];
  },
  images: { unoptimized: true },
};

export default nextConfig;
