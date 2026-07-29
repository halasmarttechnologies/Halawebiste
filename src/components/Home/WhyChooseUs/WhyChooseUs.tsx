import { Target, Users, Headset } from 'lucide-react';

const reasons = [
  { title: 'Real Results', icon: Target },
  { title: 'Real Partner', icon: Users },
  { title: 'Reliable Support', icon: Headset },
];

export default function WhyChooseUs() {


  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-8 md:pt-10 pb-16 md:pb-20 flex justify-center">
      <div className="max-w-[1200px] w-full bg-white rounded-[32px] border-2 border-[#111111] p-8 md:p-14 lg:p-16 relative shadow-[8px_8px_0px_0px_#111111] md:shadow-[12px_12px_0px_0px_#111111]">

        {/* Content Container */}
        <div className="flex flex-col items-center text-center relative z-10">

          {/* Title */}
          <h2 className="font-jakarta font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-wide uppercase text-[#111111] mb-6">
            Why Choose Us
          </h2>

          {/* Description */}
          <p className="text-[#333333] text-base md:text-lg font-medium max-w-3xl leading-[1.6] mb-10">
            At Hala Technology, we combine strategy, creativity, and data-driven execution to help businesses grow with confidence. Our focus is on delivering real results, innovative solutions, and reliable support that drive long-term success.
          </p>

          {/* Buttons / Pills */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#007FFF] border border-[#007FFF] rounded-full px-6 py-3 shadow-[2px_2px_0px_0px_#111111] hover:shadow-[4px_4px_0px_0px_#111111] hover:-translate-y-0.5 transition-all cursor-default"
                >
                  <Icon className="w-5 h-5 text-white stroke-[2]" />
                  <span className="font-jakarta font-semibold text-white text-sm md:text-base whitespace-nowrap">
                    {reason.title}
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
