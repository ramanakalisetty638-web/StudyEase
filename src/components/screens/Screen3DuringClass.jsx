import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  Brain, 
  Droplets, 
  Eye, 
  Clock, 
  Pause, 
  Play, 
  Sparkles,
  AlertCircle,
  Volume2,
  VolumeX,
  Zap
} from 'lucide-react';
import { playChime } from '../../utils/audio';

export function Screen3DuringClass({ 
  onNavigate, 
  isDarkMode, 
  classTimerSeconds = 6155, 
  setClassTimerSeconds,
  focusMode = true,
  setFocusMode = () => {},
  onTakeBreak,
  preview = false
}) {
  const [isRunning, setIsRunning] = useState(true);
  const [waterDrank, setWaterDrank] = useState(4);
  const [postureAlert, setPostureAlert] = useState(false);

  // Active live timer effect - only run when NOT in preview
  useEffect(() => {
    if (preview || !setClassTimerSeconds) return;
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setClassTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, setClassTimerSeconds, preview]);

  // Format seconds to HH : MM : SS
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
      h: String(hours).padStart(2, '0'),
      m: String(minutes).padStart(2, '0'),
      s: String(seconds).padStart(2, '0'),
    };
  };

  const time = preview ? { h: '01', m: '42', s: '35' } : formatTime(classTimerSeconds || 6155);

  const handleDrinkWater = () => {
    setWaterDrank((prev) => prev + 1);
    if (!preview) playChime('bell');
  };

  const handleSimulate50Min = () => {
    // Jump timer or trigger break alert immediately for lab demonstration
    playChime('alert');
    onNavigate(4);
  };

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
            <span className="font-bold text-sm">Online Class</span>
          </button>

          {/* LIVE status pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-black tracking-wider">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            LIVE
          </div>
        </div>

        {/* Live Timer Card */}
        <div className="mt-4 p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-center shadow-xs">
          {/* Lecture Screen Vector Mockup */}
          <div className="w-full h-16 rounded-xl bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center mb-3 border border-slate-200/50 dark:border-slate-600/40 relative overflow-hidden">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-xs font-bold">
                👨‍🏫
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Digital Systems & Logic</p>
                <p className="text-[9px] text-slate-400">Prof. Sharma • 48 students connected</p>
              </div>
            </div>
            <div className="absolute top-1.5 right-2 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            </div>
          </div>

          <p className="text-xs font-medium text-slate-400 dark:text-slate-400">Class in progress...</p>
          
          {/* Digital Clock Display */}
          <div className="my-2 flex items-center justify-center gap-1 font-mono text-3xl font-extrabold tracking-wider text-slate-900 dark:text-white">
            <span className="px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60">{time.h}</span>
            <span className="text-indigo-500 animate-pulse">:</span>
            <span className="px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60">{time.m}</span>
            <span className="text-indigo-500 animate-pulse">:</span>
            <span className="px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60">{time.s}</span>
          </div>

          {/* Quick Timer Control */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 flex items-center gap-1 transition cursor-pointer"
            >
              {isRunning ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3" /> Resume</>}
            </button>
            <span className="text-[10px] text-slate-400">• Anti-Fatigue Monitor ON</span>
          </div>
        </div>

        {/* Focus Mode Card */}
        <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-300/40 dark:border-emerald-700/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">Focus Mode</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Stay attentive! Distractions filtered.</p>
            </div>
          </div>

          {/* Toggle Switch */}
          <button
            onClick={() => {
              setFocusMode(!focusMode);
              playChime('bell');
            }}
            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
              focusMode ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                focusMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Micro Reminders: Water & Posture */}
        <div className="grid grid-cols-2 gap-2.5 mt-3">
          {/* Water Chip */}
          <button
            onClick={handleDrinkWater}
            className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-left hover:border-blue-400 transition cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-base">💧</span>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Drink Water</p>
                <p className="text-[10px] text-slate-400">{waterDrank} glasses today</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded-md">
              +Sip
            </span>
          </button>

          {/* Posture Chip */}
          <button
            onClick={() => {
              setPostureAlert(true);
              playChime('bell');
              setTimeout(() => setPostureAlert(false), 2500);
            }}
            className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-left hover:border-emerald-400 transition cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-base">👁</span>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Good Posture</p>
                <p className="text-[10px] text-slate-400">{postureAlert ? "Great posture! 👍" : "Shoulders back"}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded-md">
              Check
            </span>
          </button>
        </div>

        {/* Demo Fast-Forward Helper for Evaluation */}
        <div className="mt-3">
          <button
            onClick={handleSimulate50Min}
            className="w-full py-2 px-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-dashed border-amber-300 dark:border-amber-700/60 text-amber-700 dark:text-amber-300 text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-amber-100/70 transition cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Simulate 50-Min Fatigue Alert Trigger</span>
          </button>
        </div>
      </div>

      {/* Main Action: Take Break Button (Pinkish/Rose from Pic 1) */}
      <div className="pb-3 pt-2">
        <button
          onClick={() => {
            if (onTakeBreak) onTakeBreak();
            onNavigate(4);
          }}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-bold text-sm shadow-md shadow-rose-400/30 flex items-center justify-center gap-2 active:scale-[0.98] transition cursor-pointer"
        >
          <span>Take Break</span>
          <Clock className="w-4 h-4" />
        </button>

        <p className="text-center text-[10px] text-slate-400 mt-2">
          Recommended: Take a 5-minute break every 50 minutes
        </p>
      </div>
    </div>
  );
}
