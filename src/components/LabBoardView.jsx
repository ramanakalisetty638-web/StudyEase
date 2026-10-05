import React from 'react';
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
  Smartphone
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
  const screens = [
    {
      num: 1,
      title: "Splash Screen",
      component: (
        <Screen1Splash 
          onNavigate={(s) => onSelectScreen(s)} 
          isDarkMode={isDarkMode} 
        />
      ),
    },
    {
      num: 2,
      title: "Home / Dashboard",
      component: (
        <Screen2Home 
          userData={userData} 
          onNavigate={(s) => onSelectScreen(s)} 
          isDarkMode={isDarkMode} 
          onStartClass={() => {}} 
        />
      ),
    },
    {
      num: 3,
      title: "During Class",
      component: (
        <Screen3DuringClass
          onNavigate={(s) => onSelectScreen(s)}
          isDarkMode={isDarkMode}
          classTimerSeconds={classTimerSeconds}
          setClassTimerSeconds={setClassTimerSeconds}
          focusMode={focusMode}
          setFocusMode={setFocusMode}
          onTakeBreak={() => {}}
        />
      ),
    },
    {
      num: 4,
      title: "Break Reminder",
      component: (
        <Screen4BreakReminder 
          onNavigate={(s) => onSelectScreen(s)} 
          isDarkMode={isDarkMode} 
        />
      ),
    },
    {
      num: 5,
      title: "Quick Refresh",
      component: (
        <Screen5QuickRefresh
          onNavigate={(s) => onSelectScreen(s)}
          isDarkMode={isDarkMode}
          onBreakCompleted={() => {
            setUserData((prev) => ({
              ...prev,
              breaksTaken: prev.breaksTaken + 1,
              wellnessScore: Math.min(100, prev.wellnessScore + 5),
            }));
          }}
        />
      ),
    },
    {
      num: 6,
      title: "Progress",
      component: (
        <Screen6Progress 
          userData={userData} 
          onNavigate={(s) => onSelectScreen(s)} 
          isDarkMode={isDarkMode} 
        />
      ),
    },
    {
      num: 7,
      title: "Settings",
      component: (
        <Screen7Settings
          onNavigate={(s) => onSelectScreen(s)}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          userData={userData}
          setUserData={setUserData}
        />
      ),
    },
    {
      num: 8,
      title: "Notifications / Reminders",
      component: (
        <Screen8Reminders
          onNavigate={(s) => onSelectScreen(s)}
          isDarkMode={isDarkMode}
          reminders={reminders}
          setReminders={setReminders}
        />
      ),
    },
  ];

  return (
    <div className="w-full max-w-[1700px] mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Presentation Column (Exact match to Pic 1) */}
        <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-20">
          {/* Logo & Headline */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                StudyEase
              </span>
              <span className="text-2xl text-emerald-500">🍃</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              Your Digital Learning Wellness Companion
            </p>

            {/* Scenario Card */}
            <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-700">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Scenario
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                <strong>Aditi</strong> is a 20-year-old engineering student who attends 6–8 hours of online classes daily. Due to continuous screen exposure, she often feels drained, distracted and demotivated, which leads to reduced participation and poor learning retention.
              </p>

              {/* Problem Statement Callout Box */}
              <div className="mt-4 p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/60">
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
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4 flex items-center justify-between">
              <span>Key Features</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                8 Integrated Modules
              </span>
            </h3>

            <div className="space-y-3">
              {[
                {
                  id: 1,
                  title: "Smart Break Reminders",
                  sub: "Reminds to take short breaks • Eye rest & stretch alerts",
                  bg: "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300",
                },
                {
                  id: 2,
                  title: "Eye Care",
                  sub: "20-20-20 rule • Guided eye exercises",
                  bg: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300",
                },
                {
                  id: 3,
                  title: "Quick Refresh",
                  sub: "Breathing & stretching activities (4-4 rhythm)",
                  bg: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300",
                },
                {
                  id: 4,
                  title: "Focus Mode",
                  sub: "Mini activities / attention checks / distraction shield",
                  bg: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300",
                },
                {
                  id: 5,
                  title: "Wellness Tracking",
                  sub: "Screen time, breaks, fatigue rating (82/100)",
                  bg: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300",
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
                  bg: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
                },
                {
                  id: 8,
                  title: "Simple & Clean UI",
                  sub: "Easy to navigate, student friendly pastel design",
                  bg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
                },
              ].map((feat) => (
                <div key={feat.id} className="flex items-start gap-2.5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 ${feat.bg}`}>
                    {feat.id}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-0.5 leading-snug">
                      {feat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Tagline */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Stay Focused • Stay Healthy • Learn Better 🤍
              </p>
            </div>
          </div>
        </div>

        {/* Right Area: All 8 Screens Grid (Exact layout from Pic 1) */}
        <div className="lg:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                Live Prototype Boards (All 8 Screens)
              </h2>
              <p className="text-xs text-slate-500">
                Interact with any screen directly, or click "Expand" to focus in full mobile device mode.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Interactive live prototype</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {screens.map((screen) => (
              <div 
                key={screen.num} 
                className="group relative flex flex-col items-center bg-white dark:bg-slate-800/60 p-3 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="w-full flex items-center justify-between px-2 mb-2">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    {screen.num}. {screen.title}
                  </span>
                  <button
                    onClick={() => onSelectScreen(screen.num)}
                    className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 transition cursor-pointer"
                    title="Open in Phone Mode"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Scaled Phone Frame for Board Display */}
                <div className="w-full flex justify-center transform origin-top scale-[0.88] hover:scale-[0.91] transition-transform">
                  <MobileDeviceFrame 
                    isDarkMode={isDarkMode}
                    screenNumber={screen.num}
                    screenTitle={screen.title}
                  >
                    {screen.component}
                  </MobileDeviceFrame>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
