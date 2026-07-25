import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { name: 'About Hala', href: '/about' },
      { name: 'Our Journey', href: '/#our-journey' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact Us', href: '/#contact' },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Digital Marketing', href: '/marketing/digital' },
      { name: 'SEO Strategy', href: '/marketing/seo' },
      { name: 'Web Development', href: '/development/web' },
      { name: 'App Development', href: '/development/app' },
      { name: 'Content Creation', href: '/branding/content-creation' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Branding Kit', href: '/branding' },
      { name: 'Marketing Guides', href: '/resources/guides' },
      { name: 'Media Kit', href: '/resources/media-kit' },
      { name: 'Talk to Sales', href: '/#contact' },
      { name: 'Help Center', href: '/help' },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white flex flex-col w-full px-6 pt-16 pb-6 sm:px-10 sm:pt-20 sm:pb-8 md:px-16 md:pt-24 md:pb-8 border-t border-[#222] rounded-t-[40px] md:rounded-t-[60px]">

      {/* ── Top section: Links ── */}
      <div className="flex flex-col md:flex-row justify-between max-w-[1000px] w-full mx-auto mb-16 md:mb-24 gap-12 md:gap-0">
        {footerColumns.map((col, index) => (
          <div key={index} className="flex flex-col items-center w-full md:w-[30%]">
            <h3 className="font-ebgaramond text-3xl md:text-[34px] text-white font-normal tracking-wide mb-6 text-center">
              {col.title}
            </h3>
            <ul className="space-y-3.5 text-center">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins text-[15px] md:text-[16px] text-white hover:text-[#cccccc] transition-colors font-medium tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Giant HALA Branding Typography ── */}
      <div className="w-full max-w-[1200px] mx-auto my-4 flex justify-center items-center select-none overflow-hidden">
        <Image
          src="/halalogofooter.png"
          alt="HALA Logo"
          width={1200}
          height={300}
          className="w-full h-auto max-h-[160px] sm:max-h-[220px] md:max-h-[300px] object-contain brightness-0 invert opacity-95"
          priority
        />
      </div>

      {/* ── Bottom Bar: Copyright, Socials, & Terms ── */}
      <div className="border-t border-[#222222] pt-6 mt-4 max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between text-xs md:text-sm font-poppins font-medium gap-6">
        <p className="text-center md:text-left text-white opacity-80">© {new Date().getFullYear()} Hala Smart Technologies. All rights reserved.</p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* Policy Links */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white hover:text-[#cccccc] transition-colors opacity-90">Privacy Policy</Link>
            <Link href="#" className="text-white hover:text-[#cccccc] transition-colors opacity-90">Terms of Service</Link>
          </div>

          {/* Vertical Divider (hidden on mobile) */}
          <div className="hidden sm:block w-px h-6 bg-[#444444]"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-transparent border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-all">
              <FaInstagram size={15} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-transparent border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-all">
              <FaLinkedin size={15} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-transparent border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-all">
              <FaFacebook size={15} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-transparent border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-all">
              <FaTwitter size={15} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
