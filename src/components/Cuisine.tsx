/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import phoThumb from '../assets/pho/thumbnail.png';
import bunChaThumb from '../assets/bun-cha/thumbnail.png';
import nemsThumb from '../assets/nems/thumbnail.png';
import banhMiThumb from '../assets/banh-mi/thumbnail.png';

interface RecipeCard {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  country: string;
  thumbnail: string;
}

const recipes: RecipeCard[] = [
  {
    slug: 'banh-mi',
    title: 'Bánh mì : le sandwich qui a conquis le monde',
    titleEn: "Bánh mì: the sandwich that conquered the world",
    subtitle: 'Baguette croustillante, pickles, herbes fraîches et viande grillée 🥖',
    subtitleEn: 'Crispy baguette, pickles, fresh herbs and grilled meat 🥖',
    country: 'Vietnam',
    thumbnail: banhMiThumb,
  },
  {
    slug: 'nems',
    title: 'Nems : les rouleaux frits emblématiques',
    titleEn: "Nems: Vietnam's iconic fried spring rolls",
    subtitle: 'Chả giò / Nem rán — croustillants, dorés, servis avec nuoc cham 🌯',
    subtitleEn: 'Chả giò / Nem rán — crispy, golden, served with nuoc cham 🌯',
    country: 'Vietnam',
    thumbnail: nemsThumb,
  },
  {
    slug: 'bun-cha',
    title: 'Bún chả : le plat emblématique de Hanoï',
    titleEn: 'Bún chả: the iconic dish of Hanoi',
    subtitle: 'Porc grillé au charbon, vermicelles de riz et herbes fraîches 🍖',
    subtitleEn: 'Charcoal-grilled pork, rice vermicelli and fresh herbs 🍖',
    country: 'Vietnam',
    thumbnail: bunChaThumb,
  },
  {
    slug: 'pho-bo',
    title: 'Phở traditionnel vietnamien',
    titleEn: 'Traditional Vietnamese Phở',
    subtitle: 'Phở bò — bouillon de bœuf aux épices, nouilles de riz et herbes fraîches 🍜',
    subtitleEn: 'Phở bò — spiced beef broth, rice noodles and fresh herbs 🍜',
    country: 'Vietnam',
    thumbnail: phoThumb,
  },
];

export default function Cuisine() {
  const { lang, t } = useLanguage();
  const c = t.cuisine;

  return (
    <main className="flex-grow pt-10">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-4">{c.title}</h1>
            <p className="text-xl text-stone-600">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Recipe grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
            >
              <Link to={`/cuisine/${recipe.slug}`} className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.thumbnail}
                    alt={lang === 'fr' ? recipe.title : recipe.titleEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">{recipe.country}</p>
                  <h2 className="text-xl font-bold mb-2">{lang === 'fr' ? recipe.title : recipe.titleEn}</h2>
                  <p className="text-stone-600 text-sm leading-relaxed">{lang === 'fr' ? recipe.subtitle : recipe.subtitleEn}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors">
                    {c.seeRecipe} →
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
