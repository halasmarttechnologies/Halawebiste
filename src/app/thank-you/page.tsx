import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Footer = dynamic(() => import('@/components/Home/Footer'));

export const metadata = {
  title: 'Thank You | Hala Technology',
  description: 'Your booking has been confirmed.',
  robots: { index: false, follow: false }, // Typically thank you pages shouldn't be indexed
};

export default function ThankYouPage() {
  return (
    <div className="font-jakarta bg-[#111111] text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full bg-white pt-[120px] md:pt-[160px] pb-16 flex items-center justify-center">
        <div className="max-w-[600px] w-full px-6 py-12 md:py-20 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
          
          <div className="w-24 h-24 bg-[#000000] text-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <Check className="w-12 h-12 text-white stroke-[3]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-jakarta font-bold text-[#111111] mb-6 leading-tight tracking-tight">
            Booking Confirmed!
          </h1>
          
          <p className="text-[#444444] text-lg sm:text-xl font-medium max-w-[480px] leading-relaxed mb-10">
            Thank you for reaching out. We have received your details, and our team will connect with you shortly to discuss how we can help you grow.
          </p>

          <Link 
            href="/"
            className="flex items-center justify-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] active:scale-[0.97] text-white font-bold text-[16px] px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#007FFF]/30"
          >
            Back to Home
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </Link>

        </div>
      </main>

      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
