'use client';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  hasButton: boolean;
  initials: string;
}

export default function Testimonials({ straightBottomCorners = false }: { straightBottomCorners?: boolean } = {}) {
  const testimonials = [
    {
      id: 1,
      quote: "At Hala, I'm trusted to lead meaningful work that's both personal and impactful. It's not just about fixing things, it's about creating a thoughtful, human experience. Everyone, including leadership, rolls up their sleeves, and my voice genuinely matters. It's rare to feel this much ownership and still feel so seen.",
      name: "Sam Y.",
      title: "Founding Technical CX & Support Ops",
      hasButton: false,
      initials: "SY"
    },
    {
      id: 2,
      quote: "Managers only see performance; leaders earn the truth. The best way to cross that line? Caring.",
      name: "Dan M.",
      title: "CMO",
      hasButton: true,
      initials: "DM"
    },
    {
      id: 3,
      quote: "Working at Hala has been one of the most engaging and gratifying experiences of my life. We are at the forefront of a new era of computer interaction, but in a human-centered way - focused on making peoples' lives better.",
      name: "Ethan C.",
      title: "Product Engineering Lead",
      hasButton: false,
      initials: "EC"
    },
    {
      id: 4,
      quote: "At Hala, design has a seat at the table. I get to shape the brand from the ground up, from visual identity to storytelling and collaborate with a team that truly values creativity, clarity, and momentum. It's exciting to work on something that feels both ambitious and deeply human.",
      name: "Kim F.",
      title: "Head of Design - Marketing",
      hasButton: false,
      initials: "KF"
    },
    {
      id: 5,
      quote: "At Hala, I'm trusted to lead meaningful work that's both personal and impactful. It's not just about fixing things, it's about creating a thoughtful, human experience. Everyone, including leadership, rolls up their sleeves, and my voice genuinely matters.",
      name: "Sam Y.",
      title: "Founding Technical CX & Support Ops",
      hasButton: false,
      initials: "SY"
    },
    {
      id: 6,
      quote: "Managers only see performance; leaders earn the truth. The best way to cross that line? Caring.",
      name: "Dan M.",
      title: "CMO",
      hasButton: true,
      initials: "DM"
    },
    {
      id: 7,
      quote: "Working at Hala has been one of the most engaging and gratifying experiences of my life. We are at the forefront of a new era of computer interaction, but in a human-centered way - focused on making peoples' lives better.",
      name: "Ethan C.",
      title: "Product Engineering Lead",
      hasButton: false,
      initials: "EC"
    },
  ];

  return (
    <section className={`bg-[#111111] text-white w-full py-16 md:py-20 relative overflow-hidden flex flex-col items-center rounded-t-[40px] sm:rounded-t-[60px] ${straightBottomCorners ? 'rounded-b-none' : 'rounded-b-[40px] sm:rounded-b-[60px]'}`}>

      {/* Title Area */}
      <div className="relative text-center mb-16 md:mb-20 z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <h2 className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight relative z-10 px-4 text-center">
          <span className="block mb-2 text-[#cccccc] text-sm md:text-base tracking-[0.3em] font-semibold uppercase">What Our Clients Say</span>
          <span className="eb-garamond italic font-normal">Our</span> Testimonials
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="w-full relative flex items-end overflow-hidden pb-4">

        {/* Fade edges removed */}

        {/* Track 1 */}
        <div className="flex items-end gap-4 md:gap-6 px-3 md:px-4 animate-marquee whitespace-normal min-w-max shrink-0">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`first-${t.id}-${idx}`} {...t} />
          ))}
        </div>

        {/* Track 2 */}
        <div className="flex items-end gap-4 md:gap-6 px-3 md:px-4 animate-marquee whitespace-normal min-w-max shrink-0" aria-hidden="true">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`second-${t.id}-${idx}`} {...t} />
          ))}
        </div>

      </div>

    </section>
  );
}

function TestimonialCard({ quote, name, title, hasButton, initials }: TestimonialCardProps) {
  return (
    <div className="bg-white text-[#111111] rounded-[24px] md:rounded-[32px] p-5 sm:p-6 md:p-8 w-[240px] sm:w-[280px] md:w-[320px] flex flex-col items-center text-center shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)] cursor-grab active:cursor-grabbing relative overflow-hidden">

      {/* Avatar */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#007FFF] text-white rounded-full flex items-center justify-center font-bold text-[11px] sm:text-sm md:text-base font-jakarta mb-4 sm:mb-5 shadow-md shadow-[#007FFF]/20">
        {initials}
      </div>

      {/* Quote */}
      <p className="font-jakarta text-[11px] sm:text-xs md:text-[13.5px] leading-relaxed font-medium text-[#333333] mb-5 sm:mb-6 flex-grow">
        {quote}
      </p>

      {/* Details Area */}
      <div className="mt-auto flex flex-col items-center space-y-2 sm:space-y-3 w-full">

        {/* Name & Title */}
        <div className="space-y-0.5 sm:space-y-1">
          <h4 className="font-jakarta text-[10px] sm:text-[11px] md:text-xs font-bold text-[#111111] tracking-wide uppercase">
            {name}
          </h4>
          <p className="font-jakarta text-[8px] sm:text-[9px] md:text-[10px] font-medium text-[#555555] uppercase tracking-wider">
            {title}
          </p>
        </div>

        {/* Optional Button */}
        {hasButton && (
          <button className="mt-2 py-1.5 sm:py-2 px-5 sm:px-6 rounded-full border-[1.5px] border-[#111111] text-[9px] sm:text-[11px] font-bold tracking-wide uppercase hover:bg-[#111111] hover:text-white transition-colors duration-200 w-fit">
            Read more
          </button>
        )}
      </div>

    </div>
  );
}
