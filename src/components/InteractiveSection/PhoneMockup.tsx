'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const MESSAGES = [
  { side: 'right', text: 'Hi Hala! Need help scaling my business online.' },
  { side: 'left',  text: "We'd love to help! What's your main goal?" },
  { side: 'right', text: 'More sales and better brand visibility.' },
  { side: 'left',  text: "Perfect. Let's build a strategy together!" },
] as const;

export default function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end center'] });
  const yOffset = useTransform(scrollYProgress, [0, 1], [400, 0]);

  return (
    <div ref={containerRef} className="relative z-10 w-full max-w-[420px] mx-auto lg:mr-0 flex justify-center lg:justify-end pb-12 pt-16 md:pt-24 h-full">
      <motion.div
        style={{ y: yOffset }}
        className="relative w-[340px] sm:w-[380px] lg:w-[400px] h-[480px] sm:h-[520px] lg:h-[540px]"
      >
        {/* Side Buttons */}
        <div className="absolute top-[90px] -left-[2px] w-[4px] h-[22px] bg-[#333] rounded-l-md" />
        <div className="absolute top-[130px] -left-[2px] w-[4px] h-[44px] bg-[#333] rounded-l-md" />
        <div className="absolute top-[185px] -left-[2px] w-[4px] h-[44px] bg-[#333] rounded-l-md" />
        <div className="absolute top-[150px] -right-[2px] w-[4px] h-[60px] bg-[#333] rounded-r-md" />

        {/* Frame */}
        <div className="w-full h-full rounded-[44px] sm:rounded-[52px] border-[6px] sm:border-[8px] border-[#444] shadow-2xl relative bg-black z-10 p-[1.5px] sm:p-[2px]">
          {/* Screen */}
          <div className="w-full h-full bg-[#1a1a1a] rounded-[36px] sm:rounded-[42px] border-[4px] sm:border-[6px] border-black relative overflow-hidden flex flex-col">

            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[95px] sm:w-[110px] h-[28px] sm:h-[30px] bg-black rounded-full z-50 flex items-center justify-end px-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border border-[#222]" />
            </div>

            {/* Logo */}
            <div className="flex justify-center pt-14 pb-5">
              <Image src="/hala-logo/halalogo.png" alt="Hala Logo" width={80} height={26} className="h-7 w-auto object-contain brightness-0 invert opacity-90" style={{ width: 'auto' }} priority />
            </div>

            {/* Chat */}
            <div className="flex flex-col gap-4 px-6 pb-8">
              {MESSAGES.map(({ side, text }, i) => (
                <div key={i} className={`flex ${side === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`text-sm px-5 py-3 max-w-[85%] leading-relaxed ${
                    side === 'right'
                      ? 'bg-[#2a2a2a] text-[#e0e0e0] rounded-[20px] rounded-tr-sm'
                      : 'bg-[#333] text-white rounded-[20px] rounded-tl-sm'
                  }`}>
                    {text}
                  </div>
                </div>
              ))}

              {/* Input */}
              <div className="mt-4 bg-[#222] rounded-full px-5 py-4 border border-[#333]">
                <span className="text-[#555] text-sm">Message...</span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
