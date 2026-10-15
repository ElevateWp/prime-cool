'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-paper/95 backdrop-blur-md py-2 sm:py-2.5 border-b border-[#DCE6F0]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-paper/95 md:bg-paper/90 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#DCE6F0] shadow-sm'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - compact on mobile */}
        <Link
          href="/"
          className="group flex items-center no-underline focus-visible:outline-offset-4 flex-shrink-0 min-w-0"
          aria-label="FirstChoice Cleaning"
        >
          <Image
            src="/images/logo.png"
            alt="FirstChoice Cleaning logo"
            width={180}
            height={100}
            priority
            className="w-[140px] h-[78px] sm:w-[160px] sm:h-[89px] md:w-[180px] md:h-[100px] flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Primary Navigation (Active on xl screens >= 1200px) */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8" aria-label="Main navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`font-body text-15 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                SERVICES.some((service) => pathname?.startsWith(`/${service.slug}/`))
                  ? 'text-[#183454] font-semibold'
                  : 'text-[#183454]/80 hover:text-[#687B91] font-medium'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <span
                className={`w-1.5 h-1.5 border-r border-b border-[#183454]/60 transition-transform duration-200 ${
                  servicesDropdownOpen ? '-rotate-135 -translate-y-0.5' : 'rotate-45 translate-y-[-2px]'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Panel with Pure White Background and Smooth Shadow */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 z-50 animate-fade-in">
                <div className="p-2 bg-paper border border-[#DCE6F0] shadow-[0_12px_36px_rgba(17,17,17,0.08)] rounded-2xl">
                  <div className="space-y-0.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}/`}
                        className={`block px-3.5 py-2 text-14 font-body transition-all duration-200 rounded-xl ${
                          pathname === `/${s.slug}/`
                            ? 'bg-[#F3F8FD] text-[#183454] font-semibold shadow-xs'
                            : 'text-[#183454]/85 hover:bg-[#F3F8FD]/50 hover:text-[#687B91] hover:translate-x-1'
                        }`}
                      >
                        <span className="block font-medium">{s.navLabel}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/about/'
                ? 'text-[#183454] font-semibold'
                : 'text-[#183454]/80 hover:text-[#687B91] font-medium'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/testimonials/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/testimonials')
                ? 'text-[#183454] font-semibold'
                : 'text-[#183454]/80 hover:text-[#687B91] font-medium'
            }`}
          >
            Testimonials
          </Link>

          <Link
            href="/our-team/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/our-team')
                ? 'text-[#183454] font-semibold'
                : 'text-[#183454]/80 hover:text-[#687B91] font-medium'
            }`}
          >
            Our Team
          </Link>

          <Link
            href="/contact/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/contact/'
                ? 'text-[#183454] font-semibold'
                : 'text-[#183454]/80 hover:text-[#687B91] font-medium'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden xl:flex items-center gap-3">
            <a href="https://www.facebook.com/people/FirstChoice-Cleaning/61592142373098/?mibextid=wwXIfr&rdid=UbQOPhb6tff9OEqF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BLtVwPeVW%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" aria-label="FirstChoice Cleaning on Facebook" className="text-[#183454] hover:text-[#F4770B] transition-colors"><Facebook size={19} /></a>
            <a href="https://www.instagram.com/firstchoice.clean/" target="_blank" rel="noopener noreferrer" aria-label="FirstChoice Cleaning on Instagram" className="text-[#183454] hover:text-[#F4770B] transition-colors"><Instagram size={19} /></a>
          </div>
          <Link
            href="/request-a-quote/"
            className="hidden xl:inline-flex h-10 w-[176px] items-center justify-center rounded-md border border-[#F4770B] bg-[#F4770B] px-3 font-body text-13 font-semibold text-white transition-colors hover:border-[#FF922E] hover:bg-[#FF922E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4770B] whitespace-nowrap"
          >
            <span>Discuss Your Project</span>
          </Link>

          <Button
            href="/request-a-quote/"
            variant="forest"
            size="sm"
            className="hidden xl:inline-flex h-9 w-[160px] items-center justify-center gap-2 px-2 text-12 sm:text-13 font-semibold whitespace-nowrap"
          >
            <span>Get a Quote</span>
          </Button>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#183454] focus-visible:outline-offset-2 flex items-center justify-center cursor-pointer rounded-lg hover:bg-[#F3F8FD] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-[#183454] transition-transform duration-250 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#183454] transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#183454] transition-transform duration-250 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile / Tablet Drawer Menu */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`xl:hidden fixed inset-x-0 top-[95px] sm:top-[110px] md:top-[121px] bottom-0 bg-paper border-t border-[#DCE6F0] overflow-y-auto overscroll-contain px-4 sm:px-6 py-5 sm:py-6 flex flex-col justify-between z-[999] transition-all duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-list"
              className="flex min-h-12 w-full items-center justify-between py-2 text-left font-body text-13 font-bold uppercase tracking-wider text-[#183454]"
            >
              <span>Services</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`mr-1 h-4 w-4 text-[#183454]/70 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services-list" className="grid grid-cols-1 gap-1.5 pb-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}/`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={`flex min-h-11 items-center rounded-md px-3 font-body text-15 transition-colors ${
                      pathname === `/${s.slug}/`
                        ? 'bg-[#FFE6CC] font-semibold text-[#183454]'
                        : 'text-[#183454] hover:bg-[#F3F8FD] hover:text-[#687B91]'
                    }`}
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#DCE6F0] flex flex-col space-y-3">
            <Link
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/about/' ? 'text-[#183454] font-semibold' : 'text-[#183454] hover:text-[#687B91]'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/testimonials/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/testimonials') ? 'text-[#183454] font-semibold' : 'text-[#183454] hover:text-[#687B91]'
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/our-team/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/our-team') ? 'text-[#183454] font-semibold' : 'text-[#183454] hover:text-[#687B91]'
              }`}
            >
              Our Team
            </Link>
            <Link
              href="/request-a-quote/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 font-semibold text-[#183454] hover:underline`}
            >
              Discuss Your Project
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/contact/' ? 'text-[#183454] font-semibold' : 'text-[#183454] hover:text-[#687B91]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#DCE6F0] flex flex-col gap-3 pb-8">
          <div className="flex items-center justify-center gap-6 pb-2">
            <a href="https://www.facebook.com/people/FirstChoice-Cleaning/61592142373098/?mibextid=wwXIfr&rdid=UbQOPhb6tff9OEqF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BLtVwPeVW%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" aria-label="FirstChoice Cleaning on Facebook" className="text-[#183454] hover:text-[#F4770B]"><Facebook size={22} /></a>
            <a href="https://www.instagram.com/firstchoice.clean/" target="_blank" rel="noopener noreferrer" aria-label="FirstChoice Cleaning on Instagram" className="text-[#183454] hover:text-[#F4770B]"><Instagram size={22} /></a>
          </div>
          <Button
            href="/request-a-quote/"
            variant="forest"
            size="lg"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Button>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-center font-body text-15 text-[#183454] py-2 font-semibold hover:text-[#687B91] transition-colors"
          >
            Call: {CLINIC_INFO.contact.phone}
          </a>
        </div>
      </div>
    </>
  );
}
