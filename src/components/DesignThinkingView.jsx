import React, { useState } from 'react';
import { 
  Lightbulb, 
  GitMerge, 
  FileText, 
  User, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ArrowRight,
  Target,
  Brain,
  Eye,
  Coffee,
  Heart
} from 'lucide-react';
import { designThinkingData } from '../data/initialData';

export function DesignThinkingView({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState('divergent'); // divergent | convergent | prototype | persona

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-200 dark:border-indigo-800 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Digital Engineering Lab • Design Thinking Journey
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          From Problem to Working Prototype
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
          Explore the Double Diamond methodology: Divergent brainstorming, Convergent selection, low-fidelity manual sketches, and high-fidelity implementation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
        {[
          { id: 'divergent', label: '1. Divergent Ideas (Pic 3)', icon: Lightbulb },
          { id: 'convergent', label: '2. Convergent Solution (Pic 2)', icon: GitMerge },
          { id: 'prototype', label: '3. Manual Prototype (Pic 4)', icon: FileText },
          { id: 'persona', label: '4. Persona & Problem (Aditi)', icon: User },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: DIVERGENT IDEAS */}
      {activeTab === 'divergent' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Divergent Ideas Phase</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 font-bold">
                    Pic 3 Reference
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  <strong>Problem:</strong> Reducing Digital Fatigue — "Generate as many possible solutions as you can. (Think widely, don't limit yourself)"
                </p>
              </div>

              <a
                href="./images/divergent.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition"
              >
                <span>View Original Hand-Drawn Sketch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 5 Idea Columns (Matching Pic 3) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
              {designThinkingData.divergentIdeas.map((idea) => (
                <div 
                  key={idea.id}
                  className="rounded-2xl p-4 border flex flex-col justify-between transition-transform hover:-translate-y-1 bg-slate-50/70 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
                        {idea.id}
                      </span>
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 leading-snug">
                        {idea.name}
                      </h4>
                    </div>

                    <ul className="space-y-1.5 mt-3">
                      {idea.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                          <span className="text-indigo-500 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700 text-[10px] font-semibold text-slate-400">
                    Ideation Stream #{idea.id}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Sketch Preview */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-3">
                Original Lab Submission Sheet: Divergent Ideas
              </p>
              <img 
                src="./images/divergent.jpg" 
                alt="Divergent Ideas Sheet" 
                className="max-h-72 mx-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONVERGENT SYNTHESIS */}
      {activeTab === 'convergent' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Convergent Synthesis Phase</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 font-bold">
                    Pic 2 Reference
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  "After comparing all the ideas, we selected and combined the best features to create one solution."
                </p>
              </div>

              <a
                href="./images/convergent.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition"
              >
                <span>View Original Hand-Drawn Diagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Synthesis Flow Architecture */}
            <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Selected Feeds */}
              <div className="lg:col-span-4 space-y-2.5">
                {[
                  { num: 1, title: 'Smart Break Reminder', tags: 'breaks, eye rest, water' },
                  { num: 2, title: 'Digital Wellness Assistant', tags: 'breathing, stretching' },
                  { num: 3, title: 'Focus & Engagement Tool', tags: 'quizzes, activity, focus' },
                  { num: 4, title: 'Digital Fatigue Tracker', tags: 'screen time, breaks, mood' },
                  { num: 5, title: 'Smart Learning Mode', tags: 'all-in-one support' },
                ].map((item) => (
                  <div key={item.num} className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/40 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.title}</h5>
                      <p className="text-[10px] text-slate-400">({item.tags})</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Convergence Hub */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-3xl bg-gradient-to-b from-indigo-50 via-purple-50 to-emerald-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 border-2 border-dashed border-indigo-300 dark:border-indigo-700">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                  Final Solution
                </span>
                <div className="flex items-center gap-1.5 text-2xl font-black text-slate-900 dark:text-white">
                  <span>StudyEase</span>
                  <span className="text-emerald-500">🍃</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Your Digital Wellness Companion
                </p>
                <div className="mt-4 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold">
                  ✓ 100% Student-Friendly Design
                </div>
              </div>

              {/* Synthesized Key Pillars */}
              <div className="lg:col-span-4 space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                  Synthesized Key Features:
                </h4>
                {[
                  { icon: Clock, title: 'Smart Breaks', desc: '50-minute automatic cadence' },
                  { icon: Eye, title: 'Eye Care', desc: '20-20-20 rule protection' },
                  { icon: Heart, title: 'Quick Refresh', desc: '4-4 guided breathing' },
                  { icon: Target, title: 'Focus Mode', desc: 'Live distraction shielding' },
                  { icon: Coffee, title: 'Wellness Tracking', desc: 'Screen time, breaks, fatigue score' },
                ].map((pil, idx) => {
                  const Icon = pil.icon;
                  return (
                    <div key={idx} className="p-3 rounded-2xl bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100">{pil.title}</h5>
                        <p className="text-[10px] text-slate-400">{pil.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Diagram Preview */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-3">
                Original Lab Submission Sheet: Convergent Synthesis
              </p>
              <img 
                src="./images/convergent.jpg" 
                alt="Convergent Sheet" 
                className="max-h-72 mx-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MANUAL PROTOTYPE SKETCHES */}
      {activeTab === 'prototype' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Manual Paper Wireframes</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 font-bold">
                    Pic 4 Reference
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  "Less Screen Fatigue, More Learning!" — 6 core interaction wireframes tested with users prior to high-fidelity coding.
                </p>
              </div>

              <a
                href="./images/manual_prototype.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition"
              >
                <span>View Full Paper Sketch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hand-drawn vs Digital Map */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-6">
              {[
                { id: 1, title: '1. Home / Dashboard', notes: 'Hi Aditi, 4h 20m, 3 breaks, Start Class' },
                { id: 2, title: '2. During Class', notes: '01:42:35 LIVE, Focus Mode, Drink water, Take Break' },
                { id: 3, title: '3. Break Reminder', notes: '50m alert, Rest eyes, Stretch, Water, Start 5-min' },
                { id: 4, title: '4. Quick Refresh', notes: 'Breathe in 4s, animated circle, Breathe out 4s' },
                { id: 5, title: '5. My Progress', notes: 'Screen time 6h, breaks 5, score 82/100, suggestions' },
                { id: 6, title: '6. Settings', notes: 'Reminder settings, Eye care, Posture, Dark mode' },
              ].map((wire) => (
                <div key={wire.id} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                    Wireframe {wire.id}
                  </span>
                  <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">{wire.title}</h5>
                  <p className="text-[10px] text-slate-400 mt-1">{wire.notes}</p>
                </div>
              ))}
            </div>

            {/* Full Image Preview */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-3">
                Original Hand-Drawn Paper Prototype Sheet (Pic 4)
              </p>
              <img 
                src="./images/manual_prototype.jpg" 
                alt="Manual Prototype Sheet" 
                className="max-h-96 mx-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700 object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PERSONA & PROBLEM (ADITI) */}
      {activeTab === 'persona' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Persona Profile Card */}
              <div className="md:col-span-4 p-5 rounded-3xl bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-800 border border-indigo-200 dark:border-indigo-800 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center text-3xl font-black shadow-lg">
                  👩‍💻
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-3">
                  Aditi
                </h3>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  20-Year-Old Engineering Student
                </p>
                <div className="mt-4 pt-4 border-t border-indigo-200/60 dark:border-indigo-800/60 text-left space-y-2 text-xs">
                  <p><strong>Daily Online Classes:</strong> 6–8 hours daily</p>
                  <p><strong>Typical Schedule:</strong> 09:00 AM – 05:00 PM</p>
                  <p><strong>Key Devices:</strong> Laptop, tablet, smartphone</p>
                  <p><strong>Major Challenge:</strong> Continuous screen glare & mental fatigue</p>
                </div>
              </div>

              {/* Empathy & Pain Points */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  Empathy Mapping & Core Problems
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: "Physical Symptoms",
                      desc: "Dry, irritated eyes (asthenopia), neck stiffness, hunched posture from desk work.",
                      icon: "👁️"
                    },
                    {
                      title: "Cognitive Fatigue",
                      desc: "Information overload, attention span drop after 45 minutes of monotonous lecture.",
                      icon: "🧠"
                    },
                    {
                      title: "Habit Disruption",
                      desc: "Forgetting to drink water, skipping regular pauses, bingeing social media during lecture gaps.",
                      icon: "💧"
                    },
                    {
                      title: "Academic Impact",
                      desc: "Reduced participation, lower retention in technical subjects, feeling demotivated.",
                      icon: "📉"
                    },
                  ].map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{p.icon}</span>
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">{p.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-300 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>

                {/* HMW Statement */}
                <div className="mt-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/80 dark:border-emerald-800/80">
                  <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1">
                    Design Thinking Solution Statement:
                  </h4>
                  <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200 leading-relaxed">
                    By equipping Aditi with <strong>StudyEase</strong>, an unobtrusive wellness companion, we provide timely micro-breaks, 20-20-20 eye routines, and guided breathing that naturally restore energy and engagement without interrupting her engineering studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
