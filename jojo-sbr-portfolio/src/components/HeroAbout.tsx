import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Sparkles, Compass, ShieldCheck, Zap, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { t, lang } = useApp();
  const [spinSpeed, setSpinSpeed] = useState(12);
  const [burstText, setBurstText] = useState(false);

  const triggerGoldenSpin = () => {
    setSpinSpeed(1.2);
    setBurstText(true);
    setTimeout(() => {
      setSpinSpeed(12);
      setBurstText(false);
    }, 2400);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center py-16 lg:py-24 overflow-hidden halftone-overlay speed-lines border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30"
    >
      {/* Decorative JoJo Katakana Menacing Floating Symbols */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden opacity-15 dark:opacity-25"
      >
        <motion.span
          animate={{ y: [0, -20, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-12 right-12 text-7xl sm:text-9xl font-black text-sbr-magenta font-serif"
        >
          ドドド
        </motion.span>
        <motion.span
          animate={{ y: [0, 20, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-14 left-10 text-6xl sm:text-8xl font-black text-sbr-gold font-serif"
        >
          ゴゴゴ
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 7 Columns: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sbr-obsidian text-sbr-gold dark:bg-sbr-gold dark:text-sbr-obsidian font-mono text-xs font-bold tracking-widest uppercase border-2 border-sbr-gold">
              <Sparkles className="w-3.5 h-3.5 text-sbr-magenta" />
              <span>{t.hero.edition}</span>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[1.08]">
                <span className="block">{t.hero.name}</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sbr-gold via-sbr-magenta to-sbr-turquoise">
                  {t.hero.role}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-sbr-ink/85 dark:text-sbr-parchment/85 max-w-2xl leading-relaxed font-normal">
              {t.hero.tagline}
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="manga-border px-7 py-4 bg-sbr-gold text-sbr-obsidian font-bold tracking-wider uppercase text-sm inline-flex items-center gap-2"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#terminal"
                className="px-7 py-4 border-2 border-sbr-ink dark:border-sbr-parchment font-bold tracking-wider uppercase text-sm inline-flex items-center gap-2 hover:bg-sbr-magenta hover:text-white hover:border-sbr-magenta transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Key Stack Telemetry Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t-2 border-sbr-ink/15 dark:border-white/15 max-w-xl">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-sbr-gold">φ 1.618</div>
                <div className="font-mono text-xs text-sbr-ink/70 dark:text-sbr-parchment/70">
                  {lang === 'th' ? 'สัดส่วนทองคำในการออกแบบ' : 'Golden Ratio Grid System'}
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-sbr-magenta">99.8%</div>
                <div className="font-mono text-xs text-sbr-ink/70 dark:text-sbr-parchment/70">
                  {lang === 'th' ? 'คะแนน Performance & SEO' : 'Lighthouse & WCAG Score'}
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-sbr-turquoise">Full-Stack</div>
                <div className="font-mono text-xs text-sbr-ink/70 dark:text-sbr-parchment/70">
                  React • TS • Node • SQL
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 5 Columns: Interactive Gyro Zeppeli Steel Ball & Golden Spiral Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Golden Ratio Compass Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: spinSpeed * 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-sbr-gold/70 dark:border-sbr-gold"
              />

              {/* Secondary Counter-Rotating Magenta Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: spinSpeed * 1.8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-full border-2 border-sbr-magenta/60 flex items-center justify-center"
              >
                <span className="absolute -top-3 bg-sbr-obsidian text-sbr-gold px-2 py-0.5 font-mono text-[10px]">
                  ACT 4 // INFINITE ROTATION
                </span>
              </motion.div>

              {/* Interactive Steel Ball Core */}
              <motion.button
                type="button"
                onClick={triggerGoldenSpin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Activate Golden Spin Animation"
                className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-emerald-900 via-sbr-turquoise to-sbr-gold p-1 shadow-[0_0_50px_rgba(0,191,165,0.45)] border-4 border-sbr-obsidian cursor-pointer group focus:outline-none focus:ring-4 focus:ring-sbr-magenta"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: spinSpeed, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#1DE9B6,#004D40_70%,#0B0914_100%)] relative flex items-center justify-center overflow-hidden"
                >
                  {/* Steel Ball Grooves & Satellites */}
                  <div className="absolute inset-4 rounded-full border border-sbr-gold/50" />
                  <div className="absolute w-full h-0.5 bg-sbr-gold/40 rotate-45" />
                  <div className="absolute w-full h-0.5 bg-sbr-gold/40 -rotate-45" />
                  <div className="w-7 h-7 rounded-full bg-sbr-gold border-2 border-sbr-obsidian shadow-inner" />
                  <div className="absolute top-6 left-10 w-5 h-5 rounded-full bg-sbr-gold/90 border border-sbr-obsidian" />
                  <div className="absolute bottom-6 right-10 w-5 h-5 rounded-full bg-sbr-gold/90 border border-sbr-obsidian" />
                  <div className="absolute top-10 right-7 w-4 h-4 rounded-full bg-sbr-magenta border border-sbr-obsidian" />
                  <div className="absolute bottom-10 left-7 w-4 h-4 rounded-full bg-sbr-magenta border border-sbr-obsidian" />
                </motion.div>
              </motion.button>

              {/* Stand Cry Pop-up when clicked */}
              {burstText && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  className="absolute -top-6 bg-sbr-magenta text-white font-display font-black px-4 py-2 text-xs sm:text-sm tracking-widest border-2 border-sbr-gold shadow-xl"
                >
                  {t.hero.standCry}
                </motion.div>
              )}
            </div>

            <p className="mt-4 font-mono text-xs text-center text-sbr-ink/75 dark:text-sbr-gold/90">
              {lang === 'th'
                ? '★ คลิกที่ลูกเหล็ก (Steel Ball) เพื่อเร่งความเร็วคลื่นมนตราหมุนสัดส่วนทองคำ!'
                : '★ Click the Steel Ball to unleash the Infinite Golden Spin!'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const AboutSection: React.FC = () => {
  const { t, lang } = useApp();

  const standStats = [
    { label: lang === 'th' ? 'Frontend & Motion' : 'Frontend & Motion', grade: 'A', pct: '96%' },
    { label: lang === 'th' ? 'Backend Architecture' : 'Backend Architecture', grade: 'A', pct: '92%' },
    { label: lang === 'th' ? 'Database Optimization' : 'Database Optimization', grade: 'A', pct: '90%' },
    { label: lang === 'th' ? 'UI/UX & Editorial Craft' : 'UI/UX & Editorial Craft', grade: 'A', pct: '95%' },
    { label: lang === 'th' ? 'Accessibility & SEO' : 'Accessibility & SEO', grade: 'A', pct: '98%' },
    { label: lang === 'th' ? 'Growth Potential (Spin)' : 'Growth Potential (Spin)', grade: '∞', pct: '100%' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block mb-2">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-sbr-ink/75 dark:text-sbr-parchment/75 max-w-3xl">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Narrative & 3 Golden Lessons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="manga-border p-6 sm:p-8 bg-white/80 dark:bg-sbr-plum/90 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">{t.about.bio1}</p>
              <p className="text-base sm:text-lg leading-relaxed text-sbr-ink/80 dark:text-sbr-parchment/80">
                {t.about.bio2}
              </p>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl pt-2 text-sbr-magenta dark:text-sbr-gold">
              {t.about.philosophyTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.lessons.map((item, idx) => (
                <motion.div
                  key={item.num}
                  whileHover={{ y: -4 }}
                  className="p-5 border-2 border-sbr-ink dark:border-sbr-gold/50 bg-sbr-sand/40 dark:bg-sbr-obsidian relative"
                >
                  <span className="font-mono text-xs font-bold text-sbr-magenta dark:text-sbr-turquoise block mb-1">
                    {item.num}
                  </span>
                  <h4 className="font-display font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-sbr-ink/80 dark:text-sbr-parchment/80 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: JoJo Stand Parameter Radar & Stat Bars */}
          <div className="lg:col-span-5 manga-border p-6 sm:p-8 bg-sbr-obsidian text-sbr-parchment">
            <div className="flex items-center justify-between border-b border-sbr-gold/30 pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-sbr-turquoise block">
                  STAND MASTER: THANAKORN
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-sbr-gold">
                  {t.about.standTitle}
                </h3>
              </div>
              <Compass className="w-8 h-8 text-sbr-magenta animate-spin" style={{ animationDuration: '16s' }} />
            </div>

            {/* SVG Hexagon Stand Chart */}
            <div className="flex justify-center my-4">
              <svg viewBox="0 0 220 220" className="w-52 h-52" role="img" aria-label="Developer Stand Parameter Radar Chart">
                <polygon
                  points="110,15 195,62 195,158 110,205 25,158 25,62"
                  className="fill-none stroke-sbr-gold/40"
                  strokeWidth="1.5"
                />
                <polygon
                  points="110,45 168,77 168,143 110,175 52,143 52,77"
                  className="fill-none stroke-sbr-gold/25"
                  strokeWidth="1"
                />
                <polygon
                  points="110,22 188,66 182,152 110,198 32,150 35,68"
                  className="fill-sbr-magenta/35 stroke-sbr-turquoise"
                  strokeWidth="2.5"
                />
                <circle cx="110" cy="110" r="3" className="fill-sbr-gold" />
                <text x="110" y="11" textAnchor="middle" className="fill-sbr-gold text-[9px] font-mono font-bold">UI/UX [A]</text>
                <text x="205" y="62" textAnchor="start" className="fill-sbr-gold text-[9px] font-mono font-bold">API [A]</text>
                <text x="205" y="162" textAnchor="start" className="fill-sbr-gold text-[9px] font-mono font-bold">SQL [A]</text>
                <text x="110" y="218" textAnchor="middle" className="fill-sbr-turquoise text-[9px] font-mono font-bold">SPIN [∞]</text>
                <text x="15" y="162" textAnchor="end" className="fill-sbr-gold text-[9px] font-mono font-bold">A11Y [A]</text>
                <text x="15" y="62" textAnchor="end" className="fill-sbr-gold text-[9px] font-mono font-bold">PERF [A]</text>
              </svg>
            </div>

            <div className="space-y-3 mt-4">
              {standStats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>{stat.label}</span>
                    <span className="text-sbr-gold font-bold">RANK: {stat.grade}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-sbr-gold via-sbr-magenta to-sbr-turquoise"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
