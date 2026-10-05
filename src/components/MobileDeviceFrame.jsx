import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

export function MobileDeviceFrame({ children, isDarkMode, screenNumber, screenTitle }) {
  return (
    <div className="flex flex-col items-center">
      {/* Device Frame */}
      <div className={`relative w-[340px] sm:w-[360px] h-[720px] rounded-[48px] p-3 shadow-2xl transition-all duration-300 border-[8px] ${
        isDarkMode 
          ? 'bg-slate-950 border-slate-800 shadow-indigo-950/40 ring-1 ring-slate-800' 
          : 'bg-slate-900 border-slate-900 shadow-2xl shadow-indigo-200/50 ring-1 ring-slate-800/10'
      }`}>
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4.5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-40 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800/50"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-950/80"></div>
        </div>

        {/* Screen Bezel & Container */}
        <div className={`w-full h-full rounded-[38px] overflow-hidden flex flex-col relative z-20 transition-colors duration-300 ${
          isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
        }`}>
          {/* Top Status Bar (9:30, WiFi, Battery) */}
          <div className="h-10 px-6 pt-2 flex items-center justify-between text-xs font-semibold z-30 select-none">
            <span className={`text-[11px] tracking-tight ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              9:30
            </span>
            <div className={`flex items-center gap-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              <Signal className="w-3 h-3 stroke-[2.5]" />
              <Wifi className="w-3 h-3 stroke-[2.5]" />
              <div className="w-5 h-2.5 rounded-[4px] border border-current p-0.5 flex items-center">
                <div className="h-full w-2.5 bg-current rounded-xs"></div>
              </div>
            </div>
          </div>

          {/* Active Screen Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="h-5 flex items-center justify-center shrink-0">
            <div className={`w-32 h-1 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
          </div>
        </div>
      </div>

      {/* Screen Caption Tag below phone */}
      {screenNumber && (
        <div className="mt-3.5 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            {screenNumber}. {screenTitle}
          </span>
        </div>
      )}
    </div>
  );
}
