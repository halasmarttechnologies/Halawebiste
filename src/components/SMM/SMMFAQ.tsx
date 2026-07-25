'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const smmFaqs = [
  {
    number: "01",
    question: "Which platforms do you manage?",
    answer: "We manage all major social media channels including Instagram, Facebook, LinkedIn, TikTok, YouTube, X (Twitter), and Pinterest."
  },
  {
    number: "02",
    question: "Do you handle everything?",
    answer: "Yes, 100%! We manage full end-to-end social media marketing—including content calendar strategy, graphic design, video editing, copywriting, hashtag research, posting, and community engagement."
  },
  {
    number: "03",
    question: "Is paid advertising included?",
    answer: "We offer both dedicated organic social media management packages and integrated paid ad campaign management (Meta Ads, LinkedIn Ads, TikTok Ads) tailored to your growth budget."
  },
  {
    number: "04",
    question: "What kind of content do you create?",
    answer: "We produce high-performing Reels, TikTok videos, carousel decks, infographics, branded story graphics, promotional banners, and UGC-style videos tailored to your brand identity."
  },
  {
    number: "05",
    question: "How often do you post?",
    answer: "Posting frequency depends on your chosen strategy retainer—ranging from 3 posts per week for growing brands to daily multi-platform publishing for aggressive growth."
  },
  {
    number: "06",
    question: "Do you write captions and hashtags too?",
    answer: "Yes! Every single post includes persuasive copywriting, optimized calls-to-action, targeted niche hashtags, and geographic tagging."
  },
  {
    number: "07",
    question: "Can you help grow my followers?",
    answer: "Yes! Our strategic combination of engaging video Reels, targeted hashtag reach, active community engagement, and paid booster ads drives real, targeted follower growth."
  },
  {
    number: "08",
    question: "Will I get to approve content before it’s posted?",
    answer: "Yes, 100%. We provide a monthly content calendar preview 7 days prior to scheduling, allowing you full approval and edit rights on all visuals and captions."
  },
  {
    number: "09",
    question: "How soon can I expect results?",
    answer: "Paid social campaigns deliver traffic and lead actions on day one. Organic brand awareness, engagement velocity, and follower growth compound rapidly within 30 to 60 days."
  },
  {
    number: "10",
    question: "How do I get started with Hala Technology?",
    answer: "Getting started is simple! Contact our Dubai social media team at 1803, Latifa Tower, Sheikh Zayed Road, email Contact@halatechnology.ae, or call +971 58 613 9007 for a custom social roadmap."
  }
];

export default function SMMFAQ() {
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
              Social Media <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-poppins text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our social media management, content approvals, posting schedules, and paid ad integration.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-poppins text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Social Media Growth
              </span>
              <h3 className="font-poppins font-semibold text-lg text-[#111111] mb-2">
                Ready to elevate your social presence?
              </h3>
              <p className="font-poppins text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai social media strategists are ready to plan your content calendar and growth campaigns.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-poppins font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Start Social Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {smmFaqs.map((faq, index) => {
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
