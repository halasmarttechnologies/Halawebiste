'use client'

import { useState, useEffect } from 'react'
import { X, Users, UserPlus, ShieldCheck, Loader2 } from 'lucide-react'

interface AuthorsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthorsModal({ isOpen, onClose }: AuthorsModalProps) {
  const [authors, setAuthors] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [creating, setCreating] = useState(false)

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    if (isOpen) {
      fetchAuthors()
    }
  }, [isOpen])

  const fetchAuthors = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/admin/authors')
      const data = await res.json()
      if (data.success) {
        setAuthors(data.authors || [])
      }
    } catch (err) {
      console.error('Error fetching authors', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateAuthor = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    try {
      setCreating(true)
      const res = await fetch('/api/admin/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role, bio }),
      })
      const data = await res.json()
      if (data.success) {
        setName('')
        setRole('')
        setBio('')
        fetchAuthors()
      }
    } catch (err) {
      console.error('Failed to create author', err)
    } finally {
      setCreating(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl text-slate-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Team & Authors Directory</h2>
              <p className="text-xs text-slate-400">Manage article authors for Hala Smart Technologies</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* Add Author Form */}
          <form onSubmit={handleCreateAuthor} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-blue-400" />
              Add New Teammate Author
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name (e.g. Saif Ali)"
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role (e.g. SEO Manager)"
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={creating}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {creating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : '+ Save Teammate Author'}
            </button>
          </form>

          {/* Authors List */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Existing Authors ({authors.length})</h3>
            {loading ? (
              <div className="py-8 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Loading team directory...
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {authors.map((auth) => (
                  <div key={auth._id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30 shrink-0">
                      {auth.name ? auth.name.charAt(0) : 'A'}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-semibold text-xs text-white truncate">{auth.name}</h4>
                      <p className="text-[11px] text-slate-400 truncate">{auth.role || 'Teammate'}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
