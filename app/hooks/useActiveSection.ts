'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    // Only track sections on the homepage where the sections actually exist
    if (!(pathname === '/' || pathname.startsWith('/#'))) {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
        threshold: 0,
      }
    );

    // Observe all sections with an id on the page
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [pathname]);

  return activeSection;
};
