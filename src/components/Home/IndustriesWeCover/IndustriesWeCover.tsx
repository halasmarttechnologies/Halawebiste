import {
  Calendar, Building2, HeartPulse, Trophy,
  GraduationCap, Thermometer, Store, Shirt,
  Utensils, Zap, Briefcase, Sparkles, Camera
} from 'lucide-react';

const industries = [
  { name: 'Events Digital Marketing', icon: Calendar },
  { name: 'Hotel Digital Marketing', icon: Building2 },
  { name: 'Health Digital Marketing', icon: HeartPulse },
  { name: 'Sports Digital Marketing', icon: Trophy },
  { name: 'Educational Marketing', icon: GraduationCap },
  { name: 'HVAC Digital Marketing', icon: Thermometer },
  { name: 'Small Business Digital Marketing', icon: Store },
  { name: 'Fashion Marketing', icon: Shirt },
  { name: 'Food Digital Marketing', icon: Utensils },
  { name: 'Electrician Digital Marketing', icon: Zap },
  { name: 'B2B Marketing', icon: Briefcase },
  { name: 'Cleaning Marketing', icon: Sparkles },
  { name: 'Photography Marketing', icon: Camera },
];

export default function IndustriesWeCover() {
  return (
    <section className="bg-white py-16 md:py-20 w-full relative overflow-hidden px-4 sm:px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Title */}
        <h3 className="font-ebgaramond font-bold text-[#111111] text-xl md:text-4xl mb-12 text-center px-4">
          Industries We Cover
        </h3>

        {/* Marquee Container */}
        <div className="flex w-full overflow-hidden relative group">

          {/* First Track */}
          <div className="flex items-center animate-marquee whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={`first-${index}`}
                  className="flex items-center gap-3 px-8 md:px-12 text-[#111111]/80 hover:text-[#111111] transition-colors cursor-default"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
                  <span className="font-jakarta text-lg md:text-xl font-medium tracking-tight">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Second Track (Duplicate for seamless looping) */}
          <div className="flex items-center animate-marquee whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={`second-${index}`}
                  className="flex items-center gap-3 px-8 md:px-12 text-[#111111]/80 hover:text-[#111111] transition-colors cursor-default"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
                  <span className="font-jakarta text-lg md:text-xl font-medium tracking-tight">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
