import React from 'react';
import { 
  ChevronLeft, 
  Monitor, 
  Coffee, 
  Target, 
  Star, 
  Lightbulb, 
  TrendingUp, 
  BarChart3, 
  Bell, 
  Settings,
  Calendar,
  Sparkles
} from 'lucide-react';

export function Screen6Progress({ 
  userData, 
  onNavigate, 
  isDarkMode 
}) {
  return (
    <div className={`h-full flex flex-col justify-between p-4.5 select-none transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
          <button 
            onClick={() => onNavigate(2)}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 -ml-1 text-indigo-600" />
            <span className="font-bold text-sm">My Progress</span>
          </button>
          
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Today</span>
          </div>
        </div>

        {/* Progress Bars Section (Matches Pic 1 & Pic 4) */}
        <div className="mt-4 p-4 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 space-y-4 shadow-xs">
          {/* Screen Time Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Monitor className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-200">Screen Time</span>
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white">6h 10m</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <div className="h-full rounded-full bg-indigo-500 transition-all duration-1000" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Breaks Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Coffee className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-200">Breaks</span>
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white">
                {userData.breaksTaken} / 6 goal
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <div 
                className="h-full rounded-full bg-emerald-500 transition-all duration-1000" 
                style={{ width: `${Math.min(100, (userData.breaksTaken / 6) * 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Focus Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-200">Focus</span>
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white">82%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
              <div className="h-full rounded-full bg-purple-500 transition-all duration-1000" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>

        {/* Today's Score Star Card (Yellow/Gold from Pic 1) */}
        <div className="mt-3 p-4 rounded-3xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/50 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-white flex items-center justify-center shadow-xs">
              <Star className="w-5 h-5 fill-white" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Today's Score
              </p>
              <h3 className="text-xl font-black text-amber-900 dark:text-amber-200">
                {userData.wellnessScore} <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">/ 100</span>
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
            Healthy Level 🌿
          </span>
        </div>

        {/* Suggestion Card (Matching Pic 1) */}
        <div className="mt-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-2.5 shadow-2xs">
          <div className="p-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100">Suggestion :</h5>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
              "Take a few more short breaks tomorrow during afternoon lectures to reduce evening eye dryness."
            </p>
          </div>
        </div>

        {/* Mini 7-Day Trend Chart */}
        <div className="mt-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-2">
            <span>Weekly Fatigue Defense</span>
            <span className="text-emerald-600 dark:text-emerald-400">+14% vs Last Week</span>
          </div>
          <div className="flex items-end justify-between h-14 pt-2 px-1">
            {userData.weeklyActivity.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div 
                  className={`w-5 rounded-t-md transition-all duration-500 ${
                    idx === 6 ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  style={{ height: `${(item.score / 100) * 38}px` }}
                />
                <span className={`text-[9px] ${idx === 6 ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>
                  {item.day.slice(0, 3)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 -mx-1">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => onNavigate(2)}
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px]">Home</span>
          </button>

          <button 
            onClick={() => onNavigate(6)}
            className="flex flex-col items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer"
          >
            <div className="p-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span className="text-[10px]">Progress</span>
          </button>

          <button 
            onClick={() => onNavigate(8)}
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="text-[10px]">Reminders</span>
          </button>

          <button 
            onClick={() => onNavigate(7)}
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
          >
            <Settings className="w-4 h-4" />
            <span className="text-[10px]">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
