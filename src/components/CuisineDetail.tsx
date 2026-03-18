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
import bunChaHero from '../assets/bun-cha/hero.png';
import bunChaThumb from '../assets/bun-cha/thumbnail.png';

/* ─── Types ─────────────────────────────────────────────── */

interface ArticleSection {
  title: string;
  titleEn: string;
  text?: string;
  textEn?: string;
  bullets?: string[];
  bulletsEn?: string[];
  steps?: string[];
  stepsEn?: string[];
  tip?: string;
  tipEn?: string;
}

interface ArticleEntry {
  type: 'article';
  title: string;
  titleEn: string;
  hero: string;
  thumbnail: string;
  country: string;
  description: string;
  descriptionEn: string;
  sections: ArticleSection[];
}

interface Ingredient { label: string; labelEn: string; }
interface RecipeStep { title: string; titleEn: string; items: string[]; itemsEn: string[]; }
interface IngredientSection { title: string; titleEn: string; ingredients: Ingredient[]; }

interface RecipeEntry {
  type: 'recipe';
  title: string;
  titleEn: string;
  hero: string;
  thumbnail: string;
  country: string;
  description: string;
  descriptionEn: string;
  resultImages: string[];
  ingredientSections: IngredientSection[];
  steps: RecipeStep[];
  tips: string[];
  tipsEn: string[];
}

type CuisineEntry = RecipeEntry | ArticleEntry;

/* ─── Data ───────────────────────────────────────────────── */

