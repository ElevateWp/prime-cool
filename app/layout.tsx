import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import JsonLd from '@/components/ui/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Remont Interior Astana',
    template: '%s',
  },
    description:
    'Remont Interior Astana предлагает дизайн интерьеров, планировку пространства и ремонт в Астане, Казахстан. Телефон: +7 778 214 2175.',
  keywords: [
    'Remont Interior Astana',
    'дизайн интерьеров Астана',
    'ремонт интерьера Казахстан',
  ],
  authors: [{ name: 'Remont Interior Astana' }],
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#F5F5F7] selection:text-[#1C1C22]">
        <PagePreloader />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Перейти к основному содержимому
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[88px] sm:pt-[100px] md:pt-[112px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
