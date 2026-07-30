'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  PlusCircle, 
  Search, 
  Filter, 
  Star, 
  Edit3, 
  Trash2, 
  AlertCircle,
  LayoutGrid
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/lib/blogs';

export default function ManageBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [activeTargetPage, setActiveTargetPage] = useState('All');
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`/api/blogs?t=${Date.now()}`, { cache: 'no-store' });
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

  const handlePriorityChange = async (id: string, newPriority: number) => {
    setUpdatingId(id);
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, priority: newPriority } : b))
    );
    try {
      const res = await fetch(`/api/blogs/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priority: newPriority }),
      });
      const data = await res.json();
      if (data.success) {
        router.refresh();
      } else {
        alert('Error updating priority: ' + (data.error || 'Failed'));
        await fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      await fetchBlogs();
    } finally {
      setUpdatingId(null);
    }
  };

  const handleTargetPageChange = async (id: string, newTarget: string) => {
    setUpdatingId(id);
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, targetPage: newTarget } : b))
    );
    try {
      const res = await fetch(`/api/blogs/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetPage: newTarget }),
      });
      const data = await res.json();
      if (data.success) {
        router.refresh();
      } else {
        alert('Error updating target page: ' + (data.error || 'Failed'));
        await fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      await fetchBlogs();
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleHomepage = async (blog: BlogPost) => {
    setUpdatingId(blog.id);
    const newStatus = !blog.showOnHomepage;
    setBlogs((prev) =>
      prev.map((b) => (b.id === blog.id ? { ...b, showOnHomepage: newStatus } : b))
    );
    try {
      const res = await fetch(`/api/blogs/${encodeURIComponent(blog.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showOnHomepage: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        router.refresh();
      } else {
        alert('Error toggling homepage pin: ' + (data.error || 'Failed'));
        await fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      await fetchBlogs();
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      setUpdatingId(id);
      // Optimistic delete: instant UI response!
      setBlogs((prev) => prev.filter((b) => b.id !== id));
      try {
        const res = await fetch(`/api/blogs/${encodeURIComponent(id)}`, { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
          router.refresh();
        } else {
          alert('Error deleting blog: ' + (data.error || 'Failed to delete'));
          await fetchBlogs();
        }
      } catch (err) {
        console.error(err);
        alert('Delete request failed.');
        await fetchBlogs();
      } finally {
        setUpdatingId(null);
      }
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesStatus = activeStatus === 'All' || blog.status === activeStatus;
    const matchesPage = activeTargetPage === 'All' || blog.targetPage === activeTargetPage || (!blog.targetPage && activeTargetPage === 'all');
    return matchesSearch && matchesCategory && matchesStatus && matchesPage;
  });

  const categories = ['All', 'AI Marketing', 'Digital Marketing', 'SEO', 'Social Media', 'Visual Editing'];

  return (
    <div className="space-y-6 font-jakarta">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">Manage & Navigate Website Blogs</h2>
          <p className="text-xs text-slate-500 mt-1">
            Edit posts, assign blogs to specific website service pages, update priorities, or pin to Homepage.
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#007FFF] text-white hover:bg-[#0066CC] transition-all shadow-md shadow-blue-500/20 shrink-0 w-full sm:w-auto justify-center"
        >
          <PlusCircle className="w-4 h-4" /> Create & Upload New Blog
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, keyword, author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-xs font-medium rounded-xl pl-9 pr-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#007FFF]"
          />
        </div>

        {/* Category & Target Page Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2 w-full lg:w-auto">
          <select
            value={activeTargetPage}
            onChange={(e) => setActiveTargetPage(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:border-[#007FFF] w-full lg:w-auto"
          >
            <option value="All">All Target Pages</option>
            <option value="all">Global (/blog)</option>
            <option value="homepage">Homepage (/)</option>
            <option value="website-development">Web Dev (/website-development)</option>
            <option value="branding">Branding (/branding)</option>
            <option value="digital-marketing">Digital Marketing (/digital-marketing)</option>
            <option value="seo">SEO (/seo)</option>
            <option value="ppc">PPC (/ppc)</option>
          </select>

          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:border-[#007FFF] w-full lg:w-auto"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={activeStatus}
            onChange={(e) => setActiveStatus(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:border-[#007FFF] w-full lg:w-auto"
          >
            <option value="All">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 sm:p-12 text-center text-slate-400 text-sm font-semibold">Loading blog database...</div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-8 sm:p-12 text-center text-slate-500 space-y-2">
            <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="font-semibold text-sm">No blogs matched your search criteria.</p>
            <p className="text-xs text-slate-400">Try clearing your filters or creating a new post.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 min-w-[700px]">
              <thead className="bg-slate-50 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-200">
                <tr>
                  <th className="px-4 sm:px-6 py-4">Blog Article</th>
                  <th className="px-3 sm:px-4 py-4">Category</th>
                  <th className="px-3 sm:px-4 py-4">Target Website Page</th>
                  <th className="px-3 sm:px-4 py-4">Status</th>
                  <th className="px-3 sm:px-4 py-4">Homepage Pin</th>
                  <th className="px-3 sm:px-4 py-4">Priority Rank</th>
                  <th className="px-4 sm:px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Article Info */}
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-slate-100 shrink-0 border border-slate-200"
                        />
                        <div className="max-w-xs sm:max-w-md">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{blog.title}</h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{blog.excerpt}</p>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                            <span>Author: {blog.author.name}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-3 sm:px-4 py-4">
                      <span className="bg-blue-50 text-[#007FFF] px-2.5 py-1 rounded-md text-[10px] font-bold border border-blue-100 whitespace-nowrap">
                        {blog.category}
                      </span>
                    </td>

                    {/* Target Page Destination Selector */}
                    <td className="px-3 sm:px-4 py-4">
                      <select
                        value={blog.targetPage || 'all'}
                        onChange={(e) => handleTargetPageChange(blog.id, e.target.value)}
                        disabled={updatingId === blog.id}
                        className="bg-slate-50 border border-slate-200 text-[11px] font-bold rounded-lg px-2 py-1 text-slate-700 focus:outline-none focus:border-[#007FFF] cursor-pointer max-w-[140px]"
                      >
                        <option value="all">Global (/blog)</option>
                        <option value="homepage">Homepage (/)</option>
                        <option value="website-development">Web Dev (/website-development)</option>
                        <option value="branding">Branding (/branding)</option>
                        <option value="digital-marketing">Digital Marketing (/digital-marketing)</option>
                        <option value="seo">SEO (/seo)</option>
                        <option value="ppc">PPC (/ppc)</option>
                      </select>
                    </td>

                    {/* Status */}
                    <td className="px-3 sm:px-4 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap ${
                          blog.status === 'published'
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {blog.status === 'published' ? '● Published' : '○ Draft'}
                      </span>
                    </td>

                    {/* Homepage Toggle */}
                    <td className="px-3 sm:px-4 py-4">
                      <button
                        onClick={() => toggleHomepage(blog)}
                        disabled={updatingId === blog.id}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                          blog.showOnHomepage
                            ? 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200'
                            : 'bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        <Star className={`w-3.5 h-3.5 ${blog.showOnHomepage ? 'fill-amber-600 text-amber-600' : ''}`} />
                        {blog.showOnHomepage ? 'Pinned to Home' : '+ Add to Home'}
                      </button>
                    </td>

                    {/* Priority Weight Input */}
                    <td className="px-3 sm:px-4 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400 text-xs">#</span>
                        <input
                          type="number"
                          min="1"
                          max="99"
                          defaultValue={blog.priority}
                          onBlur={(e) => {
                            const val = parseInt(e.target.value);
                            if (!isNaN(val) && val !== blog.priority) {
                              handlePriorityChange(blog.id, val);
                            }
                          }}
                          className="w-14 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#007FFF]"
                        />
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 sm:px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-[#007FFF] hover:bg-blue-100 rounded-lg text-xs font-semibold transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" /> Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id, blog.title)}
                        disabled={updatingId === blog.id}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
