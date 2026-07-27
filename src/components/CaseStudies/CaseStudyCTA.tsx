'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseStudyCTA() {
  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col items-center text-center">
          
          {/* Metadata Tag */}
          <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-widest mb-4">
            Start Your Journey
          </span>

          {/* Heading */}
          <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight tracking-tight mb-6 max-w-[800px]">
            Ready to Take the Next Step?
          </h2>

          {/* Description */}
          <p className="font-jakarta text-base md:text-lg text-[#555555] leading-relaxed max-w-[700px] mb-10">
            Let’s make things happen together! Reach out to us and let Hala Technology provide the tailored solutions you need to succeed. Our team is eager to assist you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#007FFF] hover:bg-[#0066CC] text-white px-8 py-3.5 rounded-xl font-jakarta font-medium text-base transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-[#e5e5e5] hover:border-[#cccccc] text-[#111111] px-8 py-3.5 rounded-xl font-jakarta font-medium text-base transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
