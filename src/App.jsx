import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  LayoutGrid, 
  Lightbulb, 
  Moon, 
  Sun, 
  RotateCcw, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX
} from 'lucide-react';
import { initialUserData } from './data/initialData';
import { MobileDeviceFrame } from './components/MobileDeviceFrame';
import { LabBoardView } from './components/LabBoardView';
import { DesignThinkingView } from './components/DesignThinkingView';

import { Screen1Splash } from './components/screens/Screen1Splash';
import { Screen2Home } from './components/screens/Screen2Home';
import { Screen3DuringClass } from './components/screens/Screen3DuringClass';
import { Screen4BreakReminder } from './components/screens/Screen4BreakReminder';
import { Screen5QuickRefresh } from './components/screens/Screen5QuickRefresh';
import { Screen6Progress } from './components/screens/Screen6Progress';
import { Screen7Settings } from './components/screens/Screen7Settings';
import { Screen8Reminders } from './components/screens/Screen8Reminders';

export default function App() {
  // Global View Mode: 'phone' | 'board' | 'design'
  const [viewMode, setViewMode] = useState('phone');
  
  // Active screen in Phone Mode (1 through 8)
  const [activeScreen, setActiveScreen] = useState(1);

  // App Theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Global State (Synced across all screens & views)
  const [userData, setUserData] = useState(initialUserData);
  const [classTimerSeconds, setClassTimerSeconds] = useState(initialUserData.classTimerSeconds);
  const [focusMode, setFocusMode] = useState(initialUserData.focusMode);
  const [reminders, setReminders] = useState(initialUserData.reminders);

  // Sync dark mode class on document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Reset demo state helper
  const handleResetState = () => {
    setUserData(initialUserData);
    setClassTimerSeconds(initialUserData.classTimerSeconds);
    setFocusMode(true);
    setReminders(initialUserData.reminders);
    setActiveScreen(1);
  };

  const screenNames = [
    { num: 1, name: "Splash / Welcome", short: "1. Splash" },
    { num: 2, name: "Home Dashboard", short: "2. Home" },
    { num: 3, name: "During Online Class", short: "3. Class" },
    { num: 4, name: "Smart Break Reminder", short: "4. Break" },
    { num: 5, name: "Quick Refresh", short: "5. Refresh" },
    { num: 6, name: "My Progress", short: "6. Progress" },
    { num: 7, name: "Reminder Settings", short: "7. Settings" },
    { num: 8, name: "Notifications / Reminders", short: "8. Reminders" },
  ];

  // Render the current screen inside the Phone frame
  const renderActivePhoneScreen = () => {
    switch (activeScreen) {
      case 1:
        return <Screen1Splash onNavigate={setActiveScreen} isDarkMode={isDarkMode} />;
      case 2:
        return (
          <Screen2Home
            userData={userData}
            onNavigate={setActiveScreen}
            isDarkMode={isDarkMode}
            onStartClass={() => {
              setUserData((prev) => ({ ...prev, isClassRunning: true }));
            }}
          />
        );
      case 3:
        return (
          <Screen3DuringClass
            onNavigate={setActiveScreen}
            isDarkMode={isDarkMode}
            classTimerSeconds={classTimerSeconds}
            setClassTimerSeconds={setClassTimerSeconds}
            focusMode={focusMode}
            setFocusMode={setFocusMode}
            onTakeBreak={() => {}}
          />
        );
      case 4:
        return <Screen4BreakReminder onNavigate={setActiveScreen} isDarkMode={isDarkMode} />;
      case 5:
        return (
          <Screen5QuickRefresh
            onNavigate={setActiveScreen}
            isDarkMode={isDarkMode}
            onBreakCompleted={() => {
              setUserData((prev) => ({
                ...prev,
                breaksTaken: prev.breaksTaken + 1,
                wellnessScore: Math.min(100, prev.wellnessScore + 5),
              }));
            }}
          />
        );
      case 6:
        return <Screen6Progress userData={userData} onNavigate={setActiveScreen} isDarkMode={isDarkMode} />;
      case 7:
        return (
          <Screen7Settings
            onNavigate={setActiveScreen}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 8:
        return (
          <Screen8Reminders
            onNavigate={setActiveScreen}
            isDarkMode={isDarkMode}
            reminders={reminders}
            setReminders={setReminders}
          />
        );
      default:
        return <Screen1Splash onNavigate={setActiveScreen} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100/70 text-slate-800'
    }`}>
      {/* Top Application Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          {/* Logo & Lab Branding */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              🍃
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                  StudyEase
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200/60 dark:border-emerald-800/60">
                  Digital Engineering Lab
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden md:block">
                Digital Fatigue Companion • Persona: Aditi (20yo)
              </p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
            <button
              onClick={() => setViewMode('phone')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'phone'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Phone Simulator</span>
              <span className="sm:hidden">Phone</span>
            </button>

            <button
              onClick={() => setViewMode('board')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'board'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lab Poster Board (Pic 1)</span>
              <span className="sm:hidden">Board</span>
            </button>

            <button
              onClick={() => setViewMode('design')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'design'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Design Thinking</span>
              <span className="sm:hidden">Process</span>
            </button>
          </div>

          {/* Quick Controls: Dark Mode, Reset, GitHub */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handleResetState}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer hidden sm:flex items-center"
              title="Reset Demo State"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
        {/* VIEW 1: INTERACTIVE PHONE SIMULATOR */}
        {viewMode === 'phone' && (
          <div className="w-full max-w-4xl flex flex-col items-center py-2 sm:py-6">
            {/* Quick Screen Selector Strip */}
            <div className="w-full max-w-xl flex items-center justify-center gap-1.5 flex-wrap mb-6 px-2">
              {screenNames.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveScreen(s.num)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeScreen === s.num
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  {s.short}
                </button>
              ))}
            </div>

            {/* Central Mobile Device Frame */}
            <MobileDeviceFrame
              isDarkMode={isDarkMode}
              screenNumber={activeScreen}
              screenTitle={screenNames[activeScreen - 1]?.name}
            >
              {renderActivePhoneScreen()}
            </MobileDeviceFrame>

            {/* Next / Prev Screen Helper Controls */}
            <div className="mt-5 flex items-center gap-3">
              <button
                disabled={activeScreen <= 1}
                onClick={() => setActiveScreen((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Previous Screen
              </button>

              <span className="text-xs text-slate-400 font-medium">
                Screen {activeScreen} of 8
              </span>

              <button
                disabled={activeScreen >= 8}
                onClick={() => setActiveScreen((prev) => Math.min(8, prev + 1))}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                Next Screen
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: LAB POSTER BOARD (EXACT MATCH TO PIC 1) */}
        {viewMode === 'board' && (
          <LabBoardView
            userData={userData}
            setUserData={setUserData}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            classTimerSeconds={classTimerSeconds}
            setClassTimerSeconds={setClassTimerSeconds}
            focusMode={focusMode}
            setFocusMode={setFocusMode}
            reminders={reminders}
            setReminders={setReminders}
            onSelectScreen={(screenNum) => {
              setActiveScreen(screenNum);
              setViewMode('phone');
            }}
          />
        )}

        {/* VIEW 3: DESIGN THINKING PROCESS (PICS 2, 3, 4) */}
        {viewMode === 'design' && (
          <DesignThinkingView isDarkMode={isDarkMode} />
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs text-slate-400">
        <p>
          StudyEase Prototype • Digital Engineering Lab • Problem Statement: Reducing Digital Fatigue for Aditi
        </p>
      </footer>
    </div>
  );
}
