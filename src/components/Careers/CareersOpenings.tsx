'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase, X, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  formUrl?: string;
}

const POSITIONS: JobPosition[] = [
  {
    id: 'marketing-intern',
    title: 'Marketing Intern',
    department: 'Marketing & Design',
    category: 'Marketing & Design',
    location: 'Dubai, UAE (On-site)',
    type: 'Internship',
    experience: 'Fresher / Student',
    description: 'An exciting opportunity for a motivated marketing enthusiast to learn and grow in a dynamic digital agency environment, focusing on social media, campaigns, and content strategies.',
    responsibilities: [
      'Assist with social media management, content scheduling, and community engagement.',
      'Support the execution of paid advertising campaigns and monitor performance metrics.',
      'Help brainstorm and create engaging content ideas for various marketing channels.',
      'Conduct market research and competitor analysis to identify new opportunities.',
      'Assist in generating monthly marketing reports and organizing campaign assets.',
    ],
    requirements: [
      'Currently enrolled in or recently graduated from a Marketing, Communications, or related program.',
      'Strong passion for digital marketing and social media trends.',
      'Excellent written and verbal communication skills.',
      'Ability to work collaboratively in a fast-paced environment.',
      'Basic knowledge of marketing tools (e.g., Meta Business Suite, Google Analytics) is a plus.',
    ],
    perks: [
      'Gain hands-on experience with real-world marketing campaigns.',
      'Work closely with experienced digital marketing professionals.',
      'Potential to convert to a full-time role based on performance.',
    ],
    formUrl: 'https://forms.clickup.com/90181825437/f/2kzm2wwx-6998/DRWLUKLARL80A3SDAA',
  },
];

const CATEGORIES = ['All Roles', 'Development', 'Marketing & Design', 'Design'];

