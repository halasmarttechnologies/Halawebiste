'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const videoEditingFaqs = [
  {
    number: "01",
    question: "What video editing services do you offer?",
    answer: "We offer comprehensive video post-production services including color grading, audio cleaning & mixing, motion graphics, sound design, transitions, visual effects, and format resizing for multi-platform delivery."
  },
  {
    number: "02",
    question: "Which types of videos can you edit?",
    answer: "We edit corporate promos, social media reels & TikToks, YouTube content, product showcases, podcast highlights, event recap videos, real estate tours, and paid ad creatives."
  },
  {
    number: "03",
    question: "What software do you use for editing?",
    answer: "Our video editors use industry-leading tools including Adobe Premiere Pro, After Effects, DaVinci Resolve Studio, and Audition to deliver broadcast-quality video content."
  },
  {
    number: "04",
    question: "How long does it take to edit a video?",
    answer: "Short-form content (Reels/Shorts) takes 24 to 48 hours. Comprehensive corporate promos or long-form videos typically take 3 to 5 business days based on duration and graphic requirements."
  },
  {
    number: "05",
    question: "Can you work with raw footage from smartphones or cameras?",
    answer: "Yes! We work with all footage formats—from 4K/8K cinema camera RAW files (RED, Sony, Canon) to high-quality smartphone videos (iPhone/Android ProRes)."
  },
  {
    number: "06",
    question: "Do you provide revisions?",
    answer: "Yes, every video project includes dedicated revision cycles so you can request changes to pacing, audio balance, captions, or color tone until you are completely satisfied."
  },
  {
    number: "07",
    question: "Can you add captions, subtitles, or animations?",
    answer: "Yes! We specialize in engaging dynamic captions, animated text overlays, kinetic typography, lower thirds, and custom logo motion graphics."
  },
  {
    number: "08",
    question: "Do you offer social media optimization?",
    answer: "Yes, we export videos tailored specifically to platform specifications (9:16 vertical for Reels/TikTok, 1:1 square for Instagram, 16:9 widescreen for YouTube/LinkedIn) with optimized compression for maximum reach."
  },
  {
    number: "09",
    question: "How do I submit my footage and requirements?",
    answer: "You can securely upload your raw footage via Google Drive, Dropbox, Frame.io, or WeTransfer. We will provide a dedicated folder link upon project kickoff."
  },
  {
    number: "10",
    question: "What makes Hala Smart Technologies different?",
    answer: "We combine strategic narrative storytelling with high-converting visual pacing. We don't just edit clips; we structure videos designed to capture attention, boost watch time, and drive conversions."
  }
];

export default function VideoEditingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-6">
              Video Editing <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-poppins text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our video editing process, file submissions, revision cycles, and platform optimization.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-poppins text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Video Post-Production
              </span>
              <h3 className="font-poppins font-semibold text-lg text-[#111111] mb-2">
                Ready to edit your video footage?
              </h3>
              <p className="font-poppins text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Send us your raw clips and our Dubai post-production team will transform them into high-converting videos.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-poppins font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Submit Video Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {videoEditingFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'bg-[#111111] border-[#111111] text-white' 
                      : 'bg-[#f9f9f9] border-[#e5e5e5] text-[#111111]'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`font-poppins text-xs md:text-sm font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        isOpen ? 'bg-[#007FFF] text-white' : 'bg-white text-[#111111] border border-[#e5e5e5]'
                      }`}>
                        {faq.number}
                      </span>

                      <span className={`font-poppins text-base md:text-lg font-semibold transition-colors ${
                        isOpen ? 'text-white' : 'text-[#111111]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className="shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#111111]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 font-poppins text-xs sm:text-sm md:text-base text-[#CCCCCC] font-normal leading-relaxed pl-16">
                          {faq.answer}
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
