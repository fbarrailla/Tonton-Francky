/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n';
import Lightbox from './Lightbox';

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

import dakLak01 from '../assets/dak-lak-01.jpg';
import dakLak02 from '../assets/dak-lak-02.jpg';
import dakLak03 from '../assets/dak-lak-03.jpg';
import dakLak04 from '../assets/dak-lak-04.jpg';
import dakLak05 from '../assets/dak-lak-05.jpg';

import phanThiet01 from '../assets/phan-thiet-01.jpg';
import phanThiet02 from '../assets/phan-thiet-02.jpg';
import phanThiet03 from '../assets/phan-thiet-03.jpg';
import phanThiet04 from '../assets/phan-thiet-04.jpg';
import phanThiet05 from '../assets/phan-thiet-05.jpg';

import bienHoa01 from '../assets/bien-hoa-01.jpg';
import bienHoa02 from '../assets/bien-hoa-02.jpg';
import bienHoa03 from '../assets/bien-hoa-03.jpg';
import bienHoa04 from '../assets/bien-hoa-04.jpg';
import bienHoa05 from '../assets/bien-hoa-05.jpg';

import haNoi06 from '../assets/ha-noi-06.jpg';
import haNoi07 from '../assets/ha-noi-07.jpg';
import haNoi08 from '../assets/ha-noi-08.jpg';
import haNoi09 from '../assets/ha-noi-09.jpg';
import haNoi10 from '../assets/ha-noi-10.jpg';
import haNoi11 from '../assets/ha-noi-11.jpg';

import tamDao01 from '../assets/tam-dao-01.jpg';
import tamDao02 from '../assets/tam-dao-02.jpg';
import tamDao03 from '../assets/tam-dao-03.jpg';
import tamDao04 from '../assets/tam-dao-04.jpg';
import tamDao05 from '../assets/tam-dao-05.jpg';

import changMai01 from '../assets/chang-mai-01.jpg';
import changMai02 from '../assets/chang-mai-02.jpg';
import changMai03 from '../assets/chang-mai-03.jpg';
import changMai04 from '../assets/chang-mai-04.jpg';
import changMai05 from '../assets/chang-mai-05.jpg';

import taipei01 from '../assets/taipei-01.jpg';
import taipei02 from '../assets/taipei-02.jpg';
import taipei03 from '../assets/taipei-03.jpg';
import taipei04 from '../assets/taipei-04.jpg';
import taipei05 from '../assets/taipei-05.jpg';

import kohRong01 from '../assets/koh-rong-01.jpg';
import kohRong02 from '../assets/koh-rong-02.jpg';
import kohRong03 from '../assets/koh-rong-03.jpg';
import kohRong04 from '../assets/koh-rong-04.jpg';
import kohRong05 from '../assets/koh-rong-05.jpg';

import penang01 from '../assets/penang-01.jpg';
import penang02 from '../assets/penang-02.jpg';
import penang03 from '../assets/penang-03.jpg';
import penang04 from '../assets/penang-04.jpg';
import penang05 from '../assets/penang-05.jpg';

import cork01 from '../assets/cork-01.jpg';
import cork02 from '../assets/cork-02.jpg';
import cork03 from '../assets/cork-03.jpg';
import cork04 from '../assets/cork-04.jpg';
import cork05 from '../assets/cork-05.jpg';

import prague01 from '../assets/prague-01.jpg';
import prague02 from '../assets/prague-02.jpg';
import prague03 from '../assets/prague-03.jpg';
import prague04 from '../assets/prague-04.jpg';
import prague05 from '../assets/prague-05.jpg';

import venice01 from '../assets/venice-01.jpg';
import venice02 from '../assets/venice-02.jpg';
import venice03 from '../assets/venice-03.jpg';
import venice04 from '../assets/venice-04.jpg';
import venice05 from '../assets/venice-05.jpg';
import venice06 from '../assets/venice-06.jpg';

