'use client';

import { useState } from 'react';
import { Search, Compass, Rocket, Cpu, TrendingUp, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WORKFLOW_STEPS = [
  {
    id: 'audit',
    step: '01',
    title: 'Discovery & Audit',
    subtitle: 'Deep dive into your data & market',
    icon: Search,
    description: 'We analyze your current marketing infrastructure, competitor landscape, and audience demographics to uncover hidden growth levers.',
    mockup: <AuditMockup />,
  },
  {
    id: 'strategy',
    step: '02',
    title: 'Strategy & Roadmap',
    subtitle: 'Tailored blueprint for growth',
    icon: Compass,
    description: 'We construct a channel-by-channel growth strategy with precise KPIs, audience targeting definitions, and human-guided touchpoints.',
    mockup: <StrategyMockup />,
  },
  {
    id: 'execution',
    step: '03',
    title: 'Execution & Launch',
    subtitle: 'High-converting asset deployment',
    icon: Rocket,
    description: 'Our team crafts high-converting ad creatives, landing pages, and marketing funnels, deploying campaigns with precision.',
    mockup: <ExecutionMockup />,
  },
  {
    id: 'optimization',
    step: '04',
    title: 'Continuous Optimization',
    subtitle: 'Real-time performance tuning',
    icon: Cpu,
    description: 'Data analytics and continuous human oversight adjust bidding, copy variations, and targeting to maximize budget efficiency.',
    mockup: <OptimizationMockup />,
  },
  {
    id: 'scale',
    step: '05',
    title: 'Reporting & Scaling',
    subtitle: 'Compounding ROI & growth',
    icon: TrendingUp,
    description: 'We double down on top-performing channels, providing transparent ROI reporting and scaling your brand systematically.',
    mockup: <ScaleMockup />,
  },
];

export default function HomeWorkflow() {
  const [activeStepId, setActiveStepId] = useState(WORKFLOW_STEPS[0].id);

  const activeStepObj = WORKFLOW_STEPS.find((s) => s.id === activeStepId) || WORKFLOW_STEPS[0];

  return (
    <section className="font-jakarta bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Our Workflow
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-[#111111] tracking-tight mb-5 max-w-3xl">
            How We Deliver Exponential Growth.
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            A transparent, human-driven methodology designed to elevate your brand and turn audience attention into measurable revenue.
          </p>
        </div>

        {/* Workflow Main White Card */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] border border-[#E5E7EB] p-4 sm:p-6 md:p-10 shadow-sm">
          
          {/* Desktop Layout: 2 Columns */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Steps Menu (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-3">
              {WORKFLOW_STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = activeStepId === step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? 'bg-white border-[#007FFF] border-2 shadow-md translate-x-1'
                        : 'bg-white text-[#111111] border-[#E5E7EB] hover:border-gray-300 hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                          isActive ? 'bg-[#007FFF] text-white shadow-xs' : 'bg-gray-100 text-[#555555]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold tracking-wider uppercase ${isActive ? 'text-[#007FFF]' : 'text-[#666666]'}`}>
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="font-bold text-base lg:text-lg text-[#111111] tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? 'text-[#007FFF] translate-x-1' : 'text-gray-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Display Card (7 cols) */}
            <div className="md:col-span-7 bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepObj.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full justify-between space-y-6"
                >
                  {/* Step Description Top */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-[#111111] rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">
                        Phase {activeStepObj.step}
                      </span>
                      <span className="text-xs text-[#666666] font-medium">
                        {activeStepObj.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-2">
                      {activeStepObj.title}
                    </h3>
                    <p className="text-[#555555] text-sm lg:text-base leading-relaxed">
                      {activeStepObj.description}
                    </p>
                  </div>

                  {/* Step Display Card */}
                  <div className="w-full bg-white rounded-xl border border-[#E5E7EB] p-4 lg:p-6 overflow-hidden">
                    {activeStepObj.mockup}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile Accordion Layout */}
          <div className="md:hidden flex flex-col space-y-3">
            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStepId === step.id;

              return (
                <div
                  key={step.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isActive ? 'bg-white border-[#007FFF] border-2 shadow-xs' : 'bg-white border-[#E5E7EB]'
                  }`}
                >
                  <button
                    onClick={() => setActiveStepId(isActive ? '' : step.id)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isActive ? 'bg-[#007FFF] text-white' : 'bg-gray-100 text-[#555555]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider block ${isActive ? 'text-[#007FFF]' : 'text-[#666666]'}`}>
                          Step {step.step}
                        </span>
                        <h3 className="font-bold text-[#111111] text-base tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isActive ? 'rotate-90 text-[#007FFF]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-5 overflow-hidden border-t border-gray-100 pt-4"
                      >
                        <p className="text-xs text-[#555555] leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="bg-white rounded-xl border border-[#E5E7EB] p-3 overflow-hidden">
                          {step.mockup}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Clean, Human-crafted Mockup Components (White Aesthetic)
───────────────────────────────────────────────────────────── */

function AuditMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <span className="text-xs font-bold text-[#111111] flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-[#007FFF]" /> Market & Competitor Audit
        </span>
        <span className="text-[10px] font-semibold bg-gray-100 text-[#111111] border border-gray-200 px-2 py-0.5 rounded-full">
          Audit Score: 94/100
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
          <span className="text-[10px] text-gray-500 block font-medium">Audience Reach</span>
          <span className="text-sm font-bold text-[#111111]">142.8K Target</span>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
          <span className="text-[10px] text-gray-500 block font-medium">Growth Gap</span>
          <span className="text-sm font-bold text-[#111111]">+38% Opportunity</span>
        </div>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between text-[11px] text-gray-600 font-medium">
          <span>SEO & Market Opportunity</span>
          <span className="font-bold text-[#111111]">88%</span>
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden border border-gray-200">
          <div className="bg-[#007FFF] h-full rounded-full w-[88%]" />
        </div>
      </div>
    </div>
  );
}

function StrategyMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <span className="text-xs font-bold text-[#111111] flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#007FFF]" /> Growth Blueprint
        </span>
        <span className="text-[10px] font-semibold bg-gray-100 text-[#111111] border border-gray-200 px-2 py-0.5 rounded-full">
          Milestones
        </span>
      </div>
      <div className="space-y-2">
        {[
          { label: 'Phase 1: Search & Content Strategy', status: 'Completed', color: 'bg-green-500' },
          { label: 'Phase 2: Funnel & Social Media Setup', status: 'In Progress', color: 'bg-[#007FFF]' },
          { label: 'Phase 3: Conversion Rate Optimization', status: 'Upcoming', color: 'bg-gray-300' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-2.5 rounded-lg border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`} />
              <span className="text-xs font-semibold text-[#111111]">{item.label}</span>
            </div>
            <span className="text-[10px] text-gray-500 font-medium">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExecutionMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <span className="text-xs font-bold text-[#111111] flex items-center gap-2">
          <Rocket className="w-3.5 h-3.5 text-[#007FFF]" /> Campaign Launchpad
        </span>
        <span className="text-[10px] font-semibold bg-gray-100 text-[#111111] border border-gray-200 px-2 py-0.5 rounded-full">
          Live Deployment
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white p-2.5 rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-500 block font-medium">Active Ads</span>
          <span className="text-xs font-bold text-[#111111]">18 Variants</span>
        </div>
        <div className="bg-white p-2.5 rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-500 block font-medium">Landing Page</span>
          <span className="text-xs font-bold text-[#111111]">99.8% Speed</span>
        </div>
        <div className="bg-white p-2.5 rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-500 block font-medium">Tracking</span>
          <span className="text-xs font-bold text-[#111111]">Verified</span>
        </div>
      </div>
    </div>
  );
}

function OptimizationMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <span className="text-xs font-bold text-[#111111] flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#007FFF]" /> Continuous Optimization
        </span>
        <span className="text-[10px] font-semibold bg-gray-100 text-[#111111] border border-gray-200 px-2 py-0.5 rounded-full">
          Active Tuning
        </span>
      </div>
      <div className="bg-white p-3 rounded-lg border border-gray-200 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-[#111111]">Smart Bid Adjustment</span>
          <span className="text-[#111111] font-bold">-18% CPA</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-[#111111]">Headline A/B Optimization</span>
          <span className="text-[#111111] font-bold">+3.2x CTR</span>
        </div>
      </div>
    </div>
  );
}

function ScaleMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <span className="text-xs font-bold text-[#111111] flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-[#007FFF]" /> ROI & Revenue Scaling
        </span>
        <span className="text-[10px] font-semibold bg-gray-100 text-[#111111] border border-gray-200 px-2 py-0.5 rounded-full">
          Compounding Growth
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-500 block font-medium">Conversion Rate</span>
          <span className="text-base font-bold text-[#111111]">+14.6%</span>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-500 block font-medium">Total Return (ROAS)</span>
          <span className="text-base font-bold text-[#111111]">4.8x</span>
        </div>
      </div>
    </div>
  );
}
