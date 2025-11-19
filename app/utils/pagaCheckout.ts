import { CONSULTATION_CONFIG } from '@/app/constants/consultation';

/**
 * Builds the Paga checkout URL with user email and phone number
 * 
 * @param email - User's email address
 * @param phone - User's phone number
 * @returns Complete Paga checkout URL with all parameters properly encoded
 */
export const buildPagaCheckoutUrl = (email: string, phone: string): string => {
  const { baseUrl, publicKey, amount, currency, buttonLabel } = CONSULTATION_CONFIG.paga;
  const { chargeUrl } = CONSULTATION_CONFIG.calendar;

  // Use URLSearchParams for proper URL encoding
  const params = new URLSearchParams({
    public_key: publicKey,
    amount: amount,
    currency: currency,
    phone_number: phone,
    email: email,
    charge_url: chargeUrl,
    button_label: buttonLabel,
  });

  return `${baseUrl}?${params.toString()}`;
};

