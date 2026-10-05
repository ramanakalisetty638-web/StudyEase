# 🍃 StudyEase — Your Digital Learning Wellness Companion
> **Digital Engineering Lab Prototype • Human-Centered Design Thinking Project**  
> **Live Demo:** [https://ramanakalisetty638-web.github.io/StudyEase/](https://ramanakalisetty638-web.github.io/StudyEase/)

---

## 📌 1. Project Overview & Scenario

* **Persona:** **Aditi**, a 20-year-old engineering student attending 6–8 hours of online classes daily.
* **Problem Statement:** Due to continuous screen exposure and long lecture blocks, Aditi often experiences eye strain (digital asthenopia), neck/spine stiffness, mental tiredness, lack of concentration, reduced class participation, and poor learning retention.
* **How Might We?**  
  > *"How might we help students like Aditi stay energized, focused, and healthy during long online learning sessions while minimizing digital fatigue?"*
* **Solution:** **StudyEase** is a student-friendly digital wellness companion designed to combat screen fatigue through smart micro-breaks, 20-20-20 eye care, 4-4 rhythmic breathing exercises, a live online class focus monitor, and transparent wellness score tracking.

---

## 🎨 2. Design Thinking Process (Double Diamond)

The prototype reflects the complete Design Thinking cycle:

1. **Divergent Ideation (Pic 3):**
   * *Idea 1: Smart Break Reminder* (micro-breaks, 20-20-20 rule, hydration alerts)
   * *Idea 2: Digital Wellness Assistant* (4-4 breathing exercises, eye routines, relaxation timer)
   * *Idea 3: Focus & Engagement Tool* (lecture attention checks, focus timer, distraction shield)
   * *Idea 4: Digital Fatigue Tracker* (screen time monitor, break counter, daily fatigue rating)
   * *Idea 5: Smart Learning Mode* (automated study session detector, synchronized support)

2. **Convergent Synthesis (Pic 2):**
   * Synthesized into **StudyEase** by prioritizing non-intrusiveness, zero cognitive load, and student-first aesthetics (soft pastel blue, purple, and green tones).

3. **Manual Paper Prototype (Pic 4):**
   * Low-fidelity hand-drawn wireframes across 6 core screens, user-tested for ergonomics and intuitive navigation.

4. **High-Fidelity Working Prototype (Pic 1):**
   * 8 fully interactive screens running on React, Tailwind CSS, and Web Audio synthesis.

---

## 📱 3. The 8 Interactive Screens

| Screen | Title | Key Functionality & Experience |
| :--- | :--- | :--- |
| **Screen 1** | **Splash / Welcome** | Brand identity, student-learning illustration, tagline *"Better Habits. Brighter Learning."*, and animated "Get Started" entry. |
| **Screen 2** | **Home Dashboard** | *"Hi Aditi! 👋"*, daily metrics (Screen Time: 4h 20m, Breaks: 3, Focus: Good), primary *"Start Class →"* button, feature shortcuts (*Eye Care*, *My Progress*), and bottom nav. |
| **Screen 3** | **During Online Class** | Live running lecture timer (`01:42:35`), `LIVE` status indicator, Focus Mode distraction shield toggle, micro-reminders (Drink Water & Good Posture), and *"Take Break 🕒"*. |
| **Screen 4** | **Smart Break Reminder** | Automatic 50-minute continuous study detector, cheerful sun illustration, 4 selectable recovery activities (*Rest your eyes*, *Stretch your body*, *Drink water*, *Relax your mind*). |
| **Screen 5** | **Quick Refresh** | Guided 4-second Inhale / 4-second Exhale breathing exercise with an **animated pulsating circle**, 01:00 countdown timer, celebratory confetti, and +5 wellness score bonus. |
| **Screen 6** | **My Progress** | Screen Time (`6h 10m`), Breaks taken (`5`), Focus (`82%`), Daily Score Card (**⭐ 82 / 100**), 7-day trend chart, and smart habit suggestions. |
| **Screen 7** | **Reminder Settings** | Functional toggles for Eye Rest (20-20-20 rule), Water reminders, Stretch breaks, Posture alerts, and Dark Mode. |
| **Screen 8** | **Notifications / Reminders** | Filterable reminder cards (*All*, *Today*, *Upcoming*), interactive mark-as-completed checklist, and custom reminder creator. |

---

## 🚀 4. Prototype Modes

The web prototype includes 3 complementary view modes:
1. **Interactive Phone Simulator:** Test each screen inside a realistic smartphone frame with live timers, breathing animations, and chime sounds.
2. **Lab Poster Board View:** Mirrors the exact department presentation poster from **Pic 1**, placing the scenario, key features, and all 8 phones side-by-side.
3. **Design Thinking Explorer:** Interactive tabs showcasing the Divergent Ideas, Convergent Synthesis, and Manual Paper Sketches.

---

## 🛠️ 5. Tech Stack & Implementation Details

* **Framework:** React 19 + Vite 6
* **Styling:** Tailwind CSS v4 with custom keyframe breathing animations
* **Icons:** Lucide React
* **Audio Feedback:** Web Audio API synthesizer (pleasant high-frequency bell chimes and 432Hz ambient meditation tones)
* **Confetti:** `canvas-confetti` celebration triggers upon completing wellness breaks
* **Deployment:** GitHub Pages (automated static build)

---

## 💻 6. Running Locally

```bash
# Clone the repository
git clone https://github.com/ramanakalisetty638-web/StudyEase.git

# Navigate into the project
cd StudyEase

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

---

*Developed for Digital Engineering Lab • Problem Statement: Reducing Digital Fatigue*
