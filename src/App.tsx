/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, MapPin, Twitch, Menu, X, Code2, UtensilsCrossed, User, Mail, Music, BookOpen, Search, Sun, Moon } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
  </svg>
);

import SplashScreen from './components/SplashScreen';
import SearchModal from './components/SearchModal';
import Home from './components/Home';

const Voyages = lazy(() => import('./components/Voyages'));
const VoyageDetail = lazy(() => import('./components/VoyageDetail'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Replays = lazy(() => import('./components/Replays'));
const Cuisine = lazy(() => import('./components/Cuisine'));
const CuisineDetail = lazy(() => import('./components/CuisineDetail'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const PortfolioDetail = lazy(() => import('./components/PortfolioDetail'));
const MusicPage = lazy(() => import('./components/Music'));
import { LanguageProvider, useLanguage, type Lang } from './i18n';
import { ThemeProvider, useTheme } from './theme';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToEbook = () => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('ebook')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('ebook')?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Close menu on navigation
  React.useEffect(() => { setMenuOpen(false); }, [location]);

  // ⌘K / Ctrl+K to open search
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Console easter egg for curious developers
  React.useEffect(() => {
    console.log(
      '%c 🌏 Tonton Francky ',
      'background: #9A6320; color: #FFF8E7; font-size: 14px; font-weight: bold; padding: 6px 14px; border-radius: 6px;',
      '\n\nFait avec ❤️ par François — passionné de voyages & de tech.',
      '\nStack: React 19 · TypeScript · Vite 6 · Tailwind CSS v4',
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-travel-beige dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
      <ScrollToTop />
      <SplashScreen />

      {/* Promotional Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 w-full z-50 overflow-hidden"
          >
            <a
              href="https://www.instagram.com/p/DWh5i3PE_CE/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-700 text-white text-sm font-semibold px-6 py-2.5 hover:bg-amber-800 transition-colors w-full text-center"
            >
              <span>🎉 {t.promoBanner.main}</span>
              <span className="hidden sm:inline text-amber-200">—</span>
              <span className="hidden sm:inline text-amber-100 font-normal">{t.promoBanner.sub}</span>
              <span className="ml-1 underline underline-offset-2">{t.promoBanner.cta}</span>
            </a>
            <button
              onClick={(e) => { e.stopPropagation(); setBannerVisible(false); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors"
              aria-label="Fermer la bannière"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 px-6 py-4 bg-white/80 dark:bg-stone-950/90 backdrop-blur-md shadow-sm dark:shadow-stone-900/50 transition-all duration-300 ${bannerVisible ? 'top-[42px]' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif text-2xl font-bold tracking-tight hover:text-stone-600 transition-colors"
            >
              Tonton Francky
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/voyages" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/voyages') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <MapPin size={14} />
              <span>{t.nav.travels}</span>
            </Link>
            <Link to="/replays" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/replays') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <Twitch size={14} />
              <span>{t.nav.replays}</span>
            </Link>
            <Link to="/cuisine" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/cuisine') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <UtensilsCrossed size={14} />
              <span>{t.nav.cuisine}</span>
            </Link>
            <Link to="/portfolio" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/portfolio') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <Code2 size={14} />
              <span>{t.nav.portfolio}</span>
            </Link>
            <Link to="/musique" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/musique') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <Music size={14} />
              <span>{t.nav.music}</span>
            </Link>
            <button onClick={scrollToEbook} className="glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 hover:bg-white/60">
              <BookOpen size={14} />
              <span>{t.nav.ebook}</span>
            </button>
            <Link to="/a-propos" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/a-propos') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <User size={14} />
              <span>{t.nav.about}</span>
            </Link>
            <Link to="/contact" className={`glass-card px-3 py-1.5 text-sm transition-colors flex items-center gap-1.5 ${isActive('/contact') ? 'bg-white/70 dark:bg-stone-700/70 shadow-md font-semibold text-amber-800 dark:text-amber-400' : 'hover:bg-white/60 dark:hover:bg-stone-700/60'}`}>
              <Mail size={14} />
              <span>{t.nav.contact}</span>
            </Link>
            <a href="https://instagram.com/tonton__francky" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.tiktok.com/@tonton__francky" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-1.5 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors">
              <TikTokIcon size={16} />
            </a>
            <a href="https://twitch.tv/tonton__francky" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="p-1.5 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors">
              <Twitch size={16} />
            </a>
            <a href="https://github.com/fbarrailla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors">
              <GithubIcon size={16} />
            </a>
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors flex items-center gap-1.5"
              aria-label="Rechercher"
            >
              <Search size={16} />
            </button>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {/* Language picker */}
            <label htmlFor="lang-select" className="sr-only">Langue / Language</label>
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="text-sm font-semibold bg-transparent border-none outline-none cursor-pointer text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </div>

          {/* Mobile: lang switcher + search + burger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1 glass-card px-2 py-1">
              {(['fr', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-3xl text-sm font-semibold uppercase transition-colors ${
                    lang === l ? 'bg-stone-800 text-white' : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 glass-card hover:bg-white/60 dark:hover:bg-stone-700/60 transition-colors"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 glass-card hover:bg-white/60 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 flex flex-col gap-2 pb-2"
            >
              <Link to="/voyages" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <MapPin size={16} /> {t.nav.travels}
              </Link>
              <Link to="/replays" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <Twitch size={16} /> {t.nav.replays}
              </Link>
              <Link to="/cuisine" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <UtensilsCrossed size={16} /> {t.nav.cuisine}
              </Link>
              <Link to="/portfolio" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <Code2 size={16} /> {t.nav.portfolio}
              </Link>
              <Link to="/musique" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <Music size={16} /> {t.nav.music}
              </Link>
              <button onClick={scrollToEbook} className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium w-full text-left">
                <BookOpen size={16} /> {t.nav.ebook}
              </button>
              <Link to="/a-propos" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <User size={16} /> {t.nav.about}
              </Link>
              <Link to="/contact" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <Mail size={16} /> {t.nav.contact}
              </Link>
              <a href="https://instagram.com/tonton__francky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://www.tiktok.com/@tonton__francky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <TikTokIcon size={18} /> TikTok
              </a>
              <a href="https://twitch.tv/tonton__francky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <Twitch size={18} /> Twitch
              </a>
              <a href="https://github.com/fbarrailla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                <GithubIcon size={18} /> GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="flex-grow flex flex-col"
        >
          <Suspense fallback={<div className="flex-grow" />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/voyages" element={<Voyages />} />
              <Route path="/voyages/:ville" element={<VoyageDetail />} />
              <Route path="/replays" element={<Replays />} />
              <Route path="/cuisine" element={<Cuisine />} />
              <Route path="/cuisine/:slug" element={<CuisineDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/musique" element={<MusicPage />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={
                <main className="flex-grow pt-10 flex items-center justify-center px-6">
                  <div className="text-center max-w-sm mx-auto">
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: 'spring', bounce: 0.55, duration: 0.8 }}
                      className="text-7xl mb-6 select-none"
                    >🗺️</motion.div>
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-6xl font-serif font-bold mb-3"
                    >404</motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.4 }}
                      className="text-stone-600 mb-8 text-lg leading-relaxed"
                    >Cette page est en voyage…<br />et n'a pas laissé d'adresse.</motion.p>
                    <motion.a
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/"
                      className="inline-flex items-center gap-2 bg-stone-800 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-stone-700 transition-colors"
                    >Retour à l'accueil</motion.a>
                  </div>
                </main>
              } />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
            <Heart size={16} className="text-red-400 animate-heartbeat" />
            <span className="font-medium">Tonton Francky — {t.footer.tagline}</span>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com/tonton__francky" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@tonton__francky" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2">
              <TikTokIcon size={18} />
              <span>TikTok</span>
            </a>
            <a href="https://twitch.tv/tonton__francky" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2">
              <Twitch size={18} />
              <span>Twitch</span>
            </a>
            <a href="https://github.com/fbarrailla" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2">
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
          </div>
          <div className="flex flex-col items-center gap-1 text-stone-600 dark:text-stone-400 text-sm">
            <p>{t.footer.favicon} <a href="https://www.flaticon.com/authors/photo3idea-studio" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 dark:hover:text-stone-200 transition-colors">photo3idea_studio</a></p>
            <p>{t.footer.splash} <a href="https://flywithpunit.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 dark:hover:text-stone-200 transition-colors">Punit</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}
