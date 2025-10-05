## Overview

A modern, responsive brand landing page built with Vite + React + TypeScript and Tailwind CSS. It includes hero, about, product highlights, process, contact form, and footer sections with minimal scroll-reveal animations.

## Tech Stack

- React 18 + TypeScript (Vite)
- Tailwind CSS utility classes
- Radix UI + shadcn-inspired components (buttons, cards, forms, etc.)
- Lucide React icons
- AOS (Animate On Scroll) for subtle scroll-reveal effects

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

1. Install dependencies:
   - `npm i`
2. Start development server:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## Scripts

- `npm run dev` — start local dev server on port 3000
- `npm run build` — production build to `build/`

## Project Structure

- `index.html` — app entry
- `src/main.tsx` — React bootstrap
- `src/App.tsx` — page composition and AOS init
- `src/components/` — UI sections and primitives
- `src/styles/` — global styles

## Styling & UI

- Tailwind utility classes are used across components
- Reusable UI primitives in `src/components/ui/`
- Update brand colors, fonts, and spacing via classes or Tailwind config if added

## Animations (AOS)

Minimal, accessible scroll-reveal effects are enabled via AOS.

- Installed: `aos`, `@types/aos`
- Initialization: in `src/App.tsx` with `AOS.init({ duration: 900, once: true, offset: 40 })`
- Usage: add `data-aos="fade-up|fade-left|fade-right|zoom-in"` and optional `data-aos-delay="50|100|150"` to elements
- Tune speed globally by changing `duration` or locally by adjusting delays

## Accessibility

- Semantic HTML for sections and headings
- Sufficient color contrast for text and buttons
- Focus styles on interactive elements
- Animations kept subtle; reveal occurs once to reduce motion fatigue

## Performance

- Vite build targets modern browsers (`esnext`)
- Images loaded via `ImageWithFallback` with `object-cover`
- Keep images optimized and sized for layout

## Customization

- Update copy and assets in `src/components/*`
- Modify animations by changing `data-aos` attributes and `AOS.init` options
- Adjust brand styling via Tailwind classes and `globals.css`

## Brand Guidelines (Quick Start)

Use this checklist to align the landing page with your brand.

- Voice & Tone: Friendly, expert, concise. Emphasize craftsmanship and trust.
- Primary Color: Replace `bg-amber-700`/`text-amber-700` with your brand primary.
- Secondary/Neutrals: Ensure contrast on light/dark backgrounds; validate with WCAG AA.
- Typography: Set your brand font via Tailwind or a `<link>` in `index.html`.
- Logo Usage: Swap logo text in `Header` and footer for your SVG/PNG; provide light/dark variants.
- Buttons/CTAs: Keep one primary CTA per section; action-led copy (e.g., “Request Quote”).
- Imagery: Use authentic product/process photos; consistent lighting and color grading.
- Iconography: Keep stroke width consistent (Lucide icons already match the design).
- Components: Prefer existing primitives in `src/components/ui` for a consistent style.
- Micro-interactions: Animations are subtle by default; avoid adding heavy motion.

### Assets to Replace

- Favicon and App Icons: Update in `index.html` and add to `public/` if created.
- Open Graph (OG) Image: Add a 1200×630 image and reference it in meta tags.
- Company Info: Update addresses, phones, and emails in `Footer` and `ContactSection`.

## SEO & Metadata

- Title/Description: Update in `index.html` for accurate brand messaging.
- Canonical URL: Add `<link rel="canonical" href="https://your-domain.com" />` when deployed.
- Open Graph/Twitter Cards: Add meta tags for better sharing previews.
- Sitemap/Robots: Provide `sitemap.xml` and a permissive `robots.txt` if public.

Example meta (add inside `<head>` in `index.html`):

```html
<meta
  name="description"
  content="Premium leather manufacturing for luxury brands. Expert craftsmanship since 1985."
/>
<meta
  property="og:title"
  content="Addict Hawk — Premium Leather Manufacturing"
/>
<meta
  property="og:description"
  content="Trusted partner for luxury leather goods: handbags, automotive, furniture, accessories."
/>
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

## Deployment

- Build with `npm run build` (output in `build/`)
- Deploy the `build/` directory to any static host (Vercel, Netlify, GitHub Pages, etc.)

## Attribution

- Based on the referenced Figma design (see link above)
