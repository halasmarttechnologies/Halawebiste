# Project Sources & References

This document records all third-party libraries, frameworks, font assets, icons, tools, and technical specifications utilized in the **Hala Technology** website repository.

---

## 1. Core Frameworks & Runtime

| Resource | Version | Purpose | Link / Source |
| :--- | :--- | :--- | :--- |
| **Next.js** | `^15.3.3` | App Router framework, SSR, SSG, dynamic imports | [nextjs.org](https://nextjs.org/) |
| **React** | `^19.2.7` | UI library & component runtime | [react.dev](https://react.dev/) |
| **React DOM** | `^19.2.7` | DOM rendering engine for React | [react.dev](https://react.dev/) |
| **Node.js / npm** | Node.js v18+ | Runtime environment & package manager | [nodejs.org](https://nodejs.org/) |

---

## 2. Styling, Design System & Typography

| Resource | Version | Purpose | Link / Source |
| :--- | :--- | :--- | :--- |
| **Tailwind CSS** | `^4.3.1` | Utility-first CSS engine with inline `@theme` tokens | [tailwindcss.com](https://tailwindcss.com/) |
| **@tailwindcss/postcss** | `^4.3.1` | PostCSS plugin adapter for Tailwind v4 | [tailwindcss.com](https://tailwindcss.com/) |
| **PostCSS** | `^8.5.15` | CSS transformation engine | [postcss.org](https://postcss.org/) |
| **Autoprefixer** | `^10.5.1` | Vendor prefix automation for cross-browser CSS | [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer) |
| **Inter Font** | Google Fonts | Primary body & interface font (`--font-inter`) | [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |
| **Poppins Font** | Google Fonts | Headings & branding display font (`--font-poppins`) | [fonts.google.com/specimen/Poppins](https://fonts.google.com/specimen/Poppins) |
| **EB Garamond Font**| Google Fonts | Italicized elegant accent serif font (`EB Garamond`) | [fonts.google.com/specimen/EB+Garamond](https://fonts.google.com/specimen/EB+Garamond) |

---

## 3. Animation & Motion Graphics

| Resource | Version | Purpose | Link / Source |
| :--- | :--- | :--- | :--- |
| **GSAP** | `^3.15.0` | Professional grade animation engine | [greensock.com/gsap](https://greensock.com/gsap/) |
| **@gsap/react** | `^2.1.2` | React hooks & context wrappers for GSAP | [greensock.com/react](https://greensock.com/react/) |
| **Framer Motion** | `^12.42.0` | Motion component library for layout & UI transitions | [framer.com/motion](https://framer.com/motion/) |

---

## 4. UI Components & Iconography

| Resource | Version | Purpose | Link / Source |
| :--- | :--- | :--- | :--- |
| **Lucide React** | `^1.21.0` | Modern vector icon set | [lucide.dev](https://lucide.dev/) |
| **React Icons** | `^5.6.0` | Comprehensive icon library aggregate | [react-icons.github.io](https://react-icons.github.io/react-icons/) |

---

## 5. Development Tools, Code Quality & Types

| Resource | Version | Purpose | Link / Source |
| :--- | :--- | :--- | :--- |
| **TypeScript** | `~6.0.2` | Static type checking and IntelliSense | [typescriptlang.org](https://www.typescriptlang.org/) |
| **@types/node** | `^24.13.2` | TypeScript definitions for Node.js APIs | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) |
| **@types/react** | `^19.2.17` | TypeScript definitions for React | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) |
| **@types/react-dom** | `^19.2.3` | TypeScript definitions for React DOM | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) |
| **ESLint** | `^9.39.4` | Code linting engine | [eslint.org](https://eslint.org/) |
| **eslint-config-next**| `^16.2.9` | Next.js linting rule configuration | [nextjs.org/docs/app/building-your-application/configuring/eslint](https://nextjs.org/docs/app/building-your-application/configuring/eslint) |
| **Prettier** | `^3.8.4` | Opinionated code formatter | [prettier.io](https://prettier.io/) |

---

## 6. Static Media & Brand Assets

- **Logo Assets**: Located in `/public/halalogo.png` (Brand emblem & identity).
- **Public Directory**: Holds static graphic assets, icons, and media files served directly via Next.js static asset routing.
