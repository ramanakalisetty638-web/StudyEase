import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Sun, 
  Eye, 
  Activity, 
  Droplets, 
  Leaf, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { playChime } from '../../utils/audio';

export function Screen4BreakReminder({ onNavigate, isDarkMode }) {
  const [selectedActivities, setSelectedActivities] = useState(['eyes', 'breathe']);

  const activities = [
    {
      id: 'eyes',
      title: 'Rest your eyes',
      subtitle: 'Look 20ft away for 20s',
      icon: Eye,
      color: 'blue',
      badge: '20-20-20 Rule'
    },
    {
      id: 'stretch',
      title: 'Stretch your body',
      subtitle: 'Shoulder rolls & neck stretch',
      icon: Activity,
      color: 'emerald',
      badge: 'Posture'
    },
    {
      id: 'water',
      title: 'Drink water',
      subtitle: 'Replenish hydration & brain oxygen',
      icon: Droplets,
      color: 'teal',
      badge: 'Hydration'
    },
    {
      id: 'breathe',
      title: 'Relax your mind',
      subtitle: 'Guided 4-4 rhythmic breathing',
      icon: Leaf,
      color: 'purple',
      badge: 'Mental Reset'
    },
  ];

  const toggleActivity = (id) => {
    setSelectedActivities((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    playChime('bell');
  };

  return (
    <div className={`h-full flex flex-col justify-between p-4.5 select-none transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
          <button 
            onClick={() => onNavigate(3)}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 -ml-1 text-indigo-600" />
            <span className="font-bold text-sm">Break Time</span>
          </button>
          
          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-200/50 dark:border-amber-800/40">
            Smart Auto-Trigger
          </span>
        </div>

        {/* Cheerful Sun Icon & Headline */}
        <div className="text-center my-3">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 text-white flex items-center justify-center shadow-md relative z-10">
              <Sun className="w-8 h-8 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>

          <h2 className="text-lg font-black text-slate-900 dark:text-white mt-2 tracking-tight">
            You've studied for 50 minutes!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-[260px] mx-auto">
            Your brain and eyes need a quick reset to maintain peak retention and avoid screen fatigue.
          </p>
        </div>

        {/* 4 Break Option Cards (Grid matching Pic 1 & Pic 4) */}
        <div className="grid grid-cols-2 gap-2.5 mt-2">
          {activities.map((act) => {
            const isSelected = selectedActivities.includes(act.id);
            const Icon = act.icon;
            return (
              <button
                key={act.id}
                onClick={() => toggleActivity(act.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isSelected 
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/50 border-indigo-400 dark:border-indigo-600 shadow-xs' 
                    : 'bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    act.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300' :
                    act.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300' :
                    act.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-300' :
                    'bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  )}
                </div>

                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">{act.title}</h4>
                <p className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5 leading-tight">{act.subtitle}</p>
                <span className="inline-block mt-1 text-[9px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-1.5 py-0.5 rounded">
                  {act.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pb-3 pt-2">
        <button
          onClick={() => {
            playChime('bell');
            onNavigate(5);
          }}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition cursor-pointer"
        >
          <span>Start 5-Min Break</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate(3)}
          className="w-full mt-2 py-1.5 text-center text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
        >
          Remind me in 5 minutes
        </button>
      </div>
    </div>
  );
}