import bordeaux01 from '../assets/bordeaux-01.jpg';
import bordeaux02 from '../assets/bordeaux-02.jpg';
import bordeaux03 from '../assets/bordeaux-03.jpg';
import bordeaux04 from '../assets/bordeaux-04.jpg';
import bordeaux05 from '../assets/bordeaux-05.jpg';

import paris01 from '../assets/paris-01.jpg';
import paris02 from '../assets/paris-02.jpg';
import paris03 from '../assets/paris-03.jpg';
import paris04 from '../assets/paris-04.jpg';
import paris05 from '../assets/paris-05.jpg';
import paris06 from '../assets/paris-06.jpg';

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
    photos: [haNoi01, haNoi02, haNoi03, haNoi04, haNoi05, haNoi06, haNoi07, haNoi08, haNoi09, haNoi10, haNoi11],
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
  'dak-lak': {
    name: 'Đắk Lắk',
    country: 'Vietnam',
    date: '2025',
    description: 'Les hauts plateaux du Centre, café robusta et éléphants sauvages.',
    descriptionEn: 'The Central Highlands, robusta coffee and wild elephants.',
    photos: [dakLak01, dakLak02, dakLak03, dakLak04, dakLak05],
  },
  'phan-thiet': {
    name: 'Phan Thiết',
    country: 'Vietnam',
    date: '2026',
    description: 'Dunes de sable rouge, plages sauvages et sauce de poisson légendaire.',
    descriptionEn: 'Red sand dunes, wild beaches and legendary fish sauce.',
    photos: [phanThiet01, phanThiet02, phanThiet03, phanThiet04, phanThiet05],
  },
  'bien-hoa': {
    name: 'Biên Hòa',
    country: 'Vietnam',
    date: '2026',
    description: "La ville industrielle aux mille visages, à deux pas de Saigon.",
    descriptionEn: "The city of a thousand faces, just a stone's throw from Saigon.",
    photos: [bienHoa01, bienHoa02, bienHoa03, bienHoa04, bienHoa05],
  },
  'taipei': {
    name: 'Taipei',
    country: 'Taïwan',
    date: '2026',
    description: 'La ville où la modernité rencontre la tradition, street food et temples.',
    descriptionEn: 'The city where modernity meets tradition, street food and temples.',
    photos: [taipei01, taipei02, taipei03, taipei04, taipei05],
  },
  'koh-rong': {
    name: 'Koh Rong',
    country: 'Cambodge',
    date: '2026',
    description: "Un paradis sauvage aux eaux turquoise, loin des foules et du bruit.",
    descriptionEn: 'A wild paradise with turquoise waters, far from the crowds and noise.',
    photos: [kohRong01, kohRong02, kohRong03, kohRong04, kohRong05],
  },
  'penang': {
    name: 'Penang',
    country: 'Malaisie',
    date: '2026',
    description: "L'île des saveurs, capitale de la street food asiatique et de l'art de rue.",
    descriptionEn: 'The island of flavors, capital of Asian street food and street art.',
    photos: [penang01, penang02, penang03, penang04, penang05],
  },
  'cork': {
    name: 'Cork',
    country: 'Irlande',
    date: '2026',
    description: 'La vraie capitale irlandaise, pubs chaleureux et accents chantants.',
    descriptionEn: 'The real Irish capital, cozy pubs and singing accents.',
    photos: [cork01, cork02, cork03, cork04, cork05],
  },
  'prague': {
    name: 'Prague',
    country: 'République Tchèque',
    date: '2026',
    description: 'La ville aux cent clochers, magie médiévale et bière dorée.',
    descriptionEn: 'The city of a hundred spires, medieval magic and golden beer.',
    photos: [prague01, prague02, prague03, prague04, prague05],
  },
  'venice': {
    name: 'Venise',
    country: 'Italie',
    date: '2026',
    description: "La Sérénissime, canaux dorés et palais suspendus sur l'eau.",
    descriptionEn: 'La Serenissima, golden canals and palaces suspended on water.',
    photos: [venice01, venice02, venice03, venice04, venice05, venice06],
  },
  'bordeaux': {
    name: 'Bordeaux',
    country: 'France',
    date: '2025',
    description: 'La belle endormie éveillée, vins de légende et architecture classée.',
    descriptionEn: 'The awakened sleeping beauty, legendary wines and listed architecture.',
    photos: [bordeaux01, bordeaux02, bordeaux03, bordeaux04, bordeaux05],
  },
  'paris': {
    name: 'Paris',
    country: 'France',
    date: '2025',
    description: "La Ville Lumière, capitale de l'art, de la mode et de la gastronomie.",
    descriptionEn: 'The City of Light, capital of art, fashion and gastronomy.',
    photos: [paris01, paris02, paris03, paris04, paris05, paris06],
  },
  'tam-dao': {
    name: 'Tam Đảo',
    country: 'Vietnam',
    date: '2026',
    description: "Station de montagne mystérieuse perchée dans les nuages, à 85 km de Hanoï.",
    descriptionEn: 'A mysterious mountain resort nestled in the clouds, 85 km from Hanoi.',
    photos: [tamDao01, tamDao02, tamDao03, tamDao04, tamDao05],
  },
  'chang-mai': {
    name: 'Chang Mai',
    country: 'Thaïlande',
    date: '2026',
    description: "La rose du Nord, temples bouddhistes, éléphants et marchés nocturnes.",
    descriptionEn: 'The Rose of the North, Buddhist temples, elephants and night markets.',
    photos: [changMai01, changMai02, changMai03, changMai04, changMai05],
  },
};

