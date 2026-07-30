'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Sliders, 
  Star, 
  Home, 
  Layers, 
  ArrowUp, 
  ArrowDown, 
  CheckCircle2, 
  Globe, 
  LayoutGrid, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BlogPost } from '@/lib/blogs';

export default function SectionManagerPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error('Failed to load blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const toggleHomepage = async (id: string, current: boolean) => {
    try {
      await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showOnHomepage: !current }),
      });
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const updateSectionRole = async (id: string, section: string, priority: number) => {
    try {
      await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ homepageSection: section, homepagePriority: priority }),
      });
      fetchBlogs();
      setSuccessMessage('Updated homepage section assignment!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  const homepageBlogs = blogs
    .filter((b) => b.showOnHomepage)
    .sort((a, b) => (a.homepagePriority || a.priority) - (b.homepagePriority || b.priority));

  const nonHomepageBlogs = blogs.filter((b) => !b.showOnHomepage);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-[#007FFF]" /> Homepage & Section Layout Builder
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Choose which blog posts appear on the main Homepage and reorder their section position.
          </p>
        </div>

        <Link
          href="/blog"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
        >
          <Globe className="w-4 h-4 text-[#007FFF]" /> View Homepage Live <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {successMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {successMessage}
        </div>
      )}

      {/* Grid Layout: Homepage Pinned Blogs vs Available Blogs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Blogs Currently Active on Homepage */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Active Homepage Blogs ({homepageBlogs.length})
              </h3>
              <p className="text-[11px] text-slate-500">Live order displayed on website homepage.</p>
            </div>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
              Priority Sorted
            </span>
          </div>

          {homepageBlogs.length === 0 ? (
            <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-xs">
              No blogs currently pinned to the Homepage.
            </div>
          ) : (
            <div className="space-y-3">
              {homepageBlogs.map((blog, idx) => (
                <div key={blog.id} className="p-4 border border-amber-200/80 bg-amber-50/30 rounded-xl space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{blog.title}</h4>
                        <span className="text-[10px] text-slate-500 font-semibold">{blog.category}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleHomepage(blog.id, true)}
                      className="text-[10px] font-bold text-rose-600 hover:bg-rose-100 bg-rose-50 px-2 py-1 rounded-md transition-colors"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Placement & Ranking Config */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-amber-200/50">
                    <div>
                      <label className="text-[10px] font-bold text-slate-600 block mb-1">Section Type</label>
                      <select
                        value={blog.homepageSection || 'grid_featured'}
                        onChange={(e) => updateSectionRole(blog.id, e.target.value, blog.homepagePriority || 1)}
                        className="w-full bg-white border border-amber-200 text-[11px] font-semibold rounded-lg px-2 py-1 text-slate-800 focus:outline-none"
                      >
                        <option value="hero_featured">★ Hero Featured Block</option>
                        <option value="grid_featured">Grid Cards Section</option>
                        <option value="seo_spotlight">SEO Spotlight Section</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 block mb-1">Position Rank</label>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        defaultValue={blog.homepagePriority || idx + 1}
                        onBlur={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) updateSectionRole(blog.id, blog.homepageSection || 'grid_featured', val);
                        }}
                        className="w-full bg-white border border-amber-200 text-[11px] font-bold rounded-lg px-2 py-1 text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Other Available Blogs */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Available Blog Articles ({nonHomepageBlogs.length})</h3>
              <p className="text-[11px] text-slate-500">Click to feature any blog post directly on the Homepage.</p>
            </div>
          </div>

          {nonHomepageBlogs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              All published blogs are currently featured on the Homepage!
            </div>
          ) : (
            <div className="space-y-3">
              {nonHomepageBlogs.map((blog) => (
                <div key={blog.id} className="p-3 border border-slate-200 bg-slate-50/50 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src={blog.image} alt={blog.title} className="w-10 h-10 rounded-lg object-cover bg-slate-200" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{blog.title}</h4>
                      <span className="text-[10px] text-slate-400 font-semibold">{blog.category}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleHomepage(blog.id, false)}
                    className="text-[10px] font-bold text-white bg-[#007FFF] hover:bg-[#0066CC] px-3 py-1.5 rounded-lg transition-colors shadow-sm shrink-0 flex items-center gap-1"
                  >
                    <Star className="w-3 h-3 fill-white" /> + Pin to Homepage
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
