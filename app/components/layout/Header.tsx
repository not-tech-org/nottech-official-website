'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToElement } from '@/app/utils/smoothScroll';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/app/constants/navigation';
import ThemeToggle from '../common/ThemeToggle';
import { useActiveSection } from '@/app/hooks/useActiveSection';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface-light/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link 
            href="/#home" 
            className="relative z-10 flex-shrink-0" 
            aria-label="Return to homepage"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            <Image
              src="/images/company-assets/nottech_logo_long.png"
              alt="!Not Tech Logo"
              width={160}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6" role="menubar">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    const targetId = item.href.substring(2);

                    // If we're on the homepage, use smooth scrolling
                    if (pathname === '/' || pathname.startsWith('/#')) {
                      e.preventDefault();
                      scrollToElement(targetId);
                    } else {
                      // If we're on another page (e.g., /consultation), navigate to the homepage section
                      e.preventDefault();
                      router.push(item.href);
                    }
                  }
                }}
                role="menuitem"
                aria-current={
                  (item.href.includes('#') && activeSection === item.href.split('#')[1]) ||
                  (!item.href.includes('#') && pathname === item.href)
                    ? 'page'
                    : undefined
                }
                className={`text-medium font-semibold transition-all hover:text-[#D56649] hover:scale-105 ${
                  (item.href.includes('#') && activeSection === item.href.split('#')[1]) ||
                  (!item.href.includes('#') && pathname === item.href)
                    ? 'text-[#D56649] font-bold' 
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/consultation"
              className="bg-[#D56649] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#c4573b] transition-all hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
              role="button"
              aria-label="Book Consultation"
            >
              Book Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="relative z-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-800 dark:bg-gray-200 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                  aria-hidden="true"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                  className="fixed top-[4.5rem] left-4 right-4 bg-surface-light dark:bg-gray-800 rounded-2xl shadow-xl z-40 md:hidden border border-gray-200 dark:border-gray-700"
                  role="dialog"
                  aria-label="Mobile menu"
                  aria-modal="true"
                >
                  <div className="flex flex-col p-6 space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-lg transition-all px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        (item.href.includes('#') && activeSection === item.href.split('#')[1]) ||
                        (!item.href.includes('#') && pathname === item.href)
                          ? 'text-[#D56649] font-bold bg-[#D56649]/5' 
                          : 'text-gray-800 dark:text-gray-200 font-medium'
                        }`}
                        onClick={(e) => {
                          if (item.href.startsWith('/#')) {
                            const targetId = item.href.substring(2);

                            if (pathname === '/' || pathname.startsWith('/#')) {
                              e.preventDefault();
                              scrollToElement(targetId);
                            } else {
                              e.preventDefault();
                              router.push(item.href);
                            }
                          }
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                      <Link
                        href="/consultation"
                        className="bg-[#D56649] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#c4573b] transition-all hover:shadow-lg inline-flex items-center gap-2 w-full justify-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Book Consultation
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
