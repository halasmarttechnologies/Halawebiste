'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, ShieldCheck, ArrowRight, AlertCircle, KeyRound, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const performLogin = async (targetEmail: string, targetPass: string) => {
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: targetEmail, password: targetPass }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        // Fallback document cookie setting for instant browser session
        document.cookie = `hala_admin_session=${data.token}; path=/; max-age=604800;`;
        
        // Immediate redirect to dashboard
        setTimeout(() => {
          window.location.replace('/admin');
        }, 300);
      } else {
        setError(data.error || 'Invalid email or password.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    performLogin(email, password);
  };

  const loginAsRole = (role: 'seo' | 'ads' | 'admin') => {
    let targetEmail = '';
    let targetPass = '';

    if (role === 'seo') {
      targetEmail = 'seo@halatechnologies.com';
      targetPass = 'SEOpass2026!';
    } else if (role === 'ads') {
      targetEmail = 'ads@halatechnologies.com';
      targetPass = 'AdsPass2026!';
    } else {
      targetEmail = 'admin@halatechnologies.com';
      targetPass = 'HalaAdmin2026!';
    }

    setEmail(targetEmail);
    setPassword(targetPass);
    performLogin(targetEmail, targetPass);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] font-jakarta flex items-center justify-center p-4 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#007FFF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#007FFF] to-[#00C8FF] flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg shadow-[#007FFF]/30">
            H
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Hala CMS Portal</h1>
          <p className="text-xs text-slate-400">Team Dashboard & Blog Management</p>
        </div>

        {/* Security Alert Badge */}
        <div className="flex items-center gap-2 p-3 bg-slate-800/60 border border-slate-700/80 rounded-xl text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Restricted Access: Team Members Only</span>
        </div>

        {error && (
          <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs font-semibold text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-semibold text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Authenticated! Redirecting to Dashboard...</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="admin@halatechnologies.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-semibold focus:outline-none focus:border-[#007FFF] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">Password</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-semibold focus:outline-none focus:border-[#007FFF] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#007FFF] hover:bg-[#0066CC] text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Instant Login Buttons */}
        <div className="pt-4 border-t border-slate-800 space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
            One-Click Sign In Options:
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => loginAsRole('admin')}
              className="px-2 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded-xl transition-all shadow-sm"
            >
              ⚡ Admin
            </button>
            <button
              type="button"
              onClick={() => loginAsRole('seo')}
              className="px-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold rounded-xl border border-slate-700 transition-all"
            >
              🔍 SEO Guy
            </button>
            <button
              type="button"
              onClick={() => loginAsRole('ads')}
              className="px-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold rounded-xl border border-slate-700 transition-all"
            >
              🚀 Ads Girl
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
