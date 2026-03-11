/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState } from 'react';

export type Lang = 'fr' | 'en';

const translations = {
  fr: {
    nav: {
      travels: 'Voyages',
    },
    footer: {
      tagline: 'Voyage, rencontres et bonnes vibes 🌍',
      favicon: 'Favicon par',
    },
    home: {
      greeting: 'Bonjour le monde ! 👋',
      title1: 'François le',
      title2: 'Français 🥖',
      desc1: "J'aime voyager et me faire des amis partout dans le monde 🤗",
      desc2: 'Geek du dimanche 👨🏻‍💻',
      desc3: 'Coach en devenir 💪',
      desc4: 'Schizo 🥴 mais toujours curieux de la vie',
      cta: 'Viens me dire bonjour',
      aboutTitle: 'Qui est Tonton Francky ?',
      aboutP1: "François est un voyageur français curieux qui aime découvrir de nouvelles cultures et rencontrer des gens.",
      aboutP2: "Entre geek du dimanche et aventurier, il croit beaucoup dans le partage, l'amitié et le développement personnel.",
      interest1: "Français à l'étranger",
      interest2: 'Voyageur et explorateur',
      interest3: "J'aime rencontrer de nouvelles personnes",
      interest4: 'Geek du dimanche',
      interest5: 'Coach en devenir',
      ctaTitle: 'Viens me dire bonjour !',
      ctaDesc: "Si tu aimes voyager, rencontrer des gens et discuter simplement de la vie, viens me rejoindre sur Instagram.",
      ctaBtn: 'Ajouter sur Instagram',
    },
    voyages: {
      heroTitle: 'Mes Voyages 🌍',
      heroDesc: "Découvre les endroits incroyables que j'ai eu la chance de visiter. Chaque destination m'a appris quelque chose de nouveau sur le monde et sur moi-même.",
      mapTitle: 'Carte Interactive',
      mapDesc: 'Clique sur les marqueurs pour découvrir mes aventures !',
      gridTitle: 'Mes Destinations',
      gridDesc: 'Un aperçu de mes aventures autour du monde',
      seePhotos: 'Voir les photos →',
      ctaTitle: 'Envie de voyager ensemble ? ✈️',
      ctaDesc: "Si tu as des recommandations de destinations ou si tu veux partager tes propres aventures, n'hésite pas à me contacter !",
      ctaBtn: 'Parlons voyage ! 🗺️',
    },
    detail: {
      back: 'Retour aux voyages',
      notFound: 'Voyage introuvable',
    },
  },
  en: {
    nav: {
      travels: 'Travels',
    },
    footer: {
      tagline: 'Travel, friends and good vibes 🌍',
      favicon: 'Favicon by',
    },
    home: {
      greeting: 'Hello world! 👋',
      title1: 'François the',
      title2: 'Frenchman 🥖',
      desc1: 'I love traveling and making friends all around the world 🤗',
      desc2: 'Weekend geek 👨🏻‍💻',
      desc3: 'Coach in training 💪',
      desc4: 'Schizo 🥴 but always curious about life',
      cta: 'Come say hello',
      aboutTitle: 'Who is Tonton Francky?',
      aboutP1: "François is a curious French traveler who loves discovering new cultures and meeting people.",
      aboutP2: "Between weekend geek and adventurer, he strongly believes in sharing, friendship, and personal growth.",
      interest1: 'French abroad',
      interest2: 'Traveler and explorer',
      interest3: 'I love meeting new people',
      interest4: 'Weekend geek',
      interest5: 'Coach in training',
      ctaTitle: 'Come say hello!',
      ctaDesc: "If you love traveling, meeting people, and simply talking about life, come join me on Instagram.",
      ctaBtn: 'Add on Instagram',
    },
    voyages: {
      heroTitle: 'My Travels 🌍',
      heroDesc: "Discover the incredible places I've had the chance to visit. Each destination taught me something new about the world and myself.",
      mapTitle: 'Interactive Map',
      mapDesc: 'Click on the markers to discover my adventures!',
      gridTitle: 'My Destinations',
      gridDesc: 'A glimpse of my adventures around the world',
      seePhotos: 'See photos →',
      ctaTitle: 'Want to travel together? ✈️',
      ctaDesc: "If you have destination recommendations or want to share your own adventures, don't hesitate to reach out!",
      ctaBtn: "Let's talk travel! 🗺️",
    },
    detail: {
      back: 'Back to travels',
      notFound: 'Travel not found',
    },
  },
} as const;

type Translations = typeof translations.fr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
