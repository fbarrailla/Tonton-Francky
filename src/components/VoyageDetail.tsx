/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n';

import haNoi01 from '../assets/ha-noi-01.jpg';
import haNoi02 from '../assets/ha-noi-02.jpg';
import haNoi03 from '../assets/ha-noi-03.jpg';
import haNoi04 from '../assets/ha-noi-04.jpg';
import haNoi05 from '../assets/ha-noi-05.jpg';

import hoiAn01 from '../assets/hoi-an-01.jpg';
import hoiAn02 from '../assets/hoi-an-02.jpg';
import hoiAn03 from '../assets/hoi-an-03.jpg';
import hoiAn04 from '../assets/hoi-an-04.jpg';
import hoiAn05 from '../assets/hoi-an-05.jpg';

import daNang01 from '../assets/da-nang-01.jpg';
import daNang02 from '../assets/da-nang-02.jpg';
import daNang03 from '../assets/da-nang-03.jpg';
import daNang04 from '../assets/da-nang-04.jpg';
import daNang05 from '../assets/da-nang-05.jpg';

import haLong01 from '../assets/ha-long-01.jpg';
import haLong02 from '../assets/ha-long-02.jpg';
import haLong03 from '../assets/ha-long-03.jpg';
import haLong04 from '../assets/ha-long-04.jpg';
import haLong05 from '../assets/ha-long-05.jpg';

import saigon01 from '../assets/saigon-01.jpg';
import saigon02 from '../assets/saigon-02.jpg';
import saigon03 from '../assets/saigon-03.jpg';
import saigon04 from '../assets/saigon-04.jpg';
import saigon05 from '../assets/saigon-05.jpg';

import daLat01 from '../assets/da-lat-01.jpg';
import daLat02 from '../assets/da-lat-02.jpg';
import daLat03 from '../assets/da-lat-03.jpg';
import daLat04 from '../assets/da-lat-04.jpg';
import daLat05 from '../assets/da-lat-05.jpg';

import nhaTrang01 from '../assets/nha-trang-01.jpg';
import nhaTrang02 from '../assets/nha-trang-02.jpg';
import nhaTrang03 from '../assets/nha-trang-03.jpg';
import nhaTrang04 from '../assets/nha-trang-04.jpg';
import nhaTrang05 from '../assets/nha-trang-05.jpg';

import canTho01 from '../assets/can-tho-01.jpg';
import canTho02 from '../assets/can-tho-02.jpg';
import canTho03 from '../assets/can-tho-03.jpg';
import canTho04 from '../assets/can-tho-04.jpg';
import canTho05 from '../assets/can-tho-05.jpg';

import conDao01 from '../assets/con-dao-01.jpg';
import conDao02 from '../assets/con-dao-02.jpg';
import conDao03 from '../assets/con-dao-03.jpg';
import conDao04 from '../assets/con-dao-04.jpg';
import conDao05 from '../assets/con-dao-05.jpg';

interface VoyageData {
  name: string;
  country: string;
  description: string;
  descriptionEn: string;
  date: string;
  photos: string[];
}

const voyagesData: Record<string, VoyageData> = {
  'ha-noi': {
    name: 'Hà Nội',
    country: 'Vietnam',
    date: '2025',
    description: 'La capitale millénaire, entre vieille ville et lacs paisibles.',
    descriptionEn: 'The millennial capital, between the old town and peaceful lakes.',
    photos: [haNoi01, haNoi02, haNoi03, haNoi04, haNoi05],
  },
  'hoi-an': {
    name: 'Hội An',
    country: 'Vietnam',
    date: '2025',
    description: 'La ville aux lanternes, un charme hors du temps.',
    descriptionEn: 'The lantern town, a timeless charm.',
    photos: [hoiAn01, hoiAn02, hoiAn03, hoiAn04, hoiAn05],
  },
  'da-nang': {
    name: 'Đà Nẵng',
    country: 'Vietnam',
    date: '2025',
    description: 'Plages superbes et pont du Dragon, entre mer et montagne.',
    descriptionEn: 'Stunning beaches and the Dragon Bridge, between sea and mountains.',
    photos: [daNang01, daNang02, daNang03, daNang04, daNang05],
  },
  'ha-long': {
    name: 'Hạ Long',
    country: 'Vietnam',
    date: '2025',
    description: "Les majestueuses baies de calcaire au milieu de l'eau émeraude.",
    descriptionEn: 'Majestic limestone bays surrounded by emerald waters.',
    photos: [haLong01, haLong02, haLong03, haLong04, haLong05],
  },
  'saigon': {
    name: 'Saigon',
    country: 'Vietnam',
    date: '2025',
    description: "L'énergie folle de la mégapole du Sud, toujours en mouvement.",
    descriptionEn: 'The wild energy of the southern megacity, always on the move.',
    photos: [saigon01, saigon02, saigon03, saigon04, saigon05],
  },
  'da-lat': {
    name: 'Đà Lạt',
    country: 'Vietnam',
    date: '2025',
    description: 'La ville des fleurs et de la brume, fraîcheur en altitude.',
    descriptionEn: 'The city of flowers and mist, cool mountain air.',
    photos: [daLat01, daLat02, daLat03, daLat04, daLat05],
  },
  'nha-trang': {
    name: 'Nha Trang',
    country: 'Vietnam',
    date: '2025',
    description: 'Mer cristalline et vie balnéaire animée.',
    descriptionEn: 'Crystal-clear sea and lively beach life.',
    photos: [nhaTrang01, nhaTrang02, nhaTrang03, nhaTrang04, nhaTrang05],
  },
  'can-tho': {
    name: 'Cần Thơ',
    country: 'Vietnam',
    date: '2025',
    description: 'Le cœur du delta du Mékong et ses marchés flottants.',
    descriptionEn: 'The heart of the Mekong Delta and its floating markets.',
    photos: [canTho01, canTho02, canTho03, canTho04, canTho05],
  },
  'con-dao': {
    name: 'Côn Đảo',
    country: 'Vietnam',
    date: '2025',
    description: 'Un archipel préservé, plages désertes et nature sauvage.',
    descriptionEn: 'A preserved archipelago, deserted beaches and wild nature.',
    photos: [conDao01, conDao02, conDao03, conDao04, conDao05],
  },
};

export default function VoyageDetail() {
  const { ville } = useParams<{ ville: string }>();
  const voyage = ville ? voyagesData[ville] : null;
  const [current, setCurrent] = useState(0);
  const { lang, t } = useLanguage();
  const d = t.detail;

  if (!voyage) {
    return (
      <main className="flex-grow pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">{d.notFound}</h1>
          <Link to="/voyages" className="text-stone-600 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> {d.back}
          </Link>
        </div>
      </main>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + voyage.photos.length) % voyage.photos.length);
  const next = () => setCurrent((c) => (c + 1) % voyage.photos.length);

  return (
    <main className="flex-grow pt-20">
      {/* Hero */}
      <section className="py-12 px-6 bg-gradient-to-br from-travel-blue to-stone-100">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/voyages"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors mb-6"
          >
            <ArrowLeft size={16} /> {d.back}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-2">
              {voyage.name}
            </h1>
            <p className="text-stone-500 text-lg mb-3">{voyage.country} — {voyage.date}</p>
            <p className="text-stone-700 text-xl max-w-2xl">
              {lang === 'fr' ? voyage.description : voyage.descriptionEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={voyage.photos[current]}
                alt={`${voyage.name} ${current + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {current + 1} / {voyage.photos.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-6 justify-center flex-wrap">
            {voyage.photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                  i === current ? 'border-stone-800 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