export default function VoyageDetail() {
  const { ville } = useParams<{ ville: string }>();
  const voyage = ville ? voyagesData[ville] : null;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { lang, t } = useLanguage();
  const d = t.detail;

  if (!voyage) {
    return (
      <main className="flex-grow pt-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">{d.notFound}</h1>
          <Link to="/voyages" className="text-stone-600 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> {d.back}
          </Link>
        </div>
      </main>
    );
  }

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + voyage.photos.length) % voyage.photos.length);
  }, [voyage.photos.length]);
  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % voyage.photos.length);
  }, [voyage.photos.length]);

  // Keyboard navigation — left/right arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  // Keep active thumbnail visible in the strip
  useEffect(() => {
    const strip = thumbStripRef.current;
    const thumb = thumbRefs.current[current];
    if (!strip || !thumb) return;
    const stripRect = strip.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const offset = thumbRect.left - stripRect.left + strip.scrollLeft;
    const center = offset - stripRect.width / 2 + thumbRect.width / 2;
    strip.scrollTo({ left: center, behavior: 'smooth' });
  }, [current]);

  return (
    <main className="flex-grow pt-10">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-travel-blue to-stone-100">
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
            <p className="text-stone-600 text-lg mb-3">{voyage.country} — {voyage.date}</p>
            <p className="text-stone-700 text-xl max-w-2xl">
              {lang === 'fr' ? voyage.description : voyage.descriptionEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-950 md:aspect-video">
            {/* Photo progress bar */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-white/20 z-20">
              <motion.div
                className="h-full bg-white/70"
                animate={{ width: `${((current + 1) / voyage.photos.length) * 100}%` }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={voyage.photos[current]}
                alt={`${voyage.name} ${current + 1}`}
                fetchPriority="high"
                decoding="async"
                className="block w-auto max-w-full max-h-[80vh] mx-auto md:w-full md:h-full md:max-h-none md:object-cover cursor-zoom-in"
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                onClick={() => setLightboxOpen(true)}
              />
            </AnimatePresence>

            {/* Prev / Next */}
            <button
              onClick={prev}
              aria-label="Photo précédente"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              aria-label="Photo suivante"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {current + 1} / {voyage.photos.length}
            </div>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxOpen && (
              <Lightbox
                photos={voyage.photos}
                initialIndex={current}
                alt={voyage.name}
                onClose={() => setLightboxOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Thumbnails */}
          <div ref={thumbStripRef} className="flex gap-2 mt-8 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {voyage.photos.map((photo, i) => (
              <button
                key={i}
                ref={(el) => { thumbRefs.current[i] = el; }}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`flex-none w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                  i === current ? 'border-stone-800 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo} alt={`thumb ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
