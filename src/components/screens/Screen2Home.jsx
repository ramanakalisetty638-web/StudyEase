import React from 'react';
import { 
  Play, 
  Clock, 
  Coffee, 
  Smile, 
  Eye, 
  BarChart3, 
  Bell, 
  Settings, 
  ChevronRight, 
  Sparkles, 
  Heart,
  Droplets,
  ShieldAlert
} from 'lucide-react';

export function Screen2Home({ 
  userData, 
  onNavigate, 
  isDarkMode, 
  onStartClass 
}) {
  const formatScreenTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className={`h-full flex flex-col justify-between p-4.5 select-none transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top Bar */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
          <button 
            onClick={() => onNavigate(1)} 
            className="p-1.5 -ml-1 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Back to Splash"
          >
            <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5 font-bold text-base tracking-tight">
            <span className="text-emerald-500 text-lg">🍃</span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">StudyEase</span>
          </div>

          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 text-white flex items-center justify-center font-bold text-xs shadow-xs ring-2 ring-white dark:ring-slate-800">
            A
          </div>
        </div>

        {/* Greeting Banner */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                Hi {userData.name}! <span className="animate-wiggle">👋</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                You're doing great! Keep it up! 😊
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40">
              Score: {userData.wellnessScore}%
            </span>
          </div>
        </div>

        {/* Today's Learning Card */}
        <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Today's Learning
            </span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
              Live Tracker
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Screen Time Metric */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Screen Time</span>
                <span className="text-[11px] text-slate-400">(Class time)</span>
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-100">
                {formatScreenTime(userData.screenTimeSeconds)}
              </span>
            </div>

            {/* Breaks Taken Metric */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Coffee className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Breaks taken</span>
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-100">
                {userData.breaksTaken} breaks
              </span>
            </div>

            {/* Focus Level Metric */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Smile className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Focus level</span>
              </div>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full text-[11px]">
                {userData.focusLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Primary Action Button: Start Class */}
        <div className="mt-4">
          <button
            onClick={() => {
              if (onStartClass) onStartClass();
              onNavigate(3);
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition cursor-pointer group"
          >
            <Play className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
            <span>Start Class</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Feature Cards Grid (Eye Care, My Progress, Reminders) */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {/* Eye Care Card */}
          <button
            onClick={() => onNavigate(4)}
            className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-left hover:border-indigo-300 dark:hover:border-indigo-600 transition shadow-2xs cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Eye className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">Eye Care</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
              Take a break for your eyes
            </p>
          </button>

          {/* My Progress Card */}
          <button
            onClick={() => onNavigate(6)}
            className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-left hover:border-purple-300 dark:hover:border-purple-600 transition shadow-2xs cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">My Progress</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
              View your stats & fatigue
            </p>
          </button>
        </div>

        {/* Quick Wellness Nudge */}
        <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center gap-2.5">
          <Droplets className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
            20-20-20 Rule Active: 20s eye rest every 20 mins.
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 -mx-1">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => onNavigate(2)}
            className="flex flex-col items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer"
          >
            <div className="p-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <span className="text-[10px]">Home</span>
          </button>

          <button 
            onClick={() => onNavigate(6)}
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="text-[10px]">Progress</span>
          </button>

          <button 
            onClick={() => onNavigate(8)}
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer relative"
          >
            <Bell className="w-4 h-4" />
            <span className="text-[10px]">Reminders</span>
            <span className="absolute 0 top-0 right-3 w-1.5 h-1.5 rounded-full bg-rose-500"></span>
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
