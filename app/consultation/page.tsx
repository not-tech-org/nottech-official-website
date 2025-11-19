'use client';

import { motion } from 'framer-motion';
import ConsultationForm from '@/app/components/forms/ConsultationForm';

export default function ConsultationPage() {

  return (
    <>
      {/* Hero-like Intro Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-surface-light dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Book a <span className="text-[#D56649]">Consultation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project goals and explore how we can help bring your vision to life. 
              Our team is ready to provide expert guidance tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D56649]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>30-minute session</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D56649]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expert guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D56649]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Personalized approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface-muted dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface-light dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                Consultation Details
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Please fill out the form below with your project information. After submission, 
                you&apos;ll be redirected to complete payment and schedule your consultation.
              </p>
              
              {/* Consultation Form */}
              <ConsultationForm />
            </div>

            {/* Info Note */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#D56649]/10 dark:bg-[#D56649]/20 rounded-lg border border-[#D56649]/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D56649] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <p className="font-semibold mb-1 text-gray-900 dark:text-white">
                    What to expect after payment:
                  </p>
                  <p>
                    After completing payment, you&apos;ll be redirected to our calendar booking page. 
                    You&apos;ll need to enter your payment reference to schedule your consultation meeting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