const entries: Record<string, CuisineEntry> = {
  'pho-bo': {
    type: 'recipe',
    title: 'Phở traditionnel vietnamien (Phở bò)',
    titleEn: 'Traditional Vietnamese Phở (Phở bò)',
    hero: phoHero,
    thumbnail: phoThumb,
    country: 'Vietnam',
    description: 'Le plat emblématique du Vietnam — un bouillon de bœuf parfumé aux épices, servi avec des nouilles de riz et des herbes fraîches.',
    descriptionEn: "Vietnam's iconic dish — a spiced beef broth served with rice noodles and fresh herbs.",
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
        items: ['Cuire ou réhydrater les nouilles de riz', 'Égoutter puis placer dans un bol'],
        itemsEn: ['Cook or rehydrate the rice noodles', 'Drain and place in a bowl'],
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
      "❄️ Tu peux préparer le bouillon la veille → encore meilleur",
      '🌿 Les herbes fraîches font toute la différence (ne pas zapper !)',
      '🥩 Congèle légèrement le bœuf pour le trancher ultra-fin',
    ],
    tipsEn: [
      '🔥 The longer the broth simmers, the richer it is (ideally 6–8h)',
      '❄️ You can prepare the broth the day before → even better',
      "🌿 Fresh herbs make all the difference (don't skip them!)",
      '🥩 Slightly freeze the beef to slice it ultra-thin',
    ],
  },

  'bun-cha': {
    type: 'article',
    title: 'Bún chả : le plat emblématique de Hanoï',
    titleEn: 'Bún chả: the iconic dish of Hanoi',
    hero: bunChaHero,
    thumbnail: bunChaThumb,
    country: 'Vietnam',
    description: "Le bún chả est l'un des plats les plus iconiques de la cuisine vietnamienne, originaire de Hanoï. À la fois simple et explosif en saveurs, il incarne parfaitement l'équilibre vietnamien entre fraîcheur, grillé et acidité.",
    descriptionEn: "Bún chả is one of the most iconic dishes of Vietnamese cuisine, originating from Hanoi. Both simple and explosive in flavor, it perfectly embodies the Vietnamese balance between freshness, grilled meat and acidity.",
    sections: [
      {
        title: "🥢 Qu'est-ce que le bún chả ?",
        titleEn: '🥢 What is bún chả?',
        text: "Le bún chả se compose de trois éléments principaux, servi avec le nuoc cham : une sauce à base de nuoc-mâm, sucre, vinaigre, ail et piment.",
        textEn: "Bún chả consists of three main elements, served with nuoc cham: a sauce made from nuoc-mâm, sugar, vinegar, garlic and chili.",
        bullets: [
          '🍖 Porc grillé (boulettes et tranches marinées)',
          '🍜 Vermicelles de riz (bún)',
          '🥗 Herbes fraîches (menthe, coriandre, salade)',
        ],
        bulletsEn: [
          '🍖 Grilled pork (meatballs and marinated slices)',
          '🍜 Rice vermicelli (bún)',
          '🥗 Fresh herbs (mint, coriander, lettuce)',
        ],
      },
      {
        title: '🔥 Une explosion de textures',
        titleEn: '🔥 An explosion of textures',
        text: "Ce qui rend le bún chả unique, c'est le contraste entre les éléments — chaque bouchée est un équilibre parfait.",
        textEn: "What makes bún chả unique is the contrast between elements — every bite is a perfect balance.",
        bullets: [
          '🔥 Viande chaude, grillée au charbon',
          '❄️ Nouilles froides et légères',
          '🌿 Herbes fraîches ultra parfumées',
          '🍋 Sauce acidulée et légèrement sucrée',
        ],
        bulletsEn: [
          '🔥 Hot meat, charcoal-grilled',
          '❄️ Cold and light noodles',
          '🌿 Ultra-fragrant fresh herbs',
          '🍋 Tangy and slightly sweet sauce',
        ],
      },
      {
        title: '🍽️ Comment ça se mange ?',
        titleEn: '🍽️ How do you eat it?',
        text: "Contrairement au phở, le bún chả ne se mange pas comme une soupe. La méthode traditionnelle :",
        textEn: "Unlike phở, bún chả is not eaten like a soup. The traditional method:",
        steps: [
          'Tremper les nouilles dans la sauce',
          'Ajouter un peu de viande',
          'Compléter avec des herbes',
          'Manger en une bouchée',
        ],
        stepsEn: [
          'Dip the noodles in the sauce',
          'Add a little meat',
          'Complete with herbs',
          'Eat in one bite',
        ],
        tip: "💡 Astuce locale : ne mélange pas tout d'un coup — fais chaque bouchée séparément.",
        tipEn: "💡 Local tip: don't mix everything at once — build each bite separately.",
      },
      {
        title: "🌍 Pourquoi c'est devenu mondialement connu ?",
        titleEn: '🌍 Why did it become world-famous?',
        text: "Le bún chả a explosé en popularité internationale après la visite de Barack Obama à Hanoï en 2016, où il a partagé un repas de bún chả avec Anthony Bourdain. Depuis, c'est devenu un must-try absolu pour les voyageurs.",
        textEn: "Bún chả exploded in international popularity after Barack Obama's visit to Hanoi in 2016, where he shared a bún chả meal with Anthony Bourdain. Since then, it has become an absolute must-try for travelers.",
      },
      {
        title: '📍 Où en manger à Hanoï ?',
        titleEn: '📍 Where to eat it in Hanoi?',
        bullets: [
          '🏆 Bún Chả Hương Liên — le fameux "Obama bun cha"',
          '⭐ Bún Chả Đắc Kim — très populaire, goût authentique',
        ],
        bulletsEn: [
          '🏆 Bún Chả Hương Liên — the famous "Obama bun cha"',
          '⭐ Bún Chả Đắc Kim — very popular, authentic taste',
        ],
      },
      {
        title: '💡 Pourquoi tu dois absolument goûter',
        titleEn: '💡 Why you absolutely must try it',
        bullets: [
          '✔️ Accessible (pas cher)',
          '✔️ Ultra savoureux',
          '✔️ Typiquement nord-vietnamien',
          '✔️ Parfait pour le déjeuner',
        ],
        bulletsEn: [
          '✔️ Affordable (cheap)',
          '✔️ Ultra flavorful',
          '✔️ Typically North Vietnamese',
          '✔️ Perfect for lunch',
        ],
      },
    ],
  },
};

/* ─── Renderers ─────────────────────────────────────────── */

