'use client';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    tag: 'Our Vision',
    heading: 'Our Vision',
    body: 'Our vision is to become one of the most trusted and result-oriented digital solution companies in Dubai. Therefore, we are committed to continuous innovation, steady expansion of our capabilities, and the delivery of world-class services that ultimately empower businesses to lead their industry.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    tag: 'Our Mission',
    heading: 'Our Mission',
    body: 'Our mission is to empower brands with cutting-edge digital solutions that drive measurable success. To achieve this, we seamlessly combine creativity, advanced technology, and data-driven strategies to ensure continuous growth and long-term value for our clients.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    tag: 'Free Quote Today',
    heading: 'Get Your Free Quote Today',
    body: 'At Hala Technologies, we provide creative Web Development Services in addition to smart branding and digital marketing strategies. Our goal is to turn your vision into reality with the best technology solutions tailored to your success.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 11 12 6 7 11" />
        <polyline points="17 18 12 13 7 18" />
      </svg>
    ),
  },
];

function StickyCard({
  card,
  index,
  total,
}: {
  card: (typeof cards)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.97, 1, 1 - (total - index - 1) * 0.025]
  );

  const topOffset = 90 + index * 20;

  return (
    <div ref={ref} className="sticky" style={{ top: `${topOffset}px`, zIndex: index + 10 }}>
      <motion.div style={{ scale }} className="w-full">
        <div
          className="w-full p-8 md:p-10 bg-white rounded-[32px] border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-y-1 transition-all duration-300"
        >
          {/* Icon */}
          <div className="mb-5 text-[#555555]">{card.icon}</div>

          {/* Tag */}
          <p className="font-jakarta text-[10px] font-bold tracking-[2.5px] uppercase text-[#555555] mb-3">
            {card.tag}
          </p>

          {/* Heading */}
          <h3 className="font-jakarta font-bold text-2xl md:text-3xl text-[#111111] leading-tight tracking-tight mb-5">
            {card.heading}
          </h3>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-[#111111] mb-5" />

          {/* Body */}
          <p className="font-jakarta text-[#333333] font-medium text-sm md:text-[15px] leading-relaxed max-w-xl">
            {card.body}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutValues() {
  return (
    <section className="bg-white text-[#111111] w-full pt-10 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">

          {/* ── Left sticky column ── */}
          <div className="lg:sticky lg:top-28 self-start">
            {/* Section label */}
            <p className="font-jakarta text-[11px] font-bold tracking-[3px] uppercase text-[#555555] mb-5">
              For Our Valuable Customers
            </p>

            {/* Main heading */}
            <h2 className="font-jakarta font-bold text-4xl sm:text-5xl leading-[1.08] tracking-tight mb-12 text-[#111111]">
              What We{' '}
              <span className="font-jakarta font-bold text-[#111111]">
                Stand For
              </span>
            </h2>

            {/* Card index labels */}
            <div className="flex flex-col border-l-2 border-[#111111] pl-5">
              {cards.map((card, i) => (
                <div
                  key={card.tag}
                  className="py-5 border-b-2 border-[#111111]/10 last:border-b-0"
                >
                  <span className="font-jakarta text-[11px] font-bold tracking-[2px] uppercase text-[#555555]">
                    0{i + 1}
                  </span>
                  <p className="font-jakarta font-bold text-[16px] text-[#111111] mt-1 tracking-tight">
                    {card.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right stacking cards ── */}
          <div className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <StickyCard
                key={card.tag}
                card={card}
                index={index}
                total={cards.length}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
