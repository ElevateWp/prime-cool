/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/home-extensions', destination: '/regular-house-cleaning', permanent: true },
      { source: '/loft-garage-conversions', destination: '/deep-house-cleaning', permanent: true },
      { source: '/home-refurbishments', destination: '/deep-house-cleaning', permanent: true },
      { source: '/interior-finishing', destination: '/regular-house-cleaning', permanent: true },
      { source: '/kitchens-bathrooms', destination: '/one-off-cleaning', permanent: true },
      { source: '/roofing-lean-to-improvements', destination: '/pressure-washing', permanent: true },
      { source: '/blog/:path*', destination: '/about', permanent: true },
      { source: '/blog', destination: '/about', permanent: true },
      { source: '/emergency-dentist/:path*', destination: '/contact', permanent: true },
      { source: '/emergency-dentist', destination: '/contact', permanent: true },
    ];
  },
  images: { unoptimized: true },
};

export default nextConfig;
