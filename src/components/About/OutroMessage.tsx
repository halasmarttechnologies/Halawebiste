import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OutroMessage() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 flex justify-center">
      <div className="max-w-[1000px] w-full bg-white rounded-[32px] border-2 border-[#111111] p-8 md:p-14 lg:p-16 relative shadow-[8px_8px_0px_0px_#111111] md:shadow-[12px_12px_0px_0px_#111111]">
        
        {/* Content Container */}
        <div className="flex flex-col items-center text-center relative z-10">
          
          {/* Title */}
          <h2 className="font-jakarta font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-wide uppercase text-[#111111] mb-6">
            Ready to Take the Next Step?
          </h2>

          {/* Description */}
          <p className="text-[#333333] text-base md:text-lg font-medium max-w-3xl leading-[1.6] mb-10">
            Let’s make things happen together! Reach out to us and let Hala Technology provide the tailored solutions you need to succeed. Our team is eager to assist you.
          </p>

          {/* Contact Button */}
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#007FFF] border border-[#007FFF] rounded-full px-8 py-4 shadow-[2px_2px_0px_0px_#111111] hover:shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-0.5 transition-all">
            <span className="font-jakarta font-bold text-white text-base md:text-lg">
              Contact Us
            </span>
            <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
          </Link>

        </div>
      </div>
    </section>
  );
}
