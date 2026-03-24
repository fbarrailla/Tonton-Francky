/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import reactChronometerVideo from '../assets/portfolio/react-chronometer.mov';
import johnTranCodeVideo from '../assets/portfolio/johntran-code.mov';

interface Project {
  slug: string;
  title: string;
  descFr: string;
  descEn: string;
  video: string;
  tags: string[];
}

const projects: Project[] = [
  {
    slug: 'react-chronometer',
    title: 'React Chronometer',
    descFr: 'Un chronomètre interactif construit avec React — démarrage, pause, tour et réinitialisation en temps réel.',
    descEn: 'An interactive chronometer built with React — start, pause, lap and reset in real time.',
    video: reactChronometerVideo,
    tags: ['React', 'TypeScript', 'CSS'],
  },
  {
    slug: 'johntran-code',
    title: 'John Tran Code',
    descFr: 'Site personnel de John Tran — développeur passionné, vitrine de ses projets et compétences.',
    descEn: "John Tran's personal website — passionate developer, showcasing his projects and skills.",
    video: johnTranCodeVideo,
    tags: ['React', 'Tailwind CSS', 'Vite'],
  },
];

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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video preview */}
              <div className="aspect-video bg-stone-950 overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-stone-800">{project.title}</h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
