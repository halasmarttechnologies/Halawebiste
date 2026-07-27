'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function TrustedSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 px-6 overflow-hidden rounded-t-[40px] md:rounded-t-[60px] z-20 -mt-8 md:-mt-10">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-left flex flex-col items-start max-w-2xl lg:max-w-none">
          <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.2] mb-6">
            Your Trusted Web Design Company in Dubai & UAE
          </h2>
          
          <p className="font-jakarta text-base sm:text-lg text-[#555555] leading-relaxed mb-6">
            Your website should stand out, just like your business. We design responsive pages that work seamlessly across all devices and help you stay ahead of the competition. Every site we build delivers a smooth user experience, runs flawlessly, and is optimized to rank higher in search results.
          </p>
          
          <p className="font-jakarta text-base sm:text-lg text-[#555555] leading-relaxed mb-10">
            From the first discovery call to the final launch, our team works closely with you to understand your brand, your audience, and your business goals, ensuring every design decision is intentional, informed, and impactful.
          </p>

          <button className="flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] active:scale-[0.98] transition-all duration-200 text-white font-jakarta font-semibold text-base px-8 py-4 rounded-xl">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Image / Placeholder Side */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-[#F4F5F7] flex items-center justify-center">
            {/* Real image if available, else this serves as a beautiful ClickUp-style placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f2f5] to-white flex items-center justify-center">
              <span className="text-[#A3A8B8] font-jakarta font-medium text-lg">Image Placeholder</span>
            </div>
            {/* If the user provides a real image later, they can just swap the src here */}
            {/* <Image src="/your-image.jpg" alt="Trusted Web Design" fill className="object-cover" /> */}
          </div>
        </div>

      </div>
    </section>
  );
}
