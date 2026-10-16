/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/residential-interior-design', destination: '/dizayn-zhilykh-intererov', permanent: true },
      { source: '/commercial-interior-design', destination: '/dizayn-kommercheskikh-intererov', permanent: true },
      { source: '/interior-renovation', destination: '/remont-interera', permanent: true },
      { source: '/space-planning', destination: '/planirovka-prostranstva', permanent: true },
      { source: '/design-consultation', destination: '/obsudit-proekt', permanent: true },
      { source: '/contact', destination: '/kontakty', permanent: true },
      { source: '/studio', destination: '/studiya', permanent: true },
      { source: '/our-studio/:path*', destination: '/nasha-studiya', permanent: true },
      { source: '/our-studio', destination: '/nasha-studiya', permanent: true },
      { source: '/blog/:path*', destination: '/portfolio', permanent: true },
      { source: '/blog', destination: '/portfolio', permanent: true },
      { source: '/regular-house-cleaning', destination: '/dizayn-zhilykh-intererov', permanent: true },
      { source: '/deep-house-cleaning', destination: '/dizayn-kommercheskikh-intererov', permanent: true },
      { source: '/one-off-cleaning', destination: '/remont-interera', permanent: true },
      { source: '/pressure-washing', destination: '/planirovka-prostranstva', permanent: true },
      { source: '/home-extensions', destination: '/dizayn-zhilykh-intererov', permanent: true },
      { source: '/loft-garage-conversions', destination: '/dizayn-kommercheskikh-intererov', permanent: true },
      { source: '/home-refurbishments', destination: '/remont-interera', permanent: true },
      { source: '/interior-finishing', destination: '/remont-interera', permanent: true },
      { source: '/kitchens-bathrooms', destination: '/remont-interera', permanent: true },
      { source: '/roofing-lean-to-improvements', destination: '/planirovka-prostranstva', permanent: true },
      { source: '/about', destination: '/studiya', permanent: true },
      { source: '/our-team/:path*', destination: '/nasha-studiya', permanent: true },
      { source: '/our-team', destination: '/nasha-studiya', permanent: true },
      { source: '/request-a-quote', destination: '/obsudit-proekt', permanent: true },
      { source: '/testimonials', destination: '/portfolio', permanent: true },
      { source: '/emergency-dentist/:path*', destination: '/kontakty', permanent: true },
      { source: '/emergency-dentist', destination: '/kontakty', permanent: true },
    ];
  },
  images: { unoptimized: true },
};

export default nextConfig;
