/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { projects } from '../data/portfolio';

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const p = t.portfolio;

  return (
    <main className="flex-grow pt-10">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-stone-100 to-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-4">{p.title}</h1>
            <p className="text-xl text-stone-600">{p.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
              >
                {/* Media preview */}
                <div className="aspect-video bg-stone-950 overflow-hidden">
                  {project.mediaType === 'gif' ? (
                    <img src={project.media} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <video src={project.media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">{project.year}</p>
                  <h2 className="text-xl font-bold mb-2 text-stone-800">{project.title}</h2>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {lang === 'fr' ? project.descFr : project.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-stone-100 text-stone-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
                    {p.seeProject} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
