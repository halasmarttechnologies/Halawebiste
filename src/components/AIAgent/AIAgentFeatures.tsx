'use client';

import { useState } from 'react';
import { Send, MessageCircle, PenTool, BarChart2, Bot, User, CheckCircle2 } from 'lucide-react';

const TABS = [
  {
    id: 'campaigns',
    label: 'Send Campaigns',
    icon: Send,
    description: 'Hala Agents manage, draft, and deploy targeted marketing campaigns based on your data.',
    ui: <CampaignUI />,
  },
  {
    id: 'leads',
    label: 'Qualify Leads',
    icon: MessageCircle,
    description: 'Engage website visitors instantly, asking the right questions to qualify leads 24/7.',
    ui: <LeadsUI />,
  },
  {
    id: 'content',
    label: 'Generate Content',
    icon: PenTool,
    description: 'Produce SEO-optimized articles and social media posts tailored to your brand voice.',
    ui: <ContentUI />,
  },
  {
    id: 'analyze',
    label: 'Analyze Data',
    icon: BarChart2,
    description: 'Continuously monitor campaign performance and surface actionable growth insights.',
    ui: <AnalyzeUI />,
  },
  {
    id: 'support',
    label: 'Auto-Reply',
    icon: Bot,
    description: 'Provide instant, personalized customer support and escalate complex issues gracefully.',
    ui: <SupportUI />,
  },
];

