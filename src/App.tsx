/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, MapPin, Twitch, Menu, X } from 'lucide-react';
import SplashScreen from './components/SplashScreen';

const Home = lazy(() => import('./components/Home'));
const Voyages = lazy(() => import('./components/Voyages'));
const VoyageDetail = lazy(() => import('./components/VoyageDetail'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Replays = lazy(() => import('./components/Replays'));
const Cuisine = lazy(() => import('./components/Cuisine'));
const CuisineDetail = lazy(() => import('./components/CuisineDetail'));
import { LanguageProvider, useLanguage, type Lang } from './i18n';

function AppContent() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Close menu on navigation
  React.useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <SplashScreen />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm">
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
          <div className="hidden md:flex items-center gap-4">
            <Link to="/voyages" className={`glass-card px-4 py-2 transition-colors flex items-center gap-2 ${isActive('/voyages') ? 'bg-white/70 shadow-md font-semibold' : 'hover:bg-white/60'}`}>
              <MapPin size={16} />
              <span>{t.nav.travels}</span>
            </Link>
            <Link to="/replays" className={`glass-card px-4 py-2 transition-colors flex items-center gap-2 ${isActive('/replays') ? 'bg-white/70 shadow-md font-semibold' : 'hover:bg-white/60'}`}>
              <Twitch size={16} />
              <span>{t.nav.replays}</span>
            </Link>
            <Link to="/cuisine" className={`glass-card px-4 py-2 transition-colors ${isActive('/cuisine') ? 'bg-white/70 shadow-md font-semibold' : 'hover:bg-white/60'}`}>
              {t.nav.cuisine}
            </Link>
            <Link to="/a-propos" className={`glass-card px-4 py-2 transition-colors ${isActive('/a-propos') ? 'bg-white/70 shadow-md font-semibold' : 'hover:bg-white/60'}`}>
              {t.nav.about}
            </Link>
            <Link to="/contact" className={`glass-card px-4 py-2 transition-colors ${isActive('/contact') ? 'bg-white/70 shadow-md font-semibold' : 'hover:bg-white/60'}`}>
              {t.nav.contact}
            </Link>
            <a href="https://instagram.com/tonton__francky" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 glass-card hover:bg-white/60 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitch.tv/tonton__francky" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="p-2 glass-card hover:bg-white/60 transition-colors">
              <Twitch size={20} />
            </a>
            {/* Language picker */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="text-sm font-semibold bg-transparent border-none outline-none cursor-pointer text-stone-700 hover:text-stone-900 transition-colors"
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </div>

          {/* Mobile: lang switcher + burger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1 glass-card px-2 py-1">
              {(['fr', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-3xl text-sm font-semibold uppercase transition-colors ${
                    lang === l ? 'bg-stone-800 text-white' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
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
              <Link to="/voyages" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                <MapPin size={16} /> {t.nav.travels}
              </Link>
              <Link to="/replays" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                <Twitch size={16} /> {t.nav.replays}
              </Link>
              <Link to="/cuisine" className="px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                {t.nav.cuisine}
              </Link>
              <Link to="/a-propos" className="px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                {t.nav.about}
              </Link>
              <Link to="/contact" className="px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                {t.nav.contact}
              </Link>
              <a href="https://instagram.com/tonton__francky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://twitch.tv/tonton__francky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors font-medium">
                <Twitch size={18} /> Twitch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<main className="flex-grow pt-10 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-serif font-bold mb-4">404</h1><p className="text-stone-500 mb-6">Page introuvable</p><a href="/" className="text-stone-700 underline">Retour à l'accueil</a></div></main>} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-stone-500">
            <Heart size={16} className="text-red-400" />
            <span className="font-medium">Tonton Francky — {t.footer.tagline}</span>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com/tonton__francky" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-2">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a href="https://twitch.tv/tonton__francky" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-2">
              <Twitch size={18} />
              <span>Twitch</span>
            </a>
          </div>
          <div className="flex flex-col items-center gap-1 text-stone-400 text-sm">
            <p>{t.footer.favicon} <a href="https://www.flaticon.com/authors/photo3idea-studio" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">photo3idea_studio</a></p>
            <p>{t.footer.splash} <a href="https://flywithpunit.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">Punit</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (    
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}
