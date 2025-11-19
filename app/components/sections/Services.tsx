'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features,
  index 
}: { 
  title: string;
  description: string;
  icon: string;
  features: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-surface-light dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
    role="article"
    aria-labelledby={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <motion.div 
      className="relative h-28 sm:h-32 mb-4 sm:mb-6 mx-auto max-w-[180px] sm:max-w-[200px]"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={`/images/vector/${icon}`}
        alt={`${title} service illustration`}
        aria-hidden="true"
        fill
        className="object-contain dark:invert-0 transition-transform duration-300 group-hover:drop-shadow-lg"
      />
    </motion.div>
    
    <h3 id={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
      {title}
    </h3>
    
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-center">
      {description}
    </p>
    
    <ul className="space-y-3" aria-label={`Features of ${title}`}>
      {features.map((feature, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
          className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 p-1 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg"
        >
          <svg className="w-5 h-5 mt-1 flex-shrink-0 text-brand-secondary group-hover:text-brand-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions that perfectly align with your business objectives and operational needs.",
      icon: "undraw_proud-coder_bivp.svg",
      features: [
        "Bespoke software applications",
        "Scalable architecture design",
        "Integration with existing systems",
        "Performance optimization",
        "Continuous maintenance & support"
      ]
    },
    {
      title: "Web & Mobile Applications",
      description: "Dynamic applications that deliver seamless user experiences across all platforms and devices.",
      icon: "undraw_building-a-website_1wrp.svg",
      features: [
        "Responsive web applications",
        "Native mobile apps",
        "Progressive Web Apps (PWA)",
        "Cross-platform solutions",
        "UI/UX optimization"
      ]
    },
    {
      title: "Tech Consulting",
      description: "Strategic guidance to help you navigate the digital landscape and make informed technology decisions.",
      icon: "undraw_working-together_r43a.svg",
      features: [
        "Technology assessment",
        "Digital transformation strategy",
        "Architecture planning",
        "Security consulting",
        "Performance optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-surface-muted dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="text-[#D56649]">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary/90 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions designed to transform 
            your business and drive success in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Looking for a custom solution? Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center px-6 sm:px-8 py-3 rounded-full bg-[#D56649] text-white text-sm sm:text-base font-semibold hover:bg-[#c4573b] transition-all duration-300 hover:shadow-lg"
            role="button"
            aria-label="Book Consultation - Discuss your custom solution"
          >
            Book Consultation
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
