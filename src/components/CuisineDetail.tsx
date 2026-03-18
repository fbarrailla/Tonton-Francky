/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n';
import phoHero from '../assets/pho/hero.png';
import phoThumb from '../assets/pho/thumbnail.png';

interface Ingredient {
  label: string;
  labelEn: string;
}

interface Step {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

interface RecipeSection {
  title: string;
  titleEn: string;
  ingredients: Ingredient[];
}

interface Recipe {
  title: string;
  titleEn: string;
  hero: string;
  thumbnail: string;
  country: string;
  description: string;
  descriptionEn: string;
  resultImages: string[];
  ingredientSections: RecipeSection[];
  steps: Step[];
  tips: string[];
  tipsEn: string[];
}

const recipes: Record<string, Recipe> = {
  'pho-bo': {
    title: 'Phở traditionnel vietnamien (Phở bò)',
    titleEn: 'Traditional Vietnamese Phở (Phở bò)',
    hero: phoHero,
    thumbnail: phoThumb,
    country: 'Vietnam',
    description: 'Le plat emblématique du Vietnam — un bouillon de bœuf parfumé aux épices, servi avec des nouilles de riz et des herbes fraîches.',
    descriptionEn: 'Vietnam\'s iconic dish — a spiced beef broth served with rice noodles and fresh herbs.',
    resultImages: [
      'https://images.openai.com/static-rsc-3/3mjuOoB7LzpUZ8R4K4LEdg2cVQWSI3jM5C9H__HsKveOjoUSqtivYQ4cQ1s0Im77RYTzcOQmghLeqdoGy5IrE1nDtUcYCvhycA52wqAOfqs?purpose=fullsize&v=1',
      'https://images.openai.com/static-rsc-3/xHA_yqZGX8MRVEWJNxFCUtRtWFsSCJMVG_dibVYTtYG8ozsEK8u8HS92hHO-88SfIyOTx8Z7qkf9nFi7_INozqXUS7gQVzaY0gOyJwbbzGk?purpose=fullsize&v=1',
      'https://images.openai.com/static-rsc-3/QEmaHO-D7tpcui0hpGJiXvH0hu1v6TW-nN-iTya1dEHnKqei2ifM0Z0m-uu4j0a3TfJgU1k0GvytlrWpbAxQni4R-2bZgDTCFmvVpSWZaDU?purpose=fullsize&v=1',
      'https://images.openai.com/static-rsc-3/8QKeZa4Qa4eHR58vAAxt4m3FLySNlYr-8nVAa8rgy5rDI0A-3Br9cn63QlfVKhZgmlCaPW0fiVVictziq1P1z2EGs-O-9iy2KXXtg5r3k44?purpose=fullsize&v=1',
    ],
    ingredientSections: [
      {
        title: '🍖 Base du bouillon',
        titleEn: '🍖 Broth base',
        ingredients: [
          { label: 'Os de bœuf (moelle + jarret)', labelEn: 'Beef bones (marrow + shank)' },
          { label: 'Gingembre (grillé)', labelEn: 'Ginger (grilled)' },
          { label: 'Oignons (grillés)', labelEn: 'Onions (grilled)' },
          { label: 'Badiane (anis étoilé), cannelle, clous de girofle', labelEn: 'Star anise, cinnamon, cloves' },
          { label: 'Sauce poisson (nuoc-mâm)', labelEn: 'Fish sauce (nuoc-mâm)' },
          { label: 'Sel, sucre', labelEn: 'Salt, sugar' },
        ],
      },
      {
        title: '🍜 Garniture',
        titleEn: '🍜 Toppings',
        ingredients: [
          { label: 'Nouilles de riz (bánh phở)', labelEn: 'Rice noodles (bánh phở)' },
          { label: 'Bœuf cru tranché très fin (ou cuit selon goût)', labelEn: 'Thinly sliced raw beef (or cooked to taste)' },
          { label: 'Coriandre, basilic thaï', labelEn: 'Coriander, Thai basil' },
          { label: 'Pousses de soja', labelEn: 'Bean sprouts' },
          { label: 'Citron vert, piment', labelEn: 'Lime, chili' },
        ],
      },
    ],
    steps: [
      {
        title: '1️⃣ Préparer le bouillon (3 à 6h)',
        titleEn: '1️⃣ Prepare the broth (3 to 6h)',
        items: [
          'Blanchir les os (eau bouillante 5 min puis rincer)',
          'Faire mijoter à feu doux avec gingembre + oignons grillés',
          'Ajouter les épices (dans un sachet ou filtre)',
          'Écumer régulièrement pour un bouillon clair',
          'Assaisonner (nuoc-mâm, sel, sucre)',
        ],
        itemsEn: [
          'Blanch the bones (boiling water 5 min then rinse)',
          'Simmer on low heat with grilled ginger + onions',
          'Add spices (in a sachet or filter)',
          'Skim regularly for a clear broth',
          'Season (nuoc-mâm, salt, sugar)',
        ],
      },
      {
        title: '2️⃣ Préparer les nouilles',
        titleEn: '2️⃣ Prepare the noodles',
        items: [
          'Cuire ou réhydrater les nouilles de riz',
          'Égoutter puis placer dans un bol',
        ],
        itemsEn: [
          'Cook or rehydrate the rice noodles',
          'Drain and place in a bowl',
        ],
      },
      {
        title: '3️⃣ Dressage du bol',
        titleEn: '3️⃣ Assembling the bowl',
        items: [
          'Ajouter le bœuf cru sur les nouilles',
          'Verser le bouillon brûlant (qui cuit la viande)',
          'Ajouter herbes, soja, citron, piment selon goût',
        ],
        itemsEn: [
          'Add raw beef on top of noodles',
          'Pour the boiling broth (which cooks the meat)',
          'Add herbs, sprouts, lime, chili to taste',
        ],
      },
    ],
    tips: [
      '🔥 Plus le bouillon est long, plus il est riche (idéalement 6–8h)',
      '❄️ Tu peux préparer le bouillon la veille → encore meilleur',
      '🌿 Les herbes fraîches font toute la différence (ne pas zapper !)',
      '🥩 Congèle légèrement le bœuf pour le trancher ultra-fin',
    ],
    tipsEn: [
      '🔥 The longer the broth simmers, the richer it is (ideally 6–8h)',
      '❄️ You can prepare the broth the day before → even better',
      '🌿 Fresh herbs make all the difference (don\'t skip them!)',
      '🥩 Slightly freeze the beef to slice it ultra-thin',
    ],
  },
};

export default function CuisineDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? recipes[slug] : null;
  const { lang, t } = useLanguage();
  const c = t.cuisine;

