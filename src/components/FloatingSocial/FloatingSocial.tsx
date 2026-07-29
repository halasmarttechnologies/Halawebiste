'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: 'https://wa.me/971586139007',
    bgColor: 'bg-[#25D366] hover:bg-[#20ba5a]',
    textColor: 'text-white',
    shadowColor: 'shadow-[#25D366]/30',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    bgColor: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90',
    textColor: 'text-white',
    shadowColor: 'shadow-[#dc2743]/30',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    bgColor: 'bg-[#0A66C2] hover:bg-[#084e96]',
    textColor: 'text-white',
    shadowColor: 'shadow-[#0A66C2]/30',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
      </svg>
    )
  }
];

export default function FloatingSocial() {
  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 sm:gap-2.5 items-end pointer-events-none select-none">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          whileHover={{ x: -6 }}
          whileTap={{ scale: 0.95 }}
          className={`pointer-events-auto group relative flex items-center justify-center pl-3.5 pr-3 py-3 rounded-l-2xl rounded-r-none ${social.bgColor} ${social.textColor} shadow-lg ${social.shadowColor} border-y border-l border-white/20 transition-transform duration-200 [will-change:transform]`}
          aria-label={`Connect on ${social.name}`}
        >
          {social.icon}

          {/* Tooltip on Desktop Hover */}
          <span className="hidden md:block absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none bg-[#111111] text-white text-xs font-jakarta font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap border border-white/10">
            {social.name}
          </span>
        </motion.a>
      ))}
    </aside>
  );
}
