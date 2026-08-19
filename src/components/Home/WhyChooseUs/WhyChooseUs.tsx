import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="w-full relative overflow-hidden" style={{ height: 'clamp(480px, 65vw, 780px)' }}>

      {/* Full-width background image */}
      <Image
        src="/AIimage.png"
        alt="Hala Smart Technologies — AI Solutions"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay — left dark, right transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.05) 68%, transparent 100%)',
        }}
      />

      {/* Left-side text overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-8 sm:px-14 md:px-20 lg:px-28" style={{ maxWidth: 640 }}>

          {/* Eyebrow badge */}
          <span className="font-jakarta inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-white/60 mb-5">
            Why Choose Us
          </span>

          {/* Headline — "the Best AI Solutions" locked on one line */}
          <h2 className="font-jakarta font-bold text-white leading-[1.1] tracking-tight mb-6">
            <span className="block" style={{ fontSize: 'clamp(30px, 3.8vw, 62px)' }}>
              We Provide
            </span>
            <span className="block whitespace-nowrap" style={{ fontSize: 'clamp(30px, 3.8vw, 62px)' }}>
              the Best AI Solutions
            </span>
          </h2>

          {/* Sub-copy */}
          <p
            className="font-jakarta text-white/70 leading-relaxed mb-10"
            style={{ fontSize: 'clamp(14px, 1.15vw, 17px)', maxWidth: 440 }}
          >
            At Hala Technology, we combine strategy, creativity, and data-driven execution to help
            businesses grow with confidence — delivering real results and reliable support.
          </p>

          {/* CTA button */}
          <Link
            href="/services"
            className="font-jakarta inline-flex items-center gap-2 font-semibold text-sm md:text-base rounded-full bg-white text-[#111] hover:bg-white/20 hover:text-white border border-transparent hover:border-white/40 transition-all duration-200"
            style={{ padding: '13px 30px' }}
          >
            See more
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

        </div>
      </div>

    </section>
  );
}
