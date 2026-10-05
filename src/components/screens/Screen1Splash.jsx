import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export function Screen1Splash({ onNavigate, isDarkMode }) {
  return (
    <div className={`h-full flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-gradient-to-b from-blue-50/70 via-white to-purple-50/50 text-slate-800'
    }`}>
      {/* Brand Header */}
      <div className="pt-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Digital Engineering Lab Prototype
        </div>

        <div className="flex items-center justify-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            StudyEase
          </h1>
          <svg className="w-7 h-7 text-emerald-500 fill-emerald-500/20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
          </svg>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
          Your Digital Learning Wellness Companion
        </p>
      </div>

      {/* Hero Illustration */}
      <div className="my-auto py-4 flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Ambient Glows */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-300/30 via-purple-200/40 to-emerald-200/30 dark:from-indigo-600/20 dark:to-emerald-600/20 blur-2xl"></div>

          {/* Decorative Student Illustration SVG */}
          <svg viewBox="0 0 320 320" className="w-full h-full relative z-10 drop-shadow-md">
            {/* Background Arch */}
            <circle cx="160" cy="160" r="130" fill={isDarkMode ? '#1e293b' : '#eff6ff'} />
            <circle cx="160" cy="160" r="105" fill={isDarkMode ? '#334155' : '#e0e7ff'} opacity="0.6" />

            {/* Floating wellness icons */}
            <g className="animate-bounce" style={{ animationDuration: '3s' }}>
              <circle cx="65" cy="80" r="22" fill="#dcfce7" />
              <text x="65" y="86" fontSize="16" textAnchor="middle">👁️</text>
            </g>
            <g className="animate-bounce" style={{ animationDuration: '3.6s', animationDelay: '0.4s' }}>
              <circle cx="255" cy="95" r="22" fill="#dbeafe" />
              <text x="255" y="101" fontSize="16" textAnchor="middle">💧</text>
            </g>
            <g className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.8s' }}>
              <circle cx="70" cy="220" r="20" fill="#fef3c7" />
              <text x="70" y="226" fontSize="15" textAnchor="middle">🧘</text>
            </g>
            <g className="animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }}>
              <circle cx="250" cy="215" r="20" fill="#fce7f3" />
              <text x="250" y="221" fontSize="15" textAnchor="middle">✨</text>
            </g>

            {/* Plant leaves */}
            <path d="M40 270 Q60 210 110 240 Q75 270 40 270Z" fill="#86efac" />
            <path d="M280 270 Q260 210 210 240 Q245 270 280 270Z" fill="#a7f3d0" />

            {/* Desk */}
            <rect x="70" y="235" width="180" height="12" rx="6" fill="#cbd5e1" />
            <rect x="110" y="247" width="100" height="25" rx="3" fill="#94a3b8" />

            {/* Student (Aditi) */}
            {/* Body */}
            <path d="M120 235 C120 185 200 185 200 235 Z" fill="#6366f1" />
            <path d="M142 185 L142 165 C142 165 150 168 160 168 C170 168 178 165 178 165 L178 185 Z" fill="#fcd34d" />
            {/* Neck Collar */}
            <path d="M146 185 Q160 195 174 185 Z" fill="#ffffff" />
            {/* Head */}
            <ellipse cx="160" cy="140" rx="26" ry="30" fill="#fcd34d" />
            {/* Face Details */}
            <ellipse cx="152" cy="138" rx="2.5" ry="3" fill="#1e293b" />
            <ellipse cx="168" cy="138" rx="2.5" ry="3" fill="#1e293b" />
            <path d="M154 148 Q160 154 166 148" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Blush */}
            <circle cx="147" cy="144" r="3.5" fill="#fca5a5" opacity="0.6" />
            <circle cx="173" cy="144" r="3.5" fill="#fca5a5" opacity="0.6" />
            {/* Hair */}
            <path d="M134 142 C130 95 190 95 186 142 C184 122 172 115 160 115 C148 115 136 122 134 142 Z" fill="#1e293b" />
            <path d="M134 140 Q130 175 138 185" stroke="#1e293b" strokeWidth="9" strokeLinecap="round" />
            <path d="M186 140 Q190 175 182 185" stroke="#1e293b" strokeWidth="9" strokeLinecap="round" />

            {/* Laptop */}
            <rect x="130" y="210" width="60" height="25" rx="3" fill="#3b82f6" />
            <polygon points="120,235 200,235 190,230 130,230" fill="#93c5fd" />
            <circle cx="160" cy="222" r="4" fill="#ffffff" opacity="0.9" />
          </svg>
        </div>

        {/* Tagline */}
        <div className="mt-4 text-center">
          <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-1.5">
            Better Habits. Brighter Learning.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[240px]">
            Designed for engineering students to eliminate digital fatigue and sustain focus.
          </p>
        </div>

        {/* Carousel indicators */}
        <div className="flex gap-1.5 mt-5">
          <div className="w-6 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pb-4">
        <button
          onClick={() => onNavigate(2)}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-3">
          Stay Focused • Stay Healthy • Learn Better 🤍
        </p>
      </div>
    </div>
  );
}
