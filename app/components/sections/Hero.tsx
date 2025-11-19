'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-surface-light dark:bg-gray-900 transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background/IMG_8048.jpeg"
          alt="Abstract technology pattern background"
          aria-hidden="true"
          fill
          className="object-cover opacity-10 dark:opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-gray-900/80 dark:to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-[#D56649]">Redefining</span> the Future of Technology
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              At !Not Tech, we&apos;re pioneering innovative solutions that empower businesses,
              communities, and individuals across Africa. Transform your digital presence
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 justify-center lg:justify-start max-w-sm xs:max-w-none mx-auto lg:mx-0">
              <Link
                href="/consultation"
                className="bg-[#D56649] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c4573b] transition-all hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Book Consultation
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 transform transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#D56649] text-[#D56649] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D56649]/5 transition-all hover:scale-105 inline-flex items-center justify-center group"
              >
                View Our Work
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 ml-2 transform transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/vector/undraw_vibe-coding_mjme.svg"
                alt="Software developer working on innovative technology solutions"
                aria-label="Illustration of a developer coding, representing !Not Tech's innovative approach to software development"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Floating Logic Vector */}
            <motion.div
              animate={{
                y: [0, -15, 15, 0],
                x: [0, 10, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36 translate-y-1/2 translate-x-1/4"
              style={{ zIndex: 1 }}
            >
              <Image
                src="/images/vector/undraw_logic_bj1j.svg"
                alt="Floating logic diagram illustration"
                aria-label="Animated floating illustration representing logical thinking and problem-solving approach"
                width={144}
                height={144}
                className="opacity-80 transform rotate-12 dark:opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20"
        >
          {[
            { 
              number: '274+', 
              label: 'Clients',
              description: 'Trusted by businesses'
            },
            { 
              number: '421+', 
              label: 'Projects',
              description: 'Successfully delivered'
            },
            { 
              number: '1,364+', 
              label: 'Support Hours',
              description: 'Dedicated assistance'
            },
            { 
              number: '18+', 
              label: 'Team Members',
              description: 'Expert professionals'
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-4 xs:p-6 sm:p-8 rounded-2xl bg-surface-light/90 dark:bg-gray-800/80 backdrop-blur-md border border-gray-100 dark:border-gray-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand-secondary/10 hover:border-brand-secondary/20"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-center">
                <motion.h3 
                  className="text-3xl sm:text-4xl font-bold text-[#D56649] mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg sm:text-xl font-bold text-brand-secondary dark:text-white mb-1 tracking-wide group-hover:text-brand-secondary-light transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 opacity-70 group-hover:opacity-90 transition-opacity">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
