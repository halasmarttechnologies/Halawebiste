'use client';

import React, { useState } from 'react';
import { Mail, ShieldCheck, ArrowRight, AlertCircle, KeyRound, CheckCircle2, Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        // Instant redirect to dashboard upon successful credential verification
        setTimeout(() => {
          window.location.replace('/admin');
        }, 300);
      } else {
        setError(data.error || 'Invalid credentials. Access denied.');
      }
    } catch (err) {
      setError('Server connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] font-jakarta flex items-center justify-center p-3 sm:p-6 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#007FFF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl relative z-10 space-y-5 sm:space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-1.5 sm:space-y-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#007FFF] to-[#00C8FF] flex items-center justify-center text-white font-bold text-xl sm:text-2xl mx-auto shadow-lg shadow-[#007FFF]/30">
            H
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Hala CMS Secure Portal</h1>
          <p className="text-xs text-slate-400 font-medium">Team Authentication & Content Control</p>
        </div>

        {/* Security Alert Badge */}
        <div className="flex items-center gap-2.5 p-3.5 bg-slate-800/60 border border-slate-700/80 rounded-xl text-xs text-slate-300 font-medium">
          <Lock className="w-4 h-4 text-[#00C8FF] shrink-0" />
          <span>Strict Security Active: Credentials Required</span>
        </div>

        {error && (
          <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs font-semibold text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-semibold text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Identity Verified. Redirecting to Dashboard...</span>
          </div>
        )}

        {/* Secure Login Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">Authorized Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="your.email@halatechnologies.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-semibold focus:outline-none focus:border-[#007FFF] transition-colors placeholder:text-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">Secret Password</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-semibold focus:outline-none focus:border-[#007FFF] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#007FFF] hover:bg-[#0066CC] text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
          >
            <span>{loading ? 'Verifying Credentials...' : 'Sign In to Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-500 font-medium">
            Contact your Administrator if you forgot your assigned login password.
          </p>
        </div>
      </div>
    </div>
  );
}
