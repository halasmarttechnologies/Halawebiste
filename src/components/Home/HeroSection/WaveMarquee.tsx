'use client';

import { useEffect, useRef } from 'react';

const TEXT = Array(10).fill(
  'GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • '
).join(' ');

export default function WaveMarquee() {
  const mobileRef  = useRef<SVGTextPathElement>(null);
  const desktopRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    // Speed in % per frame at 60 fps
    // Mobile:  -100 % in ~25 s  →  100/(25×60)  ≈ 0.0667 % / frame
    // Desktop: -100 % in ~40 s  →  100/(40×60)  ≈ 0.0417 % / frame
    let mobileOffset  = 0;
    let desktopOffset = 0;
    let rafId: number;

    const tick = () => {
      mobileOffset  -= 0.0667;
      desktopOffset -= 0.0417;
      if (mobileOffset  <= -100) mobileOffset  = 0;
      if (desktopOffset <= -100) desktopOffset = 0;

      mobileRef.current?.setAttribute('startOffset',  `${mobileOffset}%`);
      desktopRef.current?.setAttribute('startOffset', `${desktopOffset}%`);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {/* ── Mobile: wavy curve ── */}
      <div className="absolute md:hidden w-full left-0 right-0 h-[140px] z-10 pointer-events-none select-none overflow-hidden -bottom-2">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 140"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavyTextPathMobileHome"
            d="M -50 20 Q 200 140 450 20"
            fill="none"
            stroke="transparent"
          />
          <text className="font-jakarta text-[11px] font-semibold tracking-[0.18em] uppercase fill-white opacity-40">
            <textPath ref={mobileRef} href="#wavyTextPathMobileHome" startOffset="0%">
              {TEXT}
            </textPath>
          </text>
        </svg>
      </div>

      {/* ── Desktop: wider wavy curve ── */}
      <div className="hidden md:block absolute w-full left-1/2 -translate-x-1/2 h-[300px] z-10 pointer-events-none select-none overflow-hidden -bottom-4">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavyTextPathDesktopHome"
            d="M -200 50 Q 720 400 1640 50"
            fill="none"
            stroke="transparent"
          />
          <text className="font-jakarta text-[11px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
            <textPath ref={desktopRef} href="#wavyTextPathDesktopHome" startOffset="0%">
              {TEXT}
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}
