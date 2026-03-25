/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n';
import { projects } from '../data/portfolio';

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const p = t.portfolio;

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <main className="flex-grow pt-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Projet introuvable</h1>
          <Link to="/portfolio" className="text-stone-600 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> {p.back}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-10">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-stone-100 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors mb-6"
          >
            <ArrowLeft size={16} /> {p.back}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-stone-600 text-sm">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {lang === 'fr' ? project.clientFr : project.clientEn}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {project.year}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Video — takes 2/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-stone-950">
              {project.mediaType !== 'video' ? (
                <img src={project.media} alt={project.title} className="w-full h-full object-contain" />
              ) : (
                <video src={project.media} autoPlay muted loop playsInline controls className="w-full h-full object-cover" />
              )}
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Github size={16} /> Voir sur GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                <ExternalLink size={16} /> Voir en ligne →
              </a>
            )}
          </motion.div>

          {/* Sidebar — 1/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Description */}
            <div>
              <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-3">
                {p.about}
              </h2>
              <p className="text-stone-700 leading-relaxed">
                {lang === 'fr' ? project.descFr : project.descEn}
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-3">
                {p.techStack}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Client */}
            <div>
              <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-3">
                {p.client}
              </h2>
              <p className="text-stone-700 font-medium">
                {lang === 'fr' ? project.clientFr : project.clientEn}
              </p>
              <p className="text-stone-500 text-sm mt-1">{project.year}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
