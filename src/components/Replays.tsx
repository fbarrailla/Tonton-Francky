/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Twitch } from 'lucide-react';
import { useLanguage } from '../i18n';

interface ReplayPost {
  id: number;
  title: string;
  titleEn: string;
  date: string;
  youtubeId: string;
}

const replays: ReplayPost[] = [
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
    <main className="flex-grow pt-28">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 to-stone-900">
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
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {replays.map((replay, index) => (
            <motion.article
              key={replay.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${replay.youtubeId}`}
                  title={lang === 'fr' ? replay.title : replay.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-2">
                  {lang === 'fr' ? replay.title : replay.titleEn}
                </h2>
                <p className="text-stone-500 text-sm">{replay.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
