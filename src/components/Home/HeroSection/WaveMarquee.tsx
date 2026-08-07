// Pure CSS marquee — never pauses on tab switch or browser throttling.
export default function WaveMarquee() {
  const text = 'GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • ';
  // Repeat enough times to fill any screen width without gaps
  const repeated = Array(12).fill(text).join('');

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
          /* GPU-composite — never drops frames */
          will-change: transform;
        }
        @media (min-width: 768px) {
          .marquee-track { animation-duration: 55s; }
        }
      `}</style>

      {/* Marquee band — sits at the bottom of the hero, same position as SVG version */}
      <div
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none select-none overflow-hidden"
        style={{ height: '36px' }}
        aria-hidden="true"
      >
        <div className="marquee-track h-full items-center flex">
          {/* Two identical copies so the seam is invisible */}
          <span className="font-jakarta text-[11px] font-semibold tracking-[0.18em] uppercase text-white opacity-40 whitespace-nowrap px-4">
            {repeated}
          </span>
          <span className="font-jakarta text-[11px] font-semibold tracking-[0.18em] uppercase text-white opacity-40 whitespace-nowrap px-4">
            {repeated}
          </span>
        </div>
      </div>
    </>
  );
}
