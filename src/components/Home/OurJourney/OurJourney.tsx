'use client';

const logosRow1 = [
  { id: 1,  src: '/Companies Logos/1.png',  alt: 'Company Logo 1' },
  { id: 2,  src: '/Companies Logos/2.png',  alt: 'Company Logo 2' },
  { id: 3,  src: '/Companies Logos/3.png',  alt: 'Company Logo 3' },
  { id: 4,  src: '/Companies Logos/4.png',  alt: 'Company Logo 4' },
  { id: 5,  src: '/Companies Logos/5.png',  alt: 'Company Logo 5' },
  { id: 6,  src: '/Companies Logos/6.png',  alt: 'Company Logo 6' },
  { id: 7,  src: '/Companies Logos/7.png',  alt: 'Company Logo 7' },
  { id: 8,  src: '/Companies Logos/8.png',  alt: 'Company Logo 8' },
  { id: 9,  src: '/Companies Logos/9.png',  alt: 'Company Logo 9' },
  { id: 10, src: '/Companies Logos/10.png', alt: 'Company Logo 10' },
];

const logosRow2 = [
  { id: 11, src: '/Companies Logos/11.png', alt: 'Company Logo 11' },
  { id: 12, src: '/Companies Logos/12.png', alt: 'Company Logo 12' },
  { id: 13, src: '/Companies Logos/13.png', alt: 'Company Logo 13' },
  { id: 14, src: '/Companies Logos/14.png', alt: 'Company Logo 14' },
  { id: 15, src: '/Companies Logos/15.png', alt: 'Company Logo 15' },
  { id: 16, src: '/Companies Logos/16.png', alt: 'Company Logo 16' },
  { id: 17, src: '/Companies Logos/17.png', alt: 'Company Logo 17' },
  { id: 18, src: '/Companies Logos/18.png', alt: 'Company Logo 18' },
  { id: 19, src: '/Companies Logos/19.png', alt: 'Company Logo 19' },
  { id: 20, src: '/Companies Logos/20.png', alt: 'Company Logo 20' },
];

// Repeat 4× so the seam is never visible on any screen size
const row1Repeated = [...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1];
const row2Repeated = [...logosRow2, ...logosRow2, ...logosRow2, ...logosRow2];

export default function OurJourney() {
  return (
    <section className="bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-4 md:pt-6 pb-16 md:pb-24 relative overflow-hidden">

      {/* ── Keyframe animations — plain <style> works in App Router client components ── */}
      <style>{`
        @keyframes oj-scroll-right {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%,  0, 0); }
        }
        @keyframes oj-scroll-left {
          0%   { transform: translate3d(0%,  0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .oj-row-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: oj-scroll-right 70s linear infinite;
        }
        .oj-row-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: oj-scroll-left 70s linear infinite;
        }
      `}</style>

      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">

        {/* Title */}
        <div className="text-center mb-12 md:mb-20 px-4">
          <h2 className="font-jakarta font-bold text-[28px] sm:text-3xl md:text-[36px] leading-[1.3] tracking-tight text-[#171a22]">
            Our Journey of Innovation &amp; Impact
          </h2>
        </div>

        {/* 2-Row Marquee */}
        <div className="w-full relative overflow-hidden flex flex-col py-4 select-none">

          {/* Row 1 — moves RIGHT */}
          <div className="mb-6 md:mb-12 overflow-hidden w-full">
            <div className="oj-row-right">
              {row1Repeated.map((logo, index) => (
                <div
                  key={`r1-${index}`}
                  className="flex items-center justify-center px-6 sm:px-10 md:px-14 py-2 shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="async"
                    className="max-h-10 sm:max-h-14 md:max-h-20 w-auto object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — moves LEFT */}
          <div className="overflow-hidden w-full">
            <div className="oj-row-left">
              {row2Repeated.map((logo, index) => (
                <div
                  key={`r2-${index}`}
                  className="flex items-center justify-center px-6 sm:px-10 md:px-14 py-2 shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="async"
                    className="max-h-10 sm:max-h-14 md:max-h-20 w-auto object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
