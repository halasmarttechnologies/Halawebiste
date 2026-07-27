'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ppcFaqs = [
  {
    number: "01",
    question: "Who is PPC advertising ideal for?",
    answer: "PPC (Pay-Per-Click) is ideal for any business seeking immediate visibility, rapid lead generation, or fast sales—including eCommerce stores, local service providers, B2B companies, and seasonal campaigns."
  },
  {
    number: "02",
    question: "How does PPC work?",
    answer: "PPC is an auction-based digital advertising model where your ads bid on specific search keywords or user demographics. You only pay when a user actually clicks your ad and lands on your site."
  },
  {
    number: "03",
    question: "Where will my ads appear?",
    answer: "Your ads can appear at the very top of Google Search results, on YouTube, Google Display Network websites, Meta (Instagram & Facebook), LinkedIn, and TikTok depending on target audience habits."
  },
  {
    number: "04",
    question: "Is PPC better than SEO?",
    answer: "PPC delivers immediate traffic and rapid lead generation from day one, while SEO builds sustainable long-term organic authority. Using PPC and SEO together provides maximum search dominance."
  },
  {
    number: "05",
    question: "Can small businesses afford PPC?",
    answer: "Yes! PPC allows complete control over daily budgets, geographic radiuses, and bidding strategy, ensuring small businesses only spend on high-intent buyers in their specific target market."
  },
  {
    number: "06",
    question: "How soon will I see results?",
    answer: "PPC delivers instant visibility! As soon as your campaign is launched and approved by Google or Meta, qualified search traffic and lead actions begin flowing immediately."
  },
  {
    number: "07",
    question: "Do I need a landing page?",
    answer: "Having a high-converting landing page significantly lowers Cost-Per-Click and boosts conversion rates. We design custom high-converting landing pages tailored to your ad campaigns."
  },
  {
    number: "08",
    question: "Will you create the ads for me?",
    answer: "Yes, 100%! We handle end-to-end campaign creation—including keyword strategy, ad copywriting, visual graphics, video ad edits, bidding setup, and conversion tracking."
  },
  {
    number: "09",
    question: "Can I track my ad performance?",
    answer: "Yes! You will receive transparent reporting dashboards tracking clicks, conversion costs, lead volume, sales metrics, and exact Return on Ad Spend (ROAS)."
  },
  {
    number: "10",
    question: "How do I get started?",
    answer: "Getting started is simple! Reach out to our Dubai PPC team at 1803, Latifa Tower, Sheikh Zayed Road, email Contact@halatechnology.ae, or call +971 58 613 9007 for an instant PPC strategy audit."
  }
];

export default function PPCFAQ() {
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
              PPC Advertising <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our Pay-Per-Click strategy, ad platforms, budget optimization, and instant lead conversion models.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Instant Lead Generation
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Ready to launch high-ROI ads?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai PPC specialists will audit your target keywords and build a high-converting campaign setup.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Launch PPC Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {ppcFaqs.map((faq, index) => {
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
