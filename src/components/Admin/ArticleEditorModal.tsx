'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, Target, Eye, Globe, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

interface ArticleEditorModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  articleToEdit?: any
}

const SERVICE_OPTIONS = [
  { value: 'website-development', label: '🌐 Website Development' },
  { value: 'ai-agent', label: '🤖 AI Agent Solutions' },
  { value: 'digital-marketing', label: '📈 Digital Marketing' },
  { value: 'seo', label: '🔍 Search Engine Optimization (SEO)' },
  { value: 'ppc', label: '🎯 Pay-Per-Click Advertising (PPC)' },
  { value: 'smm', label: '📱 Social Media Marketing (SMM)' },
  { value: 'branding', label: '🎨 Branding & Graphic Design' },
  { value: 'whatsapp-automation', label: '💬 WhatsApp Automation' },
]

export default function ArticleEditorModal({
  isOpen,
  onClose,
  onSuccess,
  articleToEdit,
}: ArticleEditorModalProps) {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [bodyText, setBodyText] = useState('')
  const [focusKeyword, setFocusKeyword] = useState('')
  const [seoTitle, setSeoTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [serviceCategory, setServiceCategory] = useState('website-development')
  const [authorId, setAuthorId] = useState('')
  const [readTime, setReadTime] = useState(5)
  const [isPublished, setIsPublished] = useState(true)

  const [authors, setAuthors] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fetchingAuthors, setFetchingAuthors] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Load authors & article data when modal opens
  useEffect(() => {
    if (!isOpen) return

    fetchAuthors()

    if (articleToEdit) {
      setTitle(articleToEdit.title || '')
      setSlug(articleToEdit.slug?.current || articleToEdit.slug || '')
      setExcerpt(articleToEdit.excerpt || '')
      setBodyText(articleToEdit.body?.[0]?.children?.[0]?.text || articleToEdit.contentBody || '')
      setFocusKeyword(articleToEdit.focusKeyword || '')
      setSeoTitle(articleToEdit.seoTitle || articleToEdit.title || '')
      setMetaDescription(articleToEdit.metaDescription || articleToEdit.excerpt || '')
      setServiceCategory(articleToEdit.serviceCategory || 'website-development')
      setAuthorId(articleToEdit.author?._id || '')
      setReadTime(articleToEdit.readTime || 5)
      setIsPublished(!articleToEdit.isDraft)
    } else {
      resetForm()
    }
  }, [isOpen, articleToEdit])

  const resetForm = () => {
    setTitle('')
    setSlug('')
    setExcerpt('')
    setBodyText('')
    setFocusKeyword('')
    setSeoTitle('')
    setMetaDescription('')
    setServiceCategory('website-development')
    setAuthorId('')
    setReadTime(5)
    setIsPublished(true)
    setErrorMsg('')
  }

  const fetchAuthors = async () => {
    try {
      setFetchingAuthors(true)
      const res = await fetch('/api/admin/authors')
      const data = await res.json()
      if (data.success) {
        setAuthors(data.authors || [])
        if (data.authors.length > 0 && !authorId) {
          // Default to "Hala Team" or first author
          const defaultAuthor = data.authors.find((a: any) => a.name.includes('Hala Team')) || data.authors[0]
          setAuthorId(defaultAuthor._id)
        }
      }
    } catch (err) {
      console.error('Failed to load authors', err)
    } finally {
      setFetchingAuthors(false)
    }
  }

  const handleTitleChange = (val: string) => {
    setTitle(val)
    if (!articleToEdit) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
      setSeoTitle(val)
    }
  }

  // Calculate SEO Focus Keyword Score
  const getSeoScore = () => {
    if (!focusKeyword) return 0
    let score = 0
    const kw = focusKeyword.toLowerCase()

    if (title.toLowerCase().includes(kw)) score += 30
    if (seoTitle.toLowerCase().includes(kw)) score += 20
    if (metaDescription.toLowerCase().includes(kw)) score += 20
    if (bodyText.toLowerCase().includes(kw)) score += 20
    if (slug.toLowerCase().includes(kw.replace(/\s+/g, '-'))) score += 10

    return Math.min(100, score)
  }

  const seoScore = getSeoScore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !focusKeyword.trim()) {
      setErrorMsg('Title and Focus Keyword are required for SEO optimization.')
      return
    }

    try {
      setLoading(true)
      setErrorMsg('')

      const payload = {
        title,
        slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        excerpt,
        contentBody: bodyText,
        focusKeyword,
        seoTitle: seoTitle || title,
        metaDescription: metaDescription || excerpt,
        serviceCategory,
        authorId,
        readTime,
        isPublished,
      }

      const url = articleToEdit ? `/api/admin/articles/${articleToEdit._id}` : '/api/admin/articles'
      const method = articleToEdit ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        onSuccess()
        onClose()
      } else {
        setErrorMsg(data.error || 'Failed to save article')
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl text-slate-200">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">
                {articleToEdit ? 'Edit Article & SEO' : 'Create New Article'}
              </h2>
              <p className="text-xs text-slate-400">Publish directly to Sanity CMS & Main Website</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Grid Layout: Primary Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Title */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Article Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. 10 Essential Web Design Trends for 2026"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Slug */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="10-essential-web-design-trends"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Service Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Primary Website Service *</label>
              <select
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Article Author *</label>
              <select
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                disabled={fetchingAuthors}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                {authors.map((auth) => (
                  <option key={auth._id} value={auth._id}>
                    {auth.name} ({auth.role || 'Teammate'})
                  </option>
                ))}
              </select>
            </div>

            {/* Read Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Read Time (minutes)</label>
              <input
                type="number"
                min="1"
                max="60"
                value={readTime}
                onChange={(e) => setReadTime(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* 🎯 SEO & Focus Keyword Portal Section */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-sm text-white">SEO & Target Keyword Optimizer</h3>
              </div>
              
              {/* Live SEO Score Pill */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">SEO Score:</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    seoScore >= 70
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : seoScore >= 40
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-red-500/10 text-red-400 border-red-500/30'
                  }`}
                >
                  {seoScore} / 100
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Focus Keyword */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-blue-300">🎯 Focus Keyword *</label>
                <input
                  type="text"
                  required
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="e.g. web development Dubai"
                  className="w-full bg-slate-900 border border-blue-500/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
                <p className="text-[11px] text-slate-400">
                  Target search keyphrase for ranking this article on Google.
                </p>
              </div>

              {/* SEO Title */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Meta Title (SEO Title)</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Search result headline..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Meta Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Meta Description</label>
                <input
                  type="text"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Short Google preview description..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Google SERP Live Mock Preview */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>halatechnologies.com › blogs › {slug || 'article-slug'}</span>
              </div>
              <h4 className="text-sm font-semibold text-blue-400 hover:underline cursor-pointer truncate">
                {seoTitle || title || 'Your Article Title Goes Here'}
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2">
                {metaDescription || excerpt || 'Add a compelling meta description to improve Google click-through rate.'}
              </p>
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Short Summary / Excerpt</label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief introduction shown on post cards..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Body */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Full Article Content</label>
            <textarea
              rows={6}
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              placeholder="Write or paste your article content here..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono text-xs"
            />
          </div>

          {/* Publishing Options & Actions Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs font-semibold text-slate-300">
                Publish Immediately (Live on Sanity & Website)
              </span>
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                {articleToEdit ? 'Save Changes' : 'Publish Article'}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