  if (!recipe) {
    return (
      <main className="flex-grow pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">{c.notFound}</h1>
          <Link to="/cuisine" className="text-stone-600 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> {c.back}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-20">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={recipe.hero} alt={lang === 'fr' ? recipe.title : recipe.titleEn} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-4xl mx-auto left-0 right-0">
          <Link to="/cuisine" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 text-sm">
            <ArrowLeft size={16} /> {c.back}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-amber-300 text-sm font-semibold uppercase tracking-wide mb-2">{recipe.country}</p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">
              {lang === 'fr' ? recipe.title : recipe.titleEn}
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* Description */}
        <p className="text-xl text-stone-600 leading-relaxed">
          {lang === 'fr' ? recipe.description : recipe.descriptionEn}
        </p>

        {/* Result photos */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6">🥣 {lang === 'fr' ? 'Résultat final' : 'Final result'}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {recipe.resultImages.map((src, i) => (
              <img key={i} src={src} alt={`result ${i + 1}`} className="w-full aspect-square object-cover rounded-xl" />
            ))}
          </div>
        </section>

        {/* Ingredients */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6">🛒 {lang === 'fr' ? 'Ingrédients' : 'Ingredients'}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {recipe.ingredientSections.map((section, si) => (
              <div key={si} className="bg-amber-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">{lang === 'fr' ? section.title : section.titleEn}</h3>
                <ul className="flex flex-col gap-2">
                  {(lang === 'fr' ? section.ingredients.map(i => i.label) : section.ingredients.map(i => i.labelEn)).map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-stone-700">
                      <span className="text-amber-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6">🔥 {lang === 'fr' ? 'Préparation' : 'Preparation'}</h2>
          <div className="flex flex-col gap-8">
            {recipe.steps.map((step, si) => (
              <div key={si} className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">{lang === 'fr' ? step.title : step.titleEn}</h3>
                <ul className="flex flex-col gap-2">
                  {(lang === 'fr' ? step.items : step.itemsEn).map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3 text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{ii + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="bg-stone-800 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-serif font-bold mb-6">💡 {lang === 'fr' ? 'Astuces de chef' : 'Chef tips'}</h2>
          <ul className="flex flex-col gap-3">
            {(lang === 'fr' ? recipe.tips : recipe.tipsEn).map((tip, i) => (
              <li key={i} className="text-stone-300 leading-relaxed">{tip}</li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
