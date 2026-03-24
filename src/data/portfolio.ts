import reactChronometerVideo from '../assets/portfolio/react-chronometer.mov';
import johnTranCodeVideo from '../assets/portfolio/johntran-code.mov';
import pokedexGif from '../assets/portfolio/pokedex.gif';
import codesampleEditorGif from '../assets/portfolio/codesample-editor.gif';

export interface Project {
  slug: string;
  title: string;
  descFr: string;
  descEn: string;
  clientFr: string;
  clientEn: string;
  media: string;
  mediaType: 'video' | 'gif';
  tags: string[];
  year: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'react-chronometer',
    title: 'React Chronometer',
    descFr: 'Un chronomètre interactif construit avec React — démarrage, pause, tour et réinitialisation en temps réel.',
    descEn: 'An interactive chronometer built with React — start, pause, lap and reset in real time.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: reactChronometerVideo,
    mediaType: 'video',
    tags: ['React', 'TypeScript', 'CSS'],
    year: '2024',
  },
  {
    slug: 'johntran-code',
    title: 'John Tran Code',
    descFr: "John Tran est un coach de vie professionnel, spécialisé en santé physique et mentale. Ce site vitrine met en avant son expertise, ses offres d'accompagnement et sa philosophie de vie.",
    descEn: 'John Tran is a professional lifestyle coach, specialized in physical and mental health. This showcase website highlights his expertise, coaching offers and life philosophy.',
    clientFr: 'John Tran — Coach de vie',
    clientEn: 'John Tran — Lifestyle Coach',
    media: johnTranCodeVideo,
    mediaType: 'video',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    year: '2025',
  },
  {
    slug: 'pokedex',
    title: 'Pokédex',
    descFr: 'Application Pokédex construite avec React — recherche, filtres par type et fiche détaillée pour chaque Pokémon via la PokéAPI.',
    descEn: 'Pokédex app built with React — search, type filters and a detail sheet for every Pokémon using the PokéAPI.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: pokedexGif,
    mediaType: 'gif',
    tags: ['React', 'PokéAPI', 'CSS'],
    year: '2023',
    githubUrl: 'https://github.com/fbarrailla/Pokedex',
  },
  {
    slug: 'codesample-editor',
    title: 'CodeSample Editor',
    descFr: 'Un éditeur de code en ligne avec coloration syntaxique, thèmes personnalisables et export de snippets.',
    descEn: 'An online code editor with syntax highlighting, customizable themes and snippet export.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: codesampleEditorGif,
    mediaType: 'gif',
    tags: ['React', 'TypeScript', 'CodeMirror'],
    year: '2024',
    githubUrl: 'https://github.com/fbarrailla/codesample-editor',
  },
];
