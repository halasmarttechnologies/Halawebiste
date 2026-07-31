import ContentCreation from '@/components/branding/ContentCreation/ContentCreation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Creation | Branding | Hala Technologies',
  description: 'Compelling content creation services.',
  alternates: {
    canonical: 'https://halatechnologies.com/branding/content-creation',
  },
};

export default function ContentCreationPage() {
  return (
    <div className="w-full">
      <ContentCreation />
    </div>
  );
}
