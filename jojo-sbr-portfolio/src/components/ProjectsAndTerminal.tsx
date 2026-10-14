import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Terminal as TerminalIcon, Code2, Sparkles, Play, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { t, lang } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block mb-2">
              {t.projects.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
              {t.projects.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-sbr-ink/75 dark:text-sbr-parchment/75 max-w-2xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project Category Filter">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-sbr-gold text-sbr-obsidian border-sbr-obsidian font-bold shadow-[3px_3px_0px_#D81B60]'
                    : 'border-sbr-ink/30 dark:border-sbr-gold/40 hover:border-sbr-gold'
                }`}
              >
                {cat === 'ALL' ? t.projects.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="manga-border bg-white dark:bg-sbr-plum flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Stage Banner & Image */}
                <div className="relative h-56 overflow-hidden border-b-2 border-sbr-ink dark:border-sbr-gold/40">
                  <img
                    src={project.heroImage}
                    alt={project.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sbr-obsidian/90 via-sbr-obsidian/30 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-sbr-obsidian text-sbr-gold font-mono text-[11px] font-bold tracking-wider border border-sbr-gold">
                    {project.stageNumber}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-sbr-magenta text-white font-mono text-[11px] font-bold">
                    {project.standName}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-sbr-magenta dark:text-sbr-turquoise font-bold">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-bold leading-snug group-hover:text-sbr-magenta dark:group-hover:text-sbr-gold transition-colors">
                    {project.title[lang]}
                  </h3>
                  <p className="text-sm text-sbr-ink/80 dark:text-sbr-parchment/80 line-clamp-3 leading-relaxed">
                    {project.summary[lang]}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-mono bg-sbr-sand dark:bg-sbr-obsidian border border-sbr-ink/20 dark:border-sbr-gold/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-3">
                <Link
                  to={`/project/${project.id}`}
                  className="w-full py-3 px-4 bg-sbr-obsidian text-sbr-gold dark:bg-sbr-gold dark:text-sbr-obsidian font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sbr-magenta hover:text-white dark:hover:bg-sbr-magenta dark:hover:text-white transition-colors"
                >
                  <span>{t.projects.viewDetail}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-sbr-magenta dark:hover:text-sbr-gold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.projects.liveDemo}</span>
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-sbr-magenta dark:hover:text-sbr-gold"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t.projects.sourceCode}</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InteractiveTerminalSection: React.FC = () => {
  const { t, lang } = useApp();
  const [input, setInput] = useState('');
  const [activeSnippet, setActiveSnippet] = useState<'frontend' | 'backend' | 'sql'>('frontend');
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    {
      cmd: 'system --init',
      output:
        lang === 'th'
          ? '⚡ ยินดีต้อนรับสู่ STEEL BALL RUN DEV CONSOLE (v7.1.618)
พิมพ์ "help" หรือคลิกปุ่มลัดด้านล่างเพื่อตรวจสอบข้อมูลนักพัฒนา'
          : '⚡ Welcome to STEEL BALL RUN DEV CONSOLE (v7.1.618)
Type "help" or click any quick-command chip below to inspect developer telemetry.',
    },
  ]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response = '';
    switch (cmd) {
      case 'help':
        response =
          lang === 'th'
            ? 'คำสั่งที่ใช้ได้:
  • about      — ข้อมูลสรุปตัวตนและปรัชญาการทำงาน
  • skills     — รายชื่อเทคโนโลยี Frontend, Backend, Database
  • projects   — รายชื่อโปรเจกต์ระดับ Stage 1-3
  • spin       — คำนวณลำดับ Fibonacci & สัดส่วนทองคำ (φ = 1.618)
  • contact    — ช่องทางการติดต่อและสถานะการรับงาน
  • clear      — ล้างหน้าจอเทอร์มินัล'
            : 'Available Commands:
  • about      — Developer summary & Golden Spin philosophy
  • skills     — Full-stack technology matrix
  • projects   — List featured Stage 1-3 engineering projects
  • spin       — Compute Golden Ratio (φ = 1.6180339887) telemetry
  • contact    — Direct communication channels & availability
  • clear      — Clear terminal buffer';
        break;
      case 'about':
        response =
          lang === 'th'
            ? 'ชื่อ: ธนกร "ไจโร" อัศวเมธี (Full-Stack Developer & UI/UX Designer)
จุดเด่น: เชี่ยวชาญการสร้างเว็บแอปพลิเคชันสองภาษาที่เร็ว หรูหรา รองรับ Accessibility และมีสถาปัตยกรรม Backend ที่แข็งแกร่ง'
            : 'Name: Thanakorn "Gyro" Asawamethi (Full-Stack Developer & UI/UX Engineer)
Specialty: Building luxury editorial web applications with 60fps motion, WCAG compliance, and resilient Node/PostgreSQL backends.';
        break;
      case 'skills':
        response =
          '• Frontend : React 18, TypeScript, Tailwind CSS, Framer Motion, React Router, HTML5/A11y
• Backend  : Node.js, Express, REST APIs, WebSockets, JWT Security
• Database : PostgreSQL, MySQL, Prisma/Knex, ACID Row-Locking
• DevOps   : Git, GitHub Actions, Vercel, Docker';
        break;
      case 'projects':
        response =
          '1. [STAGE 01] SBR Golden Ratio Distributed E-Commerce & FinTech Engine
2. [STAGE 02] D4C Dimension Sync — Real-Time Collaborative Canvas
3. [STAGE 03] Ball Breaker Telemetry — Performance & SEO Observatory';
        break;
      case 'spin':
        response =
          '🌀 GOLDEN SPIN TELEMETRY:
Fibonacci Sequence : 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
Golden Ratio (φ)   : 1.618033988749895
Stand Activation   : 「TUSK ACT 4」 & 「BALL BREAKER」 — INFINITE ROTATION LOCKED!';
        break;
      case 'contact':
        response =
          '📧 Email   : gyro.spin.dev@sbr-portfolio.dev
🐙 GitHub  : https://github.com/golden-spin-dev
💼 Status  : OPEN FOR THAI & INTERNATIONAL ROLES (Full-time / Remote / Hybrid)';
        break;
      default:
        response =
          lang === 'th'
            ? `ไม่พบคำสั่ง "${rawCmd}" — พิมพ์ "help" เพื่อดูคำสั่งทั้งหมด`
            : `Command not recognized: "${rawCmd}". Type "help" for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output: response }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const codeSnippets = {
    frontend: `// GoldenSpinCard.tsx — React + TypeScript + Framer Motion
import { motion, useSpring } from 'framer-motion';

export const GoldenRatioCard = ({ title, ratio = 1.618 }: { title: string; ratio?: number }) => {
  const springScale = useSpring(1, { stiffness: 260, damping: 20 });

  return (
    <motion.article
      whileHover={{ scale: 1.02, rotateZ: -0.5 }}
      style={{ aspectRatio: \`\${ratio} / 1\` }}
      className="manga-border p-6 bg-sbr-obsidian text-sbr-gold"
    >
      <h3 className="font-display text-xl">{title}</h3>
    </motion.article>
  );
};`,
    backend: `// server.ts — Node.js + Express + PostgreSQL ACID Transaction
app.post('/api/stage-checkout', async (req, res, next) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { rows } = await client.query(
      'SELECT stock FROM editions WHERE id = $1 FOR UPDATE',
      [req.body.editionId]
    );
    if (rows[0].stock <= 0) throw new Error('SOLD_OUT');

    await client.query(
      'UPDATE editions SET stock = stock - 1 WHERE id = $1',
      [req.body.editionId]
    );
    await client.query('COMMIT');
    res.status(200).json({ status: 'GOLDEN_SPIN_SUCCESS' });
  } catch (err) {
    await client.query('ROLLBACK');
    next(err);
  } finally {
    client.release();
  }
});`,
    sql: `-- schema.sql — PostgreSQL / MySQL Indexed Telemetry & Portfolio Schema
CREATE TABLE IF NOT EXISTS race_checkpoints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stage_code VARCHAR(32) NOT NULL UNIQUE,
  rider_name VARCHAR(120) NOT NULL,
  golden_ratio_score NUMERIC(5, 3) DEFAULT 1.618,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_checkpoints_stage ON race_checkpoints (stage_code, created_at DESC);`,
  };

  return (
    <section
      id="terminal"
      className="py-20 lg:py-28 bg-sbr-sand/40 dark:bg-sbr-plum/40 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block mb-2">
            {t.terminal.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
            {t.terminal.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-sbr-ink/75 dark:text-sbr-parchment/75 max-w-3xl">
            {t.terminal.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 7 Columns: Interactive CLI Terminal */}
          <div className="lg:col-span-7 manga-border bg-sbr-obsidian text-sbr-parchment flex flex-col overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="px-4 py-3 bg-sbr-plum border-b border-sbr-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-sbr-magenta" />
                <span className="w-3 h-3 rounded-full bg-sbr-gold" />
                <span className="w-3 h-3 rounded-full bg-sbr-turquoise" />
                <span className="ml-2 font-mono text-xs text-sbr-gold font-bold">
                  gyro@steel-ball-run:~/portfolio$
                </span>
              </div>
              <TerminalIcon className="w-4 h-4 text-sbr-turquoise" />
            </div>

            {/* Quick Command Chips */}
            <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-sbr-gold/80">{t.terminal.promptHint}</span>
              {['help', 'about', 'skills', 'projects', 'spin', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-0.5 text-xs font-mono bg-sbr-gold/15 text-sbr-gold border border-sbr-gold/40 hover:bg-sbr-gold hover:text-sbr-obsidian transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Output Log */}
            <div
              className="p-5 font-mono text-xs sm:text-sm space-y-4 h-80 overflow-y-auto"
              aria-live="polite"
            >
              {history.map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-sbr-turquoise font-bold">
                    <span className="text-sbr-magenta">➜</span> sbr-cli $ {item.cmd}
                  </div>
                  <pre className="whitespace-pre-wrap text-sbr-parchment/90 leading-relaxed pl-4 border-l-2 border-sbr-gold/40">
                    {item.output}
                  </pre>
                </div>
              ))}
            </div>

            {/* Command Input Form */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-sbr-gold/30 bg-sbr-plum/60 px-4 py-3 flex items-center gap-2"
            >
              <label htmlFor="terminal-cli-input" className="sr-only">
                Terminal Command Input
              </label>
              <span className="font-mono text-sm text-sbr-gold font-bold">➜</span>
              <input
                id="terminal-cli-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.terminal.placeholder}
                className="w-full bg-transparent font-mono text-xs sm:text-sm text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-sbr-gold text-sbr-obsidian font-mono text-xs font-bold uppercase hover:bg-sbr-turquoise transition-colors"
              >
                RUN
              </button>
            </form>
          </div>

          {/* Right 5 Columns: Live Production Code Inspector */}
          <div className="lg:col-span-5 manga-border bg-sbr-obsidian text-sbr-parchment flex flex-col overflow-hidden">
            <div className="px-4 py-3 bg-sbr-plum border-b border-sbr-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-sbr-gold font-bold">
                <Code2 className="w-4 h-4 text-sbr-magenta" />
                <span>{t.terminal.codeTabTitle}</span>
              </div>
            </div>

            {/* File Tabs */}
            <div className="flex border-b border-white/10 font-mono text-xs">
              {[
                { id: 'frontend', label: 'React + Motion.tsx' },
                { id: 'backend', label: 'Node + Express.ts' },
                { id: 'sql', label: 'PostgreSQL.sql' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSnippet(tab.id as 'frontend' | 'backend' | 'sql')}
                  className={`flex-1 py-2.5 px-3 border-r border-white/10 transition-colors ${
                    activeSnippet === tab.id
                      ? 'bg-sbr-gold text-sbr-obsidian font-bold'
                      : 'text-sbr-parchment/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <pre className="p-5 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed flex-1">
              <code>{codeSnippets[activeSnippet]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
