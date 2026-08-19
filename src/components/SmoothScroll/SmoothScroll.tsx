'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll — Global Lenis smooth-scroll provider.
 *
 * • One single Lenis instance for the entire app.
 * • Integrates with GSAP ScrollTrigger if GSAP is present.
 * • Respects prefers-reduced-motion: disables smooth scroll for users who
 *   have that accessibility setting enabled.
 * • Does NOT lock body scroll, does NOT break modals / dropdowns /
 *   nested scrollable elements.
 * • Cleans up the instance on unmount (Next.js fast-refresh safe).
 */
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect the user's OS-level reduced-motion preference.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Don't initialize Lenis — native scroll is already accessible.
      return;
    }

    // ── Initialize Lenis ──────────────────────────────────────────────
    const lenis = new Lenis({
      // Duration (seconds) of momentum. Lower = snappier, higher = silkier.
      duration: 1.2,
      // Easing function — classic expo-out gives a premium deceleration feel.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Smooth wheel & touch on all devices.
      smoothWheel: true,
      // Use the document (window) as the scroll root — do NOT pass a wrapper
      // element so nested scrollable containers keep their own native scroll.
      // orientation: 'vertical' is the default, no need to set it.
    });

    lenisRef.current = lenis;

    // Expose the instance globally so individual components (e.g. GSAP
    // ScrollTrigger wrappers) can call lenis.on('scroll', ...) if needed.
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    // ── GSAP ScrollTrigger integration ───────────────────────────────
    // Lazily check for GSAP + ScrollTrigger so this file has zero hard
    // dependency on gsap (tree-shaking friendly).
    let scrollTriggerConnected = false;

    const connectScrollTrigger = async () => {
      try {
        const gsapModule = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        const gsap = gsapModule.default ?? gsapModule;

        gsap.registerPlugin(ScrollTrigger);

        // Tell ScrollTrigger to use Lenis's scroll position instead of
        // window.scrollY so all scroll-triggered animations stay in sync.
        lenis.on('scroll', ScrollTrigger.update);

        // Drive ScrollTrigger's internal ticker with Lenis's rAF loop so
        // there's only ONE animation loop per frame.
        gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });

        // Disable GSAP's own lag-smoothing — Lenis already handles smoothing.
        gsap.ticker.lagSmoothing(0);

        scrollTriggerConnected = true;
      } catch {
        // GSAP / ScrollTrigger not available — Lenis runs in standalone mode.
      }
    };

    connectScrollTrigger();

    // ── rAF loop (used ONLY when GSAP ticker is NOT driving Lenis) ───
    // We start the standalone loop but it will be short-circuited once
    // GSAP takes over (connectScrollTrigger sets scrollTriggerConnected).
    const raf = (time: number) => {
      if (!scrollTriggerConnected) {
        lenis.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // ── Anchor-link support ───────────────────────────────────────────
    // Intercept clicks on hash links and use lenis.scrollTo() so the
    // smooth scroll continues to work for in-page navigation.
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;

      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      lenis.scrollTo(el as HTMLElement, {
        // Account for the fixed navbar height (80 px as per scroll-padding-top).
        offset: -80,
        duration: 1.2,
      });
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    // ── Cleanup ───────────────────────────────────────────────────────
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // This component renders nothing — it's a pure effect provider.
  return null;
}
