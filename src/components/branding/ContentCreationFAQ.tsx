'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const contentCreationFaqs = [
  {
    number: "01",
    question: "What is content creation, and why is it important for my business?",
    answer: "Content creation is the process of generating valuable written, visual, and multimedia assets tailored for your target audience. It builds brand authority, drives organic traffic, educates prospective buyers, and turns casual visitors into loyal customers."
  },
  {
    number: "02",
    question: "What types of content do you offer?",
    answer: "We produce website copywriting, blog articles, SEO landing pages, social media captions & carousel scripts, video scripts, email newsletters, case studies, and corporate press releases."
  },
  {
    number: "03",
    question: "Is the content SEO-optimized?",
    answer: "Yes, all written content is thoroughly researched and optimized with high-intent keywords, semantic headings, meta tags, and internal link structures to maximize search engine rankings."
  },
  {
    number: "04",
    question: "How do you understand my brand’s tone and audience?",
    answer: "Before writing, we conduct a brand discovery session to map out your brand persona, target demographics, unique selling propositions, and tone guidelines (whether professional, playful, or authoritative)."
  },
  {
    number: "05",
    question: "Can I request edits or revisions?",
    answer: "Yes, every content deliverable includes revision rounds so you can provide feedback and refine tone, formatting, or messaging to your exact satisfaction."
  },
  {
    number: "06",
    question: "How long does it take to deliver the content?",
    answer: "Standard blog posts or social content sets are delivered within 3 to 5 business days. Full website copywriting or complex technical whitepapers take 7 to 10 business days."
  },
  {
    number: "07",
    question: "Do you write for specific industries or niches?",
    answer: "Yes, our experienced copywriters research and create authoritative content for technology, real estate, finance, healthcare, eCommerce, hospitality, legal, and luxury sectors across the Middle East."
  },
  {
    number: "08",
    question: "Can you manage our content on an ongoing basis?",
    answer: "Yes! We offer monthly content retainers including content calendar planning, topic research, writing, editing, graphic design, and CMS publishing."
  },
  {
    number: "09",
    question: "Will the content be 100% original?",
    answer: "Yes, guaranteed. All content is 100% human-crafted, unique, and passed through rigorous plagiarism and quality control checks prior to client delivery."
  },
  {
    number: "10",
    question: "How do I get started with your content creation services?",
    answer: "Getting started is easy! Simply reach out via our contact page, email us at Contact@halatechnology.ae, or call +971 58 613 9007 to discuss your content goals with our Dubai team."
  }
];

export default function ContentCreationFAQ() {
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
              Content Creation <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our content strategy, copywriting, SEO optimization, and ongoing editorial management.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Editorial Strategy
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Need high-performing content?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai strategy team can craft tailored content calendars and SEO copywriting for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Get Started with Content</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {contentCreationFaqs.map((faq, index) => {
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
