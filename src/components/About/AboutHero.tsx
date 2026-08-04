'use client';

const companyLogos = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/Companies Logos/${i + 1}.png`,
  alt: `Company Logo ${i + 1}`,
}));

export default function AboutHero() {
  return (
    <section className="bg-white text-[#111111] w-full min-h-[90vh] py-20 relative overflow-hidden flex flex-col items-center justify-center pt-[100px]">

      {/* Main Content */}
      <div className="text-center px-4 max-w-4xl mx-auto z-10 mb-12 md:mb-16">
        <h1 className="font-jakarta font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight">
          <span className="font-jakarta font-bold text-[#111111]">Your Trusted</span><br />
          <span>Digital Partner</span>
        </h1>
      </div>

      {/* Logo Marquee */}
      <div className="w-full relative flex flex-col items-center justify-center">
        <p className="font-jakarta text-sm md:text-base text-[#555555] mb-8 font-medium">
          Companies We Work With:
        </p>

        <div className="w-full relative flex items-center overflow-hidden">

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Track 1 */}
          <div className="flex items-center gap-10 md:gap-16 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0">
            {companyLogos.map((logo) => (
              <div key={`first-${logo.id}`} className="flex items-center justify-center px-4 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (duplicate for seamless loop) */}
          <div className="flex items-center gap-10 md:gap-16 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0" aria-hidden="true">
            {companyLogos.map((logo) => (
              <div key={`second-${logo.id}`} className="flex items-center justify-center px-4 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
