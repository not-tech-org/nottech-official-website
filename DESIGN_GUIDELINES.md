# !Not Tech Design Guidelines

**Version:** 1.0  
**Last Updated:** 2025  
**Purpose:** Comprehensive design system and development standards for maintaining consistency across the !Not Tech official website.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Patterns](#component-patterns)
5. [Animation & Motion](#animation--motion)
6. [Dark Mode](#dark-mode)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Code Conventions](#code-conventions)
10. [Section Structure](#section-structure)

---

## Color System

### Brand Colors

The brand uses a warm, professional color palette with a primary accent color and sophisticated secondary tones.

#### Primary Brand Color

- **Primary (`#D56649`)**: Main brand color - used for CTAs, highlights, and key interactive elements
  - Hover state: `#c4573b` (darker shade)
  - Light background: `bg-[#D56649]/10` (10% opacity)
  - Text on light: `text-[#D56649]`
  - Usage: Buttons, links, accents, badges, section highlights

#### Secondary Brand Colors

- **Secondary (`#3C4948`)**: Used for text and subtle UI elements
  - Light variant: `#4A5857` (hover states)
  - Dark variant: `#2E3736` (dark mode)
  - Usage: Body text, secondary headings, subtle backgrounds

### Surface Colors

#### Light Mode

- **Surface Light (`#FAFAF9`)**: Primary background color
  - Tailwind: `bg-surface-light`
  - Usage: Main section backgrounds, card backgrounds
- **Surface Muted (`#F5F5F4`)**: Alternating section background
  - Tailwind: `bg-surface-muted`
  - Usage: Alternating sections for visual separation

#### Dark Mode

- **Dark Background (`gray-900`)**: Primary dark background
  - Tailwind: `dark:bg-gray-900`
  - Usage: Main sections in dark mode
- **Dark Muted (`gray-900/50`)**: Alternating dark sections
  - Tailwind: `dark:bg-gray-900/50`
  - Usage: Alternating sections in dark mode
- **Dark Cards (`gray-800`)**: Card and elevated surfaces
  - Tailwind: `dark:bg-gray-800`
  - Usage: Cards, modals, elevated components

### Text Colors

#### Light Mode

- **Primary Text**: `text-gray-900` (headings, important text)
- **Secondary Text**: `text-gray-700` or `text-brand-secondary/90` (body text)
- **Muted Text**: `text-gray-600` (captions, less important text)
- **Light Text**: `text-gray-300` (on dark backgrounds)

#### Dark Mode

- **Primary Text**: `dark:text-white` (headings)
- **Secondary Text**: `dark:text-gray-300` (body text)
- **Muted Text**: `dark:text-gray-400` (captions)

### Border Colors

- **Light Borders**: `border-gray-100` / `border-gray-200`
- **Dark Borders**: `dark:border-gray-700` / `dark:border-gray-600`
- **Hover Borders**: `hover:border-gray-200` / `dark:hover:border-gray-700`
- **Brand Borders**: `border-[#D56649]` (for accent borders)

### Status Colors

- **Success**: `bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300`
- **Error**: `bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300`
- **Info**: Use brand primary color
- **Warning**: Use appropriate yellow/amber shades if needed

---

## Typography

### Font Family

- **Primary Font**: Inter (via `var(--font-inter)`)
  - Applied globally via `font-sans`
  - System fallback: `system-ui, sans-serif`
- **Monospace**: Roboto Mono (if needed for code)

### Font Sizes

Use Tailwind's responsive text utilities with mobile-first approach:

```tsx
// Headings
text-3xl md:text-4xl        // Section titles (h2)
text-4xl sm:text-5xl md:text-6xl lg:text-7xl  // Hero title (h1)
text-xl sm:text-2xl         // Card titles (h3)
text-lg sm:text-xl          // Subheadings

// Body Text
text-base sm:text-lg       // Paragraphs, descriptions
text-sm sm:text-base       // Smaller body text
text-xs sm:text-sm         // Captions, labels
```

### Font Weights

- **Bold (`font-bold`)**: Main headings, emphasis
- **Semibold (`font-semibold`)**: Subheadings, CTAs, navigation
- **Medium (`font-medium`)**: Secondary text, labels
- **Regular**: Default body text

### Line Height

- Default line heights are handled by Tailwind
- Use `leading-tight` for large headings
- Use default for body text

### Text Alignment

- **Center**: Section headers, hero content
- **Left**: Body text, card content (default)
- **Responsive**: `text-center lg:text-left` for hero sections

---

## Spacing & Layout

### Container

All sections use a consistent container pattern:

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* Content */}</div>
```

### Section Padding

Standard section padding follows this pattern:

```tsx
// Standard sections
className = "py-12 sm:py-16 lg:py-20";

// Hero section (with top padding for header)
className = "pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20";
```

### Grid Spacing

- **Gap between items**: `gap-6 sm:gap-8` (standard)
- **Gap in forms**: `space-y-6` (vertical)
- **Gap in lists**: `space-y-3` or `space-y-4`

### Responsive Grids

```tsx
// Standard 3-column grid
grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8

// 2-column grid
grid sm:grid-cols-2 gap-6 sm:gap-8

// 4-column grid (stats, etc.)
grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8
```

### Max Width

- **Section content**: `max-w-3xl mx-auto` (text content)
- **Wider content**: `max-w-4xl mx-auto`
- **Full width**: No max-width constraint

---

## Component Patterns

### Buttons

#### Primary Button (CTA)

```tsx
<Link
  href="/#contact"
  className="bg-[#D56649] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c4573b] transition-all hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2 group"
>
  Get Started
  <svg className="h-6 w-6 transform transition-transform group-hover:translate-x-1" />
</Link>
```

**Characteristics:**

- Background: `bg-[#D56649]`
- Hover: `hover:bg-[#c4573b]`
- Shape: `rounded-full`
- Padding: `px-8 py-4` (desktop), adjust for mobile
- Scale on hover: `hover:scale-105`
- Shadow on hover: `hover:shadow-lg`
- Icon animation: `group-hover:translate-x-1`

#### Secondary Button (Outline)

```tsx
<Link className="border-2 border-[#D56649] text-[#D56649] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#D56649]/5 transition-all hover:scale-105 inline-flex items-center justify-center group">
  View Our Work
</Link>
```

#### Tertiary Button (Ghost)

```tsx
<button className="inline-flex items-center px-3 sm:px-4 py-2 rounded-lg bg-[#D56649]/10 text-[#D56649] hover:bg-[#D56649]/20 text-sm sm:text-base font-semibold transition-all duration-200">
  Visit Solution
</button>
```

### Cards

Standard card pattern:

```tsx
<motion.div className="bg-surface-light dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
  {/* Card content */}
</motion.div>
```

**Characteristics:**

- Background: `bg-surface-light dark:bg-gray-800`
- Border radius: `rounded-xl sm:rounded-2xl` (responsive)
- Padding: `p-6 sm:p-8`
- Shadow: `shadow-lg hover:shadow-xl`
- Border: Transparent by default, visible on hover
- Hover effect: Shadow increase, border appears

### Form Inputs

```tsx
<input
  type="text"
  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
    ${
      errors.name
        ? "border-red-300 dark:border-red-700 focus:ring-red-500"
        : "border-gray-200 dark:border-gray-700 focus:ring-[#D56649]"
    } focus:outline-none focus:ring-2 focus:border-transparent`}
/>
```

**Characteristics:**

- Background: `bg-surface-muted dark:bg-gray-800`
- Border: `border-gray-200 dark:border-gray-700`
- Focus ring: `focus:ring-2 focus:ring-[#D56649]`
- Error state: Red border and ring
- Padding: `px-3 sm:px-4 py-2.5 sm:py-3`

### Labels

```tsx
<label className="block text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
  Your Name
</label>
```

### Textarea

Same as input, with:

- `rows={6}` for default height
- `min-h-[150px]` for minimum height
- Character counter positioned absolutely in bottom-right

### Badges/Tags

```tsx
<span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#D56649]/10 text-[#D56649] rounded-full text-xs sm:text-sm font-semibold">
  Category Name
</span>
```

### Section Headers

Standard pattern for all section headers:

```tsx
<motion.div
  className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
    Section <span className="text-[#D56649]">Title</span>
  </h2>
  <p className="text-base sm:text-lg text-brand-secondary/90 dark:text-gray-300 max-w-2xl mx-auto">
    Section description text
  </p>
</motion.div>
```

---

## Animation & Motion

### Framer Motion Usage

All animations use Framer Motion with consistent patterns.

### Entry Animations

#### Fade In from Bottom (Standard)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

#### Fade In with Delay (Staggered)

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

#### Slide In from Side

```tsx
// From left
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}

// From right
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
```

### Hover Animations

#### Scale on Hover

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

#### Lift on Hover

```tsx
<motion.div
  whileHover={{ y: -5 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
```

#### Button Hover

```tsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Continuous Animations

```tsx
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
>
```

### Animation Principles

1. **Viewport-based**: Use `whileInView` for scroll-triggered animations
2. **Once only**: Set `viewport={{ once: true }}` to prevent re-animation
3. **Staggered delays**: Use `delay: index * 0.1` for lists
4. **Spring physics**: Use spring transitions for natural feel
5. **Duration**: 0.5-0.8s for most animations, 0.3s for quick interactions

---

## Dark Mode

### Implementation

- Uses `next-themes` with `class` strategy
- Default theme: `dark`
- System preference: Disabled (`enableSystem={false}`)
- Toggle component: `ThemeToggle` in header

### Color Mapping

Always provide dark mode variants:

```tsx
// Backgrounds
bg-surface-light dark:bg-gray-900
bg-surface-muted dark:bg-gray-900/50

// Text
text-gray-900 dark:text-white
text-gray-700 dark:text-gray-300
text-gray-600 dark:text-gray-400

// Borders
border-gray-200 dark:border-gray-700

// Cards
bg-surface-light dark:bg-gray-800
```

### Transitions

Add smooth color transitions:

```tsx
className = "transition-colors duration-500";
```

### Images in Dark Mode

- SVG illustrations: Use `dark:invert-0` to prevent inversion
- Photos: Adjust opacity or use filters
- Background images: Lower opacity in dark mode

---

## Responsive Design

### Breakpoints

```tsx
xs: '480px'    // Extra small (custom)
sm: '640px'    // Small
md: '768px'    // Medium
lg: '1024px'   // Large
xl: '1280px'   // Extra large
2xl: '1536px'  // 2X Extra large
```

### Mobile-First Approach

Always start with mobile styles, then add larger breakpoints:

```tsx
// Text sizes
text-base sm:text-lg md:text-xl

// Padding
p-4 sm:p-6 md:p-8

// Grid columns
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

// Spacing
gap-4 sm:gap-6 lg:gap-8
```

### Common Patterns

```tsx
// Responsive flex direction
flex-col xs:flex-row

// Responsive text alignment
text-center lg:text-left

// Responsive max-width
max-w-sm xs:max-w-none mx-auto lg:mx-0

// Responsive visibility
hidden md:flex
block md:hidden
```

---

## Accessibility

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<section>` for sections with `id` attributes
- Use `<nav>` for navigation
- Use `<article>` for cards when appropriate
- Use `<form>` for forms

### ARIA Labels

```tsx
// Buttons
aria-label="Toggle menu"
aria-label="Get Started - Contact Us"

// Forms
role="form"
aria-label="Contact form"
aria-required="true"
aria-invalid={errors.email ? "true" : "false"}
aria-describedby={errors.email ? "email-error" : undefined}

// Status messages
role="alert"
role="status"
aria-live="polite"
aria-live="assertive"
```

### Focus States

All interactive elements must have visible focus states:

```tsx
focus:outline-none focus:ring-2 focus:ring-[#D56649] focus:border-transparent
```

### Image Alt Text

- Descriptive alt text for all images
- Use `aria-label` for decorative images with context
- Use `aria-hidden="true"` for purely decorative images

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Use proper tab order
- Provide skip links if needed

---

## Code Conventions

### File Structure

```
app/
  components/
    sections/        # Page sections
    layout/          # Layout components
    common/          # Shared components
  constants/         # Constants and config
  hooks/             # Custom hooks
  utils/             # Utility functions
  styles/            # Style definitions
  types/             # TypeScript types
```

### Component Structure

```tsx
"use client"; // If using client-side features

import { useState } from "react";
import { motion } from "framer-motion";
// Other imports

// Types/interfaces
interface ComponentProps {
  // ...
}

// Constants (if component-specific)
const CONSTANT = "value";

// Component
const ComponentName = () => {
  // Hooks
  const [state, setState] = useState();

  // Handlers
  const handleAction = () => {
    // ...
  };

  // Render
  return (
    <section id="section-name" className="...">
      {/* Content */}
    </section>
  );
};

export default ComponentName;
```

### Naming Conventions

- **Components**: PascalCase (`TeamSection.tsx`)
- **Files**: Match component name
- **Functions**: camelCase (`handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE or camelCase
- **CSS Classes**: Use Tailwind utilities, kebab-case for custom

### TypeScript

- Always type component props
- Use interfaces for object types
- Use `type` for unions and intersections
- Avoid `any`, use `unknown` if necessary

### Import Order

1. React and Next.js
2. Third-party libraries
3. Internal utilities/hooks
4. Types/interfaces
5. Constants
6. Components

---

## Section Structure

### Standard Section Template

```tsx
"use client";

import { motion } from "framer-motion";

const SectionName = () => {
  return (
    <section
      id="section-id"
      className="py-12 sm:py-16 lg:py-20 bg-surface-light dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Section <span className="text-[#D56649]">Title</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary/90 dark:text-gray-300 max-w-2xl mx-auto">
            Section description
          </p>
        </motion.div>

        {/* Section Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Content items */}
        </div>

        {/* Optional: Bottom Decoration */}
        <div className="mt-12 sm:mt-16 lg:mt-20 h-px sm:h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-transparent via-[#D56649] to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default SectionName;
```

### Section Backgrounds

Alternate between:

- `bg-surface-light dark:bg-gray-900` (primary)
- `bg-surface-muted dark:bg-gray-900/50` (alternating)

### Section IDs

Use kebab-case matching navigation:

- `id="home"`
- `id="about"`
- `id="services"`
- `id="portfolio"`
- `id="team"`
- `id="contact"`

---

## Common Patterns

### Smooth Scrolling

```tsx
onClick={(e) => {
  e.preventDefault();
  document.getElementById('section-id')?.scrollIntoView({ behavior: 'smooth' });
}}
```

### Link Hover Underline

```tsx
<Link className="... relative group">
  Link Text
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D56649] transition-all duration-200 group-hover:w-full" />
</Link>
```

### Icon with Hover Animation

```tsx
<svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
```

### Loading States

```tsx
{
  status === "submitting" && (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" />
  );
}
```

### Error Messages

```tsx
{
  errors.field && (
    <p role="alert" className="mt-1 text-sm text-red-500 dark:text-red-400">
      {errors.field}
    </p>
  );
}
```

---

## Quick Reference

### Color Classes

```tsx
// Brand
bg-[#D56649] text-[#D56649] border-[#D56649]
hover:bg-[#c4573b]

// Surfaces
bg-surface-light bg-surface-muted
dark:bg-gray-900 dark:bg-gray-800

// Text
text-gray-900 dark:text-white
text-gray-700 dark:text-gray-300
text-gray-600 dark:text-gray-400
```

### Spacing

```tsx
// Padding
p-4 sm:p-6 md:p-8
px-3 sm:px-4 py-2.5 sm:py-3

// Margins
mb-6 sm:mb-8
mt-12 sm:mt-16 lg:mt-20

// Gaps
gap-4 sm:gap-6 lg:gap-8
space-y-3 space-y-6
```

### Border Radius

```tsx
rounded-lg      // Forms, inputs
rounded-xl sm:rounded-2xl  // Cards
rounded-full    // Buttons, pills
```

### Shadows

```tsx
shadow - md; // Default cards
shadow - lg; // Elevated cards
hover: shadow - xl; // Hover state
```

---

## Best Practices

1. **Consistency**: Always follow existing patterns
2. **Responsive**: Mobile-first, test all breakpoints
3. **Dark Mode**: Always provide dark mode variants
4. **Accessibility**: Use semantic HTML and ARIA labels
5. **Performance**: Use `viewport={{ once: true }}` for scroll animations
6. **DRY**: Extract reusable patterns into components
7. **Type Safety**: Use TypeScript for all components
8. **Animation**: Keep animations subtle and purposeful
9. **Testing**: Test in both light and dark modes
10. **Documentation**: Comment complex logic

---

## Updates & Maintenance

When adding new components or patterns:

1. Follow existing patterns closely
2. Update this document if introducing new patterns
3. Maintain consistency with color, spacing, and animation
4. Test across all breakpoints and themes
5. Ensure accessibility standards are met

---

**Remember**: This is a living document. Update it as patterns evolve, but maintain backward compatibility with existing components.
