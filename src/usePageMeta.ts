import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { destinations as voyages } from './data/voyages';
import { recipes } from './data/cuisine';
import { projects } from './data/portfolio';


const BASE = 'Tonton Francky';

interface Meta { title: string; description: string }

function getMeta(pathname: string, lang: 'fr' | 'en'): Meta {
  const fr = lang === 'fr';

  // Home
  if (pathname === '/') return {
    title: fr ? 'Tonton Francky — François le Français 🥖' : 'Tonton Francky — François the Frenchman 🥖',
    description: fr
      ? "Voyageur, geek du dimanche et créateur de contenu. Découvre mes aventures, mon e-book et mes projets web."
      : "Traveler, weekend geek and content creator. Discover my adventures, e-book and web projects.",
  };

  // Voyages list
  if (pathname === '/voyages') return {
    title: fr ? `Mes Voyages — ${BASE}` : `My Travels — ${BASE}`,
    description: fr
      ? "Découvre les destinations incroyables que j'ai eu la chance de visiter à travers le monde."
      : "Discover the incredible destinations I've had the chance to visit around the world.",
  };

  // Voyage detail
  const voyageMatch = pathname.match(/^\/voyages\/(.+)$/);
  if (voyageMatch) {
    const voyage = voyages.find(v => v.slug === voyageMatch[1]);
    if (voyage) return {
      title: `${voyage.name} — ${BASE}`,
      description: fr
        ? (voyage.description ?? `Découvre mes photos et aventures à ${voyage.name}.`)
        : (voyage.descriptionEn ?? `Discover my photos and adventures in ${voyage.name}.`),
    };
  }

  // Replays
  if (pathname === '/replays') return {
    title: fr ? `Replays Twitch — ${BASE}` : `Twitch Replays — ${BASE}`,
    description: fr
      ? "Retrouve tous les replays de mes lives Twitch. Gaming, tech et bonne humeur au programme !"
      : "Watch all my Twitch live replays. Gaming, tech and good vibes!",
  };

  // Cuisine list
  if (pathname === '/cuisine') return {
    title: fr ? `Cuisine du Monde — ${BASE}` : `World Cuisine — ${BASE}`,
    description: fr
      ? "Mes recettes préférées glanées au fil de mes voyages, du Vietnam à la France en passant par l'Asie."
      : "My favourite recipes gathered across my travels, from Vietnam to France and across Asia.",
  };

  // Cuisine detail
  const cuisineMatch = pathname.match(/^\/cuisine\/(.+)$/);
  if (cuisineMatch) {
    const recipe = recipes.find(r => r.slug === cuisineMatch[1]);
    if (recipe) return {
      title: `${fr ? recipe.title : recipe.titleEn} — ${BASE}`,
      description: fr ? recipe.subtitle : recipe.subtitleEn,
    };
  }

  // Portfolio list
  if (pathname === '/portfolio') return {
    title: fr ? `Portfolio — ${BASE}` : `Portfolio — ${BASE}`,
    description: fr
      ? "Découvre mes projets web : sites vitrines, apps React, outils IA et bien plus encore."
      : "Explore my web projects: showcase sites, React apps, AI tools and much more.",
  };

  // Portfolio detail
  const portfolioMatch = pathname.match(/^\/portfolio\/(.+)$/);
  if (portfolioMatch) {
    const project = projects.find(p => p.slug === portfolioMatch[1]);
    if (project) return {
      title: `${project.title} — ${BASE}`,
      description: fr ? project.descFr : project.descEn,
    };
  }

  // Music
  if (pathname === '/musique') return {
    title: fr ? `Musique — ${BASE}` : `Music — ${BASE}`,
    description: fr
      ? "Les sons qui rythment mes voyages et mes journées. Playlists et découvertes musicales."
      : "The sounds that set the rhythm of my travels and days. Playlists and musical discoveries.",
  };

  // Ebook
  if (pathname === '/ebook') return {
    title: fr ? `E-book : Crée ton site avec Claude Code — ${BASE}` : `E-book: Build your website with Claude Code — ${BASE}`,
    description: fr
      ? "Un guide pratique pour créer ton site web avec Claude Code, du terminal à la mise en ligne. 9,99$."
      : "A practical guide to building your website with Claude Code, from terminal to launch. $9.99.",
  };

  // About
  if (pathname === '/a-propos') return {
    title: fr ? `À propos — ${BASE}` : `About — ${BASE}`,
    description: fr
      ? "Qui est Tonton Francky ? Découvre le parcours de François B., voyageur, développeur et créateur de contenu."
      : "Who is Tonton Francky? Discover the story of François B., traveler, developer and content creator.",
  };

  // Contact
  if (pathname === '/contact') return {
    title: fr ? `Contact — ${BASE}` : `Contact — ${BASE}`,
    description: fr
      ? "Une question, un projet ou juste envie de dire bonjour ? Contacte François directement."
      : "A question, a project, or just want to say hi? Reach out to François directly.",
  };

  // Fallback
  return {
    title: BASE,
    description: fr
      ? "Site personnel de François B. — voyages, tech et bonne humeur."
      : "Personal website of François B. — travel, tech and good vibes.",
  };
}

export function usePageMeta(lang: 'fr' | 'en') {
  const { pathname } = useLocation();
  useParams(); // ensure re-run on param changes

  useEffect(() => {
    const { title, description } = getMeta(pathname, lang);

    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    let twitterDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }, [pathname, lang]);
}
