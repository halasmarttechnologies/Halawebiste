'use client';

import { useRef, useEffect, memo } from 'react';

/* ─── Content ─────────────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We deep-dive into your market, competitors, and audience data to uncover your biggest growth opportunities.',
  },
  {
    num: '02',
    title: 'Strategy & Roadmap',
    desc: 'A tailored channel-by-channel growth blueprint with clear KPIs, timelines, and targeting definitions.',
  },
  {
    num: '03',
    title: 'Execution & Launch',
    desc: 'High-converting ads, landing pages, and funnels crafted by our team and deployed with precision.',
  },
  {
    num: '04',
    title: 'Continuous Optimization',
    desc: 'Real-time bid adjustments, copy variations, and targeting refinements to squeeze every dirham of value.',
  },
  {
    num: '05',
    title: 'Reporting & Scaling',
    desc: 'Transparent ROI dashboards and strategic scaling on your top-performing channels for compounding growth.',
  },
];

const isPattern = (i: number) => i % 2 === 0;

/* ─── Desktop constants ─── */
const PEEK      = 20;
const SCROLL_PX = 500;

/* ═══════════════════════════════════════════════════════════
   CardContent — shared card inner markup
═══════════════════════════════════════════════════════════ */
function CardContent({ step, pattern, mobile = false }: { step: typeof STEPS[0]; pattern: boolean; mobile?: boolean }) {
  return (
    <div
      className="flex flex-col h-full relative"
      style={{
        padding: mobile ? '28px 24px' : 'clamp(32px, 4vw, 48px)',
        ...(pattern ? { backgroundColor: 'rgba(0,0,0,0.28)' } : {}),
      }}
    >
      {/* Dot */}
      <span
        className="absolute rounded-full"
        style={{
          width: 9, height: 9,
          top: mobile ? 24 : 36, right: mobile ? 24 : 36,
          backgroundColor: pattern ? 'rgba(255,255,255,0.55)' : '#222',
        }}
      />

      {/* Step label */}
      <span
        className="font-bold tracking-[0.22em] uppercase mb-4 block"
        style={{ fontSize: 10, color: pattern ? 'rgba(255,255,255,0.5)' : '#bbb' }}
      >
        Step {step.num}
      </span>

      {/* Title */}
      <h3
        className="font-bold leading-tight tracking-tight mb-4"
        style={{
          fontSize: mobile ? 22 : 'clamp(24px, 2.4vw, 34px)',
          maxWidth: mobile ? '95%' : 500,
          color: pattern ? '#fff' : '#111',
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="leading-relaxed"
        style={{
          fontSize: mobile ? 13.5 : 14,
          maxWidth: mobile ? '100%' : 480,
          color: pattern ? 'rgba(255,255,255,0.78)' : '#555',
        }}
      >
        {step.desc}
      </p>

      {/* Footer */}
      <div
        className="mt-auto flex items-center justify-between"
        style={{
          paddingTop: 20,
          borderTop: `1px solid ${pattern ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.07)'}`,
        }}
      >
        <span
          className="font-semibold tracking-wide"
          style={{ fontSize: 11, color: pattern ? 'rgba(255,255,255,0.6)' : '#888' }}
        >
          Growth
        </span>
        <span
          className="font-medium flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontSize: 11, color: pattern ? '#fff' : '#111' }}
        >
          Learn more ›
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Desktop — card STACKING (each card slides in on top)
═══════════════════════════════════════════════════════════ */
function DesktopWorkflow() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const outer  = outerRef.current;
    const sticky = stickyRef.current;
    if (!outer || !sticky) return;

    const totalScroll = STEPS.length * SCROLL_PX;
    outer.style.height = `calc(100vh + ${totalScroll}px)`;

    const animate = () => {
      const rect      = outer.getBoundingClientRect();
      const scrolled  = -rect.top;
      const maxScroll = outer.offsetHeight - window.innerHeight;
      const progress  = Math.min(1, Math.max(0, scrolled / maxScroll));
      const stickyW   = sticky.offsetWidth;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const segSize  = 1 / STEPS.length;
        const local    = Math.min(1, Math.max(0, (progress - i * segSize) / segSize));
        const eased    = 1 - Math.pow(1 - local, 3);
        const finalX   = i * PEEK;
        card.style.transform = local <= 0
          ? `translateX(${stickyW}px)`
          : `translateX(${stickyW + (finalX - stickyW) * eased}px)`;
      });
    };

    animate();
    window.addEventListener('scroll', animate, { passive: true });
    window.addEventListener('resize', animate);
    return () => {
      window.removeEventListener('scroll', animate);
      window.removeEventListener('resize', animate);
    };
  }, []);

  return (
    <div ref={outerRef} className="relative w-full" style={{ height: '100vh' }}>
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col font-jakarta">
        {/* Header */}
        <div className="text-center px-14 pt-20 pb-10 shrink-0">
          <h2 className="font-bold text-7xl lg:text-[82px] leading-[0.92] text-[#111] tracking-tighter">
            Our workflow
          </h2>
          <p className="mt-4 text-[#555] text-lg font-medium leading-relaxed mx-auto max-w-xl">
            A transparent, human-driven methodology designed to deliver exponential growth.
          </p>
        </div>

        {/* Card arena */}
        <div className="flex-1 relative overflow-hidden">
          {STEPS.map((step, i) => {
            const pattern = isPattern(i);
            return (
              <div
                key={step.num}
                ref={el => { cardRefs.current[i] = el; }}
                className="absolute top-0 bottom-0 flex flex-col"
                style={{
                  left: i * PEEK, right: 0,
                  zIndex: i + 1,
                  willChange: 'transform',
                  transform: 'translateX(110vw)',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.10)' : 'none',
                  ...(pattern
                    ? { backgroundImage: 'url(/patttren.png)', backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: '#fff' }),
                }}
              >
                <CardContent step={step} pattern={pattern} />
              </div>
            );
          })}
        </div>
        <div className="shrink-0 h-6 bg-white" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Mobile — card CAROUSEL (one card at a time, slide in/out)
   Previous card exits LEFT, next card enters from RIGHT.
   No overlap. One card fully visible at a time.
