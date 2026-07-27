'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactInfoCards() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Contact@halatechnology.ae');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="bg-white text-[#111111] w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#007FFF] font-semibold mb-3 block">
              Direct Access &amp; Support
            </span>
            <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Reach Out <em className="eb-garamond font-normal italic pr-2">Directly</em>
            </h2>
          </div>
          <p className="font-jakarta text-base text-[#666666] max-w-md">
            Prefer direct communication over scheduling? Choose the method that suits you best and our specialists will respond in less than an hour.
          </p>
        </div>

        {/* 4 Cards Grid - Static without hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Email */}
          <div className="bg-[#f9f9f9] border border-[#eee] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#eee] flex items-center justify-center mb-6 text-[#007FFF] shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-jakarta text-lg font-bold text-[#111111] mb-2">
                Email Us
              </h3>
              <p className="font-jakarta text-sm text-[#666666] mb-4">
                Send your RFP, project details, or general queries anytime.
              </p>
            </div>
            
            <div>
              <p className="font-jakarta text-sm font-semibold text-[#111111] mb-3 break-all">
                Contact@halatechnology.ae
              </p>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#ddd] hover:border-[#007FFF] text-xs font-semibold text-[#111111] transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#555]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Phone / WhatsApp */}
          <div className="bg-[#f9f9f9] border border-[#eee] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#eee] flex items-center justify-center mb-6 text-[#007FFF] shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-jakarta text-lg font-bold text-[#111111] mb-2">
                Call or WhatsApp
              </h3>
              <p className="font-jakarta text-sm text-[#666666] mb-4">
                Speak directly with our strategy consultants in Dubai.
              </p>
            </div>

            <div>
              <p className="font-jakarta text-sm font-semibold text-[#111111] mb-3">
                +971 58 613 9007
              </p>
              <a
                href="https://wa.me/971586139007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#007FFF] text-white hover:bg-[#0066CC] text-xs font-semibold transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Card 3: Dubai Office */}
          <div className="bg-[#f9f9f9] border border-[#eee] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#eee] flex items-center justify-center mb-6 text-[#007FFF] shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-jakarta text-lg font-bold text-[#111111] mb-2">
                Visit Our HQ
              </h3>
              <p className="font-jakarta text-sm text-[#666666] mb-4">
                1803, Latifa Tower, Sheikh Zayed Road, Dubai, UAE.
              </p>
            </div>

            <div>
              <a
                href="https://maps.google.com/?q=1803+Latifa+Tower+Sheikh+Zayed+Road+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#ddd] hover:border-[#007FFF] text-xs font-semibold text-[#111111] transition-all"
              >
                <span>View Location on Map</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555]" />
              </a>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className="bg-[#f9f9f9] border border-[#eee] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#eee] flex items-center justify-center mb-6 text-[#007FFF] shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-jakarta text-lg font-bold text-[#111111] mb-2">
                Business Hours
              </h3>
              <p className="font-jakarta text-sm text-[#666666] mb-4">
                Monday – Saturday<br />
                9:00 AM – 6:00 PM GST
              </p>
            </div>

            <div className="bg-white border border-[#eee] p-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-[#111111]">Response time &lt; 1 Hour</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
