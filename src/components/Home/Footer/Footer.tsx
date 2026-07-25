import Link from 'next/link';
import Image from 'next/image';

// Inline SVG social brand icons — no external icon library needed
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerColumns = [
  {
    title: 'Company',
    links: [
      { name: 'About Hala', href: '/about' },
      { name: 'Our Journey', href: '/#our-journey' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact Us', href: '/contact' },
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
      { name: 'Talk to Sales', href: '/contact' },
      { name: 'Help Center', href: '/help' },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white flex flex-col w-full px-6 pt-16 pb-6 sm:px-10 sm:pt-20 sm:pb-8 md:px-16 md:pt-24 md:pb-8 border-t border-[#222] rounded-t-[40px] md:rounded-t-[60px] rounded-b-none">

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

          {/* Social Icons (Modern rounded square badge style) */}
          <div className="flex items-center gap-2.5">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-white hover:bg-[#007FFF] hover:border-[#007FFF] hover:scale-105 transition-all shadow-sm">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-white hover:bg-[#007FFF] hover:border-[#007FFF] hover:scale-105 transition-all shadow-sm">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-white hover:bg-[#007FFF] hover:border-[#007FFF] hover:scale-105 transition-all shadow-sm">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-white hover:bg-[#007FFF] hover:border-[#007FFF] hover:scale-105 transition-all shadow-sm">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

