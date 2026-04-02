/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import phoThumb from '../assets/pho/thumbnail.png';
import bunChaThumb from '../assets/bun-cha/thumbnail.png';
import nemsThumb from '../assets/nems/thumbnail.png';
import banhMiThumb from '../assets/banh-mi/thumbnail.png';
import hotPotThumb from '../assets/hot-pot/thumbnail.png';

export interface RecipeCard {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  country: string;
  thumbnail: string;
}

export const recipes: RecipeCard[] = [
  {
    slug: 'hot-pot',
    title: "Hot Pot : le festin convivial d'Asie",
    titleEn: "Hot Pot: Asia's ultimate communal feast",
    subtitle: 'Bouillon bouillonnant, viandes fines, légumes et sauces maison 🍲',
    subtitleEn: 'Bubbling broth, thinly sliced meats, vegetables and homemade dipping sauces 🍲',
    country: 'Asie',
    thumbnail: hotPotThumb,
  },
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
