import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Home/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hala Technology',
  description: 'Privacy Policy for Hala Technology. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="font-jakarta bg-[#111111] text-white min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-start text-left px-4 sm:px-6 pt-32 pb-24 z-10 w-full max-w-[1080px] mx-auto">
        <h1 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="text-white/80 text-base sm:text-lg w-full space-y-6 leading-relaxed">
          <p>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 mt-8">1. Introduction</h2>
            <p>
              Welcome to Hala Technology. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 mt-8">2. The Data We Collect About You</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 mt-8">3. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. 
            </p>
            <p className="mt-2">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 mt-8">4. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3 mt-8">5. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 mt-8">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at our provided contact methods on the Contact Us page.
            </p>
          </section>

        </div>
      </main>

      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