export default function AIAgentFeatures() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="font-jakarta relative bg-white text-[#111111] z-30 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-[56px] font-bold tracking-[-2px] leading-[1.05] max-w-xl text-[#111111]">
            Do more than <br className="hidden md:block" /> humanly possible
          </h2>
          <div className="max-w-xs md:max-w-sm mt-2 md:mt-4">
            <p className="text-[#555555] text-sm md:text-base leading-relaxed mb-4">
              "The holy grail of what enterprises are chasing - this is a game changer for marketing productivity and exponential growth."
            </p>
            <p className="text-[#111111] font-semibold text-sm">
              — Growth Team, Hala Technologies
            </p>
          </div>
        </div>

        {/* Main interactive section */}
        <div className="bg-[#F8FAFC] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 mb-8 md:mb-12 border border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
            
            {/* Left side tabs */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[#111111]">
                The only agents that work like humans – with infinite skills
              </h3>
              
              <div className="flex flex-col gap-2">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left flex flex-col p-4 lg:p-5 rounded-xl lg:rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E2E8F0]' 
                          : 'hover:bg-[#F1F5F9] border border-transparent bg-white/40 lg:bg-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#007FFF]' : 'text-[#888888]'}`} />
                        <span className={`text-[15px] lg:text-base font-semibold ${isActive ? 'text-[#111111]' : 'text-[#888888]'}`}>
                          {tab.label}
                        </span>
                      </div>
                      {isActive && (
                        <div className="pl-8 pt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-sm text-[#555555] leading-relaxed">
                            {tab.description}
                          </p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side dynamic UI */}
            <div className="lg:w-2/3">
               {TABS.map(tab => (
                 <div key={tab.id} className={activeTab === tab.id ? 'block h-full animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out' : 'hidden'}>
                   {tab.ui}
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center">
            <div className="w-full max-w-sm aspect-[4/3] relative mb-8 flex items-center justify-center">
                <CollaborateUI />
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#111111]">Collaborate alongside humans</h4>
            <p className="text-[#555555]">Just like a highly skilled teammate</p>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center">
            <div className="w-full max-w-sm aspect-[4/3] relative mb-8 flex items-center justify-center">
                <ManagedUI />
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#111111]">Managed by humans</h4>
            <p className="text-[#555555]">Agents have managers</p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Sub-components for Right Side UIs ────────────────────────────────────────

function CampaignUI() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[420px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 relative overflow-hidden flex flex-col">
      <div className="flex items-center gap-4 mb-8">
         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007FFF] to-[#0052D4] flex items-center justify-center text-white shrink-0">
           <User className="w-5 h-5" />
         </div>
         <div>
           <h4 className="font-semibold text-sm text-[#111111] mb-1">Marketing Agent</h4>
           <ul className="text-xs text-[#888888] space-y-1">
             <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-green-500" /> Analyzing audience segments</li>
             <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-green-500" /> Subject line optimized</li>
             <li className="flex items-center gap-1.5 text-[#555555]">
               <div className="w-3 h-3 rounded-full border-2 border-[#007FFF] border-t-transparent animate-spin" /> Drafting campaign...
             </li>
           </ul>
         </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] mt-auto">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E2E8F0]">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-xs">M</div>
          <div>
            <div className="font-semibold text-sm text-[#111111]">Campaign: Q3 Product Launch</div>
            <div className="text-xs text-[#888888]">To: Enterprise Leads (12,400 contacts)</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-medium text-sm text-[#111111]">Subject: The Future of Workspace Automation</div>
          <div className="text-sm text-[#555555] leading-relaxed">
            Hi [First Name], <br/><br/>
            We noticed your team is scaling fast. I wanted to share a quick update on how our latest feature can help streamline your daily operations...
          </div>
        </div>
      </div>
      
      <div className="mt-4 md:mt-0 md:absolute md:bottom-10 md:right-12 bg-[#111111] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
         <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
         <span className="font-medium text-sm">I'll send this campaign to 12k leads now</span>
      </div>
    </div>
  );
}

function LeadsUI() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[420px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 relative overflow-hidden flex flex-col">
      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] h-full flex flex-col">
        <div className="text-sm font-semibold mb-4 text-center pb-2 border-b border-[#E2E8F0] text-[#111111]">Visitor Chat</div>
        <div className="flex-1 space-y-4">
          <div className="flex items-start gap-3">
             <div className="w-6 h-6 rounded-full bg-[#E2E8F0] shrink-0"></div>
             <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm text-sm text-[#555555]">
               Hi, I'm looking for a solution to automate my email marketing.
             </div>
          </div>
          <div className="flex items-start gap-3 flex-row-reverse">
             <div className="w-6 h-6 rounded-full bg-[#007FFF] shrink-0 flex items-center justify-center text-white"><Bot className="w-3 h-3" /></div>
             <div className="bg-[#007FFF] p-3 rounded-lg text-white shadow-sm text-sm">
               I can help with that! Are you currently using a CRM like HubSpot or Salesforce?
             </div>
          </div>
          <div className="flex items-start gap-3">
             <div className="w-6 h-6 rounded-full bg-[#E2E8F0] shrink-0"></div>
             <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm text-sm text-[#555555]">
               Yes, we use HubSpot.
             </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center gap-2">
           <div className="flex-1 bg-white border border-[#E2E8F0] rounded-full px-4 py-2 text-xs text-[#888888]">Type a message...</div>
           <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center"><Send className="w-4 h-4" /></div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:absolute md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-right-8 bg-[#111111] text-white p-3 rounded-xl shadow-xl flex items-center gap-3">
         <span className="font-medium text-xs">Lead Qualified: High Intent</span>
      </div>
    </div>
  );
}

function ContentUI() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[420px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 relative overflow-hidden flex flex-col">
      <div className="flex items-center gap-4 mb-6">
         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C6FF] to-[#0072FF] flex items-center justify-center text-white shrink-0">
           <PenTool className="w-5 h-5" />
         </div>
         <div>
           <h4 className="font-semibold text-sm text-[#111111] mb-1">Content Agent</h4>
           <p className="text-xs text-[#555555]">Drafting SEO Article: "Top Marketing Automation Trends"</p>
         </div>
      </div>
      <div className="flex-1 bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] font-serif">
         <h1 className="text-2xl font-bold mb-4 text-[#111111]">The Future of Marketing Automation</h1>
         <p className="text-[#555555] leading-relaxed text-sm mb-2 relative">
           In today's fast-paced digital landscape, reaching your audience at the right time is more critical than ever. <span className="bg-blue-100 text-transparent relative"><span className="absolute w-[2px] h-full bg-[#007FFF] animate-pulse"></span>This is where AI-driven automation steps in to revolutionize how we connect.</span>
         </p>
      </div>
    </div>
  );
}

function AnalyzeUI() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[420px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 relative overflow-hidden flex flex-col">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
             <div className="text-xs text-[#888888] mb-1">Conversion Rate</div>
             <div className="text-2xl font-bold text-[#111111]">4.8%</div>
             <div className="text-xs text-green-500 font-medium mt-1">↑ 1.2% this week</div>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
             <div className="text-xs text-[#888888] mb-1">Leads Generated</div>
             <div className="text-2xl font-bold text-[#111111]">842</div>
             <div className="text-xs text-green-500 font-medium mt-1">↑ 12% this week</div>
          </div>
       </div>
       <div className="flex-1 bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] flex flex-col justify-end">
          <div className="flex items-end justify-between gap-2 h-32 mt-4">
             {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
               <div key={i} className="w-full bg-blue-100 rounded-t-md relative group">
                  <div className="absolute bottom-0 w-full bg-[#007FFF] rounded-t-md transition-all duration-500" style={{height: `${h}%`}}></div>
               </div>
             ))}
          </div>
          <div className="flex justify-between text-[10px] text-[#888888] mt-2">
             <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
       </div>
       <div className="mt-4 md:mt-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white text-[#111111] p-4 rounded-xl shadow-xl flex items-start gap-3 w-full md:w-3/4 border border-[#E2E8F0]">
         <div className="w-2 h-2 rounded-full bg-[#007FFF] mt-1 shrink-0"></div>
         <div>
           <span className="font-semibold text-sm block mb-1">Insight Detected</span>
           <span className="text-xs text-[#555555]">Email open rates peak at 10 AM on Tuesdays. Shall I reschedule the next batch?</span>
         </div>
      </div>
    </div>
  );
}

function SupportUI() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[420px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 relative overflow-hidden flex flex-col">
      <div className="flex items-center gap-4 mb-6">
         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] flex items-center justify-center text-white shrink-0">
           <Bot className="w-5 h-5" />
         </div>
         <div>
           <h4 className="font-semibold text-sm text-[#111111] mb-1">Support Agent</h4>
           <p className="text-xs text-[#555555]">Inbox Zero Achieved • 142 tickets resolved today</p>
         </div>
      </div>
      <div className="space-y-3">
         <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] opacity-50 flex justify-between items-center">
            <div>
              <div className="font-medium text-sm line-through text-[#888888]">Billing issue with last invoice</div>
              <div className="text-xs text-[#888888]">Resolved by AI in 2 mins</div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
         </div>
         <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] flex justify-between items-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#007FFF]"></div>
            <div>
              <div className="font-medium text-sm text-[#111111] mb-1">Need help setting up integration</div>
              <div className="text-xs text-[#555555]">Currently assisting user with step-by-step guide...</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#007FFF] animate-pulse"></div>
         </div>
      </div>
    </div>
  );
}

// ─── Sub-components for Bottom Cards ──────────────────────────────────────────

function CollaborateUI() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[280px] bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-4 relative z-10">
         <h5 className="font-semibold text-sm mb-2 text-[#111111]">Campaign Brief</h5>
         <p className="text-xs text-[#888888] leading-relaxed mb-4">Central hub guiding new team members through resources to ensure smooth onboarding.</p>
         
         <div className="space-y-2">
           <div className="flex items-center gap-2 text-xs text-[#555555]">
             <div className="w-4 h-4 rounded border border-[#E2E8F0]"></div> Review Assets
           </div>
           <div className="flex items-center gap-2 text-xs text-[#555555]">
             <div className="w-4 h-4 rounded border border-[#E2E8F0]"></div> Finalize Copy
           </div>
         </div>
      </div>
      {/* Floating cursors/badges */}
      <div className="absolute top-4 right-2 md:top-8 md:right-6 bg-[#007FFF] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-20">
        <Bot className="w-3 h-3" /> Marketing Agent
      </div>
      <div className="absolute bottom-4 left-2 md:bottom-10 md:left-4 bg-[#111111] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-20">
        <User className="w-3 h-3" /> Sarah (Human)
      </div>
    </div>
  );
}

function ManagedUI() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 relative flex flex-col justify-center items-center">
      <div className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-4">Org Chart</div>
      
      <div className="flex flex-col items-center w-full">
        <div className="bg-white px-3 py-2 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col items-center z-10">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#007FFF] mb-1">
            <User className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-[#111111]">Head of Marketing</span>
          <span className="text-[10px] text-[#888888]">Human</span>
        </div>
        
        {/* Flexbox Lines instead of Absolute positioning */}
        <div className="w-[1px] h-4 bg-[#E2E8F0]"></div>
        <div className="w-full max-w-[200px] h-[1px] bg-[#E2E8F0]"></div>
        
        <div className="flex justify-between w-full max-w-[240px]">
           <div className="flex flex-col items-center w-1/3">
              <div className="w-[1px] h-4 bg-[#E2E8F0]"></div>
              <div className="bg-white p-2 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col items-center w-[90%] min-w-[60px]">
                 <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-1">
                   <PenTool className="w-3 h-3 md:w-4 md:h-4" />
                 </div>
                 <span className="text-[9px] md:text-[10px] font-medium text-center leading-tight">Content</span>
              </div>
           </div>
           <div className="flex flex-col items-center w-1/3">
              <div className="w-[1px] h-4 bg-[#E2E8F0]"></div>
              <div className="bg-white p-2 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col items-center w-[90%] min-w-[60px]">
                 <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-1">
                   <BarChart2 className="w-3 h-3 md:w-4 md:h-4" />
                 </div>
                 <span className="text-[9px] md:text-[10px] font-medium text-center leading-tight">Analytics</span>
              </div>
           </div>
           <div className="flex flex-col items-center w-1/3">
              <div className="w-[1px] h-4 bg-[#E2E8F0]"></div>
              <div className="bg-white p-2 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col items-center w-[90%] min-w-[60px]">
                 <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-1">
                   <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                 </div>
                 <span className="text-[9px] md:text-[10px] font-medium text-center leading-tight">Support</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
