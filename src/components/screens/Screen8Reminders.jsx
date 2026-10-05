import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Eye, 
  Droplets, 
  Activity, 
  UserCheck, 
  CheckCircle2, 
  Circle, 
  Plus, 
  ChevronRight, 
  Calendar, 
  Clock,
  Sparkles,
  Check,
  Bell
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChime } from '../../utils/audio';

export function Screen8Reminders({ 
  onNavigate, 
  isDarkMode, 
  reminders, 
  setReminders 
}) {
  const [activeTab, setActiveTab] = useState('All'); // All | Today | Upcoming
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('02:00 PM');
  const [newTag, setNewTag] = useState('Eye Care');

  const filteredReminders = reminders.filter((rem) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Today') return rem.category === 'today';
    if (activeTab === 'Upcoming') return rem.category === 'upcoming';
    return true;
  });

  const toggleComplete = (id) => {
    setReminders((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newStatus = !item.completed;
          if (newStatus) {
            playChime('success');
            confetti({
              particleCount: 40,
              spread: 50,
              origin: { y: 0.7 }
            });
          }
          return { ...item, completed: newStatus };
        }
        return item;
      })
    );
  };

  const handleAddReminder = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newRem = {
      id: `rem-${Date.now()}`,
      title: newTitle,
      description: "Custom student wellness reminder.",
      time: newTime,
      icon: newTag === 'Eye Care' ? 'eye' : newTag === 'Hydration' ? 'droplet' : 'stretch',
      completed: false,
      category: 'today',
      tag: newTag,
    };

    setReminders((prev) => [newRem, ...prev]);
    setNewTitle('');
    setShowAddModal(false);
    playChime('bell');
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'eye':
        return <Eye className="w-4 h-4 text-blue-500" />;
      case 'droplet':
        return <Droplets className="w-4 h-4 text-teal-500" />;
      case 'stretch':
        return <Activity className="w-4 h-4 text-emerald-500" />;
      case 'posture':
        return <UserCheck className="w-4 h-4 text-purple-500" />;
      default:
        return <Clock className="w-4 h-4 text-indigo-500" />;
    }
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
            <span className="font-bold text-sm">Reminders</span>
          </button>
          
          <button
            onClick={() => setShowAddModal(true)}
            className="p-1 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition cursor-pointer flex items-center gap-1 text-xs font-bold px-2.5 py-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

        {/* Filter Pills (All / Today / Upcoming - Exact from Pic 1) */}
        <div className="flex items-center gap-1.5 mt-3.5 p-1 rounded-2xl bg-slate-200/60 dark:bg-slate-800">
          {['All', 'Today', 'Upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notification Cards List (Exact matching Pic 1 & Pic 4) */}
        <div className="mt-3 space-y-2.5 max-h-[360px] overflow-y-auto pr-0.5 no-scrollbar">
          {filteredReminders.map((rem) => (
            <div
              key={rem.id}
              onClick={() => toggleComplete(rem.id)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer shadow-2xs flex items-center justify-between group ${
                rem.completed 
                  ? 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-800 opacity-60' 
                  : 'bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 hover:border-indigo-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  rem.completed ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-700/60'
                }`}>
                  {getIcon(rem.icon)}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={`text-xs font-bold ${
                      rem.completed 
                        ? 'line-through text-slate-400 dark:text-slate-500' 
                        : 'text-slate-800 dark:text-slate-100'
                    }`}>
                      {rem.title}
                    </h4>
                    <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-500">
                      {rem.time}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                    {rem.description}
                  </p>
                </div>
              </div>

              {/* Status checkbox */}
              <div className="ml-2 shrink-0">
                {rem.completed ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-indigo-500 transition-colors"></div>
                )}
              </div>
            </div>
          ))}

          {filteredReminders.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs">
              No reminders in this category.
            </div>
          )}
        </div>
      </div>

      {/* Add Reminder Modal */}
      {showAddModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form 
            onSubmit={handleAddReminder}
            className="bg-white dark:bg-slate-800 rounded-3xl p-5 max-w-xs w-full shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-3">Add Wellness Reminder</h3>
            
            <label className="block text-[11px] font-bold text-slate-500 mb-1">Reminder Name</label>
            <input 
              type="text" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} 
              placeholder="e.g. Eye Blink Break"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs mb-3 bg-slate-50 dark:bg-slate-900"
              required 
            />

            <label className="block text-[11px] font-bold text-slate-500 mb-1">Schedule Time</label>
            <input 
              type="text" 
              value={newTime} 
              onChange={(e) => setNewTime(e.target.value)} 
              placeholder="e.g. 04:15 PM"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs mb-3 bg-slate-50 dark:bg-slate-900"
            />

            <label className="block text-[11px] font-bold text-slate-500 mb-1">Category</label>
            <div className="flex gap-1.5 mb-4">
              {['Eye Care', 'Hydration', 'Movement'].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setNewTag(cat)}
                  className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${
                    newTag === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
              >
                Save
              </button>
            </div>
          </form>
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
            className="flex flex-col items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer"
          >
            <div className="p-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80">
              <Bell className="w-4 h-4" />
            </div>
            <span className="text-[10px]">Reminders</span>
          </button>

          <button 
            onClick={() => onNavigate(7)}
            className="flex flex-col items-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span className="text-[10px]">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
