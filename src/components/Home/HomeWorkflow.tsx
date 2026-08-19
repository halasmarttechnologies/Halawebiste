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

/* ─── Scroll-driven card stack ─────────────────────────────
   Outer div is tall (100vh + N * 500px).
   Inner sticky panel stays in view.
   Cards are absolute, each starts translateX(110%).
   Scroll progress [i/N → (i+1)/N] slides card i to x=0,
   revealing it on top of the previous (z-index = i+1).
   Previous cards peek out from behind because each card
   is slightly inset (left offset) when settled.
──────────────────────────────────────────────────────────── */

const PEEK      = 32;   // px of previous card visible behind current
const SCROLL_PX = 600;  // px of vertical scroll consumed per card transition

export default memo(function HomeWorkflow() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const outer  = outerRef.current;
    const sticky = stickyRef.current;
    if (!outer || !sticky) return;

    const totalScroll = STEPS.length * SCROLL_PX;

    // Make outer tall enough to drive the full animation
    outer.style.height = `calc(100vh + ${totalScroll}px)`;

    const animate = () => {
      const rect     = outer.getBoundingClientRect();
      const scrolled = -rect.top;                              // px past outer top
      const maxScroll = outer.offsetHeight - window.innerHeight; // total range
      const progress  = Math.min(1, Math.max(0, scrolled / maxScroll)); // 0→1

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Each card's entry window: [i/N … (i+1)/N] of total progress
        const segSize  = 1 / STEPS.length;
        const segStart = i * segSize;
        const segEnd   = (i + 1) * segSize;

        // Local progress for this card (0 = not yet in, 1 = fully arrived)
        const local = Math.min(1, Math.max(0, (progress - segStart) / (segSize)));

        // Cards that haven't arrived yet stay off-screen right
        // Cards that have arrived sit at their stacked offset
        if (local <= 0) {
          // Not yet — stay off-screen right
          card.style.transform = 'translateX(110%)';
          card.style.opacity   = '1';
        } else {
          // Slide in: ease out cubic for silky feel
          const eased = 1 - Math.pow(1 - local, 3);
          // Final x position: card i settles at offset i*PEEK
          // so previous cards peek from behind on the left
          const finalX = i * PEEK;
          const startX = sticky.offsetWidth; // full width to the right
          const currentX = startX + (finalX - startX) * eased;

          card.style.transform = `translateX(${currentX}px)`;
          card.style.opacity   = '1';
        }
      });
    };

    animate(); // sync on mount

    window.addEventListener('scroll', animate, { passive: true });
    window.addEventListener('resize', animate);

    return () => {
      window.removeEventListener('scroll', animate);
      window.removeEventListener('resize', animate);
    };
  }, []);

  return (
    <>
      {/* ────────────── DESKTOP ────────────── */}
      <div ref={outerRef} className="hidden md:block relative" style={{ height: '100vh' }}>

        {/* Sticky viewport-tall panel */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col font-jakarta"
        >

          {/* Header — centered */}
          <div className="text-center px-14 pt-16 pb-10 shrink-0">
            <h2 className="font-bold text-7xl lg:text-[82px] leading-[0.92] text-[#111] tracking-tighter">
              Our workflow
            </h2>
            <p className="mt-4 text-[#555] text-lg font-medium leading-relaxed mx-auto max-w-xl">
              A transparent, human-driven methodology designed to deliver exponential growth.
            </p>
          </div>

          {/* Card stack arena — cards are absolutely positioned here */}
          <div className="flex-1 relative">
            {STEPS.map((step, i) => {
              const pattern = isPattern(i);
              // Each card fills the arena minus the peek strips to its left
              // so you can always see the left edge of cards behind it
              const cardLeft = i * PEEK;

              return (
                <div
                  key={step.num}
                  ref={el => { cardRefs.current[i] = el; }}
                  className="absolute top-0 bottom-0 flex flex-col"
                  style={{
                    // Cards occupy from their peek offset to the right edge
                    left: cardLeft,
                    right: 0,
                    zIndex: i + 1,
                    willChange: 'transform',
                    transform: 'translateX(110%)', // start off-screen right
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.10)' : 'none',
                    ...(pattern
                      ? {
                          backgroundImage: 'url(/patttren.png)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : { backgroundColor: '#fff' }),
                  }}
                >
                  {/* Dark scrim for pattern cards */}
                  <div
                    className="flex flex-col h-full p-10 lg:p-12 relative"
                    style={pattern ? { backgroundColor: 'rgba(0,0,0,0.28)' } : {}}
                  >
                    {/* Dot — top right */}
                    <span
                      className="absolute rounded-full"
                      style={{
                        width: 10, height: 10, top: 36, right: 36,
                        backgroundColor: pattern ? 'rgba(255,255,255,0.6)' : '#222',
                      }}
                    />

                    {/* Step label */}
                    <span
                      className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5 block"
                      style={{ color: pattern ? 'rgba(255,255,255,0.55)' : '#aaa' }}
                    >
                      Step {step.num}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-bold leading-tight tracking-tight mb-5"
                      style={{
                        fontSize: 'clamp(24px, 2.4vw, 34px)',
                        maxWidth: 500,
                        color: pattern ? '#fff' : '#111',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: 14,
                        maxWidth: 480,
                        color: pattern ? 'rgba(255,255,255,0.78)' : '#555',
                      }}
                    >
                      {step.desc}
                    </p>

                    {/* Footer meta row */}
                    <div
                      className="mt-auto flex items-center justify-between"
                      style={{
                        paddingTop: 24,
                        borderTop: `1px solid ${pattern ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.07)'}`,
                      }}
                    >
                      <span
                        className="text-xs font-semibold tracking-wide"
                        style={{ color: pattern ? 'rgba(255,255,255,0.65)' : '#666' }}
                      >
                        Growth
                      </span>
                      <span
                        className="text-xs font-medium flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
                        style={{ color: pattern ? '#fff' : '#111' }}
                      >
                        Learn more <span className="text-sm leading-none">›</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom strip */}
          <div className="shrink-0 h-6 bg-white" />
        </div>
      </div>

      {/* ────────────── MOBILE ────────────── */}
      <section className="md:hidden bg-white font-jakarta px-6 pt-14 pb-12">
        <h2 className="font-bold text-5xl leading-[0.95] text-center text-[#111] tracking-tighter mb-4">
          Our workflow
        </h2>
        <p className="text-[#555] text-base font-medium text-center max-w-md mx-auto leading-relaxed mb-10">
          A transparent, human-driven methodology designed to deliver exponential growth.
        </p>
        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => {
            const pattern = isPattern(i);
            return (
              <div
                key={step.num}
                style={{
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  ...(pattern
                    ? { backgroundImage: 'url(/patttren.png)', backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: '#fff' }),
                }}
              >
                <div
                  className="p-7 relative"
                  style={pattern ? { backgroundColor: 'rgba(0,0,0,0.30)' } : {}}
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3 block"
                    style={{ color: pattern ? 'rgba(255,255,255,0.55)' : '#aaa' }}
                  >
                    Step {step.num}
                  </span>
                  <h3
                    className="font-bold text-xl leading-snug tracking-tight mb-3"
                    style={{ color: pattern ? '#fff' : '#111' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: pattern ? 'rgba(255,255,255,0.75)' : '#555' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
});
