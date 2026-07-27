'use client';

import { 
  Inbox, 
  Send, 
  FileText, 
  Star, 
  BarChart2, 
  Lock, 
  Search, 
  Paperclip, 
  MoreVertical, 
  Reply, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  Bot,
  ChevronLeft
} from 'lucide-react';

export default function AIAgentDesktopShowcase() {
  return (
    <section className="font-jakarta bg-white text-[#111111] py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-14">
          <div className="bg-[#007FFF] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            AI Email Engine
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-[#111111] tracking-tight mb-4 max-w-3xl">
            Hyper-Realistic AI Email Automation.
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            See how our AI Executive autonomously drafts personalized, high-converting emails and manages client communication inside a real email client.
          </p>
        </div>

        {/* ─── DESKTOP & MOBILE BROWSER MOCKUP FRAME ─── */}
        <div className="w-full bg-white rounded-2xl md:rounded-3xl border border-[#E5E7EB] overflow-hidden select-none">
          
          {/* 1. Browser Header Bar */}
          <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between gap-4">
            
            {/* Mac Window Dots */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-red-500" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-green-500" />
            </div>

            {/* URL Address Bar */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg px-3 sm:px-4 py-1 flex items-center justify-center gap-2 max-w-md w-full text-xs text-[#555555]">
              <Lock className="w-3.5 h-3.5 text-green-600 shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px] truncate">https://mail.halatechnology.ae/ai-inbox</span>
            </div>

            {/* Status Pill */}
            <div className="hidden sm:flex items-center gap-2 shrink-0 bg-blue-50 text-[#007FFF] border border-blue-200 px-3 py-0.5 rounded-full text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              AI Agent Online
            </div>
          </div>

          {/* ─── DESKTOP VIEW: 3-Column Email Client Workspace (Hidden on Mobile) ─── */}
          <div className="hidden md:grid grid-cols-12 min-h-[580px] bg-white text-left divide-x divide-[#E5E7EB]">
            
            {/* SIDEBAR: Folder Navigation (2 cols on lg) */}
            <div className="hidden lg:block col-span-2 bg-[#FAFBFD] p-4 flex-col space-y-6">
              
              <div className="w-full bg-[#111111] text-white rounded-xl p-2.5 flex items-center justify-center gap-2 text-xs font-bold shadow-xs">
                <Sparkles className="w-4 h-4 text-[#007FFF]" />
                <span>AI Compose</span>
              </div>

              <div className="flex flex-col space-y-1 text-xs font-semibold text-[#555555]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-200/60 text-[#111111]">
                  <div className="flex items-center gap-2.5">
                    <Inbox className="w-4 h-4 text-[#007FFF]" />
                    <span>Inbox</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#007FFF] text-white px-1.5 py-0.2 rounded-full">12</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-100 text-[#555555]">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>AI Sequences</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-100 text-[#555555]">
                  <Send className="w-4 h-4 text-gray-500" />
                  <span>Sent</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-100 text-[#555555]">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span>Drafts</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-100 text-[#555555]">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span>Starred</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-100 text-[#555555]">
                  <BarChart2 className="w-4 h-4 text-green-600" />
                  <span>Analytics</span>
                </div>
              </div>

            </div>

            {/* MIDDLE PANE: Email Thread List (4 cols on lg, 5 cols on md) */}
            <div className="col-span-5 lg:col-span-4 bg-white p-4 flex flex-col space-y-3">
              
              <div className="bg-gray-50 border border-[#E5E7EB] rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs text-gray-400">
                <Search className="w-3.5 h-3.5 shrink-0" />
                <span>Search AI conversations...</span>
              </div>

              <div className="flex flex-col space-y-2 overflow-y-auto">
                
                {/* Active Thread #1 (Selected) */}
                <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 flex flex-col space-y-1.5 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#007FFF] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        SV
                      </div>
                      <span className="font-bold text-xs text-[#111111] truncate">Sophia Vance (AI)</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">10:14 AM</span>
                  </div>
                  <h4 className="font-semibold text-xs text-[#111111] truncate">Re: Custom AI Automation Strategy</h4>
                  <p className="text-[11px] text-[#555555] line-clamp-2 leading-tight">
                    Thank you for reaching out! I have analyzed your requirements and drafted a personalized...
                  </p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[9px] font-bold bg-[#007FFF] text-white px-2 py-0.5 rounded-full">
                      AI Generated
                    </span>
                    <span className="text-[9px] font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      High Intent
                    </span>
                  </div>
                </div>

                {/* Thread #2 */}
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex flex-col space-y-1.5 opacity-70">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        JD
                      </div>
                      <span className="font-bold text-xs text-[#111111]">John Doe</span>
                    </div>
                    <span className="text-[10px] text-gray-400">Yesterday</span>
                  </div>
                  <h4 className="font-semibold text-xs text-[#111111]">Q3 Marketing Automation Inquiry</h4>
                  <p className="text-[11px] text-gray-500 line-clamp-1">
                    Hi team, we are looking for a complete AI workflow solution...
                  </p>
                </div>

                {/* Thread #3 */}
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex flex-col space-y-1.5 opacity-70">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        EA
                      </div>
                      <span className="font-bold text-xs text-[#111111]">Enterprise Analytics</span>
                    </div>
                    <span className="text-[10px] text-gray-400">Jul 24</span>
                  </div>
                  <h4 className="font-semibold text-xs text-[#111111]">Weekly Lead Conversion Report</h4>
                  <p className="text-[11px] text-gray-500 line-clamp-1">
                    Automated report: 42 new CRM leads tagged and converted...
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT PANE: Email Workspace (6 cols on lg, 7 cols on md) */}
            <div className="col-span-7 lg:col-span-6 bg-white p-6 flex flex-col justify-between space-y-6">
              
              <div className="flex flex-col space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between border-b border-[#E5E7EB] pb-3 gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-[#111111] tracking-tight leading-snug">
                      Re: Custom AI Automation Strategy & Enterprise Workflow
                    </h3>
                    <span className="text-xs text-gray-400">Inbox / AI Sequences</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                      <Reply className="w-4 h-4" />
                    </div>
                    <div className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                      <MoreVertical className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Sender Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border border-blue-300 flex items-center justify-center text-white font-bold shrink-0 relative">
                      <span className="text-xs font-bold">SV</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#007FFF] border border-white flex items-center justify-center">
                        <Bot className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#111111]">Sophia Vance</span>
                        <span className="text-[10px] bg-blue-50 text-[#007FFF] font-bold px-2 py-0.2 rounded-full border border-blue-200">
                          AI Executive @ Hala Tech
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">to <span className="text-[#111111] font-medium">john.doe@enterprise.com</span></span>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium shrink-0">10:14 AM</span>
                </div>

                {/* Body Text */}
                <div className="text-sm text-[#333333] leading-relaxed space-y-3 pt-2">
                  <p>Hi John,</p>
                  <p>
                    Thank you for reaching out to Hala Technology! I have thoroughly analyzed your enterprise marketing objectives and configured a custom multi-channel AI workflow for your Q3 launch.
                  </p>
                  <p className="font-semibold text-[#111111]">Here is what our AI Engine has prepared for your brand:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#444444]">
                    <li><span className="font-semibold text-[#111111]">Automated Competitor Analysis</span> & Positioning Benchmark</li>
                    <li><span className="font-semibold text-[#111111]">3 High-Converting Ad Copy</span> & Email Sequence Variants</li>
                    <li><span className="font-semibold text-[#111111]">Real-Time CRM Sync</span> with Lead Intent Tagging</li>
                  </ul>
                  <p>
                    I have attached the technical proposal and workflow diagram below. Would you like to deploy this sequence or jump on a 1-on-1 strategy call?
                  </p>
                  <p className="pt-2 text-xs text-[#666666]">
                    Best regards,<br />
                    <strong className="text-[#111111]">Sophia Vance</strong> — AI Executive<br />
                    Hala Technology | <span className="text-[#007FFF]">halatechnology.ae</span>
                  </p>
                </div>

                {/* PDF Badge */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">
                      PDF
                    </div>
                    <div>
                      <span className="font-bold text-xs text-[#111111] block">Proposal_Enterprise_AI_Workflow.pdf</span>
                      <span className="text-[10px] text-gray-400">2.4 MB • Generated by AI</span>
                    </div>
                  </div>
                  <Paperclip className="w-4 h-4 text-gray-400" />
                </div>

              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                <button className="bg-[#111111] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#007FFF]" />
                  Deploy AI Email Sequence
                </button>
                <button className="bg-white border border-[#E5E7EB] text-[#111111] px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <Calendar className="w-4 h-4 text-[#007FFF]" />
                  Book Strategy Call
                </button>
              </div>

            </div>

          </div>

          {/* ─── MOBILE VIEW: Focused 100% Dedicated Email Reader (Block on Mobile Only) ─── */}
          <div className="block md:hidden bg-white p-4 text-left flex flex-col space-y-4">
            
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
                <span>Inbox</span>
                <span className="text-gray-300">/</span>
                <span className="font-semibold text-[#007FFF]">AI Active Thread</span>
              </div>
              <span className="text-[10px] font-bold bg-[#007FFF] text-white px-2 py-0.5 rounded-full">
                AI Generated
              </span>
            </div>

            {/* Subject Title */}
            <div>
              <h3 className="font-bold text-base text-[#111111] tracking-tight leading-snug">
                Re: Custom AI Automation Strategy & Workflow
              </h3>
            </div>

            {/* Sender Header */}
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 relative">
                  SV
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#007FFF] border border-white flex items-center justify-center">
                    <Bot className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xs text-[#111111] block leading-tight">Sophia Vance</span>
                  <span className="text-[10px] text-gray-500 block">AI Executive @ Hala Tech</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">10:14 AM</span>
            </div>

            {/* Email Body */}
            <div className="text-xs text-[#333333] leading-relaxed space-y-3 pt-1">
              <p>Hi John,</p>
              <p>
                Thank you for reaching out to Hala Technology! I have analyzed your enterprise marketing goals and generated a custom AI workflow.
              </p>
              <p className="font-semibold text-[#111111]">Prepared for your brand:</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-[#444444]">
                <li><span className="font-semibold text-[#111111]">Competitor Analysis</span> & Positioning</li>
                <li><span className="font-semibold text-[#111111]">3 Ad Copy</span> & Email Sequences</li>
                <li><span className="font-semibold text-[#111111]">Real-Time CRM Sync</span> & Lead Tagging</li>
              </ul>
              <p className="text-[11px] text-gray-500 pt-1">
                Best regards,<br />
                <strong className="text-[#111111]">Sophia Vance</strong> — AI Executive
              </p>
            </div>

            {/* PDF Attachment Badge */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-red-100 text-red-600 flex items-center justify-center font-bold text-[10px] shrink-0">
                  PDF
                </div>
                <div>
                  <span className="font-bold text-xs text-[#111111] block truncate max-w-[190px]">Proposal_AI_Workflow.pdf</span>
                  <span className="text-[9px] text-gray-400">2.4 MB • Generated by AI</span>
                </div>
              </div>
              <Paperclip className="w-3.5 h-3.5 text-gray-400" />
            </div>

            {/* Mobile Touch-Friendly Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full bg-[#111111] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#007FFF]" />
                Deploy AI Email Sequence
              </button>
              <button className="w-full bg-white border border-[#E5E7EB] text-[#111111] py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-[#007FFF]" />
                Book Strategy Call
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
