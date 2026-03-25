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
      replays: 'Replays',
      cuisine: 'Cuisine',
      portfolio: 'Portfolio',
      music: 'Musique',
      about: 'À propos',
      contact: 'Contact',
    },
    banner: 'Live Twitch ce dimanche à 12h (FR), venez nombreux et posez moi des questions ! 🎮',
    footer: {
      tagline: 'Voyage, rencontres et bonnes vibes 🌍',
      favicon: 'Favicon par',
      splash: 'Splash screen par',
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
      contactCta: 'Me contacter',
      followersLabel: 'abonnés Instagram',
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
    replays: {
      title: 'Replays',
      subtitle: 'Retrouve ici tous les replays de mes lives Twitch 🎮',
    },
    cuisine: {
      title: 'Cuisine',
      subtitle: 'Mes recettes du monde entier 🍜',
      seeRecipe: 'Voir la recette',
      back: 'Retour aux recettes',
      notFound: 'Recette introuvable',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Une question ? Un projet ? Dis-moi tout !',
      name: 'Votre nom',
      email: 'Votre email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé ! Je te répondrai dès que possible. 🙏',
      error: 'Une erreur est survenue. Réessaie ou contacte-moi directement sur Instagram.',
      required: 'Ce champ est requis',
      invalidEmail: 'Email invalide',
    },
    music: {
      heroTitle: 'Ma Musique 🎵',
      heroDesc: 'Les sons qui rythment mes voyages et mes journées.',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Quelques projets que j\'ai développés avec passion 👨🏻‍💻',
      back: 'Retour au portfolio',
      seeProject: 'Voir le projet',
      about: 'À propos du projet',
      techStack: 'Technologies',
      client: 'Client',
      ctaTitle: 'Tu veux ton propre site web ?',
      ctaBtn: 'Me contacter',
    },
    about: {
      title: 'À propos',
      subtitle: 'Qui se cache derrière Tonton Francky ?',
      description: "Tonton Francky, c'est le site personnel de François B., dédié aux voyages, à la culture, au digital et aux réflexions sur la vie moderne. À travers ses articles, il partage expériences, conseils et découvertes avec une approche accessible et authentique.",
      topics: 'Thèmes explorés',
      topic1: 'Voyages & aventures',
      topic2: 'Culture & rencontres',
      topic3: 'Digital & tech',
      topic4: 'Vie moderne & réflexions',
      ctaTitle: 'Envie d\'en savoir plus ?',
      ctaDesc: 'Retrouve François sur Instagram pour suivre ses aventures en temps réel.',
      ctaBtn: 'Suivre sur Instagram',
    },
  },
  en: {
    nav: {
      travels: 'Travels',
      replays: 'Replays',
      cuisine: 'Food',
      portfolio: 'Portfolio',
      music: 'Music',
      about: 'About',
      contact: 'Contact',
    },
    banner: 'Twitch Live this Sunday at 12pm (FR), come join us and ask me anything! 🎮',
    footer: {
      tagline: 'Travel, friends and good vibes 🌍',
      favicon: 'Favicon by',
      splash: 'Splash screen by',
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
      contactCta: 'Contact me',
      followersLabel: 'Instagram followers',
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
    replays: {
      title: 'Replays',
      subtitle: 'Find all my Twitch live replays here 🎮',
    },
    cuisine: {
      title: 'Food',
      subtitle: 'My recipes from around the world 🍜',
      seeRecipe: 'See recipe',
      back: 'Back to recipes',
      notFound: 'Recipe not found',
    },
    contact: {
      title: 'Contact',
      subtitle: 'A question? A project? Tell me everything!',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent! I\'ll get back to you as soon as possible. 🙏',
      error: 'Something went wrong. Try again or reach me directly on Instagram.',
      required: 'This field is required',
      invalidEmail: 'Invalid email',
    },
    music: {
      heroTitle: 'My Music 🎵',
      heroDesc: 'The sounds that fuel my travels and everyday life.',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'A few projects I built with passion 👨🏻‍💻',
      back: 'Back to portfolio',
      seeProject: 'See project',
      about: 'About the project',
      techStack: 'Tech stack',
      client: 'Client',
      ctaTitle: 'Wanna build your own website?',
      ctaBtn: 'Contact me',
    },
    about: {
      title: 'About',
      subtitle: 'Who is behind Tonton Francky?',
      description: "Tonton Francky is the personal website of François B., dedicated to travel, culture, digital topics, and reflections on modern life. Through his articles, he shares experiences, tips and discoveries with an accessible and authentic approach.",
      topics: 'Topics explored',
      topic1: 'Travel & adventures',
      topic2: 'Culture & encounters',
      topic3: 'Digital & tech',
      topic4: 'Modern life & reflections',
      ctaTitle: 'Want to know more?',
      ctaDesc: 'Follow François on Instagram to keep up with his adventures in real time.',
      ctaBtn: 'Follow on Instagram',
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
