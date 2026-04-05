/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, GitCommitHorizontal } from 'lucide-react';
import { useLanguage } from '../i18n';
import { projects } from '../data/portfolio';
import GithubActivity from './GithubActivity';
import GithubStats from './GithubStats';
import PortfolioTimeline from './PortfolioTimeline';

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const p = t.portfolio;
  const [view, setView] = useState<'grid' | 'timeline'>('grid');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('portfolio-scroll');
    if (saved) {
      window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' });
      sessionStorage.removeItem('portfolio-scroll');
    }
  }, []);

  // All tags sorted by frequency
  const allTags = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const proj of projects) {
      for (const tag of proj.tags) {
        counts[tag] = (counts[tag] ?? 0) + 1;
      }
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, []);

  const filteredProjects = selectedTag
    ? projects.filter((proj) => proj.tags.includes(selectedTag))
    : projects;

  return (
    <main className="flex-grow pt-24">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-stone-100 to-slate-100 dark:from-stone-900 dark:to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">{p.title}</h1>
            <p className="text-xl text-stone-600 dark:text-stone-300">{p.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        {/* Controls: tag filters + view toggle */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col gap-4">
          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedTag === null
                  ? 'bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900'
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
              }`}
            >
              Tous ({projects.length})
            </button>
            {allTags.map((tag) => {
              const count = projects.filter((proj) => proj.tags.includes(tag)).length;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedTag === tag
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
                  }`}
                >
                  {tag} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* View toggle */}
          <div className="flex justify-end">
            <div className="inline-flex rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700">
              <button
                onClick={() => setView('grid')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${view === 'grid' ? 'bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900' : 'bg-white text-stone-500 hover:text-stone-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-stone-100'}`}
              >
                <LayoutGrid size={15} />
                Grille
              </button>
              <button
                onClick={() => setView('timeline')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${view === 'timeline' ? 'bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900' : 'bg-white text-stone-500 hover:text-stone-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-stone-100'}`}
              >
                <GitCommitHorizontal size={15} />
                Timeline
              </button>
            </div>
          </div>
        </div>

        {view === 'timeline' ? (
          <PortfolioTimeline projects={filteredProjects} />
        ) : (
          <motion.div layout className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="block bg-white dark:bg-stone-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                    onClick={() => sessionStorage.setItem('portfolio-scroll', String(window.scrollY))}
                  >
                    {/* Media preview */}
                    <div className="aspect-video bg-stone-950 overflow-hidden">
                      {project.mediaType !== 'video' ? (
                        <img src={project.media} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <video src={project.media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wide mb-1">{project.year}</p>
                      <h2 className="text-xl font-bold mb-2 text-stone-800 dark:text-stone-100">{project.title}</h2>
                      <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4 line-clamp-2">
                        {lang === 'fr' ? project.descFr : project.descEn}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                              tag === selectedTag
                                ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400'
                                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-4 inline-block text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                        {p.seeProject} →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* GitHub Stats */}
      <GithubStats />

      {/* GitHub Activity */}
      <GithubActivity />

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-stone-100 to-slate-100 dark:from-stone-900 dark:to-stone-900">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-8">{p.ctaTitle}</h2>
          <Link
            to="/contact"
            className="inline-block bg-stone-800 text-white font-semibold px-8 py-4 rounded-full hover:bg-stone-700 transition-colors duration-200"
          >
            {p.ctaBtn}
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
