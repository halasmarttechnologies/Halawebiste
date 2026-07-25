# Architecture Documentation

## Overview

**Hala Technology** is a high-performance, responsive web application for a digital marketing and web development agency based in Dubai. Built on **Next.js 15** with the **App Router**, **React 19**, and **Tailwind CSS v4**, the application emphasizes visual excellence, fast page loads via component code-splitting, and comprehensive SEO optimization.

---

## Technical Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server-side rendering (SSR), static site generation (SSG), and route management |
| **View Layer** | React 19 | Component-based UI architecture |
| **Styling** | Tailwind CSS v4 | Utility-first CSS engine with custom `@theme` tokens and CSS variables |
| **Typography** | `next/font/google` | Font optimization for Inter, Poppins, and EB Garamond |
| **Animations** | Framer Motion & GSAP | Micro-interactions, dynamic transitions, and scroll animations |
| **Iconography** | Lucide React & React Icons | Vector UI icons |
| **Language** | TypeScript 6.0 | End-to-end type safety |

---

## Directory Structure

```
Hala/
├── public/                     # Static media assets (logos, images, icons)
├── src/
│   ├── app/                    # Next.app Router hierarchy
│   │   ├── layout.tsx          # Root layout, fonts, and global metadata
│   │   ├── globals.css         # Theme tokens, font definitions, base styles & keyframes
│   │   ├── page.tsx            # Home Page route
│   │   ├── sitemap.ts          # Automated XML sitemap generator
│   │   ├── about/              # About Us page route
│   │   ├── website-development/# Web Development service page route
│   │   └── branding/           # Branding service page route & sub-routes
│   │       ├── content-creation/
│   │       ├── graphic-design/
│   │       └── video-editing/
│   └── components/             # Reusable UI component modules
│       ├── Navbar/             # Main responsive header with multi-level dropdowns
│       ├── Home/               # Homepage-specific section blocks
│       ├── WebsiteDevelopment/ # Web Development landing page sections
│       ├── branding/           # Branding landing page sections
│       ├── About/              # About page section blocks
│       └── InteractiveSection/ # Shared dynamic client interaction blocks
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind fallback / extended setup
├── postcss.config.js           # PostCSS plugin pipeline
└── package.json                # Project dependencies and script commands
```

---

## System Architecture & Patterns

### 1. App Router & Page Composition
- **Layout Management**: Root layout (`src/app/layout.tsx`) establishes HTML/Body structure, global font variables (`--font-inter`, `--font-poppins`), and site-wide metadata (OpenGraph, Twitter Cards, robots directives).
- **Dynamic Imports**: Heavy client-side section components (e.g., Services, Case Studies, Testimonials) are dynamically imported using Next.js `dynamic()` to split bundles and improve initial page paint performance.

### 2. Design System & Styling Architecture
- **Tailwind CSS v4 Configuration**: Configured in `src/app/globals.css` using `@theme` and custom CSS variable tokens:
  - `--color-brand-dark`: `#111111`
  - `--color-brand-cream`: `#f5f5e4`
  - `--color-brand-muted`: `#555555`
  - `--color-brand-faint`: `#888888`
- **Typography Tokens**:
  - Sans: Inter (`var(--font-inter)`)
  - Display/Headings: Poppins (`var(--font-poppins)`)
  - Accent/Serif: EB Garamond (`'EB Garamond', serif`)
- **Keyframe Animations**: Custom keyframe marquees (`marquee`, `marquee-reverse`) embedded directly into theme definitions for seamless client logos and testimonial tickers.

### 3. Component Taxonomy & Navigation
- **Global Navigation (`Navbar.tsx`)**:
  - Sticky glassmorphic bar (`bg-white/65 backdrop-blur-lg` on scroll).
  - Multilevel dropdowns for Services (Branding, Web Development, Digital Marketing, AI Agent, WhatsApp Automation).
  - Responsive drawer for mobile breakpoints (`md:hidden`).
- **Section Modules**: Self-contained component folders (`Home/`, `WebsiteDevelopment/`, `branding/`, `About/`) containing localized UI, visuals, and interactive widgets.

### 4. SEO & Metadata Strategy
- Every page exports route-specific `Metadata` objects containing title templates, detailed descriptions, OpenGraph attributes, canonical links, and social card configurations.
- `sitemap.ts` generates structured search engine indexing URLs.

---

## Build & Quality Assurance

- **Linting**: ESLint 9 configured with `eslint-config-next` and Prettier rules.
- **Type Checking**: TypeScript strict mode enabled via `tsconfig.json` (`npx tsc --noEmit`).
