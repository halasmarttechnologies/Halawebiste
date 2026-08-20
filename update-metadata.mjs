import fs from 'fs';
import path from 'path';

const basePath = 'e:/Hala/src/app';

const pagesToUpdate = [
  {
    file: 'page.tsx',
    title: 'Digital Marketing Agency Dubai | Best Marketing Company',
    desc: 'Hala Technology is a leading digital marketing agency in Dubai helping brands grow with SEO, PPC & web development. Get a free audit today.',
    url: 'https://halatechnologies.com',
  },
  {
    file: 'branding/graphic-design/page.tsx',
    title: 'Graphic Design Services in Dubai | Graphic Design Agency',
    desc: 'Need creative visuals? Get graphic design services in Dubai for logos, ads and social media designs tailored to your business and audience.',
    url: 'https://halatechnologies.com/graphic-design-services-in-dubai',
  },
  {
    file: 'branding/video-editing/page.tsx',
    title: 'Video Editing Services Dubai | Video Editing Agency',
    desc: 'Hala Technology offers professional video editing services in Dubai for social media, ads & corporate videos. Turn raw footage into impact.',
    url: 'https://halatechnologies.com/video-editing-services-dubai',
  },
  {
    file: 'branding/content-creation/page.tsx',
    title: 'Content Creation Services | Social Media & Web Content',
    desc: 'Hala Technology provides content creation services in Dubai, from website copy to social posts and video scripts, built to tell your brand story.',
    url: 'https://halatechnologies.com/content-creation-services',
  },
  {
    file: 'digital-marketing/page.tsx',
    title: 'Best Digital Marketing Services in Dubai | SEO, PPC & SMM',
    desc: 'Looking for digital marketing services in Dubai? Hala Technology helps businesses attract leads through SEO, PPC, social media and content.',
    url: 'https://halatechnologies.com/best-digital-marketing-services-in-dubai',
  },
  {
    file: 'seo/page.tsx',
    title: 'Best SEO Services in Dubai | On-Page & Technical SEO',
    desc: 'Looking for the best SEO services in Dubai? Hala Technology helps improve Google rankings with technical, on-page and content optimization.',
    url: 'https://halatechnologies.com/best-seo-services-in-dubai',
  },
  {
    file: 'smm/page.tsx',
    title: 'Social Media Marketing Services in Dubai | SMM Services',
    desc: 'Boost your online presence with our social media marketing services in Dubai. We help brands create engaging content and campaigns.',
    url: 'https://halatechnologies.com/social-media-marketing-services-in-dubai',
  },
  {
    file: 'ppc/page.tsx',
    title: 'PPC Service in Dubai | Google Ads & Paid Search',
    desc: 'Looking for PPC service in Dubai? Reach high-intent customers with optimized Google Ads campaigns built around your business goals.',
    url: 'https://halatechnologies.com/ppc-service-in-dubai',
  },
  {
    file: 'ai-agent/page.tsx',
    title: 'AI Agent Services | AI Chatbots & Automation',
    desc: 'Transform your business with our AI agent services that automate workflows, handle customer queries and help teams work more efficiently.',
    url: 'https://halatechnologies.com/ai-agent-services',
  },
  {
    file: 'whatsapp-automation/page.tsx',
    title: 'WhatsApp Automation Services | Chatbots & Workflows',
    desc: 'Boost customer engagement with our whatsApp automation services for lead generation, follow-ups and support. Automate conversations 24/7.',
    url: 'https://halatechnologies.com/whatsapp-automation-services',
  }
];

pagesToUpdate.forEach(pageInfo => {
  const fullPath = path.join(basePath, pageInfo.file);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');

  // Regex to replace title, description, url, canonical
  content = content.replace(/title:\s*'[^']+'/g, `title: '${pageInfo.title.replace(/'/g, "\\'")}'`);
  content = content.replace(/description:\s*'[^']+'/g, `description:\n    '${pageInfo.desc.replace(/'/g, "\\'")}'`);
  content = content.replace(/url:\s*'[^']+'/g, `url: '${pageInfo.url}'`);
  content = content.replace(/canonical:\s*'[^']+'/g, `canonical: '${pageInfo.url}'`);

  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${pageInfo.file}`);
});
