'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS } from '@/app/constants/navigation';
import { scrollToElement } from '@/app/utils/smoothScroll';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const elementId = href.replace('/#', '');

      // If we're on the homepage, smooth scroll to section
      if (pathname === '/' || pathname.startsWith('/#')) {
        scrollToElement(elementId);
      } else {
        // On other pages (e.g., /consultation), navigate to the homepage section
        router.push(href);
      }
    }
  };

  return (
    <footer className="bg-surface-muted dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link 
              href="/#home" 
              className="block mb-6 transition-opacity hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              <Image
                src="/images/company-assets/nottech_logo_long.png"
                alt="!Not Tech Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We&apos;re not just shaping the future, we&apos;re redefining it. We&apos;re committed to pioneering solutions
              that empower businesses, communities, and individuals across the continent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-600 dark:text-gray-300 hover:text-[#D56649] dark:hover:text-[#D56649] transition-colors duration-200 inline-block relative group"
                  >
                    {item.title}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D56649] transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-300">
                50 Adeba road, Ibeju-Lekki, Lagos State
              </li>
              <li>
                <a 
                  href="tel:+2347036685502" 
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D56649] dark:hover:text-[#D56649] transition-colors duration-200 inline-block relative group"
                >
                  +234 (0)703 668 5502
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D56649] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@nottechltd.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D56649] dark:hover:text-[#D56649] transition-colors duration-200 inline-block relative group"
                >
                  info@nottechltd.com
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D56649] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D56649] focus:border-transparent transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full bg-[#D56649] text-white px-4 py-2 rounded-lg hover:bg-[#D56649]/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} !Not Tech Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#D56649] dark:hover:text-[#D56649] transition-colors duration-200 inline-block relative group"
              >
                Privacy Policy
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D56649] transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#D56649] dark:hover:text-[#D56649] transition-colors duration-200 inline-block relative group"
              >
                Terms of Service
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D56649] transition-all duration-200 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}