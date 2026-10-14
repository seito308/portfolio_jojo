# 🏇 SBR // GOLDEN RATIO — Full-Stack Developer Portfolio (JoJo Part 7: Steel Ball Run Edition)

A luxury anime-editorial Full-Stack Developer & UI/UX Designer Portfolio inspired by **Hirohiko Araki's JoJo's Bizarre Adventure Part 7: Steel Ball Run**.

## ✨ Key Features Included
1. **Dark / Light Mode with Persistent Memory (`localStorage`)**
   - Seamlessly switches between **Daylight American Prairie (Parchment & Gold)** and **Midnight Stand (Obsidian Plum, Magenta & Turquoise)** themes.
2. **Complete Bilingual Support (Thai `TH` & English `EN`)**
   - Full translations across every section, terminal output, and deep-dive project case study for both Thai and international job applications.
3. **Deep-Dive Project Detail Pages (`/project/:id`)**
   - Includes visual gallery, step-by-step development stages, 3-Tier System Architecture blueprints, Stand Parameters, and engineering lessons learned.
4. **Interactive Developer Profile (`Spin Terminal` & Live Code Inspector)**
   - Built-in CLI console supporting commands (`help`, `about`, `skills`, `projects`, `spin`, `contact`, `clear`) alongside a multi-tab production code viewer (`React + Motion`, `Node + Express`, `PostgreSQL`).
5. **Live GitHub Activity with Graceful Error Fallback**
   - Connects to the GitHub REST API to display real repositories and includes an interactive **"Test Error Fallback Mode"** button to demonstrate resilient offline/rate-limit handling.
6. **JoJo Part 7 Exclusive Luxury Gimmicks**
   - **Interactive Golden Ratio (`φ = 1.618`) Fibonacci HUD Overlay** toggleable right from the navigation bar.
   - **Interactive Gyro Zeppeli Steel Ball** that accelerates its rotation and triggers Stand Cry telemetry on click.
   - **Stand Parameter Hexagon Radar Chart** in the About section.
7. **Performance, Accessibility & SEO**
   - Semantic HTML5 landmarks, Skip-to-Content keyboard link, ARIA live regions, high-contrast typography, and complete OpenGraph/SEO metadata.

---

## 🛠️ Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (Custom Steel Ball Run Palette & Manga Halftone Utilities)
- **Animation:** Framer Motion
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Backend:** Node.js + Express (TypeScript)
- **Database:** PostgreSQL / MySQL (`backend/schema.sql`)
- **Deployment:** Vercel (`vercel.json` pre-configured)

---

## 🚀 Quick Start Guide

### 1. Run Frontend
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Run Backend API (Optional)
```bash
cd backend
npm install
npm run dev
```
The Express server will start on `http://localhost:4000`.
