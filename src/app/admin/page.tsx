'use client'

import { useState, useEffect } from 'react'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import ArticleEditorModal from '@/components/Admin/ArticleEditorModal'
import AuthorsModal from '@/components/Admin/AuthorsModal'
import {
  FileText,
  CheckCircle2,
  Clock,
  Users,
  Target,
  Sparkles,
  Search,
  Plus,
  RefreshCw,
  Edit3,
  Trash2,
  ExternalLink,
  Layers,
  Filter,
  Loader2,
} from 'lucide-react'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalAuthors: 0,
    totalCategories: 0,
  })
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false)
  const [articleToEdit, setArticleToEdit] = useState<any>(null)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const [statsRes, postsRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/articles'),
      ])

      const statsData = await statsRes.json()
      const postsData = await postsRes.json()

      if (statsData.success) setStats(statsData.stats)
      if (postsData.success) setPosts(postsData.posts || [])
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article from Sanity?')) return

    try {
      const res = await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        fetchDashboardData()
      } else {
        alert(data.error || 'Failed to delete article')
      }
    } catch (err) {
      console.error('Error deleting article:', err)
    }
  }

  const handleEditArticle = (article: any) => {
    setArticleToEdit(article)
    setIsEditorOpen(true)
  }

  const handleCreateNew = () => {
    setArticleToEdit(null)
    setIsEditorOpen(true)
  }

  // Filter & Search logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.focusKeyword?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author?.name?.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    if (selectedFilter === 'all') return true
    if (selectedFilter === 'published') return !post.isDraft
    if (selectedFilter === 'drafts') return post.isDraft
    return post.serviceCategory === selectedFilter
  })

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Sidebar Navigation */}
      <AdminSidebar
        onNewArticle={handleCreateNew}
        onManageAuthors={() => setIsAuthorsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              Content & SEO Dashboard
            </h1>
            <p className="text-xs text-slate-400">Manage Sanity CMS articles, team authors, and SEO keywords</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchDashboardData}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => setIsAuthorsOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              Team Directory
            </button>

            <button
              onClick={handleCreateNew}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              New Article
            </button>
          </div>
        </header>

        {/* Dashboard Workspace */}
        <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
          
          {/* Metrics Analytics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Total Articles */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">Total Articles</p>
                <h3 className="text-2xl font-bold text-white mt-1">{stats.totalPosts}</h3>
                <p className="text-[11px] text-blue-400 font-medium mt-1">Live in Sanity CMS</p>
              </div>
              <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <FileText className="w-6 h-6" />
              </div>
            </div>

            {/* Published Posts */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">Published Posts</p>
                <h3 className="text-2xl font-bold text-emerald-400 mt-1">{stats.publishedPosts}</h3>
                <p className="text-[11px] text-emerald-400/80 font-medium mt-1">Active on Website</p>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            {/* Draft Posts */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">Draft Posts</p>
                <h3 className="text-2xl font-bold text-amber-400 mt-1">{stats.draftPosts}</h3>
                <p className="text-[11px] text-amber-400/80 font-medium mt-1">In Progress</p>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            {/* Team Authors */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">Team Authors</p>
                <h3 className="text-2xl font-bold text-indigo-400 mt-1">{stats.totalAuthors || 7}</h3>
                <p className="text-[11px] text-indigo-400/80 font-medium mt-1">Hala Team & Members</p>
              </div>
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Users className="w-6 h-6" />
              </div>
            </div>

          </div>

          {/* Filter Bar & Search Row */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {[
                { id: 'all', label: 'All Articles' },
                { id: 'published', label: 'Published' },
                { id: 'drafts', label: 'Drafts' },
                { id: 'website-development', label: 'Website Dev' },
                { id: 'ai-agent', label: 'AI Agent' },
                { id: 'seo', label: 'SEO' },
                { id: 'ppc', label: 'PPC' },
                { id: 'smm', label: 'SMM' },
                { id: 'branding', label: 'Branding' },
                { id: 'whatsapp-automation', label: 'WhatsApp' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedFilter === tab.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative shrink-0 md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search title, keyword, author..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Articles Data Table */}
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl shadow-xl overflow-hidden">
            
            <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Articles Directory ({filteredPosts.length})
              </h3>
              <span className="text-xs text-slate-400">Synced with Sanity API</span>
            </div>

            {loading ? (
              <div className="py-16 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" /> Loading articles from Sanity...
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="py-16 text-center text-slate-500 space-y-3">
                <FileText className="w-10 h-10 mx-auto text-slate-700" />
                <p className="text-sm font-medium">No articles found matching filter.</p>
                <button
                  onClick={handleCreateNew}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  + Create Your First Article
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/50 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      <th className="py-3.5 px-6">Article Title</th>
                      <th className="py-3.5 px-4">🎯 Focus Keyword</th>
                      <th className="py-3.5 px-4">Service</th>
                      <th className="py-3.5 px-4">Author</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredPosts.map((post) => (
                      <tr key={post._id} className="hover:bg-slate-800/40 transition-colors group">
                        
                        {/* Title & Slug */}
                        <td className="py-4 px-6 max-w-xs">
                          <h4 className="font-semibold text-white text-sm line-clamp-1 group-hover:text-blue-400 transition-colors">
                            {post.title || 'Untitled Article'}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-mono truncate mt-0.5">
                            /{post.slug?.current || post.slug || 'no-slug'}
                          </p>
                        </td>

                        {/* Focus Keyword */}
                        <td className="py-4 px-4">
                          {post.focusKeyword ? (
                            <span className="inline-flex items-center gap-1 font-medium px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px]">
                              <Target className="w-3 h-3 text-blue-400" />
                              {post.focusKeyword}
                            </span>
                          ) : (
                            <span className="text-slate-500 italic text-[11px]">Missing keyword</span>
                          )}
                        </td>

                        {/* Service Category */}
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-medium text-[11px] border border-slate-700/60 capitalize">
                            {post.serviceCategory?.replace('-', ' ') || 'General'}
                          </span>
                        </td>

                        {/* Author */}
                        <td className="py-4 px-4 font-medium text-slate-300">
                          {post.author?.name || 'Hala Team'}
                        </td>

                        {/* Status */}
                        <td className="py-4 px-4">
                          {post.isDraft ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider">
                              <Clock className="w-3 h-3" /> Draft
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                              <CheckCircle2 className="w-3 h-3" /> Published
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEditArticle(post)}
                              className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Edit Article & SEO"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteArticle(post._id)}
                              className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Delete Article"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>

        </div>

      </main>

      {/* Editor & SEO Modal */}
      <ArticleEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSuccess={fetchDashboardData}
        articleToEdit={articleToEdit}
      />

      {/* Authors Directory Modal */}
      <AuthorsModal
        isOpen={isAuthorsOpen}
        onClose={() => setIsAuthorsOpen(false)}
      />

    </div>
  )
}
