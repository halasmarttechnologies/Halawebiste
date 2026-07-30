'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronDown, ArrowUpRight, Search, MousePointerClick,
  Share2, PenTool, LayoutTemplate, BarChart3, Menu, X, ChevronRight, Bot, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

// ─── Type definitions ──────────────────────────────────
interface SubItem {
  title: string;
  href: string;
}

interface ServiceItem {
  Icon: React.ElementType;
  title: string;
  desc: string;
  href?: string;
  subItems?: SubItem[];
  onNavigate?: () => void;
}

// ─── Data constants ────────────────────────────────────
const SERVICES: ServiceItem[] = [
  { 
    Icon: PenTool, 
    title: 'Branding', 
    desc: 'Crafting unique identities',
    href: '/branding',
    subItems: [
      { title: 'Graphic Designing', href: '/branding/graphic-design' },
      { title: 'Video Editing', href: '/branding/video-editing' },
      { title: 'Content Creation', href: '/branding/content-creation' },
    ]
  },
  { 
    Icon: LayoutTemplate, 
    title: 'Web Development', 
    desc: 'Fast, modern, and responsive websites',
    href: '/website-development'
  },
  { 
    Icon: BarChart3, 
    title: 'Digital Marketing', 
    desc: 'Rank higher and boost your sales',
    href: '/digital-marketing',
    subItems: [
      { title: 'SEO', href: '/seo' },
      { title: 'SMM', href: '/smm' },
      { title: 'PPC', href: '/ppc' },
    ]
  },
  { 
    Icon: Bot, 
    title: 'AI Agent', 
    desc: 'Automate tasks intelligently',
    href: '/ai-agent'
  },
  { 
    Icon: MessageCircle, 
    title: 'WhatsApp Automation', 
    desc: 'Seamless customer communication',
    href: '/whatsapp-automation'
  },
];

const SIMPLE_NAV_LINKS = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

