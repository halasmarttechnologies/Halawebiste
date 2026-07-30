'use client';

import React from 'react';

interface ServiceBlogSectionProps {
  targetPage: string;
  title?: string;
  subtitle?: string;
}

export default function ServiceBlogSection({
  targetPage,
  title = 'Insights & Industry Guides',
  subtitle = 'Expert resources and strategies tailored to scale your brand.',
}: ServiceBlogSectionProps) {
  // Hide this section until new blogs are updated
  return null;
}
