import reactChronometerVideo from '../assets/portfolio/react-chronometer.mov';
import johnTranCodeVideo from '../assets/portfolio/johntran-code.mov';

export interface Project {
  slug: string;
  title: string;
  descFr: string;
  descEn: string;
  clientFr: string;
  clientEn: string;
  video: string;
  tags: string[];
  year: string;
}

export const projects: Project[] = [
  {
    slug: 'react-chronometer',
    title: 'React Chronometer',
    descFr: 'Un chronomètre interactif construit avec React — démarrage, pause, tour et réinitialisation en temps réel.',
    descEn: 'An interactive chronometer built with React — start, pause, lap and reset in real time.',
    clientFr: 'Projet personnel',
    clientEn: 'Personal project',
    video: reactChronometerVideo,
    tags: ['React', 'TypeScript', 'CSS'],
    year: '2024',
  },
  {
    slug: 'johntran-code',
    title: 'John Tran Code',
    descFr: 'John Tran est un coach de vie professionnel, spécialisé en santé physique et mentale. Ce site vitrine met en avant son expertise, ses offres d\'accompagnement et sa philosophie de vie.',
    descEn: 'John Tran is a professional lifestyle coach, specialized in physical and mental health. This showcase website highlights his expertise, coaching offers and life philosophy.',
    clientFr: 'John Tran — Coach de vie',
    clientEn: 'John Tran — Lifestyle Coach',
    video: johnTranCodeVideo,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    year: '2025',
  },
];
