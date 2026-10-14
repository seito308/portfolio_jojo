import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Compass, Menu, X, Sparkles, Terminal } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, lang, toggleLang, t, goldenOverlay, toggleGoldenOverlay } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: t.nav.about, href: isHome ? '#about' : '/#about' },
    { label: t.nav.projects, href: isHome ? '#projects' : '/#projects' },
    { label: t.nav.terminal, href: isHome ? '#terminal' : '/#terminal' },
    { label: t.nav.skills, href: isHome ? '#skills' : '/#skills' },
    { label: t.nav.github, href: isHome ? '#github' : '/#github' },
    { label: t.nav.experience, href: isHome ? '#experience' : '/#experience' },
    { label: t.nav.contact, href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <>
      {/* Accessibility Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-sbr-gold focus:text-sbr-obsidian focus:font-bold focus:shadow-xl"
      >
        {t.nav.skipToContent}
      </a>

      {/* Interactive Golden Ratio Fibonacci Overlay (JoJo Part 7 Signature Gimmick) */}
      <AnimatePresence>
        {goldenOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center overflow-hidden"
          >
            <svg
              viewBox="0 0 1618 1000"
              className="w-full h-full stroke-sbr-gold/40 dark:stroke-sbr-turquoise/40 fill-none"
              strokeWidth="2"
            >
              {/* Golden Rectangle Subdivisions */}
              <rect x="10" y="10" width="1598" height="980" />
              <line x1="998" y1="10" x2="998" y2="990" />
              <line x1="998" y1="618" x2="1608" y2="618" />
              <line x1="1230" y1="618" x2="1230" y2="990" />
              <line x1="998" y1="764" x2="1230" y2="764" />
              {/* Fibonacci Spiral Path */}
              <path
                d="M 10 990 A 980 980 0 0 1 998 10 A 608 608 0 0 1 1608 618 A 372 372 0 0 1 1230 990 A 232 232 0 0 1 998 764 A 146 146 0 0 1 1144 618"
                strokeDasharray="12 6"
                className="stroke-sbr-magenta/70"
                strokeWidth="3"
              />
              <circle cx="1144" cy="705" r="42" className="stroke-sbr-gold fill-sbr-gold/10" />
            </svg>
            <div className="absolute bottom-6 left-6 bg-sbr-obsidian/90 text-sbr-gold border border-sbr-gold px-4 py-2 text-xs font-mono uppercase tracking-widest">
              φ = 1.6180339887 // GOLDEN RECTANGLE HUD ACTIVE
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-sbr-parchment/90 dark:bg-sbr-obsidian/90 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30 transition-colors">
        <nav
          aria-label="Main Navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        >
          {/* Brand Logo with Spinning Steel Ball */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sbr-gold rounded-sm p-1"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-sbr-turquoise via-sbr-emerald to-sbr-gold p-0.5 shadow-md flex items-center justify-center border-2 border-sbr-obsidian"
            >
              <div className="w-full h-full rounded-full bg-sbr-obsidian flex items-center justify-center relative">
                <span className="w-2.5 h-2.5 rounded-full bg-sbr-gold animate-pulse" />
                <span className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-sbr-turquoise" />
                <span className="absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full bg-sbr-magenta" />
              </div>
            </motion.div>
            <div>
              <span className="font-display font-black tracking-wider text-lg sm:text-xl block leading-none text-sbr-ink dark:text-sbr-gold">
                SBR <span className="text-sbr-magenta">//</span> φ 1.618
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-sbr-ink/70 dark:text-sbr-parchment/70">
                STEEL BALL RUN PORTFOLIO
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide hover:text-sbr-magenta dark:hover:text-sbr-gold transition-colors focus:outline-none focus:underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Interactive Controls: Golden Spin HUD, Language TH/EN, Theme Dark/Light */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Golden Ratio HUD Toggle */}
            <button
              type="button"
              onClick={toggleGoldenOverlay}
              aria-pressed={goldenOverlay}
              aria-label="Toggle Golden Ratio Fibonacci Grid Overlay"
              title={lang === 'th' ? 'เปิด/ปิด เส้นสัดส่วนทองคำ (Golden Ratio)' : 'Toggle Golden Ratio Spiral Grid'}
              className={`p-2.5 rounded-sm border-2 transition-all font-mono text-xs flex items-center gap-1.5 ${
                goldenOverlay
                  ? 'bg-sbr-gold text-sbr-obsidian border-sbr-obsidian font-bold shadow-[3px_3px_0px_#D81B60]'
                  : 'border-sbr-ink/30 dark:border-sbr-gold/40 hover:border-sbr-gold'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">φ HUD</span>
            </button>

            {/* Language Switcher TH / EN */}
            <button
              type="button"
              onClick={toggleLang}
              aria-label={lang === 'th' ? 'Switch language to English' : 'เปลี่ยนภาษาเป็นภาษาไทย'}
              className="px-3 py-2 rounded-sm border-2 border-sbr-ink dark:border-sbr-gold bg-sbr-sand/60 dark:bg-sbr-plum text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 hover:bg-sbr-gold hover:text-sbr-obsidian transition-all"
            >
              <Globe className="w-4 h-4 text-sbr-magenta dark:text-sbr-turquoise" />
              <span>{lang === 'th' ? 'TH / EN' : 'EN / TH'}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Daylight Prairie Mode' : 'Switch to Midnight Stand Mode'}
              className="p-2.5 rounded-sm border-2 border-sbr-ink dark:border-sbr-gold bg-sbr-parchment dark:bg-sbr-plum hover:bg-sbr-magenta hover:text-white dark:hover:bg-sbr-gold dark:hover:text-sbr-obsidian transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-sbr-gold hover:text-sbr-obsidian" />
              ) : (
                <Moon className="w-4 h-4 text-sbr-ink" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2.5 rounded-sm border-2 border-sbr-ink dark:border-sbr-gold"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t-2 border-sbr-ink/20 dark:border-sbr-gold/30 bg-sbr-parchment dark:bg-sbr-plum px-6 py-5 space-y-3"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-semibold text-base border-b border-sbr-ink/10 dark:border-white/10 hover:text-sbr-magenta dark:hover:text-sbr-gold"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
