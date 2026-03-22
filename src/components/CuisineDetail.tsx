/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n';
import Lightbox from './Lightbox';
import phoHero from '../assets/pho/hero.png';
import phoThumb from '../assets/pho/thumbnail.png';
import bunChaHero from '../assets/bun-cha/hero.png';
import bunChaThumb from '../assets/bun-cha/thumbnail.png';
import nemsHero from '../assets/nems/hero.png';
import nemsThumb from '../assets/nems/thumbnail.png';
import banhMiHero from '../assets/banh-mi/hero.png';
import banhMiThumb from '../assets/banh-mi/thumbnail.png';
import hotPotHero from '../assets/hot-pot/hero.png';
import hotPotThumb from '../assets/hot-pot/thumbnail.png';
import bunChaPhoto01 from '../assets/bun-cha/photo-01.jpg';
import bunChaPhoto02 from '../assets/bun-cha/photo-02.jpg';
import phoPhoto01 from '../assets/pho/photo-01.jpg';
import phoPhoto02 from '../assets/pho/photo-02.jpg';
import phoPhoto03 from '../assets/pho/photo-03.jpg';

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
  photos?: string[];
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
    resultImages: [phoPhoto01, phoPhoto02, phoPhoto03],
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

  'banh-mi': {
    type: 'article',
    title: 'Bánh mì : le sandwich vietnamien qui a conquis le monde',
    titleEn: 'Bánh mì: the Vietnamese sandwich that conquered the world',
    hero: banhMiHero,
    thumbnail: banhMiThumb,
    country: 'Vietnam',
    description: "Le bánh mì est bien plus qu'un simple sandwich. C'est une rencontre parfaite entre héritage français et créativité vietnamienne. Croustillant, frais, parfumé… c'est l'un des symboles les plus forts de la street food au Vietnam.",
    descriptionEn: "Bánh mì is much more than a simple sandwich. It's a perfect meeting of French heritage and Vietnamese creativity. Crispy, fresh, fragrant… it's one of the strongest symbols of street food in Vietnam.",
    sections: [
      {
        title: '🌍 Une histoire entre deux cultures',
        titleEn: '🌍 A story between two cultures',
        text: "Le bánh mì trouve ses origines à l'époque de l'Indochine française. La baguette est importée… puis transformée. Aujourd'hui, le bánh mì est devenu un incontournable, notamment à Ho Chi Minh Ville (Saigon), où on en trouve à chaque coin de rue.",
        textEn: "Bánh mì has its origins in the era of French Indochina. The baguette was imported… then transformed. Today, bánh mì has become a must, especially in Ho Chi Minh City (Saigon), where it can be found on every street corner.",
        bullets: [
          '🥖 Une baguette plus légère et croustillante',
          '🇻🇳 Une garniture 100% vietnamienne',
        ],
        bulletsEn: [
          '🥖 A lighter and crispier baguette',
          '🇻🇳 A 100% Vietnamese filling',
        ],
      },
      {
        title: '🥪 De quoi est composé un bánh mì ?',
        titleEn: '🥪 What is in a bánh mì?',
        text: "Un bánh mì classique contient une combinaison d'ingrédients soigneusement équilibrés. Chaque vendeur a sa recette → c'est ça la magie.",
        textEn: "A classic bánh mì contains a carefully balanced combination of ingredients. Every vendor has their own recipe → that's the magic.",
        bullets: [
          '🥖 Baguette croustillante',
          '🥩 Viande (porc grillé, charcuterie, poulet…)',
          '🥕 Légumes pickles (carotte, radis blanc)',
          '🌿 Herbes fraîches (coriandre)',
          '🌶️ Piment',
          '🧂 Sauces (mayonnaise, sauce soja, parfois maggi)',
        ],
        bulletsEn: [
          '🥖 Crispy baguette',
          '🥩 Meat (grilled pork, cold cuts, chicken…)',
          '🥕 Pickled vegetables (carrot, white radish)',
          '🌿 Fresh herbs (coriander)',
          '🌶️ Chili',
          '🧂 Sauces (mayonnaise, soy sauce, sometimes maggi)',
        ],
      },
      {
        title: '🔥 Pourquoi c\'est aussi bon ?',
        titleEn: '🔥 Why is it so good?',
        text: "Le secret du bánh mì — un équilibre parfait entre gras + frais + croquant + acidulé :",
        textEn: "The secret of bánh mì — a perfect balance of rich + fresh + crunchy + tangy:",
        bullets: [
          '🔥 Croustillant à l\'extérieur',
          '🧈 Moelleux à l\'intérieur',
          '🥗 Fraîcheur des herbes',
          '🍋 Acidité des pickles',
        ],
        bulletsEn: [
          '🔥 Crispy on the outside',
          '🧈 Soft on the inside',
          '🥗 Freshness of the herbs',
          '🍋 Acidity from the pickles',
        ],
      },
      {
        title: '🍽️ Comment le manger comme un local ?',
        titleEn: '🍽️ How to eat it like a local?',
        bullets: [
          '🕒 À toute heure (petit-déj, déjeuner, snack)',
          '🚶‍♂️ Dans la rue, sur un tabouret en plastique',
          '💸 Pour quelques euros seulement',
        ],
        bulletsEn: [
          '🕒 Any time of day (breakfast, lunch, snack)',
          '🚶‍♂️ In the street, on a plastic stool',
          '💸 For just a few euros',
        ],
        tip: '💡 Astuce : demande "ít cay" (peu pimenté) si tu n\'aimes pas le spicy 😄',
        tipEn: '💡 Tip: ask for "ít cay" (less spicy) if you don\'t like it hot 😄',
      },
      {
        title: '📍 Où manger un excellent bánh mì ?',
        titleEn: '📍 Where to eat a great bánh mì?',
        text: 'Quelques adresses connues à Ho Chi Minh Ville :',
        textEn: 'Some well-known spots in Ho Chi Minh City:',
        bullets: [
          '🏆 Bánh Mì Huỳnh Hoa — ultra généreux, très populaire',
          '⭐ Bánh Mì 37 Nguyễn Trãi — street food authentique',
        ],
        bulletsEn: [
          '🏆 Bánh Mì Huỳnh Hoa — ultra generous, very popular',
          '⭐ Bánh Mì 37 Nguyễn Trãi — authentic street food',
        ],
      },
      {
        title: '💡 Pourquoi tu dois absolument tester',
        titleEn: '💡 Why you absolutely must try it',
        bullets: [
          '✔️ Rapide',
          '✔️ Pas cher',
          '✔️ Ultra savoureux',
          '✔️ Typiquement vietnamien',
          '✔️ Probablement le meilleur rapport plaisir/prix du Vietnam',
        ],
        bulletsEn: [
          '✔️ Quick',
          '✔️ Cheap',
          '✔️ Ultra flavorful',
          '✔️ Typically Vietnamese',
          '✔️ Probably the best value for money in Vietnam',
        ],
      },
      {
        title: '🎯 Le mot de Tonton Francky',
        titleEn: '🎯 Tonton Francky\'s take',
        text: '"Si tu viens au Vietnam et que tu ne manges pas de bánh mì… t\'as raté un truc."',
        textEn: '"If you come to Vietnam and don\'t eat a bánh mì… you\'ve missed something."',
      },
    ],
  },

  'nems': {
    type: 'article',
    title: 'Nems : les rouleaux frits emblématiques du Vietnam',
    titleEn: 'Nems: Vietnam\'s iconic fried spring rolls',
    hero: nemsHero,
    thumbnail: nemsThumb,
    country: 'Vietnam',
    description: "Les nems — appelés chả giò au Sud et nem rán au Nord — sont l'un des symboles les plus reconnaissables de la cuisine vietnamienne. Croustillants à l'extérieur, moelleux à l'intérieur, ils se déclinent en mille variantes selon les régions.",
    descriptionEn: "Nems — called chả giò in the South and nem rán in the North — are one of the most recognizable symbols of Vietnamese cuisine. Crispy on the outside, tender on the inside, they come in countless regional variations.",
    sections: [
      {
        title: "🥢 Qu'est-ce qu'un nem ?",
        titleEn: "🥢 What is a nem?",
        text: "Un nem est un rouleau frit composé d'une fine feuille de riz (ou de blé) garnie d'une farce savoureuse, puis plongé dans l'huile chaude jusqu'à obtenir une couleur dorée et une texture ultra croustillante.",
        textEn: "A nem is a fried roll made of a thin rice (or wheat) wrapper filled with a savory stuffing, then deep-fried until golden and ultra-crispy.",
        bullets: [
          '🫘 Farce à base de porc haché, crevettes ou crabe',
          '🥕 Vermicelles de riz, carottes, champignons noirs',
          '🧄 Ail, échalotes, nuoc-mâm',
          '🌯 Enroulé dans une galette de riz fine',
        ],
        bulletsEn: [
          '🫘 Filling of minced pork, shrimp or crab',
          '🥕 Rice vermicelli, carrots, wood ear mushrooms',
          '🧄 Garlic, shallots, nuoc-mâm',
          '🌯 Wrapped in a thin rice paper',
        ],
      },
      {
        title: '🌏 Nord vs Sud : deux versions distinctes',
        titleEn: '🌏 North vs South: two distinct versions',
        bullets: [
          '🔴 Nem rán (Nord) — farce plus simple, galette de blé, friture légère',
          '🟠 Chả giò (Sud) — galette de riz, farce plus riche, plus croustillant',
          '🌿 Les deux se servent avec des herbes fraîches et du nuoc cham',
        ],
        bulletsEn: [
          '🔴 Nem rán (North) — simpler filling, wheat wrapper, lighter fry',
          '🟠 Chả giò (South) — rice paper wrapper, richer filling, extra crispy',
          '🌿 Both are served with fresh herbs and nuoc cham',
        ],
      },
      {
        title: '🍽️ Comment ça se mange ?',
        titleEn: '🍽️ How do you eat it?',
        text: "La méthode traditionnelle est simple mais fait toute la différence :",
        textEn: "The traditional method is simple but makes all the difference:",
        steps: [
          'Prendre une feuille de salade verte',
          'Y déposer le nem chaud',
          'Ajouter menthe, coriandre et pousses de soja',
          'Rouler et tremper dans le nuoc cham',
          'Manger en une bouchée pour garder le croustillant',
        ],
        stepsEn: [
          'Take a lettuce leaf',
          'Place the hot nem on it',
          'Add mint, coriander and bean sprouts',
          'Roll and dip in nuoc cham',
          'Eat in one bite to keep the crunch',
        ],
        tip: "💡 L'enrouler dans la salade n'est pas obligatoire mais c'est la façon authentique — ça équilibre le gras et apporte fraîcheur.",
        tipEn: "💡 Wrapping it in lettuce isn't mandatory but it's the authentic way — it balances the richness and adds freshness.",
      },
      {
        title: '🔥 Le secret d\'un nem parfait',
        titleEn: '🔥 The secret to a perfect nem',
        bullets: [
          '🌡️ Huile bien chaude (180°C) pour une cuisson rapide et croustillante',
          '💧 La farce doit être bien essorée — l\'humidité ramollit la pâte',
          '🔄 Frire en deux fois : une fois à feu moyen, une fois très chaud pour dorer',
          '🧊 Ne pas couvrir après la friture — la vapeur ramollit le croustillant',
        ],
        bulletsEn: [
          '🌡️ Very hot oil (180°C) for a quick, crispy fry',
          '💧 The filling must be well-drained — moisture softens the wrapper',
          '🔄 Fry in two stages: once on medium heat, once very hot to brown',
          '🧊 Don\'t cover after frying — steam softens the crunch',
        ],
      },
      {
        title: '📍 Où en manger au Vietnam ?',
        titleEn: '📍 Where to eat them in Vietnam?',
        bullets: [
          '🏙️ Hà Nội — les nem rán se trouvent dans tous les marchés du vieux quartier',
          '🌆 Saigon — les chả giò sont incontournables dans les bún thịt nướng',
          '🏖️ Hội An — version aux crevettes locales, particulièrement savoureuse',
        ],
        bulletsEn: [
          '🏙️ Hà Nội — nem rán found in every Old Quarter market',
          '🌆 Saigon — chả giò essential in bún thịt nướng dishes',
          '🏖️ Hội An — local shrimp version, particularly flavorful',
        ],
      },
      {
        title: '💡 Pourquoi tu dois absolument en goûter',
        titleEn: '💡 Why you absolutely must try them',
        bullets: [
          '✔️ Street food par excellence — partout et pas cher',
          '✔️ Texture incomparable quand ils sortent de la friture',
          '✔️ Parfaits en entrée ou en plat complet avec du riz',
          '✔️ L\'une des recettes les plus emblématiques de la cuisine asiatique',
        ],
        bulletsEn: [
          '✔️ Street food at its finest — everywhere and cheap',
          '✔️ Unmatched texture straight out of the fryer',
          '✔️ Perfect as a starter or full meal with rice',
          "✔️ One of the most iconic recipes in Asian cuisine",
        ],
      },
    ],
  },

  'hot-pot': {
    type: 'article',
    title: "Hot Pot : le festin convivial d'Asie",
    titleEn: "Hot Pot: Asia's ultimate communal feast",
    hero: hotPotHero,
    thumbnail: hotPotThumb,
    country: 'Asie',
    description: "Le hot pot — appelé 火锅 (huǒguō) en Chine, 샤브샤브 (shabu-shabu) au Japon ou lẩu au Vietnam — est bien plus qu'un plat. C'est un rituel convivial autour d'un bouillon bouillonnant, où chacun cuit ses ingrédients à son rythme. Une expérience à la fois sociale, gourmande et infiniment personnalisable.",
    descriptionEn: "Hot pot — known as 火锅 (huǒguō) in China, 샤브샤브 (shabu-shabu) in Japan, or lẩu in Vietnam — is far more than a dish. It's a communal ritual around a bubbling broth, where everyone cooks their ingredients at their own pace. A social, indulgent, and endlessly customizable experience.",
    sections: [
      {
        title: '🌏 Un plat, mille versions',
        titleEn: '🌏 One dish, a thousand versions',
        text: "Le hot pot existe sous des formes différentes dans presque tous les pays d'Asie, chacun avec son caractère propre.",
        textEn: "Hot pot exists in different forms across almost every Asian country, each with its own character.",
        bullets: [
          '🇨🇳 Sichuan (Chine) — bouillon rouge infernal aux piments et huile de sésame',
          '🇨🇳 Pékin (Chine) — bouillon clair, viande d\'agneau ultra-fine, sauce sésame',
          '🇯🇵 Shabu-shabu (Japon) — bouillon léger, bœuf marbré wagyu, sauce ponzu',
          '🇯🇵 Sukiyaki (Japon) — sauce sucrée-salée, œuf cru pour tremper',
          '🇰🇷 Jeongol (Corée) — bouillon épicé, légumes et fruits de mer',
          '🇻🇳 Lẩu (Vietnam) — bouillon parfumé aux herbes, crevettes et vermicelles',
          '🇹🇼 Mala (Taïwan) — mix sichuan ultra-épicé, very addictif',
        ],
        bulletsEn: [
          '🇨🇳 Sichuan (China) — fiery red broth with chilies and sesame oil',
          '🇨🇳 Beijing (China) — clear broth, ultra-thin lamb, sesame sauce',
          '🇯🇵 Shabu-shabu (Japan) — light broth, marbled wagyu beef, ponzu sauce',
          '🇯🇵 Sukiyaki (Japan) — sweet-savory sauce, raw egg for dipping',
          '🇰🇷 Jeongol (Korea) — spicy broth, vegetables and seafood',
          '🇻🇳 Lẩu (Vietnam) — herb-infused broth, shrimp and vermicelli',
          '🇹🇼 Mala (Taiwan) — ultra-spicy Sichuan mix, highly addictive',
        ],
      },
      {
        title: '🍲 Qu\'est-ce qu\'il y a dans un hot pot ?',
        titleEn: '🍲 What goes in a hot pot?',
        text: "Un hot pot se compose d'un bouillon de base et d'une table couverte d'ingrédients à cuire — la sélection varie selon les régions mais suit toujours la même logique.",
        textEn: "A hot pot consists of a base broth and a table covered with ingredients to cook — the selection varies by region but always follows the same logic.",
        bullets: [
          '🥩 Viandes : bœuf tranché fin, porc, agneau, poulet',
          '🦐 Fruits de mer : crevettes, calamars, palourdes, boules de poisson',
          '🥬 Légumes : chou napa, épinards, champignons enoki, champignons shiitake',
          '🍜 Féculents : vermicelles, nouilles de riz, tofu, konjac',
          '🧆 Garnitures : boulettes de poisson, tofu frit, coquilles de tofu',
          '🥚 Œufs de caille crus (on les verse dans le bouillon)',
        ],
        bulletsEn: [
          '🥩 Meats: thinly sliced beef, pork, lamb, chicken',
          '🦐 Seafood: shrimp, squid, clams, fish balls',
          '🥬 Vegetables: napa cabbage, spinach, enoki mushrooms, shiitake',
          '🍜 Starches: vermicelli, rice noodles, tofu, konjac',
          '🧆 Extras: fish balls, fried tofu, tofu skin rolls',
          '🥚 Raw quail eggs (drop them into the broth)',
        ],
      },
      {
        title: '🔥 Les sauces : l\'âme du hot pot',
        titleEn: '🔥 The dipping sauces: the soul of hot pot',
        text: "La sauce de trempage est souvent ce qui différencie une expérience correcte d'une expérience mémorable. On la compose soi-même à partir d'ingrédients disposés sur la table.",
        textEn: "The dipping sauce is often what separates a decent experience from a memorable one. You build it yourself from ingredients laid out on the table.",
        bullets: [
          '🥜 Beurre de sésame (base classique pékinoise)',
          '🌶️ Huile de piment + ail haché',
          '🧄 Sauce soja + échalotes + vinaigre',
          '🍋 Ponzu (Japon) — citronné, léger, parfait avec le bœuf',
          '🌿 Coriandre + oignons verts',
          '🥚 Œuf cru (Japon, sukiyaki) — pour adoucir l\'intensité',
        ],
        bulletsEn: [
          '🥜 Sesame paste (classic Beijing base)',
          '🌶️ Chili oil + minced garlic',
          '🧄 Soy sauce + shallots + vinegar',
          '🍋 Ponzu (Japan) — citrusy, light, perfect with beef',
          '🌿 Coriander + spring onions',
          '🥚 Raw egg (Japan, sukiyaki) — to soften the intensity',
        ],
      },
      {
        title: '🍽️ Comment bien manger un hot pot ?',
        titleEn: '🍽️ How to properly eat hot pot?',
        text: "Il n'y a pas vraiment de règle stricte — l'essence du hot pot c'est la liberté. Mais quelques bonnes pratiques :",
        textEn: "There's no strict rule — the essence of hot pot is freedom. But a few good practices:",
        steps: [
          'Commencer par les ingrédients qui cuisent le plus longtemps (racines, champignons durs)',
          'Les viandes fines se cuisent en 10–30 secondes — ne pas trop cuire',
          'Les fruits de mer demandent 1–2 minutes selon la taille',
          'Garder ses baguettes ou un panier individuel pour ne pas mélanger',
          'Vers la fin, ajouter des nouilles dans le bouillon enrichi — c\'est là que ça devient divin',
        ],
        stepsEn: [
          'Start with ingredients that take longest (root vegetables, firm mushrooms)',
          'Thin meats cook in 10–30 seconds — don\'t overcook',
          'Seafood needs 1–2 minutes depending on size',
          'Keep your own chopsticks or a personal basket to avoid mixing',
          'Toward the end, add noodles to the enriched broth — this is where it gets divine',
        ],
        tip: '💡 Si tu as deux compartiments dans la marmite (yin-yang), commence par le bouillon clair — le pimenté devient plus puissant avec le temps.',
        tipEn: '💡 If your pot has two compartments (yin-yang style), start with the clear broth — the spicy one intensifies as it simmers.',
      },
      {
        title: '❤️ Le hot pot, c\'est avant tout un moment',
        titleEn: '❤️ Hot pot is, above all, a moment',
        text: "En Asie, on ne va pas manger un hot pot seul. C'est un repas qui dure 2 à 3 heures, autour duquel on parle, on rit, on refait le monde. Les groupes d'amis se retrouvent après le travail, les familles le partagent lors des grandes occasions. Le hot pot, c'est le repas de la connexion.",
        textEn: "In Asia, you don't eat hot pot alone. It's a meal that lasts 2 to 3 hours, around which you talk, laugh, and put the world to rights. Friend groups meet up after work, families share it on special occasions. Hot pot is the meal of connection.",
      },
      {
        title: '📍 Où en manger un excellent ?',
        titleEn: '📍 Where to eat a great one?',
        bullets: [
          '🇨🇳 Chengdu / Chongqing — le berceau du hot pot sichuan, niveau épices imbattable',
          '🇹🇼 Taipei — chaînes premium comme Mala Hot Pot ou Hai Di Lao',
          '🇯🇵 Tokyo — les restaurants shabu-shabu de Ginza ou Shibuya',
          '🇰🇷 Séoul — dans les ruelles de Hongdae et Myeongdong',
          '🇻🇳 Hanoï / Saigon — le lẩu thaï ou lẩu hải sản en terrasse le soir',
        ],
        bulletsEn: [
          '🇨🇳 Chengdu / Chongqing — the birthplace of Sichuan hot pot, unmatched spice level',
          '🇹🇼 Taipei — premium chains like Mala Hot Pot or Hai Di Lao',
          '🇯🇵 Tokyo — shabu-shabu restaurants in Ginza or Shibuya',
          '🇰🇷 Seoul — in the alleys of Hongdae and Myeongdong',
          '🇻🇳 Hanoi / Saigon — Thai lẩu or seafood lẩu on a terrace in the evening',
        ],
      },
      {
        title: '🎯 Le mot de Tonton Francky',
        titleEn: '🎯 Tonton Francky\'s take',
        text: '"Si tu n\'as jamais mangé un hot pot sichuan à Chengdu avec des locaux, tu n\'as pas encore compris ce que "épicé" veut dire. Et tu reviendras en redemander."',
        textEn: '"If you\'ve never had a Sichuan hot pot in Chengdu with locals, you still don\'t know what "spicy" really means. And you\'ll come back for more."',
      },
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
    photos: [bunChaPhoto01, bunChaPhoto02],
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">
      <p className="text-xl text-stone-600 leading-relaxed">
        {lang === 'fr' ? entry.description : entry.descriptionEn}
      </p>

      <section>
        <h2 className="text-2xl font-serif font-bold mb-6">🥣 {lang === 'fr' ? 'Résultat final' : 'Final result'}</h2>
        <div className={`grid gap-3 ${entry.resultImages.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'}`}>
          {entry.resultImages.map((src, i) => (
            <img key={i} src={src} alt={`result ${i + 1}`} onClick={() => setLightboxIndex(i)} className="w-full h-auto rounded-xl cursor-zoom-in hover:scale-105 transition-transform duration-300" />
          ))}
        </div>
        <AnimatePresence>
          {lightboxIndex !== null && (
            <Lightbox photos={entry.resultImages} initialIndex={lightboxIndex} alt={lang === 'fr' ? entry.title : entry.titleEn} onClose={() => setLightboxIndex(null)} />
          )}
        </AnimatePresence>
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10">
      <p className="text-xl text-stone-600 leading-relaxed">
        {lang === 'fr' ? entry.description : entry.descriptionEn}
      </p>

      {entry.photos && entry.photos.length > 0 && (
        <>
          <div className={`grid gap-3 ${entry.photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {entry.photos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="overflow-hidden rounded-2xl cursor-zoom-in"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={src} alt="" loading="lazy" decoding="async" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {lightboxIndex !== null && (
              <Lightbox photos={entry.photos} initialIndex={lightboxIndex} alt={lang === 'fr' ? entry.title : entry.titleEn} onClose={() => setLightboxIndex(null)} />
            )}
          </AnimatePresence>
        </>
      )}

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
          <Link to="/cuisine" className="self-start inline-flex items-center gap-2 bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white border border-white/30 rounded-full px-4 py-2 text-sm font-medium transition-colors mb-4">
            <ArrowLeft size={15} /> {c.back}
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
