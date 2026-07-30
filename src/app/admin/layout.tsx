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
  UserCheck,
  Menu,
  X
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{ email: string; role: string } | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

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
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-jakarta flex relative">
      {/* Mobile Drawer Overlay Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <aside 
        className={`w-64 bg-[#0f172a] text-white flex flex-col justify-between p-4 fixed md:sticky top-0 h-screen shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between px-3 py-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#007FFF] to-[#00C8FF] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#007FFF]/20">
                H
              </div>
              <div>
                <h1 className="font-bold text-base leading-tight tracking-wide text-white">Hala CMS</h1>
                <p className="text-[11px] text-slate-400 font-medium">Blog & Content Hub</p>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active User Badge */}
          {currentUser && (
            <div className="mb-6 px-3 py-2.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-bold text-[#00C8FF] uppercase tracking-wider flex items-center gap-1">
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
                  onClick={() => setIsMobileOpen(false)}
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
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-3 md:py-4 sticky top-0 z-20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="text-xs text-slate-500 font-medium flex items-center gap-1 sm:gap-1.5 truncate">
              <span>CMS</span>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="text-slate-900 font-semibold capitalize truncate">
                {pathname === '/admin' ? 'Dashboard Overview' : pathname.replace('/admin/', '').replace('/', ' / ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {currentUser && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Mode: {currentUser.role}
              </span>
            )}
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-[#007FFF] text-white hover:bg-[#0066CC] transition-colors shadow-sm shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Add Blog Post</span>
              <span className="sm:hidden">New</span>
            </Link>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="p-4 sm:p-6 md:p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

