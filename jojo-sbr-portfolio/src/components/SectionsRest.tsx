import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Sparkles,
  GitBranch,
  Star,
  GitFork,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
  Award,
  Briefcase,
  GraduationCap,
  Send,
  MapPin,
  Mail
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SkillsSection: React.FC = () => {
  const { t, lang } = useApp();

  const skillGroups = [
    {
      title: 'Frontend & Editorial UI',
      icon: Code,
      accent: 'text-sbr-gold',
      items: [
        { name: 'React 18 + TypeScript', level: '98%' },
        { name: 'Tailwind CSS + Responsive Grid', level: '96%' },
        { name: 'Framer Motion / Interactive SVG', level: '95%' },
        { name: 'React Router v6 + State Mgmt', level: '94%' },
        { name: 'WCAG 2.1 Accessibility & SEO', level: '97%' },
      ],
    },
    {
      title: 'Backend & API Engineering',
      icon: Server,
      accent: 'text-sbr-magenta',
      items: [
        { name: 'Node.js + Express (TypeScript)', level: '94%' },
        { name: 'RESTful API & WebSockets', level: '92%' },
        { name: 'JWT / OAuth2 & Rate Limiting', level: '90%' },
        { name: 'Microservices & Event Queues', level: '88%' },
        { name: 'Automated Testing & CI/CD', level: '91%' },
      ],
    },
    {
      title: 'Database, Cloud & Versioning',
      icon: Database,
      accent: 'text-sbr-turquoise',
      items: [
        { name: 'PostgreSQL (ACID / Indexing)', level: '93%' },
        { name: 'MySQL / Relational Modeling', level: '92%' },
        { name: 'Vercel Edge & Serverless Hosting', level: '96%' },
        { name: 'Git + GitHub Actions Workflows', level: '95%' },
        { name: 'Docker & Linux Environments', level: '89%' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block mb-2">
            {t.skills.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-sbr-ink/75 dark:text-sbr-parchment/75 max-w-3xl">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="manga-border p-6 sm:p-8 bg-white dark:bg-sbr-plum"
              >
                <div className="flex items-center gap-3 pb-4 mb-6 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30">
                  <IconComponent className={`w-6 h-6 ${group.accent}`} />
                  <h3 className="font-display font-bold text-xl">{group.title}</h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between font-mono text-xs mb-1.5">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-sbr-magenta dark:text-sbr-gold font-bold">{skill.level}</span>
                      </div>
                      <div className="w-full h-2.5 bg-sbr-sand dark:bg-sbr-obsidian overflow-hidden border border-sbr-ink/20 dark:border-sbr-gold/30">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-sbr-gold via-sbr-magenta to-sbr-turquoise"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 701,
    name: 'sbr-golden-ratio-commerce',
    description: 'High-concurrency full-stack e-commerce engine built with React, TypeScript, Node.js, Express, and PostgreSQL row-level locking.',
    html_url: 'https://github.com/facebook/react',
    stargazers_count: 148,
    forks_count: 29,
    language: 'TypeScript',
    updated_at: '2026-10-01T10:30:00Z',
  },
  {
    id: 702,
    name: 'd4c-dimension-sync-canvas',
    description: 'Real-time multi-branch architecture whiteboard powered by WebSockets, Canvas viewport culling, and PostgreSQL JSONB snapshots.',
    html_url: 'https://github.com/microsoft/TypeScript',
    stargazers_count: 112,
    forks_count: 19,
    language: 'TypeScript',
    updated_at: '2026-09-24T15:20:00Z',
  },
  {
    id: 703,
    name: 'ballbreaker-web-vitals-observatory',
    description: 'Zero-overhead Core Web Vitals, WCAG Accessibility & SEO telemetry dashboard with Express batch ingestion.',
    html_url: 'https://github.com/vercel/next.js',
    stargazers_count: 94,
    forks_count: 14,
    language: 'TypeScript',
    updated_at: '2026-09-12T08:15:00Z',
  },
  {
    id: 704,
    name: 'steel-ball-framer-motion-kit',
    description: 'Bespoke manga halftone shaders, Fibonacci spiral SVG overlays, and 60fps spring transitions for React 18.',
    html_url: 'https://github.com/tailwindlabs/tailwindcss',
    stargazers_count: 215,
    forks_count: 34,
    language: 'CSS / TypeScript',
    updated_at: '2026-10-10T18:00:00Z',
  },
];

export const GitHubActivitySection: React.FC = () => {
  const { t, lang } = useApp();
  const [username, setUsername] = useState('vercel');
  const [repos, setRepos] = useState<GithubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const [errorReason, setErrorReason] = useState<string | null>(null);

  const fetchGitHubRepos = async (targetUser: string, forceError = false) => {
    setLoading(true);
    setErrorReason(null);
    try {
      if (forceError) {
        throw new Error('SIMULATED_NETWORK_OR_RATE_LIMIT_ERROR');
      }
      const res = await fetch(
        `https://api.github.com/users/${encodeURIComponent(targetUser)}/repos?sort=updated&per_page=4`,
        { headers: { Accept: 'application/vnd.github.v3+json' } }
      );
      if (!res.ok) {
        throw new Error(`GitHub API HTTP ${res.status}`);
      }
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data.slice(0, 4));
        setIsFallback(false);
      } else {
        throw new Error('EMPTY_REPOS');
      }
    } catch (err: any) {
      // Resilient Fallback handling when API fails or rate-limits
      setRepos(FALLBACK_REPOS);
      setIsFallback(true);
      setErrorReason(err?.message || 'API Unreachable');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos(username);
  }, []);

  return (
    <section
      id="github"
      className="py-20 lg:py-28 bg-sbr-sand/40 dark:bg-sbr-plum/40 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block mb-2">
              {t.github.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
              {t.github.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-sbr-ink/75 dark:text-sbr-parchment/75 max-w-2xl">
              {t.github.subtitle}
            </p>
          </div>

          {/* GitHub Username Controls & Simulate Failure Button */}
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="gh-user-input" className="font-mono text-xs font-bold">
              {t.github.usernameLabel}
            </label>
            <input
              id="gh-user-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 border-2 border-sbr-ink dark:border-sbr-gold bg-white dark:bg-sbr-obsidian font-mono text-xs w-36"
            />
            <button
              type="button"
              onClick={() => fetchGitHubRepos(username, false)}
              disabled={loading}
              className="px-4 py-2 bg-sbr-gold text-sbr-obsidian font-mono text-xs font-bold uppercase border-2 border-sbr-obsidian inline-flex items-center gap-1.5 hover:bg-sbr-turquoise transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>{t.github.fetchBtn}</span>
            </button>
            <button
              type="button"
              onClick={() => fetchGitHubRepos(username, true)}
              className="px-3 py-2 bg-sbr-magenta text-white font-mono text-xs font-bold uppercase border-2 border-sbr-obsidian hover:opacity-90 transition-opacity"
            >
              {t.github.simulateErrorBtn}
            </button>
          </div>
        </div>

        {/* Status Banner (Live vs Graceful Fallback) */}
        <div
          role="status"
          aria-live="polite"
          className={`mb-8 p-4 border-2 font-mono text-xs sm:text-sm flex items-center gap-3 ${
            isFallback
              ? 'bg-amber-500/15 border-amber-500 text-amber-900 dark:text-amber-200'
              : 'bg-emerald-500/15 border-sbr-turquoise text-emerald-950 dark:text-emerald-200'
          }`}
        >
          {isFallback ? (
            <>
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="font-bold block">{t.github.FallbackNotice}</span>
                {errorReason && <span className="text-[11px] opacity-80">Reason: {errorReason}</span>}
              </div>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5 text-sbr-turquoise shrink-0" />
              <span className="font-bold">{t.github.liveNotice}</span>
            </>
          )}
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="manga-border p-6 bg-white dark:bg-sbr-obsidian flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-sbr-magenta dark:text-sbr-gold group-hover:underline">
                    <GitBranch className="w-4 h-4" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-sbr-sand dark:bg-sbr-plum border border-sbr-gold/40">
                    {repo.language || 'TypeScript'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-sbr-ink/80 dark:text-sbr-parchment/80 line-clamp-2 leading-relaxed">
                  {repo.description ||
                    (lang === 'th'
                      ? 'โปรเจกต์พัฒนาซอฟต์แวร์ด้วยสถาปัตยกรรม Full-Stack สมัยใหม่'
                      : 'Modern Full-Stack engineering repository.')}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-sbr-ink/10 dark:border-white/10 flex items-center justify-between font-mono text-xs text-sbr-ink/70 dark:text-sbr-parchment/70">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-sbr-gold" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-sbr-turquoise" />
                    {repo.forks_count}
                  </span>
                </div>
                <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ExperienceSection: React.FC = () => {
  const { t, lang } = useApp();

  const milestones = [
    {
      period: '2025 — PRESENT',
      stage: 'CHECKPOINT 03 // FULL-STACK ENGINEER',
      role: {
        th: 'Full-Stack Web Developer & Creative UI Engineer',
        en: 'Full-Stack Web Developer & Creative UI Engineer',
      },
      org: 'Golden Spin Digital Studio (Remote / Hybrid)',
      detail: {
        th: 'ออกแบบและพัฒนาเว็บแอปพลิเคชันด้วย React, TypeScript, Tailwind CSS, Framer Motion เชื่อมต่อกับ REST API บน Node.js + Express และฐานข้อมูล PostgreSQL รองรับผู้ใช้งานทั้งไทยและต่างชาติ',
        en: 'Architected bilingual web applications using React, TypeScript, Tailwind CSS, and Framer Motion backed by Node.js/Express microservices and PostgreSQL.',
      },
    },
    {
      period: '2024 — 2025',
      stage: 'CHECKPOINT 02 // FRONTEND & MOTION SPECIALIST',
      role: {
        th: 'Frontend Developer & Design System Lead',
        en: 'Frontend Developer & Design System Lead',
      },
      org: 'Zeppelin Interactive Lab',
      detail: {
        th: 'สร้าง Component Library ที่ผ่านมาตรฐาน WCAG 2.1 AA และปรับปรุงคะแนน Core Web Vitals ให้ได้มากกว่า 98 คะแนนบน Lighthouse',
        en: 'Engineered an accessible component library compliant with WCAG 2.1 AA and boosted Core Web Vitals above 98 across client properties.',
      },
    },
    {
      period: '2022 — 2026',
      stage: 'CHECKPOINT 01 // ACADEMIC FOUNDATION',
      role: {
        th: 'ปริญญาตรี วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ',
        en: 'B.Sc. in Computer Science & Software Engineering',
      },
      org: lang === 'th' ? 'มหาวิทยาลัยชั้นนำในประเทศไทย' : 'University of Technology, Thailand',
      detail: {
        th: 'มุ่งเน้นด้านวิศวกรรมซอฟต์แวร์ โครงสร้างข้อมูลและอัลกอริทึม การออกแบบฐานข้อมูลเชิงสัมพันธ์ และการพัฒนาเว็บแอปพลิเคชันสมัยใหม่',
        en: 'Focused on Software Engineering, Algorithms, Relational Database Systems (PostgreSQL/MySQL), and Full-Stack Web Development.',
      },
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 border-b-2 border-sbr-ink/15 dark:border-sbr-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block mb-2">
            {t.experience.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
            {t.experience.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-sbr-ink/75 dark:text-sbr-parchment/75 max-w-3xl">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative border-l-4 border-sbr-gold ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="manga-border p-6 sm:p-8 bg-white dark:bg-sbr-plum relative"
            >
              {/* Route Checkpoint Pin */}
              <span className="absolute -left-[42px] sm:-left-[58px] top-6 w-7 h-7 rounded-full bg-sbr-gold border-4 border-sbr-obsidian flex items-center justify-center" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-sbr-magenta dark:text-sbr-turquoise">
                  {m.stage}
                </span>
                <span className="px-3 py-1 bg-sbr-obsidian text-sbr-gold font-mono text-xs font-bold">
                  {m.period}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold">{m.role[lang]}</h3>
              <p className="font-mono text-xs text-sbr-ink/70 dark:text-sbr-gold/80 mt-1 mb-3">{m.org}</p>
              <p className="text-sm sm:text-base text-sbr-ink/85 dark:text-sbr-parchment/85 leading-relaxed">
                {m.detail[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const { t, lang } = useApp();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Attempts to send to Node/Express backend if running, gracefully succeeds in static preview too
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      }).catch(() => null);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 600);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold block">
              {t.contact.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-sbr-ink/80 dark:text-sbr-parchment/80 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-4 pt-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sbr-magenta shrink-0" />
                <span>{t.contact.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sbr-gold shrink-0" />
                <span>gyro.spin.dev@sbr-portfolio.dev</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="manga-border p-6 sm:p-10 bg-white dark:bg-sbr-plum space-y-5"
            >
              {submitted && (
                <div
                  role="alert"
                  className="p-4 bg-emerald-500/20 border-2 border-sbr-turquoise text-sm font-mono font-bold"
                >
                  {t.contact.successMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs font-bold uppercase mb-2">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-sbr-ink dark:border-sbr-gold/50 bg-sbr-parchment dark:bg-sbr-obsidian text-sm focus:outline-none focus:border-sbr-magenta"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs font-bold uppercase mb-2">
                    {t.contact.emailLabel} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-sbr-ink dark:border-sbr-gold/50 bg-sbr-parchment dark:bg-sbr-obsidian text-sm focus:outline-none focus:border-sbr-magenta"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-mono text-xs font-bold uppercase mb-2">
                  {t.contact.subjectLabel} *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-sbr-ink dark:border-sbr-gold/50 bg-sbr-parchment dark:bg-sbr-obsidian text-sm focus:outline-none focus:border-sbr-magenta"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs font-bold uppercase mb-2">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-sbr-ink dark:border-sbr-gold/50 bg-sbr-parchment dark:bg-sbr-obsidian text-sm focus:outline-none focus:border-sbr-magenta"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-sbr-gold text-sbr-obsidian font-display font-black uppercase tracking-widest text-sm border-2 border-sbr-obsidian hover:bg-sbr-magenta hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? t.contact.submitting : t.contact.submitBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-sbr-obsidian text-sbr-parchment border-t-4 border-sbr-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div>
          <span className="text-sbr-gold font-bold">SBR // GOLDEN RATIO PORTFOLIO</span> — Inspired by Hirohiko Araki’s JoJo Part 7: Steel Ball Run
        </div>
        <div className="text-sbr-parchment/70">
          React • TypeScript • Tailwind CSS • Framer Motion • Node.js • PostgreSQL
        </div>
      </div>
    </footer>
  );
};
