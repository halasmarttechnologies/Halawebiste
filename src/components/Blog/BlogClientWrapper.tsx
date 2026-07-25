'use client';

import { useState } from 'react';
import BlogHero from './BlogHero';
import BlogGrid from './BlogGrid';

const CATEGORIES = [
  'All',
  'AI Marketing',
  'Digital Marketing',
  'SEO',
  'Social Media',
  'Visual Editing'
];

export default function BlogClientWrapper() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  return (
    <>
      <BlogHero 
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <BlogGrid activeCategory={activeCategory} />
    </>
  );
}
