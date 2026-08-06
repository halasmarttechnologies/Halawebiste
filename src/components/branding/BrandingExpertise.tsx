import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BrandingExpertise() {
  return (
    <section className="w-full bg-white text-[#111111] pt-8 md:pt-12 pb-24 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* Left Side: Image Container */}
        <div
          className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group border border-black/5"
        >
          <Image
            src="/featureimage.jpg"
            alt="Branding Expertise and Design"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
        </div>

        {/* Right Side: Content */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="font-jakarta text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-8">
            Hala Branding Expertise Built for <span className="eb-garamond italic pr-2 font-normal">Business Growth</span>
          </h2>

          <p className="font-jakarta text-lg md:text-xl text-[#111111]/70 leading-relaxed font-medium mb-10 max-w-[600px]">
            We take the time to understand your mission and turn it into branding that speaks with purpose. Beyond just standing out we help your business build real connections through an identity that people remember. By keeping your brand voice consistent across every platform from logos to websites to packaging we build trust that lasts.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#111111] text-white hover:bg-black px-8 py-4 rounded-full font-jakarta font-semibold text-base">
              Start Your Journey
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-black/5 text-[#111111] px-8 py-4 rounded-full font-jakarta font-semibold text-base border border-[#111111]/20">
              View Our Work
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
