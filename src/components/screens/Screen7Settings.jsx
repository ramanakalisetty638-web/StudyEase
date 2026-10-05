import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  Eye, 
  Activity, 
  Droplets, 
  Moon, 
  Sun, 
  Info, 
  Volume2, 
  VolumeX, 
  ShieldCheck,
  Check,
  Sparkles
} from 'lucide-react';
import { playChime } from '../../utils/audio';

export function Screen7Settings({ 
  onNavigate, 
  isDarkMode, 
  setIsDarkMode, 
  userData, 
  setUserData 
}) {
  const [activeModal, setActiveModal] = useState(null);

  const toggleSetting = (key) => {
    setUserData((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: !prev.settings[key],
      },
    }));
    playChime('bell');
  };

  const settingsList = [
    {
      id: 'reminders',
      title: 'Reminder Settings',
      desc: 'Set smart break intervals & snooze duration',
      icon: Bell,
      color: 'blue',
      onClick: () => onNavigate(8),
    },
    {
      id: 'eyeCare',
      title: 'Eye Care',
      desc: '20-20-20 rule, blink nudges & night shield',
      icon: Eye,
      color: 'indigo',
      active: userData.settings.eyeRest,
      toggle: () => toggleSetting('eyeRest'),
    },
    {
      id: 'posture',
      title: 'Posture Reminder',
      desc: 'Gentle nudges to keep spine & neck aligned',
      icon: Activity,
      color: 'emerald',
      active: userData.settings.postureReminder,
      toggle: () => toggleSetting('postureReminder'),
    },
    {
      id: 'hydration',
      title: 'Hydration Reminder',
      desc: 'Track daily water intake during long classes',
      icon: Droplets,
      color: 'teal',
      active: userData.settings.waterReminder,
      toggle: () => toggleSetting('waterReminder'),
    },
  ];

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
            <span className="font-bold text-sm">Settings</span>
          </button>
          
          <span className="text-[11px] font-semibold text-slate-400">
            StudyEase v1.0
          </span>
        </div>

        {/* Settings List (Matching Pic 1 & Pic 4) */}
        <div className="mt-4 space-y-2.5">
          {settingsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={item.onClick || item.toggle}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-indigo-300 dark:hover:border-indigo-600 transition shadow-2xs cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    item.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400' :
                    item.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400' :
                    item.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400' :
                    'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 transition">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400">{item.desc}</p>
                  </div>
                </div>

                {item.toggle ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      item.toggle();
                    }}
                    className={`w-10 h-5.5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${
                      item.active ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  >
                    <div
                      className={`bg-white w-4.5 h-4.5 rounded-full shadow transform transition-transform ${
                        item.active ? 'translate-x-4.5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                )}
              </div>
            );
          })}

          {/* Dark Mode Toggle Item (Exact from Pic 1 & Pic 4) */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">
                  Dark Mode
                </h4>
                <p className="text-[10px] text-slate-400">Comfortable viewing for evening classes</p>
              </div>
            </div>

            <button
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                playChime('bell');
              }}
              className={`w-11 h-6 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${
                isDarkMode ? 'bg-indigo-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* About Item */}
          <div 
            onClick={() => setActiveModal('about')}
            className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between shadow-2xs hover:border-slate-300 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">About</h4>
                <p className="text-[10px] text-slate-400">Digital Engineering Lab Project • Persona: Aditi</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* About Modal Dialog */}
      {activeModal === 'about' && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 max-w-xs w-full shadow-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🍃</span>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">StudyEase Companion</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Designed as a human-centered solution for engineering students who face 6–8 hours of online classes.
            </p>
            <div className="mt-3 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
              <p><strong>Design Thinking:</strong> Divergent & Convergent</p>
              <p><strong>Target Persona:</strong> Aditi (20yo student)</p>
              <p><strong>Method:</strong> Smart Micro-Breaks + Eye Care</p>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="mt-4 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
          >
            <Activity className="w-4 h-4" />
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
            className="flex flex-col items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer"
          >
            <div className="p-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
            <span className="text-[10px]">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
