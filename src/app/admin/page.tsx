'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Home, 
  Eye, 
  Plus, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Search, 
  Edit3, 
  Sliders,
  Star,
  Globe
} from 'lucide-react';
import { BlogPost } from '@/lib/blogs';

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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

  const toggleHomepage = async (blog: BlogPost) => {
    try {
      const res = await fetch(`/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showOnHomepage: !blog.showOnHomepage }),
      });
      const data = await res.json();
      if (data.success) {
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const homepageBlogs = blogs.filter((b) => b.showOnHomepage);
  const publishedBlogs = blogs.filter((b) => b.status === 'published');
  const draftBlogs = blogs.filter((b) => b.status === 'draft');

  return (
    <div className="space-y-8">
      {/* Top Banner / Welcome */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5" /> No-Code Content Dashboard
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Welcome to the Hala Blog & SEO Dashboard
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Easily upload new blogs, edit existing articles, adjust homepage feature priority, and configure custom SEO keywords for Google Ads & Organic Search.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 pt-2">
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#007FFF] text-white hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20"
            >
              <Plus className="w-4 h-4" /> Create & Upload New Blog
            </Link>
            <Link
              href="/admin/sections"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
            >
              <Sliders className="w-4 h-4" /> Manage Homepage Sections
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Total Blogs</p>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{blogs.length}</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Available in database</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#007FFF] flex items-center justify-center font-bold shrink-0">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Published Live</p>
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-600">{publishedBlogs.length}</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Visible on website</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Featured on Homepage</p>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-600">{homepageBlogs.length}</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Pinned to homepage section</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
            <Star className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Draft Posts</p>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-600">{draftBlogs.length}</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Work in progress</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold shrink-0">
            <Edit3 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>

      {/* Featured Homepage Blogs Manager Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
              Blogs Featured on Main Homepage
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              These posts are directly displayed on the website's homepage. SEO & Ads specialists can toggle placement or adjust priorities anytime.
            </p>
          </div>
          <Link
            href="/admin/sections"
            className="text-xs font-semibold text-[#007FFF] hover:underline flex items-center gap-1 shrink-0 self-start sm:self-auto"
          >
            Reorder Homepage Layout <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {homepageBlogs.length === 0 ? (
          <div className="p-6 sm:p-8 text-center border-2 border-dashed border-slate-200 rounded-xl">
            <p className="text-sm font-medium text-slate-500">No blogs currently pinned to the Homepage.</p>
            <p className="text-xs text-slate-400 mt-1">Toggle "Show on Homepage" on any blog to add it instantly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {homepageBlogs.map((blog) => (
              <div key={blog.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-[#007FFF] text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      Priority: #{blog.homepagePriority || blog.priority}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-slate-900 line-clamp-2">{blog.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{blog.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                  <button
                    onClick={() => toggleHomepage(blog)}
                    className="text-xs font-semibold text-amber-700 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Star className="w-3 h-3 fill-amber-700" /> Remove from Home
                  </button>
                  <Link
                    href={`/admin/blogs/edit/${blog.id}`}
                    className="text-xs font-semibold text-[#007FFF] hover:underline flex items-center gap-1"
                  >
                    Edit Post <Edit3 className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Blogs Overview Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Recent Blog Publications</h3>
            <p className="text-xs text-slate-500 mt-0.5">Click any blog to edit content, change priority, or update SEO metadata.</p>
          </div>
          <Link
            href="/admin/blogs"
            className="text-xs font-semibold text-[#007FFF] hover:underline shrink-0"
          >
            View All Blogs ({blogs.length}) →
          </Link>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="w-full text-left text-xs text-slate-600 min-w-[550px]">
            <thead className="bg-slate-50 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Blog Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Homepage</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {blogs.slice(0, 5).map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3 text-slate-900 font-semibold max-w-xs truncate">
                    {blog.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      blog.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleHomepage(blog)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                        blog.showOnHomepage
                          ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                          : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {blog.showOnHomepage ? '★ Homepage' : '+ Add to Home'}
                    </button>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700">
                    #{blog.priority}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                    <Link
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/blog#${blog.slug}`}
                      target="_blank"
                      className="text-slate-400 hover:text-slate-600 ml-2"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
