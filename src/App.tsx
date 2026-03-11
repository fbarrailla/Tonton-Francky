/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Heart, MapPin } from 'lucide-react';
import Home from './components/Home';
import Voyages from './components/Voyages';
import VoyageDetail from './components/VoyageDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-white shadow-sm">
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
            <div className="flex items-center gap-4">
              <Link 
                to="/voyages"
                className="glass-card px-4 py-2 hover:bg-white/60 transition-colors flex items-center gap-2"
              >
                <MapPin size={16} />
                <span>Voyages</span>
              </Link>
              <a 
                href="https://instagram.com/tonton__francky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 glass-card hover:bg-white/60 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voyages" element={<Voyages />} />
          <Route path="/voyages/:ville" element={<VoyageDetail />} />
        </Routes>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-stone-500">
              <Heart size={16} className="text-red-400" />
              <span className="font-medium">Tonton Francky — Voyage, rencontres et bonnes vibes 🌍</span>
            </div>
            <div className="flex gap-8">
              <a 
                href="https://instagram.com/tonton__francky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-2"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
            <p>
              Favicon by <a href="https://www.flaticon.com/authors/photo3idea-studio" target="_blank">photo3idea_studio</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
