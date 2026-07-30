'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  Layout, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Globe,
  LogOut,
  UserCheck
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{ email: string; role: string } | null>(null);

  // If we are on /admin/login page, render without admin sidebar layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        if (data.success && data.user) {
          setCurrentUser(data.user);
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (err) {
      console.error(err);
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Manage Blogs', href: '/admin/blogs', icon: FileText },
    { name: '+ Add New Blog', href: '/admin/blogs/new', icon: PlusCircle, highlight: true },
    { name: 'Homepage & Sections', href: '/admin/sections', icon: Layout },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-jakarta flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col justify-between p-4 sticky top-0 h-screen shadow-xl z-30">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 px-3 py-4 border-b border-slate-800 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#007FFF] to-[#00C8FF] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#007FFF]/20">
              H
            </div>
            <div>
              <h1 className="font-bold text-base leading-tight tracking-wide text-white">Hala CMS</h1>
              <p className="text-[11px] text-slate-400 font-medium">Blog & Content Hub</p>
            </div>
          </div>

          {/* Active User Badge */}
          {currentUser && (
            <div className="mb-6 px-3 py-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-bold text-[#00C8FF] uppercase tracking-wider block flex items-center gap-1">
                <UserCheck className="w-3 h-3" /> Logged In User
              </span>
              <p className="text-xs font-semibold text-white truncate">{currentUser.email}</p>
              <p className="text-[10px] text-slate-400 font-medium">{currentUser.role}</p>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-1">
            <p className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Content Controls
            </p>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    item.highlight
                      ? 'bg-[#007FFF] text-white hover:bg-[#0066CC] shadow-md shadow-[#007FFF]/30'
                      : isActive
                      ? 'bg-slate-800 text-white font-semibold border-l-4 border-[#007FFF]'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Helper Box & Logout */}
        <div className="pt-4 border-t border-slate-800 space-y-2">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#007FFF]" />
              View Live Website
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold transition-colors border border-rose-500/20 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <span>CMS</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-900 font-semibold capitalize">
                {pathname === '/admin' ? 'Dashboard Overview' : pathname.replace('/admin/', '').replace('/', ' / ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {currentUser && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Mode: {currentUser.role}
              </span>
            )}
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#007FFF] text-white hover:bg-[#0066CC] transition-colors shadow-sm"
            >
              <PlusCircle className="w-4 h-4" /> Add Blog Post
            </Link>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
