'use client';

import { memo } from 'react';
import { ArrowRight } from 'lucide-react';

/* ─── Content ────────────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We deep-dive into your market, competitors, and audience data to uncover your biggest growth opportunities.',
  },
  {
    num: '02',
    title: 'Strategy & Roadmap',
    desc: 'A tailored channel-by-channel growth blueprint with clear KPIs, timelines, and targeting definitions.',
  },
  {
    num: '03',
    title: 'Execution & Launch',
    desc: 'High-converting ads, landing pages, and funnels crafted by our team and deployed with precision.',
  },
  {
    num: '04',
    title: 'Continuous Optimization',
    desc: 'Real-time bid adjustments, copy variations, and targeting refinements to squeeze every dirham of value.',
  },
  {
    num: '05',
    title: 'Reporting & Scaling',
    desc: 'Transparent ROI dashboards and strategic scaling on your top-performing channels for compounding growth.',
  },
];

const CALLOUTS = [
  {
    bold: 'Achieve instant market visibility',
    rest: ' with a data-driven discovery process and precise audience targeting across every channel.',
  },
  {
    bold: 'Convert attention into revenue',
    rest: ' through high-converting campaigns, landing pages, and strategic execution.',
  },
  {
    bold: 'Maximize ROI continuously',
    rest: ' with smart bid adjustments, A/B testing, and transparent growth reporting.',
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default memo(function HomeWorkflow() {
  return (
    <section className="font-jakarta bg-white text-[#111111] pt-12 md:pt-16 pb-16 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header (unchanged) ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <div className="bg-[#111111] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Our Workflow
          </div>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-[#111111] tracking-tight mb-4 sm:mb-5 max-w-3xl">
            How We Deliver Exponential Growth.
          </h2>
          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            A transparent, human-driven methodology designed to elevate your brand and turn audience attention into measurable revenue.
          </p>
        </div>

        {/* ── Desktop: 5 step cards ── */}
        <div className="hidden md:flex items-stretch mb-16">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center flex-1 min-w-0">

              {/* Card */}
              <div className="flex-1 min-w-0 h-full relative bg-white border border-[#E5E7EB] rounded-2xl p-5 lg:p-6 overflow-hidden">

                {/* Ghost large number — decorative */}
                <span className="absolute -bottom-3 -right-1 text-[72px] lg:text-[80px] font-black leading-none select-none pointer-events-none"
                      style={{ color: 'rgba(0,0,0,0.04)' }}>
                  {step.num}
                </span>

                {/* Step badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#111111] shrink-0" />
                  <span className="text-[10px] font-bold text-[#111111] tracking-[0.15em] uppercase">
                    Step {step.num}
                  </span>
                </div>

                {/* Blue accent bar */}
                <div className="w-8 h-[3px] bg-[#111111] rounded-full mb-4" />

                {/* Title */}
                <h3 className="font-bold text-[#111] text-[15px] lg:text-base leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] text-[12px] lg:text-[13px] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow connector */}
              {i < STEPS.length - 1 && (
                <div className="w-6 shrink-0 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-[#111111]/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Mobile: vertical numbered list ── */}
        <div className="md:hidden flex flex-col mb-12">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              {/* Track */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center shrink-0">
                  <span className="text-white text-[11px] font-bold">{step.num}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 min-h-[40px] bg-[#111111]/15 my-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1.5">
                <h3 className="font-bold text-[#111] text-base leading-snug mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom 3-column callouts ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 border-t border-[#E5E7EB] pt-6 md:pt-8">
          {CALLOUTS.map((c, i) => (
            <p key={i} className="text-[#333] text-sm leading-relaxed">
              <span className="font-bold">{c.bold}</span>
              {c.rest}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
});
