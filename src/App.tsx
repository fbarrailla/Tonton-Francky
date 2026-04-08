/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, MapPin, Twitch, Menu, X, Code2, UtensilsCrossed, User, Mail, Music, BookOpen, Search, Sun, Moon, Newspaper } from 'lucide-react';

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
import ScrollProgressBar from './components/ScrollProgressBar';
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
const EbookPromo = lazy(() => import('./components/EbookPromo'));
const Blog = lazy(() => import('./components/Blog'));
const BlogDetail = lazy(() => import('./components/BlogDetail'));
import { LanguageProvider, useLanguage, type Lang } from './i18n';
import { ThemeProvider, useTheme } from './theme';
import { usePageMeta } from './usePageMeta';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  usePageMeta(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  // GTM page view on route change
  React.useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

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
      <ScrollProgressBar />
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
      <nav className={`fixed w-full z-40 transition-all duration-300 ${bannerVisible ? 'top-[40px]' : 'top-0'} ${scrolled ? 'bg-[#fefcf8]/97 dark:bg-[#0c0a09]/97 shadow-[0_1px_12px_rgba(120,53,15,0.08)]' : 'bg-[#fefcf8]/88 dark:bg-[#0c0a09]/88'} backdrop-blur-xl border-b border-amber-950/[0.07] dark:border-stone-800/70`}>
        {/* Subtle amber accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-600/30 to-transparent dark:via-amber-500/20" />

        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* Wordmark */}
          <Link to="/" className="group flex flex-col items-start leading-none gap-0">
            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <span className="block text-[0.58rem] uppercase tracking-[0.28em] font-semibold text-amber-700 dark:text-amber-500 mb-0.5 transition-colors group-hover:text-amber-600">
                Tonton
              </span>
              <span className="block font-serif text-[1.3rem] font-bold tracking-tight text-stone-900 dark:text-stone-50 transition-colors group-hover:text-amber-900 dark:group-hover:text-amber-300">
                Francky
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {/* Primary links */}
            {[
              { to: '/voyages', icon: <MapPin size={13} />, label: t.nav.travels },
              { to: '/replays', icon: <Twitch size={13} />, label: t.nav.replays },
              { to: '/cuisine', icon: <UtensilsCrossed size={13} />, label: t.nav.cuisine },
              { to: '/portfolio', icon: <Code2 size={13} />, label: t.nav.portfolio },
              { to: '/musique', icon: <Music size={13} />, label: t.nav.music },
              { to: '/a-propos', icon: <User size={13} />, label: t.nav.about },
              { to: '/contact', icon: <Mail size={13} />, label: t.nav.contact },
              { to: '/blog', icon: <Newspaper size={13} />, label: t.nav.blog },
            ].map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.8rem] font-medium transition-all duration-150 ${
                  isActive(to)
                    ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-400 font-semibold'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/80 dark:hover:bg-stone-800/50'
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}

            <button
              onClick={scrollToEbook}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.8rem] font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/80 dark:hover:bg-stone-800/50 transition-all duration-150"
            >
              <BookOpen size={13} />
              <span>{t.nav.ebook}</span>
            </button>

            {/* Divider */}
            <span className="mx-2 h-5 w-px bg-stone-200 dark:bg-stone-700/80 flex-shrink-0" aria-hidden="true" />

            {/* Social icons */}
            {[
              { href: 'https://instagram.com/tonton__francky', label: 'Instagram', icon: <Instagram size={15} /> },
              { href: 'https://www.tiktok.com/@tonton__francky', label: 'TikTok', icon: <TikTokIcon size={15} /> },
              { href: 'https://twitch.tv/tonton__francky', label: 'Twitch', icon: <Twitch size={15} /> },
              { href: 'https://github.com/fbarrailla', label: 'GitHub', icon: <GithubIcon size={15} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-1.5 rounded-md text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100/80 dark:hover:bg-stone-800/50 transition-all duration-150"
              >
                {icon}
              </a>
            ))}

            {/* Divider */}
            <span className="mx-2 h-5 w-px bg-stone-200 dark:bg-stone-700/80 flex-shrink-0" aria-hidden="true" />

            {/* Utility: search, theme, lang */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Rechercher"
              className="p-1.5 rounded-md text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100/80 dark:hover:bg-stone-800/50 transition-all duration-150"
            >
              <Search size={15} />
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Changer le thème"
              className="p-1.5 rounded-md text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100/80 dark:hover:bg-stone-800/50 transition-all duration-150"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <label htmlFor="lang-select" className="sr-only">Langue / Language</label>
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="ml-1 text-[0.78rem] font-semibold bg-transparent border-none outline-none cursor-pointer text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-0.5 bg-stone-100/80 dark:bg-stone-800/60 rounded-lg px-1 py-1">
              {(['fr', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-0.5 rounded-md text-xs font-bold uppercase transition-all ${
                    lang === l
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-md text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Rechercher"
            >
              <Search size={18} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden border-t border-amber-950/[0.06] dark:border-stone-800 px-4 py-3 flex flex-col gap-0.5"
            >
              {[
                { to: '/voyages', icon: <MapPin size={15} />, label: t.nav.travels },
                { to: '/replays', icon: <Twitch size={15} />, label: t.nav.replays },
                { to: '/cuisine', icon: <UtensilsCrossed size={15} />, label: t.nav.cuisine },
                { to: '/portfolio', icon: <Code2 size={15} />, label: t.nav.portfolio },
                { to: '/musique', icon: <Music size={15} />, label: t.nav.music },
                { to: '/a-propos', icon: <User size={15} />, label: t.nav.about },
                { to: '/contact', icon: <Mail size={15} />, label: t.nav.contact },
                { to: '/blog', icon: <Newspaper size={15} />, label: t.nav.blog },
              ].map(({ to, icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(to)
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {icon} {label}
                </Link>
              ))}
              <button
                onClick={scrollToEbook}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors w-full text-left"
              >
                <BookOpen size={15} /> {t.nav.ebook}
              </button>

              <div className="my-1 h-px bg-stone-100 dark:bg-stone-800" />

              <div className="flex gap-1 px-1">
                {[
                  { href: 'https://instagram.com/tonton__francky', label: 'Instagram', icon: <Instagram size={17} /> },
                  { href: 'https://www.tiktok.com/@tonton__francky', label: 'TikTok', icon: <TikTokIcon size={17} /> },
                  { href: 'https://twitch.tv/tonton__francky', label: 'Twitch', icon: <Twitch size={17} /> },
                  { href: 'https://github.com/fbarrailla', label: 'GitHub', icon: <GithubIcon size={17} /> },
                ].map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="flex-grow flex flex-col"
        >
          <Suspense fallback={<div className="flex-grow min-h-screen" />}>
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
              <Route path="/ebook" element={<EbookPromo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
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
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
            <Heart size={16} className="text-red-400 animate-heartbeat" />
            <span className="font-medium">Tonton Francky — {t.footer.tagline}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
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
          <div className="flex flex-col items-center md:items-end gap-1 text-stone-600 dark:text-stone-400 text-sm">
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
