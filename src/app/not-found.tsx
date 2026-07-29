import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Home/Footer/Footer';

export default function NotFound() {
  return (
    <div className="font-jakarta bg-[#111111] text-white min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-32 z-10">
        <span className="text-[120px] sm:text-[180px] font-extrabold text-[#007FFF] leading-none tracking-tighter select-none opacity-90">
          404
        </span>
        <h1 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-[#007FFF] text-white rounded-xl text-sm font-semibold hover:bg-[#0066CC] transition-colors shadow-lg shadow-[#007FFF]/20 no-underline"
        >
          Return to Homepage
        </Link>
      </main>

      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
