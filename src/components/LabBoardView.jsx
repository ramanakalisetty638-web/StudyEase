import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Layers, 
  Eye, 
  Maximize2,
  Clock,
  ShieldCheck,
  Brain,
  Coffee,
  Moon,
  Bell,
  Smartphone,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Download,
  Info,
  Sliders
} from 'lucide-react';
import { MobileDeviceFrame } from './MobileDeviceFrame';
import { Screen1Splash } from './screens/Screen1Splash';
import { Screen2Home } from './screens/Screen2Home';
import { Screen3DuringClass } from './screens/Screen3DuringClass';
import { Screen4BreakReminder } from './screens/Screen4BreakReminder';
import { Screen5QuickRefresh } from './screens/Screen5QuickRefresh';
import { Screen6Progress } from './screens/Screen6Progress';
import { Screen7Settings } from './screens/Screen7Settings';
import { Screen8Reminders } from './screens/Screen8Reminders';

export function LabBoardView({
  userData,
  setUserData,
  isDarkMode,
  setIsDarkMode,
  classTimerSeconds,
  setClassTimerSeconds,
  focusMode,
  setFocusMode,
  reminders,
  setReminders,
  onSelectScreen,
}) {
  // Board Sub-tab: 'interactive' (Live 2x4 Prototype) | 'poster' (Official Pic 1 Reference)
  const [boardTab, setBoardTab] = useState('interactive');

  // Zoom scale for the 8 scaled cards: 0.62 (Fit/Laptop) | 0.70 (Normal) | 0.80 (Large)
  const [zoomScale, setZoomScale] = useState(0.66);

  // Active Screen in Inspector Modal (null = modal closed, 1..8 = open)
  const [modalScreen, setModalScreen] = useState(null);

  // Poster Image zoom level
  const [posterZoom, setPosterZoom] = useState(100);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalScreen(null);
      } else if (modalScreen !== null) {
        if (e.key === 'ArrowRight') {
          setModalScreen((prev) => (prev < 8 ? prev + 1 : 1));
        } else if (e.key === 'ArrowLeft') {
          setModalScreen((prev) => (prev > 1 ? prev - 1 : 8));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalScreen]);

  const screenList = [
    { num: 1, title: "Splash Screen", subtitle: "Welcome & Onboarding" },
    { num: 2, title: "Home / Dashboard", subtitle: "Live Learning Tracker" },
    { num: 3, title: "During Class", subtitle: "Lecture Live Anti-Fatigue" },
    { num: 4, title: "Break Reminder", subtitle: "50-Min Smart Alert" },
    { num: 5, title: "Quick Refresh", subtitle: "4-4 Guided Breathing" },
    { num: 6, title: "Progress", subtitle: "Screen Time & Wellness Score" },
    { num: 7, title: "Settings", subtitle: "Fatigue Nudges & Dark Mode" },
    { num: 8, title: "Notifications / Reminders", subtitle: "Habit Micro-Checklist" },
  ];

  // Render component for a screen number
  const renderScreenContent = (screenNum, isInteractive = false) => {
    switch (screenNum) {
      case 1:
        return (
          <Screen1Splash 
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)} 
            isDarkMode={isDarkMode} 
          />
        );
      case 2:
        return (
          <Screen2Home 
            userData={userData} 
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)} 
            isDarkMode={isDarkMode} 
            onStartClass={() => {
              if (isInteractive) setModalScreen(3);
            }} 
          />
        );
      case 3:
        return (
          <Screen3DuringClass
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)}
            isDarkMode={isDarkMode}
            classTimerSeconds={classTimerSeconds}
            setClassTimerSeconds={isInteractive ? setClassTimerSeconds : undefined}
            focusMode={focusMode}
            setFocusMode={isInteractive ? setFocusMode : undefined}
            onTakeBreak={() => {
              if (isInteractive) setModalScreen(4);
            }}
            preview={!isInteractive}
          />
        );
      case 4:
        return (
          <Screen4BreakReminder 
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)} 
            isDarkMode={isDarkMode} 
          />
        );
      case 5:
        return (
          <Screen5QuickRefresh
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)}
            isDarkMode={isDarkMode}
            onBreakCompleted={() => {
              setUserData((prev) => ({
                ...prev,
                breaksTaken: prev.breaksTaken + 1,
                wellnessScore: Math.min(100, prev.wellnessScore + 5),
              }));
            }}
            preview={!isInteractive}
          />
        );
      case 6:
        return (
          <Screen6Progress 
            userData={userData} 
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)} 
            isDarkMode={isDarkMode} 
          />
        );
      case 7:
        return (
          <Screen7Settings
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 8:
        return (
          <Screen8Reminders
            onNavigate={(s) => isInteractive ? setModalScreen(s) : setModalScreen(s)}
            isDarkMode={isDarkMode}
            reminders={reminders}
            setReminders={setReminders}
          />
        );
      default:
        return <Screen1Splash onNavigate={setModalScreen} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className="w-full max-w-[1720px] mx-auto p-3 sm:p-5 lg:p-6 select-none">
      {/* Top Poster View Switcher & Toolbar */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
        {/* Board Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setBoardTab('interactive')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              boardTab === 'interactive'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Board (8 Connected Screens)</span>
          </button>

          <button
            onClick={() => setBoardTab('poster')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              boardTab === 'poster'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Lab Poster (Pic 1 Reference)</span>
          </button>
        </div>

        {/* Board Zoom & Scale Controls */}
        {boardTab === 'interactive' ? (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
              Phone Scale:
            </span>
            <div className="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600">
              {[
                { label: 'Fit (62%)', value: 0.62 },
                { label: 'Standard (66%)', value: 0.66 },
                { label: 'Large (75%)', value: 0.75 },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setZoomScale(btn.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    zoomScale === btn.value
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40">
              💡 Tip: Click any screen to test in full-size inspector
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPosterZoom((prev) => Math.max(60, prev - 15))}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 transition cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 min-w-12 text-center">
              {posterZoom}%
            </span>
            <button
              onClick={() => setPosterZoom((prev) => Math.min(180, prev + 15))}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 transition cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPosterZoom(100)}
              className="px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
            >
              Reset
            </button>
            <a
              href="./images/demo_final.jpg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Original</span>
            </a>
          </div>
        )}
      </div>

      {/* Main Poster Container (Matches Pic 1) */}
      {boardTab === 'interactive' ? (
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Left Presentation Column (Scenario & Key Features from Pic 1) */}
          <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 space-y-5 lg:sticky lg:top-20">
            {/* Header & Scenario Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-700/90 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  StudyEase
                </span>
                <span className="text-2xl text-emerald-500">🍃</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Your Digital Learning Wellness Companion
              </p>

              {/* Scenario Section */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Scenario
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  <strong>Aditi</strong> is a 20-year-old engineering student who attends 6–8 hours of online classes daily. Due to continuous screen exposure, she often feels drained, distracted and demotivated, which leads to reduced participation and poor learning retention.
                </p>

                {/* Problem Statement Callout Box */}
                <div className="mt-3.5 p-3 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block mb-1">
                    How Might We?
                  </span>
                  <p className="text-xs font-semibold text-indigo-900 dark:text-indigo-200 leading-snug">
                    How might we help students like Aditi stay energized and engaged during online learning while minimizing digital fatigue?
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features List (1 to 8 - Exact match to Pic 1) */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-700/90 shadow-sm">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Key Features
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                  8 Modules
                </span>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    id: 1,
                    title: "Smart Break Reminders",
                    sub: "Reminds to take short breaks • Eye rest & stretch alerts",
                    bg: "bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300",
                  },
                  {
                    id: 2,
                    title: "Eye Care",
                    sub: "20-20-20 rule • Guided eye exercises",
                    bg: "bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300",
                  },
                  {
                    id: 3,
                    title: "Quick Refresh",
                    sub: "Breathing & stretching activities (4-4 rhythm)",
                    bg: "bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300",
                  },
                  {
                    id: 4,
                    title: "Focus Mode",
                    sub: "Mini activities / attention checks / distraction shield",
                    bg: "bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300",
                  },
                  {
                    id: 5,
                    title: "Wellness Tracking",
                    sub: "Screen time, breaks, fatigue rating (82/100)",
                    bg: "bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300",
                  },
                  {
                    id: 6,
                    title: "Dark Mode",
                    sub: "For comfortable evening class use",
                    bg: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
                  },
                  {
                    id: 7,
                    title: "Notifications",
                    sub: "Water, posture, and healthy habits reminders",
                    bg: "bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300",
                  },
                  {
                    id: 8,
                    title: "Simple & Clean UI",
                    sub: "Easy to navigate, student friendly pastel design",
                    bg: "bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300",
                  },
                ].map((feat) => (
                  <div key={feat.id} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[10px] shrink-0 mt-0.5 ${feat.bg}`}>
                      {feat.id}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {feat.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Tagline */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-700 text-center">
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  Stay Focused • Stay Healthy • Learn Better ♡
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Exact 2 Rows × 4 Columns Layout matching Pic 1 */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-5 justify-items-center">
              {screenList.map((screen) => (
                <div 
                  key={screen.num}
                  className="group relative flex flex-col items-center bg-white dark:bg-slate-800/90 p-3 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 w-full max-w-[280px]"
                >
                  {/* Card Header */}
                  <div className="w-full flex items-center justify-between px-1 mb-2">
                    <div className="truncate">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                        {screen.num}. {screen.title}
                      </span>
                    </div>

                    <button
                      onClick={() => setModalScreen(screen.num)}
                      className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 transition cursor-pointer shrink-0"
                      title="Inspect & Test Screen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Scaled Phone Frame for Board Display */}
                  <div 
                    onClick={() => setModalScreen(screen.num)}
                    className="relative cursor-pointer group-hover:ring-2 ring-indigo-500/50 rounded-[32px] transition-all"
                  >
                    <MobileDeviceFrame 
                      isDarkMode={isDarkMode}
                      scale={zoomScale}
                      showCaption={false}
                    >
                      {renderScreenContent(screen.num, false)}
                    </MobileDeviceFrame>

                    {/* Quick Hover Inspect Hint */}
                    <div className="absolute inset-0 bg-indigo-900/10 dark:bg-indigo-950/20 backdrop-blur-[0.5px] rounded-[32px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none">
                      <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3" />
                        Inspect & Test
                      </span>
                    </div>
                  </div>

                  {/* Screen Number Label Under Device */}
                  <div className="mt-2 text-center">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      {screen.num}. {screen.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* OFFICIAL LAB POSTER (PIC 1 REFERENCE) VIEW */
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center">
          <div className="max-w-xl mx-auto mb-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              Official Lab Poster Board Design (Pic 1)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              High-resolution digital engineering poster submission showing the Problem Scenario, 8 Key Modules, and the 2×4 Phone Prototype Layout.
            </p>
          </div>

          {/* Scaled Poster Image Canvas */}
          <div className="overflow-auto max-h-[780px] p-2 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex justify-center items-center">
            <img 
              src="./images/demo_final.jpg" 
              alt="StudyEase Official Lab Poster"
              className="rounded-xl shadow-2xl transition-all duration-200 max-w-full object-contain"
              style={{ width: `${posterZoom}%` }}
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="./images/demo_final.jpg"
              download="StudyEase_Lab_Poster.jpg"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download High-Resolution Poster</span>
            </a>

            <button
              onClick={() => setBoardTab('interactive')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Back to Interactive Board</span>
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* INTERACTIVE SCREEN INSPECTION MODAL (Focused 100% Scale Test) */}
      {/* ============================================================ */}
      {modalScreen !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalScreen(null);
          }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-5 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center max-h-[95vh] overflow-y-auto no-scrollbar">
            {/* Modal Top Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-full">
                  Screen {modalScreen} of 8
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {screenList[modalScreen - 1]?.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    const scr = modalScreen;
                    setModalScreen(null);
                    onSelectScreen(scr);
                  }}
                  className="px-2.5 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 text-xs font-bold flex items-center gap-1 cursor-pointer transition"
                  title="Open in Phone Simulator Mode"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Phone Simulator</span>
                </button>

                <button
                  onClick={() => setModalScreen(null)}
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Screen Switcher Strip Inside Modal */}
            <div className="flex items-center justify-center gap-1.5 mb-4 flex-wrap">
              {screenList.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setModalScreen(s.num)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center ${
                    modalScreen === s.num
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                  title={`${s.num}. ${s.title}`}
                >
                  {s.num}
                </button>
              ))}
            </div>

            {/* Full 100% Life-Size Interactive Phone */}
            <div className="my-1">
              <MobileDeviceFrame 
                isDarkMode={isDarkMode}
                scale={1}
                screenNumber={modalScreen}
                screenTitle={screenList[modalScreen - 1]?.title}
                showCaption={false}
              >
                {renderScreenContent(modalScreen, true)}
              </MobileDeviceFrame>
            </div>

            {/* Prev / Next Modal Controls */}
            <div className="w-full flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-700">
              <button
                disabled={modalScreen <= 1}
                onClick={() => setModalScreen((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Screen</span>
              </button>

              <span className="text-xs text-slate-400">
                Press ← or → keys to switch
              </span>

              <button
                disabled={modalScreen >= 8}
                onClick={() => setModalScreen((prev) => Math.min(8, prev + 1))}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <span>Next Screen</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