export default function CareersOpenings() {
  const [activeCategory, setActiveCategory] = useState('All Roles');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedJob]);

  const filteredPositions =
    activeCategory === 'All Roles'
      ? POSITIONS
      : POSITIONS.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white text-[#111111] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="font-jakarta text-xs font-bold text-[#007FFF] uppercase tracking-widest mb-3">
            Open Positions
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
            Current Opportunities <em className="eb-garamond font-normal italic">&amp; Openings</em>
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#555555] max-w-2xl font-normal leading-relaxed">
            Explore our open roles below. If your specialty isn&apos;t listed, feel free to reach out to us directly with your portfolio or CV.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 border-b border-[#e5e5e5] no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-jakarta font-semibold transition-all whitespace-nowrap cursor-pointer
                ${activeCategory === category
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#f4f4f4] text-[#555555] hover:bg-[#e8e8e8] hover:text-[#111111]'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {filteredPositions.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-[#e5e5e5] rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-5 flex-wrap">
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-wider bg-[#F5F5F5] text-[#555555] px-3 py-1 rounded-md">
                    {job.department}
                  </span>
                  <span className="font-jakarta text-[11px] font-semibold text-[#888888] bg-[#F9F9F9] border border-[#EEEEEE] px-2.5 py-1 rounded-md">
                    {job.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-jakarta text-lg sm:text-xl font-bold text-[#111111] mb-2 leading-snug">
                  {job.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs font-jakarta text-[#888888] mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>

                {/* Description */}
                <p className="font-jakarta text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                  {job.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#f0f0f0]">
                <span className="font-jakarta text-xs text-[#999999] font-medium">
                  {job.experience}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={job.formUrl || 'https://forms.clickup.com/90181825437/f/2kzm2wwx-6998/DRWLUKLARL80A3SDAA'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-jakarta font-semibold text-[#007FFF] hover:underline cursor-pointer"
                  >
                    <span>Apply</span>
                    <Send className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-jakarta font-semibold text-[#111111] hover:text-[#007FFF] transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Job Detail Panel ── */}
      <AnimatePresence>
        {selectedJob && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 z-[9999] bg-black/40"
            />

            {/* Desktop: Right Side Panel */}
            <motion.div
              key="panel-desktop"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="hidden md:flex fixed top-0 right-0 h-full w-full max-w-[520px] z-[10000] flex-col bg-white border-l border-[#e5e5e5]"
            >
              {/* Panel Header */}
              <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-[#f0f0f0] shrink-0">
                <div className="pr-4">
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-widest text-[#888888] bg-[#F5F5F5] px-2.5 py-1 rounded-md mb-3 inline-block">
                    {selectedJob.department}
                  </span>
                  <h2 className="font-jakarta text-2xl font-bold text-[#111111] leading-tight mt-2">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-jakarta text-[#777777]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#999]" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#999]" />
                      {selectedJob.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#999]" />
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 text-[#999999] hover:text-[#111111] hover:bg-[#f4f4f4] rounded-full transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Panel Body — Scrollable */}
              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-7">
                {/* Overview */}
                <div>
                  <h4 className="font-jakarta text-[11px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-3">
                    Role Overview
                  </h4>
                  <p className="font-jakarta text-sm text-[#444444] leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="w-full h-px bg-[#f0f0f0]" />

                {/* Responsibilities */}
                <div>
                  <h4 className="font-jakarta text-[11px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-jakarta text-sm text-[#444444] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-px bg-[#f0f0f0]" />

                {/* Requirements */}
                <div>
                  <h4 className="font-jakarta text-[11px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-jakarta text-sm text-[#444444] leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bbbbbb] shrink-0 mt-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-px bg-[#f0f0f0]" />

                {/* Perks */}
                <div>
                  <h4 className="font-jakarta text-[11px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-3">
                    What You Get
                  </h4>
                  <ul className="space-y-2">
                    {selectedJob.perks.map((perk, idx) => (
                      <li key={idx} className="font-jakarta text-sm text-[#444444] leading-relaxed flex items-start gap-2">
                        <span className="text-[#111111] font-bold shrink-0">·</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Panel Footer — Sticky Apply Button */}
              <div className="px-8 py-6 border-t border-[#f0f0f0] shrink-0">
                <a
                  href={selectedJob.formUrl || 'https://forms.clickup.com/90181825437/f/2kzm2wwx-6998/DRWLUKLARL80A3SDAA'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedJob(null)}
                  className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white font-jakarta font-semibold text-sm py-4 rounded-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Apply for This Position
                </a>
                <p className="font-jakarta text-xs text-[#aaaaaa] text-center mt-3">
                  Send your CV or portfolio to our team
                </p>
              </div>
            </motion.div>

            {/* Mobile: Bottom Sheet */}
            <motion.div
              key="panel-mobile"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="flex md:hidden fixed bottom-0 left-0 right-0 z-[10000] flex-col bg-white rounded-t-3xl max-h-[90dvh]"
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 bg-[#DDDDDD] rounded-full" />
              </div>

              {/* Mobile Header */}
              <div className="flex items-start justify-between px-5 pt-4 pb-4 border-b border-[#f0f0f0] shrink-0">
                <div className="pr-4">
                  <span className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-[#888888] bg-[#F5F5F5] px-2.5 py-1 rounded-md mb-2 inline-block">
                    {selectedJob.department}
                  </span>
                  <h2 className="font-jakarta text-xl font-bold text-[#111111] leading-tight">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] font-jakarta text-[#888888]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedJob.location}
                    </span>
                    <span>·</span>
                    <span>{selectedJob.type}</span>
                    <span>·</span>
                    <span>{selectedJob.experience}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 text-[#aaaaaa] hover:text-[#111111] bg-[#F5F5F5] rounded-full cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Body — Scrollable */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
                <div>
                  <h4 className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Overview</h4>
                  <p className="font-jakarta text-sm text-[#444444] leading-relaxed">{selectedJob.description}</p>
                </div>

                <div className="w-full h-px bg-[#f0f0f0]" />

                <div>
                  <h4 className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Responsibilities</h4>
                  <ul className="space-y-2.5">
                    {selectedJob.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-jakarta text-sm text-[#444444] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-px bg-[#f0f0f0]" />

                <div>
                  <h4 className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Requirements</h4>
                  <ul className="space-y-2.5">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-jakarta text-sm text-[#444444] leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cccccc] shrink-0 mt-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-px bg-[#f0f0f0]" />

                <div className="pb-2">
                  <h4 className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">What You Get</h4>
                  <ul className="space-y-2">
                    {selectedJob.perks.map((perk, idx) => (
                      <li key={idx} className="font-jakarta text-sm text-[#444444] leading-relaxed flex items-start gap-2">
                        <span className="font-bold text-[#aaaaaa] shrink-0">·</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile Footer — Sticky Apply */}
              <div className="px-5 py-4 border-t border-[#f0f0f0] shrink-0 bg-white">
                <a
                  href={selectedJob.formUrl || 'https://forms.clickup.com/90181825437/f/2kzm2wwx-6998/DRWLUKLARL80A3SDAA'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedJob(null)}
                  className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white font-jakarta font-semibold text-sm py-4 rounded-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Apply for This Position
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
