import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  Sparkles, 
  RotateCcw, 
  CheckCircle, 
  Pause, 
  Play, 
  Award,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChime } from '../../utils/audio';

export function Screen5QuickRefresh({ 
  onNavigate, 
  isDarkMode, 
  onBreakCompleted 
}) {
  const [secondsLeft, setSecondsLeft] = useState(60); // 01:00
  const [isActive, setIsActive] = useState(true);
  const [breathPhase, setBreathPhase] = useState('in'); // 'in' or 'out'
  const [phaseSeconds, setPhaseSeconds] = useState(4);

  // 1-minute countdown timer
  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      handleComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  // 4s Inhale / 4s Exhale rhythm
  useEffect(() => {
    let breathInterval = null;
    if (isActive && secondsLeft > 0) {
      breathInterval = setInterval(() => {
        setPhaseSeconds((prev) => {
          if (prev <= 1) {
            setBreathPhase((current) => {
              const next = current === 'in' ? 'out' : 'in';
              playChime('breathe');
              return next;
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(breathInterval);
  }, [isActive, secondsLeft]);

  const handleComplete = () => {
    setIsActive(false);
    playChime('success');
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899']
    });
    if (onBreakCompleted) onBreakCompleted();
    setTimeout(() => {
      onNavigate(6); // Navigate to My Progress
    }, 1200);
  };

  const formatTimer = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className={`h-full flex flex-col justify-between p-4.5 select-none transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-gradient-to-b from-blue-50/50 via-white to-indigo-50/40 text-slate-800'
    }`}>
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <button 
            onClick={() => onNavigate(4)}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 -ml-1 text-indigo-600" />
            <span className="font-bold text-sm">Quick Refresh</span>
          </button>
          
          <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-0.5 rounded-full">
            4-4 Box Breathing
          </span>
        </div>

        {/* Calm Avatar Illustration */}
        <div className="text-center mt-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center shadow-xs">
            <svg viewBox="0 0 100 100" className="w-10 h-10">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#6366f1" strokeWidth="4" opacity="0.3" />
              {/* Meditating face */}
              <circle cx="50" cy="46" r="26" fill="#fcd34d" />
              {/* Closed relaxed eyes */}
              <path d="M40 46 Q44 50 48 46" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M52 46 Q56 50 60 46" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Gentle smile */}
              <path d="M45 57 Q50 62 55 57" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Hair */}
              <path d="M28 42 C28 20 72 20 72 42 C64 30 36 30 28 42 Z" fill="#1e293b" />
            </svg>
          </div>
        </div>

        {/* Breathing Guide Section */}
        <div className="text-center mt-3">
          <div className="transition-all duration-500">
            <h3 className={`text-base font-extrabold transition-all duration-500 ${
              breathPhase === 'in' 
                ? 'text-indigo-600 dark:text-indigo-400 scale-105' 
                : 'text-slate-400 dark:text-slate-500'
            }`}>
              Breathe In
            </h3>
            <p className="text-xs text-slate-400 font-medium">4 seconds</p>
          </div>

          {/* Animated Dynamic Breathing Circle */}
          <div className="relative my-5 flex items-center justify-center h-44">
            {/* Outer soft aura */}
            <div 
              className={`absolute rounded-full transition-all duration-1000 ease-in-out ${
                breathPhase === 'in'
                  ? 'w-40 h-40 bg-indigo-500/15 dark:bg-indigo-400/20 scale-110'
                  : 'w-24 h-24 bg-teal-500/10 dark:bg-teal-400/15 scale-90'
              }`}
            />

            {/* Middle pulsing ring */}
            <div 
              className={`absolute rounded-full border-2 transition-all duration-1000 ease-in-out ${
                breathPhase === 'in'
                  ? 'w-32 h-32 border-indigo-400 shadow-lg shadow-indigo-300/40 dark:shadow-indigo-900/50'
                  : 'w-20 h-20 border-teal-400 opacity-60'
              }`}
            />

            {/* Center Core Circle with live phase countdown */}
            <div className={`relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-1000 shadow-md ${
              breathPhase === 'in'
                ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white scale-105'
                : 'bg-gradient-to-tr from-teal-400 to-emerald-500 text-white scale-95'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider">
                {breathPhase === 'in' ? 'Inhale' : 'Exhale'}
              </span>
              <span className="text-2xl font-black font-mono mt-0.5">
                {phaseSeconds}s
              </span>
            </div>
          </div>

          {/* Breathe Out section */}
          <div className="transition-all duration-500">
            <h3 className={`text-base font-extrabold transition-all duration-500 ${
              breathPhase === 'out' 
                ? 'text-teal-600 dark:text-teal-400 scale-105' 
                : 'text-slate-400 dark:text-slate-500'
            }`}>
              Breathe Out
            </h3>
            <p className="text-xs text-slate-400 font-medium">4 seconds</p>
          </div>
        </div>

        {/* 01:00 Session Timer Badge */}
        <div className="mt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-indigo-50/80 dark:bg-slate-800 border border-indigo-200/60 dark:border-slate-700">
            <span className="text-xs text-slate-400 font-medium">Timer:</span>
            <span className="font-mono text-base font-bold text-indigo-700 dark:text-indigo-300">
              {formatTimer(secondsLeft)}
            </span>
            <button
              onClick={() => setIsActive(!isActive)}
              className="p-1 rounded-lg text-slate-500 hover:text-indigo-600 transition cursor-pointer"
              title={isActive ? "Pause" : "Play"}
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons: Done & Skip */}
      <div className="pb-3 pt-2">
        <button
          onClick={handleComplete}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition cursor-pointer"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Done • Refresh Complete (+5 Score)</span>
        </button>

        <button
          onClick={() => onNavigate(3)}
          className="w-full mt-2 py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
        >
          Skip & Return to Class
        </button>
      </div>
    </div>
  );
}
