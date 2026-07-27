'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const graphicDesignFaqs = [
  {
    number: "01",
    question: "Who can avail of your graphic design services?",
    answer: "Any business or individual looking to strengthen their brand can avail of these services, including startups, retailers, influencers, e-commerce businesses, service providers, corporate entities, and others."
  },
  {
    number: "02",
    question: "Can I ask for edits post-delivery?",
    answer: "Yes, absolutely! We provide revision rounds with all design packages to ensure the final assets perfectly align with your vision, brand guidelines, and expectations."
  },
  {
    number: "03",
    question: "Do you provide custom design packages?",
    answer: "Yes, we create custom graphic design packages tailored to your specific scope, deliverables, timeline, and budget—whether you need a single campaign asset or full visual branding."
  },
  {
    number: "04",
    question: "Do I receive source files such as PSD, AI, or SVG?",
    answer: "Yes. Upon project completion and final sign-off, you receive full ownership and all editable source files (Adobe Illustrator .AI, Photoshop .PSD, vector .SVG, EPS, PDF, and high-res PNG/JPG)."
  },
  {
    number: "05",
    question: "What is your turnaround time?",
    answer: "Standard design tasks are delivered within 24 to 48 hours. Comprehensive brand identities or multi-asset campaigns take 5 to 7 business days depending on project complexity."
  },
  {
    number: "06",
    question: "Do you design in more than one language?",
    answer: "Yes! We specialize in bilingual design for English and Arabic markets across the GCC, ensuring culturally authentic typography, alignment, and aesthetic appeal."
  },
  {
    number: "07",
    question: "Will my designs be optimized for mobile?",
    answer: "All digital design assets, web banners, and social graphics are precision-optimized for mobile aspect ratios, high-DPI displays, and fast loading speeds."
  },
  {
    number: "08",
    question: "Can you help create a complete brand identity, not just a logo?",
    answer: "Yes! We build end-to-end brand identities, including logo systems, color palettes, typography rules, brand guidelines, stationery, packaging, and social media kits."
  },
  {
    number: "09",
    question: "What design software do you use?",
    answer: "Our senior designers use industry-leading professional software including Adobe Illustrator, Photoshop, InDesign, Premiere Pro, Figma, and After Effects."
  },
  {
    number: "10",
    question: "Is there a contract or long-term commitment required?",
    answer: "No long-term commitment is required. You can hire us on a per-project basis or opt for a flexible monthly retainer depending on your ongoing creative needs."
  }
];

export default function GraphicDesignFAQ() {
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
              Graphic Design <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our graphic design process, deliverables, source files, and turnaround times.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Custom Creative Support
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Have a specific design requirement?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai design team is ready to discuss your custom branding or creative project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Talk to a Designer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {graphicDesignFaqs.map((faq, index) => {
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