═══════════════════════════════════════════════════════════ */
function MobileWorkflow() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const outer  = outerRef.current;
    const sticky = stickyRef.current;
    if (!outer || !sticky) return;

    const totalScroll = STEPS.length * SCROLL_PX;
    outer.style.height = `calc(100vh + ${totalScroll}px)`;

    const N = STEPS.length;

    const animate = () => {
      const rect      = outer.getBoundingClientRect();
      const scrolled  = -rect.top;
      const maxScroll = outer.offsetHeight - window.innerHeight;
      const progress  = Math.min(1, Math.max(0, scrolled / maxScroll));

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Each card i is "centered" (fully visible) at progress = i / (N - 1)
        // Cards to the right (not yet arrived): positive translateX
        // Cards to the left (already passed): negative translateX
        // One card-width spacing between each card
        const center  = N === 1 ? 0 : i / (N - 1);
        const delta   = center - progress;           // positive = right of current, negative = left
        // Map: delta = 1/(N-1) → 100%, delta = -1/(N-1) → -100%
        const span    = N === 1 ? 1 : 1 / (N - 1);
        const rawPct  = (delta / span) * 100;
        const pct     = Math.max(-100, Math.min(100, rawPct));

        // Smooth ease only for the entering card
        card.style.transform = `translateX(${pct}%)`;
      });
    };

    animate();
    window.addEventListener('scroll', animate, { passive: true });
    window.addEventListener('resize', animate);
    return () => {
      window.removeEventListener('scroll', animate);
      window.removeEventListener('resize', animate);
    };
  }, []);

  return (
    <div ref={outerRef} className="relative w-full" style={{ height: '100vh' }}>
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col font-jakarta">
        {/* Header */}
        <div className="text-center px-6 pt-12 pb-6 shrink-0">
          <h2 className="font-bold text-[42px] leading-[0.95] text-[#111] tracking-tighter">
            Our workflow
          </h2>
          <p className="mt-3 text-[#555] text-sm font-medium leading-relaxed max-w-xs mx-auto">
            A transparent, human-driven methodology designed to deliver exponential growth.
          </p>
        </div>

        {/* Scroll progress dots */}
        <div className="flex justify-center gap-1.5 pb-3 shrink-0">
          {STEPS.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#111]/20" />
          ))}
        </div>

        {/* Card carousel viewport */}
        <div className="flex-1 relative overflow-hidden">
          {STEPS.map((step, i) => {
            const pattern = isPattern(i);
            return (
              <div
                key={step.num}
                ref={el => { cardRefs.current[i] = el; }}
                className="absolute top-0 left-0 right-0 bottom-0 flex flex-col"
                style={{
                  willChange: 'transform',
                  transform: `translateX(${i === 0 ? '0%' : '100%'})`,
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  ...(pattern
                    ? { backgroundImage: 'url(/patttren.png)', backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: '#fff' }),
                }}
              >
                <CardContent step={step} pattern={pattern} mobile />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main export — renders the correct version per screen size
═══════════════════════════════════════════════════════════ */
export default memo(function HomeWorkflow() {
  return (
    <>
      <div className="hidden md:block"><DesktopWorkflow /></div>
      <div className="md:hidden"><MobileWorkflow /></div>
    </>
  );
});
