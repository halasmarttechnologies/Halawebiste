'use client';

import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// Reusable SVG for the Smiley Face
const SmileyFace = ({ className, eyeColor = "#000" }: { className?: string, eyeColor?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`}>
    {/* Left Eye */}
    <path d="M30 40 C30 35 38 35 38 40" stroke={eyeColor} strokeWidth="6" strokeLinecap="round" />
    {/* Right Eye */}
    <path d="M62 40 C62 35 70 35 70 40" stroke={eyeColor} strokeWidth="6" strokeLinecap="round" />
    {/* Smile */}
    <path d="M25 55 Q50 80 75 55" stroke={eyeColor} strokeWidth="6" strokeLinecap="round" />
  </svg>
);
const timeSlots = ['09:00 AM', '10:30 AM', '11:15 AM', '01:00 PM', '02:30 PM', '04:15 PM'];

export default function ContactCTA({ contained = false }: { contained?: boolean }) {
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');
  const [selectedDate, setSelectedDate] = useState<number>(7);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);



  const handleTimeSelect = useCallback((time: string) => {
    setSelectedTime(time);
    setStep('form');
  }, []);

  const handleBack = useCallback(() => {
    setStep('calendar');
    setSelectedTime(null);
  }, []);

  const getDayOfWeek = useCallback((dateNum: number) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[(dateNum + 2) % 7];
  }, []);

  const innerContent = (
    <div className="max-w-[1150px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 lg:gap-16 items-center z-10 relative">
        
        {/* Left Side: Typography & Smileys */}
        <div className="flex flex-col relative h-full justify-center items-center lg:items-start text-center lg:text-left">
          
          {/* Real Hala Logo */}
          <div className="flex items-center gap-2 mb-6 sm:mb-10">
            <Image src="/halalogo.png" alt="Hala Logo" width={80} height={26} style={{ width: 'auto', height: '26px' }} priority className="brightness-0 invert" />
          </div>

          {/* Heading */}
          <div className="max-w-[500px] z-10 relative">
            <h1 className="font-sans font-semibold text-3xl sm:text-5xl md:text-[60px] leading-[1.05] tracking-tight mb-2 text-white">
              See if Hala is<br />
              the right fit for you
            </h1>
            <h2 className="font-ebgaramond italic text-[36px] sm:text-[50px] md:text-[65px] leading-[1] text-white mb-4 sm:mb-6">
              (it totally is)
            </h2>
            
            <p className="text-white text-sm sm:text-base md:text-lg max-w-[340px] leading-snug font-medium mx-auto lg:mx-0">
              Schedule a quick, 15 minute guided tour through Hala.
            </p>
          </div>

          {/* Smileys Cluster - Hidden on small mobile to avoid overflow, visible on sm and up */}
          <div className="hidden sm:block relative mt-10 lg:mt-16 h-[160px] lg:h-[200px] w-full max-w-[360px] lg:max-w-[450px] scale-90 lg:scale-100 origin-center lg:origin-left select-none">
            {/* White */}
            <div className="absolute bottom-0 left-0 w-24 lg:w-28 h-24 lg:h-28 rounded-full bg-white flex items-center justify-center z-10 shadow-lg border border-[#222]">
              <SmileyFace className="w-12 lg:w-16 h-12 lg:h-16 -rotate-[15deg]" />
            </div>
            {/* Azure Blue */}
            <div className="absolute bottom-10 lg:bottom-12 left-12 lg:left-16 w-28 lg:w-32 h-28 lg:h-32 rounded-full bg-[#007FFF] flex items-center justify-center z-0 shadow-lg">
              <SmileyFace className="w-12 lg:w-16 h-12 lg:h-16 rotate-[10deg]" eyeColor="#FFF" />
            </div>
            {/* Black */}
            <div className="absolute -bottom-4 lg:-bottom-6 left-20 lg:left-24 w-20 lg:w-24 h-20 lg:h-24 rounded-full bg-[#111111] flex items-center justify-center z-20 shadow-xl border-4 border-[#222]">
              <SmileyFace className="w-10 lg:w-12 h-10 lg:h-12 rotate-[20deg]" eyeColor="#FFF" />
            </div>
            {/* White (Small) */}
            <div className="absolute bottom-16 lg:bottom-20 left-28 lg:left-36 w-16 lg:w-20 h-16 lg:h-20 rounded-full bg-white flex items-center justify-center z-30 shadow-lg border border-[#222]">
              <SmileyFace className="w-8 lg:w-10 h-8 lg:h-10" />
            </div>
            {/* Azure Blue */}
            <div className="absolute bottom-0 left-36 lg:left-44 w-20 lg:w-24 h-20 lg:h-24 rounded-full bg-[#007FFF] flex items-center justify-center z-10 shadow-lg">
              <SmileyFace className="w-10 lg:w-12 h-10 lg:h-12 -rotate-[10deg]" eyeColor="#FFF" />
            </div>
            {/* Black */}
            <div className="absolute bottom-12 lg:bottom-16 left-44 lg:left-52 w-24 lg:w-28 h-24 lg:h-28 rounded-full bg-[#111111] flex items-center justify-center z-20 shadow-lg border-2 border-[#333]">
              <SmileyFace className="w-12 lg:w-14 h-12 lg:h-14 rotate-[15deg]" eyeColor="#FFF" />
            </div>
            {/* White (Large) */}
            <div className="absolute -bottom-2 left-52 lg:left-60 w-24 lg:w-28 h-24 lg:h-28 rounded-full bg-white flex items-center justify-center z-40 shadow-lg border border-[#222]">
              <SmileyFace className="w-12 lg:w-14 h-12 lg:h-14 -rotate-[20deg]" />
            </div>
            {/* Azure Blue (Behind White) */}
            <div className="absolute bottom-0 left-[230px] lg:left-[280px] w-20 lg:w-24 h-20 lg:h-24 rounded-full bg-[#007FFF] flex items-center justify-center z-10 shadow-lg">
              <SmileyFace className="w-10 lg:w-12 h-10 lg:h-12 rotate-[10deg]" eyeColor="#FFF" />
            </div>
          </div>
        </div>

        {/* Right Side: Interactive UI Card */}
        <div className="bg-[#191919] rounded-[20px] sm:rounded-[24px] border border-[#2A2A2A] p-4 sm:p-6 w-full max-w-[420px] min-h-[460px] sm:min-h-[500px] shadow-2xl mx-auto lg:ml-auto overflow-hidden relative">
          
          {step === 'calendar' ? (
            <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-300 h-full">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-[18px] font-semibold text-white">
                  July <span className="text-white">2026</span>
                </h3>
                <div className="flex items-center gap-4 text-white">
                  <ChevronLeft className="w-4 h-4 cursor-not-allowed opacity-50" />
                  <ChevronRight className="w-4 h-4 cursor-pointer hover:text-white/80 transition-colors" />
                </div>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <span key={day} className="text-[9px] font-bold tracking-wider text-white">
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-medium mb-6">
                <div className="h-8"></div>
                <div className="h-8"></div>
                <div className="h-8"></div>
                
                {/* Past Days (Disabled) */}
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <div key={num} className="h-8 w-full flex items-center justify-center text-[#444] select-none">
                    {num}
                  </div>
                ))}

                {/* Available Days (Clickable) */}
                {Array.from({ length: 25 }, (_, i) => i + 7).map(num => {
                  const isSelected = selectedDate === num;
                  return (
                    <div 
                      key={num} 
                      onClick={() => setSelectedDate(num)}
                      className={`h-8 w-full flex items-center justify-center rounded-[8px] cursor-pointer transition-colors shadow-sm ${
                        isSelected 
                          ? 'bg-white text-black font-bold shadow-md' 
                          : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                      }`}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#333] pt-5 mt-auto">
                {/* Time Slots Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-bold text-white">
                    {getDayOfWeek(selectedDate)} <span className="text-white"> {selectedDate < 10 ? `0${selectedDate}` : selectedDate}</span>
                  </span>
                  <div className="flex items-center bg-[#111111] border border-[#333] rounded-full p-1 text-[10px] font-medium">
                    <button className="px-2.5 py-1 rounded-full text-white hover:text-white/80 transition-colors">12h</button>
                    <button className="px-2.5 py-1 rounded-full bg-[#2A2A2A] text-white">24h</button>
                  </div>
                </div>

                {/* Compact Time Slots Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {timeSlots.map(time => (
                    <button 
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="w-full py-2 border border-[#3A3A3A] rounded-xl text-[12px] font-semibold text-white bg-[#1E1E1E] hover:bg-[#2A2A2A] hover:border-[#555] transition-all shadow-sm"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
              <button 
                onClick={handleBack} 
                className="flex items-center gap-1.5 text-white hover:text-white/80 mb-5 w-fit transition-colors text-[13px] font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              
              <h3 className="text-[18px] font-bold text-white mb-1">Confirm booking</h3>
              <p className="text-white text-[12px] mb-6">
                You selected <span className="font-semibold">{getDayOfWeek(selectedDate)}, July {selectedDate} at {selectedTime}</span>
              </p>

              <form className="flex flex-col gap-3.5 flex-1" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-white">Your name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    required
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-white/60" 
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-white">Email address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-white/60" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-white">Meeting topic</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Website redesign"
                    required
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-white/60" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-white">Additional note (optional)</label>
                  <textarea 
                    rows={2}
                    placeholder="Any specific questions?"
                    className="w-full bg-[#111111] border border-[#333] rounded-xl px-3.5 py-2.5 text-[13px] text-white focus:border-[#007FFF] focus:outline-none focus:bg-[#1A1A1A] transition-colors placeholder:text-white/60 resize-none" 
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-auto w-full bg-white text-[#111111] rounded-xl py-3 font-bold text-[14px] hover:bg-[#007FFF] hover:text-white transition-colors shadow-md"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          )}

        </div>
    </div>
  );

  if (contained) {
    return (
      <section className="bg-white w-full px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 flex justify-center">
        <div className="w-full bg-[#111111] text-white rounded-[32px] md:rounded-[40px] px-4 sm:px-6 md:px-10 py-12 md:py-16 shadow-2xl relative overflow-hidden flex justify-center">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#007FFF]/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#007FFF]/10 blur-[80px] rounded-full pointer-events-none"></div>
          {innerContent}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#111111] text-white w-full py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden flex items-center justify-center">
      {innerContent}
    </section>
  );
}
