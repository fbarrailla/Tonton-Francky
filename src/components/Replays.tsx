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
    id: 24,
    title: 'Live Twitch — Entretiens d\'embauche partie IV',
    titleEn: 'Live Twitch — Job interviews part IV',
    date: 'Mardi 19 Mai 2026',
    youtubeId: 'DMMHHUDc6l4',
  },
  {
    id: 23,
    title: 'Live Twitch — Entretiens d\'embauche partie III',
    titleEn: 'Live Twitch — Job interviews part III',
    date: 'Mardi 19 Mai 2026',
    youtubeId: '-0E6n_KcOJI',
  },
  {
    id: 22,
    title: 'Live Twitch — Entretiens d\'embauche partie II',
    titleEn: 'Live Twitch — Job interviews part II',
    date: 'Mardi 19 Mai 2026',
    youtubeId: 'QMcPS_UJxPk',
  },
  {
    id: 21,
    title: 'Live Twitch — Entretiens d\'embauche partie I',
    titleEn: 'Live Twitch — Job interviews part I',
    date: 'Mardi 19 Mai 2026',
    youtubeId: 'PfWAvuuIENw',
  },
  {
    id: 20,
    title: 'Session live Twitch du matin',
    titleEn: 'Live Twitch morning session',
    date: 'Dimanche 17 Mai 2026',
    youtubeId: 'RNvrejc3DGA',
  },
  {
    id: 19,
    title: 'Créer un site web pour vendre du porridge de riz',
    titleEn: 'Making a website to sell rice porridge',
    date: 'Samedi 16 Mai 2026',
    youtubeId: '_0lz92Lz31s',
  },
  {
    id: 18,
    title: 'Giveaways',
    titleEn: 'Giveaways',
    date: 'Samedi 16 Mai 2026',
    youtubeId: 'YgaA42_NoxE',
  },
  {
    id: 17,
    title: 'Live in the dark',
    titleEn: 'Live in the dark',
    date: 'Vendredi 15 Mai 2026',
    youtubeId: 'acBi9fz6An8',
  },
  {
    id: 16,
    title: 'Mise à jour du site + rencontre viewers + giveaways',
    titleEn: 'Updating a website + Viewers meeting + Giveaways',
    date: 'Mercredi 13 Mai 2026',
    youtubeId: 'nMJXJdyvZa8',
  },
  {
    id: 15,
    title: 'Créer un site web pour une ONG',
    titleEn: 'Creating a website for an NGO',
    date: 'Mardi 12 Mai 2026',
    youtubeId: 'qag3TpIPhP8',
  },
  {
    id: 14,
    title: 'Live Twitch surprise giveaway',
    titleEn: 'Live Twitch surprise giveaway',
    date: 'Mardi 12 Mai 2026',
    youtubeId: 'eMuk3C8Ks6M',
  },
  {
    id: 13,
    title: 'Créer un site web gratuit avec Claude Code',
    titleEn: 'Building a free website with Claude Code',
    date: 'Mardi 12 Mai 2026',
    youtubeId: 'ButGPi9LhSE',
  },
  {
    id: 12,
    title: 'Créer un site web gratuit',
    titleEn: 'Building a free website',
    date: 'Lundi 11 Mai 2026',
    youtubeId: '1GaaImzpGHg',
  },
  {
    id: 11,
    title: 'Introduction à mes e-books',
    titleEn: 'Introduction to my ebooks',
    date: 'Lundi 11 Mai 2026',
    youtubeId: '_kwvwX8pM14',
  },
  {
    id: 10,
    title: 'Giveaways',
    titleEn: 'Giveaways',
    date: 'Samedi 9 Mai 2026',
    youtubeId: 'VHT7uXTZBFM',
  },
  {
    id: 9,
    title: 'Préparation des giveaways',
    titleEn: 'Giveaways preparation',
    date: 'Samedi 9 Mai 2026',
    youtubeId: 'HKnR-VmjSS0',
  },
  {
    id: 8,
    title: 'Scrapper les followers Instagram + concours',
    titleEn: 'Instagram followers scraping + contests',
    date: 'Mardi 5 Mai 2026',
    youtubeId: 'lSQULzQ24yw',
  },
  {
    id: 7,
    title: 'Giveaway contests — 2 mai 2026',
    titleEn: 'Giveaway contests — May 2, 2026',
    date: 'Samedi 2 Mai 2026',
    youtubeId: '-ajJOoW6IKE',
  },
  {
    id: 6,
    title: 'Tirage au sort du concours Instagram — 25 avril 2026',
    titleEn: 'Instagram Giveaway Draw — April 25, 2026',
    date: 'Vendredi 25 Avril 2026',
    youtubeId: 'kB1rk3AlDQ8',
  },
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
