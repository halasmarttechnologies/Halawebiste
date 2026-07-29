'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const videoEditingFaqs = [
  {
    number: "01",
    question: "Who can use your video editing services?",
    answer: "Any business creator or brand looking to turn raw footage into polished professional content can use our services from small businesses to influencers and corporate teams."
  },
  {
    number: "02",
    question: "Which types of videos can you edit?",
    answer: "We edit a wide range of content including social media reels promotional videos corporate videos product showcases and long form YouTube content."
  },
  {
    number: "03",
    question: "What software do you use for editing?",
    answer: "Our team works with industry standard tools like Adobe Premiere Pro After Effects and DaVinci Resolve to deliver polished professional results."
  },
  {
    number: "04",
    question: "How long does it take to edit a video?",
    answer: "Turnaround time depends on video length and complexity but most standard projects are delivered within a few business days."
  },
  {
    number: "05",
    question: "Can you work with raw footage from smartphones or cameras?",
    answer: "Yes we work with footage from any source including smartphones DSLRs and professional cameras and enhance it to a polished final result."
  },
  {
    number: "06",
    question: "Do you provide revisions?",
    answer: "Yes every project includes a set number of revisions to make sure the final edit matches your vision before delivery."
  },
  {
    number: "07",
    question: "Can you add custom thumbnails to my videos?",
    answer: "Yes we design custom scroll stopping thumbnails as part of our editing services to boost your video click through rate."
  },
  {
    number: "08",
    question: "Do you offer color grading and sound editing?",
    answer: "Yes our editing process includes color correction grading and audio enhancement to make sure every video looks and sounds professional."
  },
  {
    number: "09",
    question: "Can you optimize videos for different platforms?",
    answer: "Yes we format and export videos to match the specific requirements of Instagram YouTube TikTok and other platforms."
  },
  {
    number: "10",
    question: "How do I get started with a video editing project?",
    answer: "Simply send us your raw footage along with your requirements and our team will get back to you with a timeline and next steps."
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
            <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-6">
              Video Editing <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our editing workflow file formats revision policy and delivery timelines.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Video Post-Production
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Ready to edit your video footage?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Send us your raw clips and our Dubai post-production team will transform them into high-converting videos.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
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
                      <span className={`font-jakarta text-xs md:text-sm font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        isOpen ? 'bg-[#007FFF] text-white' : 'bg-white text-[#111111] border border-[#e5e5e5]'
                      }`}>
                        {faq.number}
                      </span>

                      <span className={`font-jakarta text-base md:text-lg font-semibold transition-colors ${
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
                        <div className="px-6 pb-6 pt-1 font-jakarta text-xs sm:text-sm md:text-base text-[#CCCCCC] font-normal leading-relaxed pl-16">
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