function RecipeRenderer({ entry, lang }: { entry: RecipeEntry; lang: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">
      <p className="text-xl text-stone-600 leading-relaxed">
        {lang === 'fr' ? entry.description : entry.descriptionEn}
      </p>

      <section>
        <h2 className="text-2xl font-serif font-bold mb-6">🥣 {lang === 'fr' ? 'Résultat final' : 'Final result'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {entry.resultImages.map((src, i) => (
            <img key={i} src={src} alt={`result ${i + 1}`} className="w-full aspect-square object-cover rounded-xl" />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-bold mb-6">🛒 {lang === 'fr' ? 'Ingrédients' : 'Ingredients'}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {entry.ingredientSections.map((section, si) => (
            <div key={si} className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">{lang === 'fr' ? section.title : section.titleEn}</h3>
              <ul className="flex flex-col gap-2">
                {(lang === 'fr' ? section.ingredients.map(i => i.label) : section.ingredients.map(i => i.labelEn)).map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-1">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-bold mb-6">🔥 {lang === 'fr' ? 'Préparation' : 'Preparation'}</h2>
        <div className="flex flex-col gap-8">
          {entry.steps.map((step, si) => (
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

      <section className="bg-stone-800 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-serif font-bold mb-6">💡 {lang === 'fr' ? 'Astuces de chef' : 'Chef tips'}</h2>
        <ul className="flex flex-col gap-3">
          {(lang === 'fr' ? entry.tips : entry.tipsEn).map((tip, i) => (
            <li key={i} className="text-stone-300 leading-relaxed">{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ArticleRenderer({ entry, lang }: { entry: ArticleEntry; lang: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10">
      <p className="text-xl text-stone-600 leading-relaxed">
        {lang === 'fr' ? entry.description : entry.descriptionEn}
      </p>

      {entry.sections.map((section, si) => (
        <motion.section
          key={si}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: si * 0.05, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4"
        >
          <h2 className="text-2xl font-serif font-bold">{lang === 'fr' ? section.title : section.titleEn}</h2>

          {(lang === 'fr' ? section.text : section.textEn) && (
            <p className="text-stone-600 leading-relaxed">{lang === 'fr' ? section.text : section.textEn}</p>
          )}

          {((lang === 'fr' ? section.bullets : section.bulletsEn) ?? []).length > 0 && (
            <ul className="flex flex-col gap-2">
              {(lang === 'fr' ? section.bullets! : section.bulletsEn!).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-stone-700">
                  <span className="text-amber-500 mt-1">•</span>{item}
                </li>
              ))}
            </ul>
          )}

          {((lang === 'fr' ? section.steps : section.stepsEn) ?? []).length > 0 && (
            <ol className="flex flex-col gap-2">
              {(lang === 'fr' ? section.steps! : section.stepsEn!).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          )}

          {(lang === 'fr' ? section.tip : section.tipEn) && (
            <p className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 text-stone-700 rounded-r-xl text-sm">
              {lang === 'fr' ? section.tip : section.tipEn}
            </p>
          )}
        </motion.section>
      ))}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function CuisineDetail() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? entries[slug] : null;
  const { lang, t } = useLanguage();
  const c = t.cuisine;

  if (!entry) {
    return (
      <main className="flex-grow pt-10 flex items-center justify-center">
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
    <main className="flex-grow pt-10">
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={entry.hero} alt={lang === 'fr' ? entry.title : entry.titleEn} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-4xl mx-auto left-0 right-0">
          <Link to="/cuisine" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 text-sm">
            <ArrowLeft size={16} /> {c.back}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-amber-300 text-sm font-semibold uppercase tracking-wide mb-2">{entry.country}</p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">
              {lang === 'fr' ? entry.title : entry.titleEn}
            </h1>
          </motion.div>
        </div>
      </section>

      {entry.type === 'recipe'
        ? <RecipeRenderer entry={entry} lang={lang} />
        : <ArticleRenderer entry={entry} lang={lang} />
      }
    </main>
  );
}
