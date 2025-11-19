/**
 * Consultation Configuration Constants
 * 
 * Centralized configuration for consultation booking flow including
 * Paga checkout parameters and Google Calendar integration.
 */

export const CONSULTATION_CONFIG = {
  // Paga Checkout Configuration
  paga: {
    baseUrl: 'https://checkout.paga.com/checkout/params',
    publicKey: 'DFE148C3-5352-4361-A2B8-6F933D27B48C',
    amount: '500000.00', // Amount in NGN (configurable)
    currency: 'NGN',
    buttonLabel: 'Make Payment',
  },
  
  // Google Calendar Integration
  calendar: {
    chargeUrl: 'https://calendar.app.google/TKiFXRioy5j8wt1M8',
  },
} as const;

/**
 * Project type options for consultation form
 */
export const PROJECT_TYPES = [
  'New Product',
  'MVP Build',
  'Modernization',
  'Consulting/Advisory',
  'Other',
] as const;

/**
 * Budget range options for consultation form (in Naira)
 */
export const BUDGET_RANGES = [
  '< ₦1,000,000',
  '₦1,000,000 - ₦2,500,000',
  '₦2,500,000 - ₦5,000,000',
  '₦5,000,000 - ₦10,000,000',
  '> ₦10,000,000',
] as const;

/**
 * Timeline options for consultation form
 */
export const TIMELINES = [
  'ASAP',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  'Just exploring',
] as const;

