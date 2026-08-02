import React, { useState, useEffect } from 'react'
import { useClient } from 'sanity'

export function CustomCMSDashboard() {
  const client = useClient({ apiVersion: '2025-02-18' })

  // State management
  const [articles, setArticles] = useState<any[]>([])
  const [authors, setAuthors] = useState<any[]>([])
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'services' | 'author' | 'media'>('content')
  const [filterMode, setFilterMode] = useState<'all' | 'published' | 'drafts' | 'service'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('')

  // Form Fields State
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

  // Fetch articles & authors from Sanity
  useEffect(() => {
    fetchArticlesAndAuthors()
  }, [])

  const fetchArticlesAndAuthors = async () => {
    try {
      setLoading(true)
      const postsQuery = `*[_type == "post"] | order(_createdAt desc) {
        _id,
        _createdAt,
        title,
        slug,
        excerpt,
        body,
        focusKeyword,
        seoTitle,
        metaDescription,
        serviceCategory,
        readTime,
        publishedAt,
        author-> {
          _id,
          name,
          role
        },
        "isDraft": _id in path("drafts.**")
      }`

      const authorsQuery = `*[_type == "author"] | order(name asc)`

      const [postsData, authorsData] = await Promise.all([
        client.fetch(postsQuery),
        client.fetch(authorsQuery),
      ])

      setArticles(postsData || [])
      setAuthors(authorsData || [])

      if (postsData && postsData.length > 0) {
        selectArticle(postsData[0])
      }
    } catch (err) {
      console.error('Error fetching CMS data:', err)
    } fontally {
      setLoading(false)
    }
  }

  const selectArticle = (article: any) => {
    setSelectedArticle(article)
    setTitle(article.title || '')
    setSlug(typeof article.slug === 'string' ? article.slug : article.slug?.current || '')
    setExcerpt(article.excerpt || '')
    setBodyText(article.body?.[0]?.children?.[0]?.text || '')
    setFocusKeyword(article.focusKeyword || '')
    setSeoTitle(article.seoTitle || article.title || '')
    setMetaDescription(article.metaDescription || article.excerpt || '')
    setServiceCategory(article.serviceCategory || 'website-development')
    setAuthorId(article.author?._id || '')
    setReadTime(article.readTime || 5)
    setIsPublished(!article.isDraft)
  }

  const handleCreateNewArticle = () => {
    const newArt = {
      _id: `drafts.new-${Date.now()}`,
      title: 'Untitled Article',
      slug: { current: 'untitled-article' },
      excerpt: '',
      body: [],
      focusKeyword: '',
      seoTitle: '',
      metaDescription: '',
      serviceCategory: 'website-development',
      isDraft: true,
    }
    setSelectedArticle(newArt)
    setTitle('Untitled Article')
    setSlug('untitled-article')
    setExcerpt('')
    setBodyText('')
    setFocusKeyword('')
    setSeoTitle('')
    setMetaDescription('')
    setServiceCategory('website-development')
    setReadTime(5)
    setIsPublished(false)
  }

  const handleSaveArticle = async (publish: boolean) => {
    try {
      setSaving(true)
      setSaveSuccessMsg('')

      const doc: any = {
        _type: 'post',
        title: title || 'Untitled Article',
        slug: { _type: 'slug', current: slug || 'untitled-article' },
        excerpt,
        focusKeyword,
        seoTitle: seoTitle || title,
        metaDescription,
        serviceCategory,
        readTime: Number(readTime) || 5,
        publishedAt: publish ? new Date().toISOString() : undefined,
      }

      if (bodyText) {
        doc.body = [
          {
            _type: 'block',
            _key: 'block-1',
            style: 'normal',
            children: [{ _type: 'span', _key: 'span-1', text: bodyText }],
          },
        ]
      }

      if (authorId) {
        doc.author = { _type: 'reference', _ref: authorId }
      }

      if (selectedArticle && selectedArticle._id && !selectedArticle._id.startsWith('drafts.new-')) {
        await client.patch(selectedArticle._id).set(doc).commit()
      } else {
        await client.create(doc)
      }

      setSaveSuccessMsg(publish ? 'Article Published successfully!' : 'Saved as Draft!')
      setTimeout(() => setSaveSuccessMsg(''), 4000)
      fetchArticlesAndAuthors()
    } catch (err: any) {
      console.error('Error saving article:', err)
      alert(`Save failed: ${err.message}`)
    } finally {
      setSaving(false)
    }
  }

  const handleGenerateSlug = () => {
    if (title) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
    }
  }

  const filteredArticles = articles.filter((item) => {
    const matchesSearch =
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.focusKeyword?.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    if (filterMode === 'published') return !item.isDraft
    if (filterMode === 'drafts') return item.isDraft
    return true
  })

  // Calculate word count
  const wordCount = bodyText.trim() ? bodyText.trim().split(/\s+/).length : 0

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#0A192F',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* ── TOP HEADER BAR ────────────────────────────────────────── */}
      <div
        style={{
          height: '56px',
          backgroundColor: '#071120',
          borderBottom: '1px solid #1E293B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        {/* Left Logo & Studio Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '18px', color: '#38BDF8' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #0284C7, #2563EB)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              ◆
            </div>
            AIOK <span style={{ color: '#64748B', fontSize: '14px' }}>›</span>
          </div>

          <div
            style={{
              padding: '6px 12px',
              backgroundColor: '#1E293B',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Hala Smart Technologies Studio <span style={{ color: '#94A3B8' }}>∨</span>
          </div>

          <button
            onClick={handleCreateNewArticle}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#2563EB',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
            title="Create New Document"
          >
            +
          </button>

          <span style={{ color: '#64748B', fontSize: '16px', marginLeft: '4px', cursor: 'pointer' }}>🔍</span>
        </div>

        {/* Right User & Status Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              padding: '5px 12px',
              backgroundColor: '#1E293B',
              borderRadius: '8px',
              fontSize: '12px',
              color: '#CBD5E1',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📄 Drafts <span style={{ color: '#94A3B8' }}>∨</span>
          </div>

          <span style={{ fontSize: '16px', color: '#94A3B8', cursor: 'pointer' }}>🔔</span>
          <span style={{ fontSize: '16px', color: '#94A3B8', cursor: 'pointer' }}>❓</span>
          <span style={{ fontSize: '16px', color: '#94A3B8', cursor: 'pointer' }}>🌙</span>

          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#4F46E5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '13px',
              color: '#fff',
            }}
          >
            S
          </div>
        </div>
      </div>

      {/* ── 3-COLUMN WORKSPACE BODY ───────────────────────────────── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* ── COLUMN 1: LEFT DARK SIDEBAR ─────────────────────────── */}
        <div
          style={{
            width: '240px',
            backgroundColor: '#091527',
            borderRight: '1px solid #1E293B',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '16px 12px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            
            {/* Dashboard Nav Item */}
            <div
              style={{
                padding: '10px 14px',
                borderRadius: '10px',
                color: '#94A3B8',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              🏠 Dashboard
            </div>

            {/* Content Manager Active Button */}
            <div
              style={{
                padding: '10px 14px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                📂 Content Manager
              </div>
              <span style={{ fontSize: '12px' }}>∨</span>
            </div>

            {/* Sub-menu Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '12px', marginTop: '4px' }}>
              <div
                onClick={() => setFilterMode('all')}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: filterMode === 'all' ? '#1E3A8A' : 'transparent',
                  color: filterMode === 'all' ? '#60A5FA' : '#94A3B8',
                  fontSize: '13px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                }}
              >
                📄 All Articles
              </div>

              <div
                onClick={() => setFilterMode('published')}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: filterMode === 'published' ? '#1E3A8A' : 'transparent',
                  color: filterMode === 'published' ? '#60A5FA' : '#94A3B8',
                  fontSize: '13px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                }}
              >
                📑 Published Articles
              </div>

              <div
                onClick={() => setFilterMode('drafts')}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: filterMode === 'drafts' ? '#1E3A8A' : 'transparent',
                  color: filterMode === 'drafts' ? '#60A5FA' : '#94A3B8',
                  fontSize: '13px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                }}
              >
                📝 Draft Articles
              </div>

              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  color: '#94A3B8',
                  fontSize: '13px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                }}
              >
                ⚡ Filter by Website Service
              </div>
            </div>

          </div>

          {/* Bottom Promotional Card */}
          <div>
            <div
              style={{
                padding: '16px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
                border: '1px solid #334155',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  backgroundColor: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  marginBottom: '10px',
                }}
              >
                ✨
              </div>
              <div style={{ fontWeight: '700', fontSize: '13px', color: '#FFF', marginBottom: '4px' }}>
                Create. Optimize. Publish.
              </div>
              <div style={{ fontSize: '11px', color: '#94A3B8', lineHeight: '1.4', marginBottom: '12px' }}>
                Powerful content that ranks higher and converts better.
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: '#2563EB',
                  color: '#FFF',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                Explore AIOK →
              </button>
            </div>

            {/* User Footer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: '1px solid #1E293B' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#4338CA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                HT
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#FFF', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Hala Team
                </div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>Author ∨</div>
              </div>
            </div>

          </div>
        </div>

        {/* ── COLUMN 2: MIDDLE ARTICLES LIST PANEL ────────────────── */}
        <div
          style={{
            width: '320px',
            backgroundColor: '#F8FAFC',
            borderRight: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            color: '#0F172A',
          }}
        >
          {/* Header Row */}
          <div style={{ padding: '16px 16px 12px 16px', display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', flex: 1 }}>All Articles</h2>
            <button
              onClick={handleCreateNewArticle}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                backgroundColor: '#2563EB',
                color: '#FFF',
                border: 'none',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
              }}
            >
              + New Article
            </button>
          </div>

          {/* Search Row */}
          <div style={{ padding: '0 16px 12px 16px', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              style={{
                flex: 1,
                padding: '8px 12px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#0F172A',
                outline: 'none',
              }}
            />
            <button
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
              }}
            >
              Y
            </button>
          </div>

          {/* Articles Cards Scrollable List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {loading ? (
              <div style={{ padding: '30px', textAlign: 'center', color: '#64748B', fontSize: '13px' }}>
                Loading articles...
              </div>
            ) : filteredArticles.length === 0 ? (
              <div style={{ padding: '30px', textAlign: 'center', color: '#64748B', fontSize: '13px' }}>
                No articles found
              </div>
            ) : (
              filteredArticles.map((art) => {
                const isSelected = selectedArticle?._id === art._id

                return (
                  <div
                    key={art._id}
                    onClick={() => selectArticle(art)}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      backgroundColor: isSelected ? '#EFF6FF' : '#FFFFFF',
                      border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: isSelected ? '0 4px 12px rgba(37,99,235,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        backgroundColor: '#CBD5E1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        color: '#64748B',
                        flexShrink: 0,
                      }}
                    >
                      📄
                    </div>

                    {/* Meta info */}
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: '700',
                          color: '#0F172A',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          marginBottom: '2px',
                        }}
                      >
                        {art.title || 'Untitled Article'}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>
                        by {art.author?.name || 'Hala Team'} • 2 min ago
                      </div>
                    </div>

                    {/* Status Dot */}
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: art.isDraft ? '#F59E0B' : '#10B981',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* ── COLUMN 3: RIGHT ARTICLE EDITOR STUDIO ──────────────── */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            color: '#0F172A',
            overflow: 'hidden',
          }}
        >
          {/* Editor Header */}
          <div
            style={{
              padding: '12px 24px',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '16px', color: '#64748B', cursor: 'pointer' }}>←</span>
              <h1 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A' }}>
                {title || 'Untitled Article'}
              </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '16px', color: '#64748B', cursor: 'pointer' }}>👁️</span>
              <span style={{ fontSize: '16px', color: '#64748B', cursor: 'pointer' }}>🔗</span>
              <span style={{ fontSize: '16px', color: '#64748B', cursor: 'pointer' }}>⋮</span>

              <button
                onClick={() => handleSaveArticle(false)}
                disabled={saving}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#2563EB',
                  color: '#FFF',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                {saving ? 'Saving...' : 'Save ∨'}
              </button>
            </div>
          </div>

          {/* Editor Tabs Navigation */}
          <div
            style={{
              padding: '0 24px',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              gap: '24px',
              backgroundColor: '#FFFFFF',
            }}
          >
            {[
              { id: 'content', label: '📄 Article Content' },
              { id: 'seo', label: '📈 SEO & Target Keywords' },
              { id: 'services', label: '🎛️ Services & Categories' },
              { id: 'author', label: '👤 Author & Publishing' },
              { id: 'media', label: '🖼️ Media & Cover' },
            ].map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '12px 0',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: activeTab === tab.id ? '#2563EB' : '#64748B',
                  borderBottom: activeTab === tab.id ? '2px solid #2563EB' : '2px solid transparent',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {/* Editor Scrollable Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {saveSuccessMsg && (
              <div style={{ padding: '12px 16px', backgroundColor: '#ECFDF5', border: '1px solid #10B981', borderRadius: '8px', color: '#065F46', fontSize: '13px', fontWeight: '600' }}>
                ✓ {saveSuccessMsg}
              </div>
            )}

            {activeTab === 'content' && (
              <>
                {/* Title */}
                <div>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>Article Title</label>
                    <span style={{ fontSize: '11px', color: '#94A3B8' }}>{title.length}/100</span>
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter article title..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Slug */}
                <div>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>URL Slug</label>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="the-ai-tool-helping-businesses"
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        color: '#0F172A',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleGenerateSlug}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#F1F5F9',
                        border: '1px solid #CBD5E1',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#334155',
                        cursor: 'pointer',
                      }}
                    >
                      Generate
                    </button>
                  </div>
                  <div style={{ fontSize: '11px', color: '#2563EB', marginTop: '4px' }}>
                    https://yourwebsite.com/blog/{slug || 'slug'} ↗
                  </div>
                </div>

                {/* Summary / Excerpt */}
                <div>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>Short Summary / Excerpt</label>
                    <span style={{ fontSize: '11px', color: '#94A3B8' }}>{excerpt.length}/160</span>
                  </div>
                  <textarea
                    rows={3}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="A brief summary shown in article previews..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Content Editor Toolbar */}
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>
                    Content Editor
                  </label>
                  
                  <div style={{ border: '1px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden' }}>
                    <div
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderBottom: '1px solid #CBD5E1',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '13px',
                        color: '#334155',
                      }}
                    >
                      <span style={{ fontWeight: '600' }}>Paragraph ∨</span>
                      <span style={{ cursor: 'pointer', fontWeight: 'bold' }}>B</span>
                      <span style={{ cursor: 'pointer', fontStyle: 'italic' }}>I</span>
                      <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>U</span>
                      <span style={{ cursor: 'pointer' }}>🔗</span>
                      <span style={{ cursor: 'pointer' }}>🖼️</span>
                      <span style={{ cursor: 'pointer' }}>≡</span>
                      <span style={{ cursor: 'pointer' }}>“</span>
                    </div>

                    <textarea
                      rows={8}
                      value={bodyText}
                      onChange={(e) => setBodyText(e.target.value)}
                      placeholder="Write your content here..."
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: 'none',
                        fontSize: '14px',
                        color: '#0F172A',
                        outline: 'none',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                      }}
                    />

                    <div style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', textAlign: 'right', fontSize: '11px', color: '#94A3B8' }}>
                      Words: {wordCount}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'seo' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>
                    🎯 Focus Keyword
                  </label>
                  <input
                    type="text"
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
                    placeholder="e.g. web development Dubai"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>
                    Meta Title (SEO Title)
                  </label>
                  <input
                    type="text"
                    value={seoTitle}
                    onChange={(e) => setSeoTitle(e.target.value)}
                    placeholder="Custom search engine title..."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>
                    Meta Description
                  </label>
                  <textarea
                    rows={3}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Description for search results..."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', boxSizing: 'border-box' }}
                  />
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Primary Website Service
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px' }}
                >
                  <option value="website-development">🌐 Website Development</option>
                  <option value="ai-agent">🤖 AI Agent Solutions</option>
                  <option value="digital-marketing">📈 Digital Marketing</option>
                  <option value="seo">🔍 Search Engine Optimization (SEO)</option>
                  <option value="ppc">🎯 Pay-Per-Click Advertising (PPC)</option>
                  <option value="smm">📱 Social Media Marketing (SMM)</option>
                  <option value="branding">🎨 Branding & Graphic Design</option>
                  <option value="whatsapp-automation">💬 WhatsApp Automation</option>
                </select>
              </div>
            )}

            {activeTab === 'author' && (
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Article Author
                </label>
                <select
                  value={authorId}
                  onChange={(e) => setAuthorId(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px' }}
                >
                  {authors.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.name} ({a.role || 'Teammate'})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Sticky Bottom Actions Bar */}
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: '13px', color: '#10B981', fontWeight: '600', display: 'flex', itemsCenter: 'center', gap: '6px' }}>
              🟢 Published 2 min. ago by {selectedArticle?.author?.name || 'Hala Team'}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleSaveArticle(false)}
                disabled={saving}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  color: '#334155',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                Save as Draft
              </button>

              <button
                onClick={() => handleSaveArticle(true)}
                disabled={saving}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                }}
              >
                {saving ? 'Publishing...' : '🚀 Publish ∨'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
