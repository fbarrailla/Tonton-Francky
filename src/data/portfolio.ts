import reactChronometerVideo from '../assets/portfolio/react-chronometer.mov';
import johnTranCodeVideo from '../assets/portfolio/johntran-code.mov';
import pokedexGif from '../assets/portfolio/pokedex.gif';
import codesampleEditorGif from '../assets/portfolio/codesample-editor.gif';
import vcTestVideo from '../assets/portfolio/vc-test.mov';
import cashbotVideo from '../assets/portfolio/cashbot.mov';
import giphyVideo from '../assets/portfolio/giphy.mov';
import freeboxRemoteGif from '../assets/portfolio/freebox-remote.gif';
import feelityVideo from '../assets/portfolio/test-rn-feelity.mov';
import gptMoodVideo from '../assets/portfolio/gpt-mood.mov';
import todoVideo from '../assets/portfolio/todo.mov';
import pigtokenVideo from '../assets/portfolio/pigtoken.mov';
import asyncVideo from '../assets/portfolio/async.mov';
import ticTacToeGif from '../assets/portfolio/tic-tac-toe.gif';

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
  liveUrl?: string;
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
  {
    slug: 'geek-and-chic',
    title: 'Geek & Chic',
    descFr: "Test technique réalisé pour Vestiaire Collective — application de mode alliant univers geek et chic, développée dans le cadre d'un processus de recrutement.",
    descEn: 'Technical test for Vestiaire Collective — a fashion app blending geek and chic worlds, built as part of a recruitment process.',
    clientFr: 'Vestiaire Collective — Test technique',
    clientEn: 'Vestiaire Collective — Technical test',
    media: vcTestVideo,
    mediaType: 'video',
    tags: ['React', 'TypeScript', 'CSS'],
    year: '2024',
  },
  {
    slug: 'cashbot',
    title: 'Cashbot',
    descFr: 'Bot de trading crypto automatisé — analyse des marchés en temps réel, stratégies configurables et tableau de bord de suivi des performances.',
    descEn: 'Automated crypto trading bot — real-time market analysis, configurable strategies and a performance tracking dashboard.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: cashbotVideo,
    mediaType: 'video',
    tags: ['Node.js', 'TypeScript', 'React', 'Crypto API'],
    year: '2024',
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    descFr: 'Jeu de morpion en React — deux joueurs, détection de victoire, en moins de 50 lignes de code.',
    descEn: 'Tic Tac Toe game in React — two players, win detection, in under 50 lines of code.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: ticTacToeGif,
    mediaType: 'gif',
    tags: ['React', 'JavaScript'],
    year: '2023',
    githubUrl: 'https://github.com/fbarrailla/React-TicTacToe',
    liveUrl: 'https://fbarrailla.github.io/React-TicTacToe',
  },
  {
    slug: 'async-await',
    title: 'Async/Await',
    descFr: 'Présentation interactive sur la programmation asynchrone en JavaScript — explication des Promises, async/await et gestion des erreurs.',
    descEn: 'Interactive presentation on asynchronous JavaScript — covering Promises, async/await and error handling.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: asyncVideo,
    mediaType: 'video',
    tags: ['JavaScript', 'React'],
    year: '2023',
  },
  {
    slug: 'pig-token',
    title: 'Pig Token',
    descFr: 'Meme coin déployé sur la Binance Smart Chain — site vitrine du token avec tokenomics, roadmap et intégration wallet.',
    descEn: 'Meme coin deployed on the Binance Smart Chain — token showcase website with tokenomics, roadmap and wallet integration.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: pigtokenVideo,
    mediaType: 'video',
    tags: ['React', 'Solidity', 'BSC', 'Web3'],
    year: '2023',
  },
  {
    slug: 'todo-list',
    title: 'Todo List',
    descFr: 'Application de gestion de tâches — ajout, suppression, marquage comme terminé et filtrage par statut.',
    descEn: 'Task management app — add, delete, mark as done and filter by status.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: todoVideo,
    mediaType: 'video',
    tags: ['React', 'TypeScript', 'CSS'],
    year: '2023',
  },
  {
    slug: 'gpt-mood',
    title: 'GPT Mood',
    descFr: 'Application d\'analyse d\'humeur propulsée par GPT — saisie de texte libre, détection du sentiment et suggestions personnalisées selon votre état émotionnel.',
    descEn: 'GPT-powered mood analysis app — free text input, sentiment detection and personalised suggestions based on your emotional state.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: gptMoodVideo,
    mediaType: 'video',
    tags: ['React', 'TypeScript', 'OpenAI API'],
    year: '2024',
  },
  {
    slug: 'feelity',
    title: 'Feelity',
    descFr: "Test technique réalisé pour Feelity — application mobile React Native développée dans le cadre d'un processus de recrutement.",
    descEn: 'Technical test for Feelity — a React Native mobile app built as part of a recruitment process.',
    clientFr: 'Feelity — Test technique',
    clientEn: 'Feelity — Technical test',
    media: feelityVideo,
    mediaType: 'video',
    tags: ['React Native', 'TypeScript'],
    year: '2024',
  },
  {
    slug: 'freebox-remote',
    title: 'Freebox Remote',
    descFr: 'Télécommande Android pour Freebox Player développée en React Native — contrôle complet de la navigation, du volume et des fonctions multimédias.',
    descEn: 'Android remote control for Freebox Player built with React Native — full control of navigation, volume and media functions.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: freeboxRemoteGif,
    mediaType: 'gif',
    tags: ['React Native', 'Android', 'TypeScript'],
    year: '2023',
    githubUrl: 'https://github.com/fbarrailla/RNAndroidFreeboxRemote',
  },
  {
    slug: 'giphy-app',
    title: 'Giphy App',
    descFr: 'Application de recherche de GIFs animés intégrée à l\'API Giphy — recherche en temps réel, navigation par tendances et partage facile.',
    descEn: 'Animated GIF search app powered by the Giphy API — real-time search, trending browsing and easy sharing.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    media: giphyVideo,
    mediaType: 'video',
    tags: ['React', 'Giphy API', 'CSS'],
    year: '2024',
  },
];
