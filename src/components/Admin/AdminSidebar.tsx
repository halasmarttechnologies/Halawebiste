'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Users, Tag, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react'

interface AdminSidebarProps {
  onNewArticle: () => void
  onManageAuthors: () => void
}

export default function AdminSidebar({ onNewArticle, onManageAuthors }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col justify-between hidden md:flex min-h-screen sticky top-0">
      <div>
        {/* Logo & Brand Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 text-lg">
              H
            </div>
            <div>
              <h1 className="font-bold text-white text-base tracking-tight leading-tight">Hala CMS</h1>
              <p className="text-[11px] text-slate-400 font-medium">Smart Technologies Portal</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-3 h-3" /> Live
          </span>
        </div>

        {/* Primary CTA */}
        <div className="p-4">
          <button
            onClick={onNewArticle}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer text-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-200 group-hover:rotate-12 transition-transform" />
            + Create New Article
          </button>
        </div>

        {/* Navigation Section */}
        <div className="px-3 py-2">
          <p className="px-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
          <nav className="space-y-1">
            <Link
              href="/admin"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all ${
                pathname === '/admin'
                  ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard Overview
            </Link>

            <button
              onClick={onNewArticle}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all text-left cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Article Manager
            </button>

            <button
              onClick={onManageAuthors}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all text-left cursor-pointer"
            >
              <Users className="w-4 h-4" />
              Team & Authors
            </button>
          </nav>
        </div>

        {/* External Links */}
        <div className="px-3 py-4 border-t border-slate-800/60 mt-4">
          <p className="px-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Live Websites</p>
          <div className="space-y-1">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all"
            >
              <span>Main Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
            <a
              href="/studio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all"
            >
              <span>Native Sanity Studio</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Profile Badge */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-xs border border-slate-600">
            HT
          </div>
          <div className="flex-1 truncate">
            <p className="text-xs font-semibold text-white truncate">Hala Team Admin</p>
            <p className="text-[10px] text-slate-400 truncate">Connected to Sanity API</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
