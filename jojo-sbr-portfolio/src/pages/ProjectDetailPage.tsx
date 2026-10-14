import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  Cpu,
  CheckCircle2,
  Compass,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PROJECTS } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useApp();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  return (
    <main id="main-content" className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Button & Stage Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-sbr-ink dark:border-sbr-gold font-mono text-xs font-bold uppercase tracking-wider hover:bg-sbr-gold hover:text-sbr-obsidian transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.projects.backToHome}</span>
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-sbr-obsidian text-sbr-gold border border-sbr-gold font-bold">
              {project.stageNumber}
            </span>
            <span className="px-3 py-1 bg-sbr-magenta text-white font-bold">
              STAND: {project.standName}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-sbr-magenta dark:text-sbr-turquoise font-bold">
            {project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-tight">
            {project.title[lang]}
          </h1>
          <p className="text-lg sm:text-xl text-sbr-ink/80 dark:text-sbr-parchment/80 max-w-4xl leading-relaxed">
            {project.subtitle[lang]}
          </p>

          {/* Action Links & Tech Stack */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="manga-border px-6 py-3 bg-sbr-gold text-sbr-obsidian font-mono text-xs font-bold uppercase inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t.projects.liveDemo}</span>
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-2 border-sbr-ink dark:border-sbr-parchment font-mono text-xs font-bold uppercase inline-flex items-center gap-2 hover:bg-sbr-magenta hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.projects.sourceCode}</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 font-mono text-xs bg-sbr-sand dark:bg-sbr-plum border border-sbr-ink/30 dark:border-sbr-gold/40 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main Showcase Banner + Stand Stats Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 manga-border overflow-hidden bg-sbr-obsidian">
            <img
              src={project.heroImage}
              alt={project.title[lang]}
              className="w-full h-full max-h-[440px] object-cover"
            />
          </div>

          <div className="lg:col-span-4 manga-border p-6 bg-sbr-obsidian text-sbr-parchment flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-sbr-gold/30 pb-3 mb-4">
                <span className="font-mono text-xs text-sbr-gold font-bold">PROJECT STAND STATS</span>
                <Compass className="w-5 h-5 text-sbr-turquoise" />
              </div>
              <p className="text-xs sm:text-sm text-sbr-parchment/85 leading-relaxed mb-6">
                {project.summary[lang]}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center font-mono">
              {Object.entries(project.stats).map(([k, v]) => (
                <div key={k} className="p-2.5 bg-white/5 border border-sbr-gold/30">
                  <div className="text-[10px] uppercase text-sbr-parchment/60">{k}</div>
                  <div className="text-xl font-display font-black text-sbr-gold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 1. Development Process Stages */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-sbr-magenta" />
            <h2 className="text-2xl sm:text-4xl font-display font-black">
              {t.projects.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.developmentProcess.map((proc) => (
              <div
                key={proc.step}
                className="manga-border p-6 bg-white dark:bg-sbr-plum space-y-3"
              >
                <span className="font-mono text-xs font-bold text-sbr-magenta dark:text-sbr-turquoise block">
                  {proc.step}
                </span>
                <h3 className="text-lg font-display font-bold">{proc.title[lang]}</h3>
                <p className="text-sm text-sbr-ink/80 dark:text-sbr-parchment/80 leading-relaxed">
                  {proc.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. System Architecture Blueprint */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-sbr-gold" />
            <h2 className="text-2xl sm:text-4xl font-display font-black">
              {t.projects.archTitle}
            </h2>
          </div>

          <div className="manga-border p-6 sm:p-8 bg-sbr-obsidian text-sbr-parchment space-y-6">
            <p className="text-sm sm:text-base text-sbr-gold font-mono">
              {project.architecture.overview[lang]}
            </p>

            <div className="space-y-4">
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={layer.name}
                  className="p-5 border-2 border-sbr-gold/40 bg-sbr-plum/70 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-sbr-gold text-sbr-obsidian font-mono text-xs font-bold">
                        LAYER 0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">{layer.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-sbr-parchment/80">
                      {layer.description[lang]}
                    </p>
                  </div>
                  <div className="px-3 py-1.5 bg-sbr-obsidian border border-sbr-turquoise text-sbr-turquoise font-mono text-xs shrink-0 self-start md:self-center">
                    {layer.tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Visual Gallery */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-sbr-turquoise" />
            <h2 className="text-2xl sm:text-4xl font-display font-black">
              {t.projects.galleryTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((imgUrl, index) => (
              <div key={index} className="manga-border overflow-hidden bg-sbr-obsidian h-60">
                <img
                  src={imgUrl}
                  alt={`${project.title[lang]} screenshot ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 4. Engineering Lessons Learned */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-display font-black">
            {t.projects.lessonsTitle}
          </h2>
          <div className="manga-border p-6 sm:p-8 bg-white dark:bg-sbr-plum space-y-4">
            {project.lessonsLearned[lang].map((lesson, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sbr-magenta dark:text-sbr-gold shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base leading-relaxed">{lesson}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