// ─── Sub-components ────────────────────────────────────
function ServiceLink({ Icon, title, desc, href, subItems, onNavigate }: ServiceItem) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative group/subitem w-full">
      <div className="flex items-center md:items-start justify-between w-full">
        <Link href={href || '#'} className="flex gap-3 md:gap-4 items-center md:items-start no-underline text-inherit transition-opacity duration-150 hover:opacity-60 flex-1" onClick={onNavigate}>
          <div className="mt-0 md:mt-[2px] text-[#333]"><Icon size={18} className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" /></div>
          <div>
            <div className="text-[13.5px] md:text-[14.5px] font-semibold text-[#111] mb-0 md:mb-1">{title}</div>
            <div className="hidden md:block text-[13px] text-[#666] leading-[1.4]">{desc}</div>
          </div>
        </Link>
        {subItems && (
          <div 
            className="text-[#999] ml-2 flex items-center justify-center p-3 -mr-3 md:p-0 md:-mr-0 cursor-pointer md:cursor-default"
            onClick={(e) => {
              if (window.innerWidth < 768) {
                e.preventDefault();
                setMobileOpen(!mobileOpen);
              }
            }}
          >
            <ChevronRight size={16} className="hidden md:block transition-transform group-hover/subitem:translate-x-1" />
            <ChevronDown size={18} className={`md:hidden transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`} />
          </div>
        )}
      </div>

      {/* Desktop Submenu (pop-out right) with enlarged invisible hover bridge to fix diagonal mouse movement */}
      {subItems && (
        <div className="flex flex-col gap-2 absolute top-0 left-[calc(100%+15px)] bg-white border-[1.5px] border-[#111] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] min-w-[200px] p-4 z-[101] before:absolute before:content-[''] before:w-[60px] before:h-[150%] before:-left-[40px] before:-top-[25%] opacity-0 invisible translate-x-2 md:group-hover/subitem:opacity-100 md:group-hover/subitem:visible md:group-hover/subitem:translate-x-0 transition-all duration-300 ease-out pointer-events-none md:group-hover/subitem:pointer-events-auto">
          {subItems.map(sub => (
            <Link key={sub.title} href={sub.href} className="text-[14px] text-[#444] font-medium hover:text-[#111] hover:bg-[#f4f4f4] py-2 px-3 rounded-md transition-colors block" onClick={onNavigate}>
              {sub.title}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Submenu (accordion-style togglable) */}
      {subItems && (
        <div className={`md:hidden flex-col gap-2 pl-7 mt-2 border-l-2 border-[#f0f0f0] ml-2 overflow-hidden transition-all duration-300 ${mobileOpen ? 'flex max-h-[500px] opacity-100 mb-2' : 'max-h-0 opacity-0 !mt-0'}`}>
          {subItems.map(sub => (
            <Link key={sub.title} href={sub.href} className="text-[13.5px] text-[#555] py-1 hover:text-[#111] block" onClick={onNavigate}>
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main component ────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close all menus helper
  const closeAllMenus = useCallback(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  }, []);

  // Track scroll position for dynamic blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    // Check initial position and attach listener
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to prevent bugs
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Shared classes for navigation buttons
  const navBtnClass = 'flex items-center justify-between md:justify-start gap-[3px] text-[13.5px] font-medium text-[#444] bg-transparent border-none cursor-pointer transition-[color,background] duration-150 whitespace-nowrap py-2.5 px-3 rounded-lg hover:text-[#111] hover:bg-[#f4f4f4] w-full md:w-auto text-left';

  // Shared helper for dropdown panels
  const getDropdownClass = useCallback((isOpen: boolean, isMobile: boolean) => {
    const base = 'flex-col gap-4';
    if (isMobile) {
      return `flex ${base} w-full pl-3 border-l-2 border-[#f0f0f0] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0 !mt-0'}`;
    }
    const visibility = isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0';
    return `flex ${base} absolute top-[calc(100%+10px)] left-0 bg-white border-[1.5px] border-[#111] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-[360px] p-6 z-[100] transition-all duration-300 ease-out before:absolute before:content-[""] before:w-[150%] before:-left-[25%] before:h-[40px] before:-top-[30px] ${visibility}`;
  }, []);

  // Reusable NavLinks function so we can render it differently for mobile vs desktop
  const renderNavLinks = (isMobile = false) => (
    <ul className={`flex ${isMobile ? 'flex-col items-start w-full gap-2' : 'flex-row items-center gap-4'} list-none m-0 p-0`}>
      {/* Services */}
      <li className={`relative group ${isMobile ? 'w-full' : ''}`}>
        <button className={navBtnClass} onClick={() => setServicesOpen(!servicesOpen)}>
          Services
          <ChevronDown size={14} className={`transition-transform duration-200 ${!isMobile ? 'group-hover:rotate-180' : ''} ${servicesOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={getDropdownClass(servicesOpen, isMobile)}>
          <div className="text-[11px] font-semibold text-[#666] tracking-[0.5px] uppercase mb-[2px]">OUR SERVICES</div>
          {SERVICES.map(item => <ServiceLink key={item.title} {...item} onNavigate={closeAllMenus} />)}
        </div>
      </li>

      {/* Simple links */}
      {SIMPLE_NAV_LINKS.map(link => (
        <li key={link.label} className={isMobile ? 'w-full' : ''}>
          <Link href={link.href} className={navBtnClass} onClick={closeAllMenus}>
            {link.label}
          </Link>
        </li>
      ))}

      {/* Resources */}
      <li className={`relative group ${isMobile ? 'w-full' : ''}`}>
        <button className={navBtnClass} onClick={() => setResourcesOpen(!resourcesOpen)}>
          Resources
          <ChevronDown size={14} className={`transition-transform duration-200 ${!isMobile ? 'group-hover:rotate-180' : ''} ${resourcesOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={getDropdownClass(resourcesOpen, isMobile)}>
          <div className="text-[11px] font-semibold text-[#666] tracking-[0.5px] uppercase mb-[2px]">OUR RESOURCES</div>
        </div>
      </li>
    </ul>
  );

  return (
    <header className="flex flex-col items-center pt-5 px-4 sm:px-6 fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500 pointer-events-none">
      {/* 
        Main navbar container.
        Notice there is NO background color on the nav itself to ensure perfect layering.
      */}
      <nav
        className={`flex items-center justify-between py-3 px-4 sm:px-6 w-full max-w-[1080px] relative transition-all duration-500 ease-out rounded-2xl pointer-events-auto ${
          scrolled 
            ? 'border border-[#111111]/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' 
            : 'border border-[#e5e5e5] shadow-sm'
        }`}
      >
        {/* 
          Background Layer: Absolute sibling
          This dynamically applies the blur only on scroll WITHOUT causing Safari clipping bugs on the nav content!
        */}
        <div 
          className={`absolute inset-0 rounded-2xl -z-10 pointer-events-none transition-all duration-500 ease-out ${
            scrolled ? 'bg-white/65 backdrop-blur-lg' : 'bg-white'
          }`} 
        />

        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 z-10 no-underline transition-opacity hover:opacity-80">
          <Image src="/hala-logo/halalogo.png" alt="Hala Logo" width={80} height={26} style={{ width: 'auto', height: '26px' }} priority />
          <span className="font-jakarta text-[15px] font-bold tracking-[-0.3px] text-[#111] whitespace-nowrap">Hala Technology</span>
        </Link>

        {/* Desktop Nav (Hidden on Mobile) */}
        <div className="hidden md:flex md:flex-row md:items-center md:gap-4 w-full justify-end z-10">
          {renderNavLinks()}
          <div className="w-px h-8 bg-[#e0e0e0] mx-2" />
          <a 
            href="https://wa.me/971586139007?text=Hello%20Hala%20Team!%20I%20am%20contacting%20you%20directly%20from%20your%20website%20to%20inquire%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-[7px] py-2.5 px-5 bg-[#007FFF] text-white rounded-lg text-[13.5px] font-semibold cursor-pointer transition-colors hover:bg-[#0066CC] shadow-sm shadow-[#007FFF]/20 no-underline"
          >
            <span>Lets Talk</span>
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden z-10">
          <button
            type="button"
            className="flex items-center justify-center bg-transparent border-none cursor-pointer text-[#111] p-2 outline-none"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 
        Mobile Menu Dropdown
        Rendered COMPLETELY OUTSIDE the nav container to absolutely guarantee no z-index or clipping bugs.
      */}
      <div className={`md:hidden absolute top-[calc(100%+15px)] left-4 right-4 bg-white border border-[#e5e5e5] rounded-[18px] shadow-lg z-[9999] p-6 flex flex-col items-start gap-4 transition-all duration-300 ease-out origin-top pointer-events-auto ${menuOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2 pointer-events-none'}`}>
        {renderNavLinks(true)}
        <div className="w-full h-px bg-[#e0e0e0] my-1" />
        <a 
          href="https://wa.me/971586139007?text=Hello%20Hala%20Team!%20I%20am%20contacting%20you%20directly%20from%20your%20website%20to%20inquire%20about%20your%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closeAllMenus} 
          className="group flex items-center justify-center gap-[7px] py-2.5 px-5 bg-[#111] text-white rounded-lg text-[13.5px] font-semibold cursor-pointer w-full transition-colors hover:bg-[#333] shadow-sm no-underline"
        >
          <span>Lets Talk</span>
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
