import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Home/Footer';
import OutroMessage from '@/components/About/OutroMessage';
import { BlogPost } from '@/lib/blogs';
import { getSingleBlogData, getAllBlogsData } from '@/lib/data-provider';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getSingleBlogData(slug);

  if (!blog) {
    return {
      title: 'Blog Article Not Found | Hala Technologies',
      description: 'The requested blog publication could not be found.',
    };
  }

  const title = blog.seo?.metaTitle || `${blog.title} | Hala Technologies`;
  const description = blog.seo?.metaDescription || blog.excerpt;
  const canonical = blog.seo?.canonicalUrl || `https://halatechnologies.com/blog/${blog.slug || blog.id}`;
  const ogImage = blog.seo?.ogImage || blog.image;

  return {
    title,
    description,
    keywords: blog.seo?.keywords || [blog.category, 'Hala Technologies', 'Dubai Digital Marketing'],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Hala Technologies',
      images: [{ url: ogImage }],
      type: 'article',
      publishedTime: blog.createdAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlogData(slug);

  if (!blog || blog.status !== 'published') {
    notFound();
  }

  const { blogs: allBlogs } = await getAllBlogsData();
  const relatedPosts = allBlogs
    .filter((b: BlogPost) => b.status === 'published' && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="font-jakarta bg-white text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#888888] hover:text-[#007FFF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights & Articles</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="bg-[#007FFF] text-white text-xs font-semibold px-3 py-1 rounded-md">
                {blog.category}
              </span>
              <span className="text-xs text-[#888888] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight tracking-tight">
              {blog.title}
            </h1>

            {/* Author & Date */}
            <div className="flex items-center gap-4 text-xs text-[#666666] pt-2 border-t border-[#e5e5e5]">
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center font-bold text-[#007FFF]">
                  {blog.author?.name ? blog.author.name.charAt(0) : 'H'}
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">{blog.author?.name || 'Hala Strategy Team'}</p>
                  <p className="text-[10px] text-[#888888]">{blog.author?.role || 'Content Specialist'}</p>
                </div>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#111111]" />
                {blog.date}
              </span>
            </div>
          </div>

          {/* Banner Image */}
          {blog.image && (
            <div className="relative w-full h-[320px] md:h-[480px] bg-[#f5f5f5] rounded-2xl overflow-hidden mb-12 border border-[#e5e5e5]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Excerpt Lead Paragraph */}
          {blog.excerpt && (
            <div className="text-lg text-[#333333] font-medium leading-relaxed italic border-l-4 border-[#007FFF] pl-5 py-2 mb-10 bg-slate-50/50 rounded-r-xl">
              {blog.excerpt}
            </div>
          )}

          {/* Article Body Content */}
          <div
            className="prose prose-lg max-w-none text-[#222222] leading-relaxed space-y-6 text-base font-jakarta"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Google Ads / CTA Banner */}
          {blog.adsData?.ctaText && (
            <div className="mt-12 p-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C8FF]">
                  Partner with Hala Technologies
                </span>
                <h3 className="text-xl font-bold">Ready to scale your digital authority in the UAE?</h3>
                <p className="text-xs text-slate-300">Get tailored strategies designed for Dubai & Middle East enterprises.</p>
              </div>
              <a
                href={blog.adsData.ctaUrl || '/contact'}
                className="px-6 py-3 bg-[#007FFF] hover:bg-[#0066CC] text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
              >
                <span>{blog.adsData.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#e5e5e5]">
              <h3 className="text-xl font-bold text-[#111111] mb-6">Related Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related: BlogPost) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug || related.id}`}
                    className="group border border-[#e5e5e5] rounded-xl p-4 hover:border-[#007FFF] transition-all bg-white"
                  >
                    <span className="text-[10px] font-bold text-[#007FFF] block mb-2">{related.category}</span>
                    <h4 className="font-semibold text-sm text-[#111111] group-hover:text-[#007FFF] transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <OutroMessage />
      <Footer />
    </div>
  );
}
