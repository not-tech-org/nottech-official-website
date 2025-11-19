'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_TYPES, BUDGET_RANGES, TIMELINES } from '@/app/constants/consultation';
import { buildPagaCheckoutUrl } from '@/app/utils/pagaCheckout';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  description?: string;
}

const MAX_DESCRIPTION_LENGTH = 1000;

const ConsultationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Check if all required fields are filled and valid
  useEffect(() => {
    const { name, email, phone, projectType, timeline, description } = formData;
    const hasAllRequiredFields = 
      name.trim().length >= 2 && 
      email.trim().length >= 5 && 
      phone.trim().length >= 5 &&
      projectType.trim().length > 0 &&
      timeline.trim().length > 0 &&
      description.trim().length >= 10;
    const hasNoErrors = !Object.values(errors).some(error => error !== undefined);
    const isValid = hasAllRequiredFields && hasNoErrors;
    
    setIsFormValid(isValid);
  }, [formData, errors]);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : undefined;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : undefined;
      case 'phone':
        // Remove spaces, dashes, and plus signs for validation, then check if remaining are digits
        const cleanedPhone = value.replace(/[\s\-+]/g, '');
        if (cleanedPhone.length < 5) return 'Phone number must be at least 5 digits';
        if (!/^\d+$/.test(cleanedPhone)) return 'Phone number must contain only numbers';
        return undefined;
      case 'company':
        // Optional field, no validation needed
        return undefined;
      case 'projectType':
        return value.trim().length === 0 ? 'Please select a project type' : undefined;
      case 'budgetRange':
        // Optional field, no validation needed
        return undefined;
      case 'timeline':
        return value.trim().length === 0 ? 'Please select a timeline' : undefined;
      case 'description':
        if (value.length < 10) return 'Description must be at least 10 characters';
        if (value.length > MAX_DESCRIPTION_LENGTH) return `Description must not exceed ${MAX_DESCRIPTION_LENGTH} characters`;
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Auto-resize textarea
    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field as user types
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!isFormValid) {
      return;
    }

    setStatus('submitting');

    try {
      // Build Paga checkout URL with user email and phone
      const checkoutUrl = buildPagaCheckoutUrl(formData.email, formData.phone);
      
      // Redirect to Paga checkout
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error building checkout URL:', error);
      setStatus('error');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      role="form"
      aria-label="Consultation booking form"
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.name 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.email 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          autoComplete="tel"
          placeholder="+234 810 501 7265"
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.phone 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.phone}</p>
        )}
      </div>

      {/* Company (Optional) */}
      <div>
        <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Company / Organization <span className="text-gray-500 dark:text-gray-400 text-xs">(Optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={errors.company ? "true" : "false"}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.company 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        />
        {errors.company && (
          <p id="company-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.company}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Project Type <span className="text-red-500">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-invalid={errors.projectType ? "true" : "false"}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.projectType 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        >
          <option value="">Select project type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="projectType-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.projectType}</p>
        )}
      </div>

      {/* Budget Range (Optional) */}
      <div>
        <label htmlFor="budgetRange" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Budget Range <span className="text-gray-500 dark:text-gray-400 text-xs">(Optional)</span>
        </label>
        <select
          id="budgetRange"
          name="budgetRange"
          value={formData.budgetRange}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={errors.budgetRange ? "true" : "false"}
          aria-describedby={errors.budgetRange ? "budgetRange-error" : undefined}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.budgetRange 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        >
          <option value="">Select budget range</option>
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        {errors.budgetRange && (
          <p id="budgetRange-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.budgetRange}</p>
        )}
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Timeline <span className="text-red-500">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-required="true"
          aria-invalid={errors.timeline ? "true" : "false"}
          aria-describedby={errors.timeline ? "timeline-error" : undefined}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
            ${errors.timeline 
              ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
              : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
        >
          <option value="">Select timeline</option>
          {TIMELINES.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
        {errors.timeline && (
          <p id="timeline-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.timeline}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Project Description <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={6}
            aria-required="true"
            aria-invalid={errors.description ? "true" : "false"}
            aria-describedby={errors.description ? "description-error description-length" : "description-length"}
            placeholder="Tell us about your project, goals, and current status..."
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
              ${errors.description 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
              } focus:outline-none focus:ring-2 focus:border-transparent min-h-[150px]`}
          />
          <div 
            id="description-length"
            className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
            aria-live="polite"
          >
            {formData.description.length}/{MAX_DESCRIPTION_LENGTH} characters
          </div>
        </div>
        {errors.description && (
          <p id="description-error" role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.description}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={!isFormValid || status === 'submitting'}
        className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-200
          ${!isFormValid 
            ? 'bg-[#D56649] opacity-40 cursor-not-allowed'
            : status === 'submitting'
              ? 'bg-[#D56649] opacity-70 cursor-not-allowed'
              : 'bg-[#D56649] hover:bg-[#D56649]/90'
          }`}
        aria-busy={status === 'submitting'}
        aria-disabled={!isFormValid || status === 'submitting'}
        whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
      >
        <span className="flex items-center justify-center">
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Proceed to Payment'
          )}
        </span>
      </motion.button>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-center"
          role="status"
          aria-live="polite"
        >
          Form submitted successfully!
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-center"
          role="alert"
          aria-live="assertive"
        >
          There was an error. Please try again.
        </motion.div>
      )}
    </form>
  );
};

export default ConsultationForm;

