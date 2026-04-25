/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Twitch, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

interface ReplayPost {
  id: number;
  title: string;
  titleEn: string;
  date: string;
  youtubeId: string;
  ebookLink?: string;
  ebookLabel?: string;
}

const replays: ReplayPost[] = [
  {
    id: 5,
    title: 'Scrapper les commentaires Instagram avec l\'IA',
    titleEn: 'Scraping Instagram Comments with AI',
    date: 'Avril 2026',
    youtubeId: 'ltkkMkDfY3w',
  },
  {
    id: 4,
    title: 'Créer et publier un site web avec Claude Code',
    titleEn: 'Building and Publishing a website using Claude Code',
    date: 'Avril 2026',
    youtubeId: 'pf21Crq_gLw',
    ebookLink: '/ebook',
    ebookLabel: 'Obtenir l\'e-book',
  },
  {
    id: 3,
    title: 'Live Twitch sur mon dernier e-book: Travel Guide - Vietnam',
    titleEn: 'Twitch Live on my latest e-book: Travel Guide - Vietnam',
    date: 'Dimanche 13 Avril 2026',
    youtubeId: 'FdLS4tM1Qdo',
  },
  {
    id: 2,
    title: 'Marche à Dam Sen park',
    titleEn: 'Walk at Dam Sen park',
    date: 'Lundi 16 Mars 2026',
    youtubeId: 'WduwmH5Bgt0',
  },
  {
    id: 1,
    title: 'Session live Q&A',
    titleEn: 'Live Q&A Session',
    date: 'Dimanche 15 Mars 2026 à 12h (FR)',
    youtubeId: 'kvQqOw55pFo',
  },
];

export default function Replays() {
  const { lang, t } = useLanguage();
  const r = t.replays;

  return (
    <main className="flex-grow pt-24">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-purple-900 to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <Twitch size={48} className="text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">{r.title}</h1>
            <p className="text-xl text-purple-200">{r.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Replay list */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {replays.map((replay, index) => (
            <motion.article
              key={replay.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-stone-900 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${replay.youtubeId}`}
                  title={lang === 'fr' ? replay.title : replay.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-2">
                  {lang === 'fr' ? replay.title : replay.titleEn}
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-sm">{replay.date}</p>
                {replay.ebookLink && (
                  <Link
                    to={replay.ebookLink}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold text-sm transition-colors"
                  >
                    <BookOpen size={16} />
                    {replay.ebookLabel ?? 'E-book'}
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
