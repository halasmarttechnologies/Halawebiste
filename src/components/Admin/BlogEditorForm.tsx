'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Upload, 
  Sparkles, 
  Search, 
  Globe, 
  Star, 
  Sliders, 
  Eye, 
  CheckCircle2, 
  Bold, 
  Italic, 
  List, 
  Heading1, 
  Heading2, 
  Quote, 
  ImageIcon,
  ArrowLeft,
  Target,
  LayoutGrid
} from 'lucide-react';
import { BlogPost } from '@/lib/blogs';

interface BlogEditorFormProps {
  initialData?: Partial<BlogPost>;
  isEditing?: boolean;
}

export default function BlogEditorForm({ initialData, isEditing = false }: BlogEditorFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [previewTab, setPreviewTab] = useState<'editor' | 'preview'>('editor');

  // Form State
  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || 'AI Marketing');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [authorName, setAuthorName] = useState(initialData?.author?.name || 'Hala Marketing Team');
  const [authorRole, setAuthorRole] = useState(initialData?.author?.role || 'SEO & Strategy Lead');
  const [status, setStatus] = useState<'published' | 'draft'>(initialData?.status || 'published');
  const [priority, setPriority] = useState<number>(initialData?.priority || 1);

  // Target Page & Placement State
  const [targetPage, setTargetPage] = useState<string>(initialData?.targetPage || 'all');
  const [showOnHomepage, setShowOnHomepage] = useState<boolean>(initialData?.showOnHomepage || false);
  const [homepagePriority, setHomepagePriority] = useState<number>(initialData?.homepagePriority || 1);
  const [homepageSection, setHomepageSection] = useState<'hero_featured' | 'grid_featured' | 'seo_spotlight'>(
    initialData?.homepageSection || 'grid_featured'
  );

  // SEO State
  const [metaTitle, setMetaTitle] = useState(initialData?.seo?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.seo?.metaDescription || '');
  const [keywords, setKeywords] = useState<string>(initialData?.seo?.keywords?.join(', ') || '');

  // Ads Data State
  const [campaignTag, setCampaignTag] = useState(initialData?.adsData?.campaignTag || '');
  const [ctaText, setCtaText] = useState(initialData?.adsData?.ctaText || 'Schedule Consultation');
  const [ctaUrl, setCtaUrl] = useState(initialData?.adsData?.ctaUrl || '/contact');

  // Image File Upload Handler converting file directly to Data URL with canvas compression
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (rawDataUrl) {
        const img = new Image();
        img.src = rawDataUrl;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxDim = 1200;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            // Compress to JPEG 80% quality (~100-200KB)
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
            setImage(compressedDataUrl);
          } else {
            setImage(rawDataUrl);
          }
        };
      }
    };
    reader.readAsDataURL(file);
  };

  // Insert Rich Formatting Snippets into Content
  const insertFormatting = (tag: string) => {
    let snippet = '';
    if (tag === 'h2') snippet = '\n<h2>Heading Title</h2>\n';
    else if (tag === 'h3') snippet = '\n<h3>Sub-heading Title</h3>\n';
    else if (tag === 'bold') snippet = '<strong>Bold Text</strong>';
    else if (tag === 'italic') snippet = '<em>Italic Text</em>';
    else if (tag === 'list') snippet = '\n<ul>\n  <li>List Item 1</li>\n  <li>List Item 2</li>\n</ul>\n';
    else if (tag === 'quote') snippet = '\n<blockquote className="border-l-4 border-[#007FFF] pl-4 italic text-slate-700 font-serif my-4">Important Takeaway Quote Here</blockquote>\n';
    
    setContent((prev) => prev + snippet);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert('Please enter a blog title');
      return;
    }

    setSubmitting(true);

    const payload = {
      title,
      category,
      excerpt,
      content,
      image: image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      authorName,
      authorRole,
      status,
      priority: Number(priority),
      showOnHomepage,
      homepagePriority: Number(homepagePriority),
      homepageSection,
      targetPage,
      seo: {
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt,
        keywords: typeof keywords === 'string' ? keywords.split(',').map((k) => k.trim()).filter(Boolean) : keywords,
      },
      adsData: {
        campaignTag,
        ctaText,
        ctaUrl,
      },
    };

    try {
      const url = isEditing ? `/api/blogs/${initialData?.id}` : '/api/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        // Automatically redirect to Blog Section table upon save
        router.push('/admin/blogs');
        router.refresh();
      } else {
        alert('Error saving blog: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to save blog post. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-6xl mx-auto pb-16 font-jakarta">
      {/* Top Header & Actions Bar */}
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-20 z-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {isEditing ? 'Edit Blog Article' : 'Create & Upload New Blog'}
            </h2>
            <p className="text-xs text-slate-500">Fill in content below. Changes save instantly to website pages.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mode Tabs */}
          <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-semibold">
            <button
              type="button"
              onClick={() => setPreviewTab('editor')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                previewTab === 'editor' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Write & Edit
            </button>
            <button
              type="button"
              onClick={() => setPreviewTab('preview')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                previewTab === 'preview' ? 'bg-white text-[#007FFF] shadow-sm' : 'text-slate-500'
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Live Preview
            </button>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#007FFF] text-white hover:bg-[#0066CC] transition-all shadow-md shadow-blue-500/20 disabled:opacity-50 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            {submitting ? 'Publishing...' : isEditing ? 'Update & Publish' : 'Publish Blog'}
          </button>
        </div>
      </div>

      {previewTab === 'preview' ? (
        /* Live Preview Mode */
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-[#007FFF] text-white text-xs font-bold px-3 py-1 rounded-md">
              {category}
            </span>
            <span className="text-xs text-slate-400 font-semibold">• Preview Mode</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title || 'Untitled Blog Article'}
          </h1>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pb-6 border-b border-slate-100">
            <span>By {authorName} ({authorRole})</span>
          </div>

          {image ? (
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full h-48 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-semibold">
              No Cover Image Selected
            </div>
          )}

          <p className="text-base text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#007FFF] pl-4 py-1">
            {excerpt || 'Blog summary excerpt preview will appear here.'}
          </p>

          <div 
            className="prose prose-slate max-w-none text-slate-800 text-base leading-relaxed space-y-4 pt-4"
            dangerouslySetInnerHTML={{ __html: content || '<p>Start typing in the editor to populate content.</p>' }}
          />

          {ctaText && (
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Need help implementing this strategy?</h4>
                <p className="text-xs text-slate-500">Contact the Hala Technologies team today.</p>
              </div>
              <a
                href={ctaUrl}
                target="_blank"
                className="px-4 py-2 bg-[#007FFF] text-white text-xs font-bold rounded-xl hover:bg-blue-600"
              >
                {ctaText}
              </a>
            </div>
          )}
        </div>
      ) : (
        /* Editor Mode Grid */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column: Content Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                1. Main Article Details
              </h3>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Article Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. How to Dominate Local SEO in Dubai 2026"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!metaTitle) setMetaTitle(e.target.value);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                  >
                    <option value="AI Marketing">AI Marketing</option>
                    <option value="SEO">SEO Optimization</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Visual Editing">Visual Editing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Publication Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                  >
                    <option value="published">● Published (Live on Site)</option>
                    <option value="draft">○ Draft (Hidden)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Summary / Excerpt (Shows on cards & search previews)
                </label>
                <textarea
                  rows={3}
                  placeholder="Short engaging summary of the blog post..."
                  value={excerpt}
                  onChange={(e) => {
                    setExcerpt(e.target.value);
                    if (!metaDescription) setMetaDescription(e.target.value);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>
            </div>

            {/* Visual Cover Image Uploader */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#007FFF]" /> 2. Featured Banner Image
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-48 h-32 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center shrink-0">
                  {image ? (
                    <img src={image} alt="Cover Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-slate-400 font-semibold">No Image</span>
                  )}
                </div>

                <div className="flex-1 space-y-3 w-full">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Upload Image from Computer
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-[#007FFF] hover:file:bg-blue-100 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Or Paste Image Web URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#007FFF]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* WYSIWYG Article Body Editor */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900">3. Article Body Content</h3>
                {/* Visual Editor Toolbar */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => insertFormatting('h2')}
                    className="p-1.5 text-slate-700 hover:bg-white rounded-lg text-xs font-bold cursor-pointer"
                    title="Insert Heading H2"
                  >
                    <Heading1 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('h3')}
                    className="p-1.5 text-slate-700 hover:bg-white rounded-lg text-xs font-bold cursor-pointer"
                    title="Insert Sub-heading H3"
                  >
                    <Heading2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('bold')}
                    className="p-1.5 text-slate-700 hover:bg-white rounded-lg text-xs font-bold cursor-pointer"
                    title="Bold text"
                  >
                    <Bold className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('italic')}
                    className="p-1.5 text-slate-700 hover:bg-white rounded-lg text-xs font-bold cursor-pointer"
                    title="Italic text"
                  >
                    <Italic className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('list')}
                    className="p-1.5 text-slate-700 hover:bg-white rounded-lg text-xs font-bold cursor-pointer"
                    title="Bullet List"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('quote')}
                    className="p-1.5 text-slate-700 hover:bg-white rounded-lg text-xs font-bold cursor-pointer"
                    title="Quote box"
                  >
                    <Quote className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <textarea
                rows={14}
                placeholder="Write your article content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#007FFF] leading-relaxed"
              />
            </div>
          </div>

          {/* Sidebar Column: Target Page, Priority, SEO & Ads */}
          <div className="space-y-6">
            {/* Target Page Destination Selector */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-[#007FFF]" /> Target Website Page Destination
              </h3>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Publish to Page / Section
                </label>
                <select
                  value={targetPage}
                  onChange={(e) => setTargetPage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                >
                  <option value="all">🌐 All Pages & Main Blog Hub (/blog)</option>
                  <option value="homepage">🏠 Homepage Blog Section (/)</option>
                  <option value="website-development">💻 Website Development Page (/website-development)</option>
                  <option value="branding">🎨 Branding & Content Page (/branding)</option>
                  <option value="digital-marketing">📈 Digital Marketing Page (/digital-marketing)</option>
                  <option value="seo">🔍 SEO Services Page (/seo)</option>
                  <option value="ppc">🚀 PPC & Google Ads Page (/ppc)</option>
                </select>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Select which page section will feature this blog post.
                </span>
              </div>

              {/* Homepage Toggle */}
              <div className="flex items-center justify-between p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl">
                <div>
                  <span className="font-bold text-xs text-amber-900 block">Pin to Homepage</span>
                  <span className="text-[10px] text-amber-700">Display in homepage blog carousel</span>
                </div>
                <input
                  type="checkbox"
                  checked={showOnHomepage}
                  onChange={(e) => setShowOnHomepage(e.target.checked)}
                  className="w-5 h-5 accent-[#007FFF] rounded cursor-pointer"
                />
              </div>

              {/* Priority Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Blog Priority Rank
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={priority}
                    onChange={(e) => setPriority(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">1 = Top rank</span>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Homepage Rank
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={homepagePriority}
                    onChange={(e) => setHomepagePriority(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Homepage order</span>
                </div>
              </div>
            </div>

            {/* SEO Specialist Panel */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Search className="w-4 h-4 text-[#007FFF]" /> SEO Specialist Drawer
              </h3>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Google Snippet Preview</span>
                <p className="text-xs font-medium text-blue-800 truncate">https://halatechnologies.com/blog/...</p>
                <h4 className="text-sm font-semibold text-blue-600 line-clamp-1 hover:underline cursor-pointer">
                  {metaTitle || title || 'Page Meta Title Preview'}
                </h4>
                <p className="text-[11px] text-slate-600 line-clamp-2">
                  {metaDescription || excerpt || 'Search meta description snippet will appear here on Google.'}
                </p>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Google SERP Meta Title ({metaTitle.length}/60 chars)
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Google SERP Meta Description ({metaDescription.length}/160 chars)
                </label>
                <textarea
                  rows={2}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Target Keywords (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="Local SEO Dubai, Google Business Profile, SEO UAE"
                  value={typeof keywords === 'string' ? keywords : Array.isArray(keywords) ? (keywords as string[]).join(', ') : ''}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>
            </div>

            {/* Google Ads Manager Panel */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" /> Google Ads & Campaign CTA
              </h3>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Campaign Tag / UTM Source Identifier
                </label>
                <input
                  type="text"
                  placeholder="google_ads_seo_2026"
                  value={campaignTag}
                  onChange={(e) => setCampaignTag(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Custom Call-To-Action Button Text
                </label>
                <input
                  type="text"
                  placeholder="Book Free Local SEO Audit"
                  value={ctaText}
                  onChange={(e) => setCtaText(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  CTA Button Destination Link
                </label>
                <input
                  type="text"
                  placeholder="/contact"
                  value={ctaUrl}
                  onChange={(e) => setCtaUrl(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#007FFF]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
