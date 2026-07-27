import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Home/Footer';

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-jakarta bg-white text-[#111]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
