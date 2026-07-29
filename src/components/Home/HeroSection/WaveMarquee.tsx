// SVG SMIL animations are declarative — fully safe to render server-side.
// No client JS needed for this component.

export default function WaveMarquee() {
  return (
    <>
      {/* Mobile Marquee */}
      <div className="absolute md:hidden w-full left-0 right-0 h-[140px] z-10 pointer-events-none select-none overflow-hidden -bottom-2">
        <svg
          suppressHydrationWarning
          className="w-full h-full [will-change:transform]"
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
            <textPath href="#wavyTextPathMobileHome" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="25s"
                repeatCount="indefinite"
              />
              {Array(8).fill("GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • ").join(' ')}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Desktop Marquee (Wider curve for large screens) */}
      <div className="hidden md:block absolute w-full left-1/2 -translate-x-1/2 h-[300px] z-10 pointer-events-none select-none overflow-hidden -bottom-4">
        <svg
          suppressHydrationWarning
          className="w-full h-full [will-change:transform]"
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
            <textPath href="#wavyTextPathDesktopHome" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="40s"
                repeatCount="indefinite"
              />
              {Array(10).fill("GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • ").join(' ')}
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}
