'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const footerColumns = [
  {
    header: 'HALA TECHNOLOGIES',
    links: [
      { name: 'Homepage', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact Us', href: '/contact' },
    ]
  },
  {
    header: 'SERVICES',
    links: [
      { name: 'Branding', href: '/branding' },
      { name: 'Web Development', href: '/website-development' },
      { name: 'Digital Marketing', href: '/digital-marketing' },
      { name: 'AI Agent', href: '/ai-agent' },
    ]
  },
  {
    header: 'RESOURCES',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQs', href: '/faqs' },
    ]
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className={`bg-[#111111] font-poppins text-white flex flex-col w-full px-6 pt-16 pb-8 md:px-16 md:pt-20 md:pb-10 border-t border-[#222222] relative ${!isHomePage ? 'rounded-t-[40px] md:rounded-t-[60px] mt-10' : ''}`}>
      
      {/* TOP SECTION: Logo + Driving Digital Growth */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full border-b border-[#222222] pb-12 md:pb-16 mb-12 md:mb-16 gap-10 lg:gap-0 max-w-[1400px] mx-auto">
        <div className="hidden lg:flex items-center">
          {/* Logo matches Hala but inverted for dark background */}
          <Image 
            src="/halalogofooter.png" 
            alt="Hala Logo" 
            width={280} 
            height={90} 
            className="object-contain brightness-0 invert" 
            priority
          />
        </div>

        <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
          <div className="flex items-center gap-4 w-full lg:w-auto mb-2 opacity-80">
            <span className="font-poppins text-xs sm:text-sm tracking-widest uppercase font-light">Dubai, UAE</span>
            <div className="flex-1 lg:w-[150px] h-px bg-[#333333]"></div>
            <span className="font-poppins text-xs sm:text-sm tracking-widest uppercase font-light">Global Reach</span>
          </div>
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Driving Digital Growth
          </h1>
        </div>
      </div>

      {/* MIDDLE SECTION: Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-[1400px] mx-auto">
        {footerColumns.map((col, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-white font-semibold text-[11px] sm:text-xs tracking-[0.1em] mb-6 self-start uppercase opacity-60">
              {col.header}
            </h3>
            <ul className="space-y-4">
              {col.links.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-[14px] sm:text-[15px] font-poppins text-white hover:text-white/80 transition-colors">
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Special 4th column for HEADQUARTERS */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-[11px] sm:text-xs tracking-[0.1em] mb-6 self-start uppercase opacity-60">
            Headquarters
          </h3>
          <h4 className="font-poppins font-light text-white text-[15px] mb-4 flex items-center group cursor-default">
            Dubai Office <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100 transition-all" />
          </h4>
          <ul className="space-y-4 text-[13px] sm:text-[14px] font-poppins text-white/90">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#007FFF]" />
              <span className="font-light">1803, Latifa Tower, Sheikh Zayed Road, Dubai, UAE.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-[#007FFF]" />
              <span className="font-light">+971 58 613 9007</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-[#007FFF]" />
              <span className="font-light">Contact@halatechnology.ae</span>
            </li>
          </ul>

          {/* Mobile Logo (Shown only on small screens below the email) */}
          <div className="flex lg:hidden mt-12 mb-4 items-center justify-center sm:justify-start w-full">
            <Image 
              src="/halalogofooter.png" 
              alt="Hala Logo" 
              width={260} 
              height={85} 
              className="object-contain brightness-0 invert" 
            />
          </div>
        </div>
      </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] sm:text-[12px] font-poppins text-white/70 gap-6 md:gap-0 max-w-[1400px] mx-auto w-full">
          <div>
            {new Date().getFullYear()} Hala Technologies | All rights reserved
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>

          <div className="flex items-center gap-1.5 opacity-90">
            site by <span className="text-white font-bold tracking-wider uppercase text-[10px] ml-0.5">HALA</span>
          </div>
        </div>

      </footer>
  );
}

