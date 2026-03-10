/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  Globe, 
  Users, 
  Terminal, 
  Zap, 
  ChevronRight,
  Heart
} from 'lucide-react';

const EmojiAvatar = () => (
  <div className="w-full h-full bg-white flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id="skinGradient" cx="50%" cy="40%" r="60%" fx="50%" fy="30%">
          <stop offset="0%" stopColor="#FFE0BD" />
          <stop offset="100%" stopColor="#FFCD94" />
        </radialGradient>
        <radialGradient id="cheekGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F08080" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F08080" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feOffset dx="1" dy="1" />
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadow" />
          <feFlood floodColor="#000" floodOpacity="0.1" />
          <feComposite in2="shadow" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>
      
      {/* Face Shape - 3D effect with gradient */}
      <circle cx="50" cy="52" r="42" fill="url(#skinGradient)" filter="url(#innerShadow)" />
      
      {/* "Bonnes joues" - 3D effect with radial gradients */}
      <circle cx="28" cy="65" r="12" fill="url(#cheekGradient)" />
      <circle cx="72" cy="65" r="12" fill="url(#cheekGradient)" />
      
      {/* Hair - More volume, fuller look */}
      <path 
        d="M 8 45 C 8 -5, 92 -5, 92 45 C 92 25, 80 10, 50 10 C 20 10, 8 25, 8 45 Z" 
        fill="url(#hairGradient)" 
      />
      <path 
        d="M 8 45 C 8 15, 30 5, 50 20 C 70 5, 92 15, 92 45" 
        fill="none" 
        stroke="url(#hairGradient)" 
        strokeWidth="14" 
        strokeLinecap="round" 
      />
      
      {/* Extra hair strands for texture */}
      <path 
        d="M 40 12 Q 50 0 60 12" 
        fill="none" 
        stroke="url(#hairGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      
      {/* Eyes - 3D effect with small highlights */}
      <g filter="url(#innerShadow)">
        <circle cx="35" cy="50" r="5" fill="#4A90E2" />
        <circle cx="35" cy="50" r="2" fill="#1A237E" opacity="0.8" />
        <circle cx="33" cy="48" r="1.5" fill="white" opacity="0.6" />
        
        <circle cx="65" cy="50" r="5" fill="#4A90E2" />
        <circle cx="65" cy="50" r="2" fill="#1A237E" opacity="0.8" />
        <circle cx="63" cy="48" r="1.5" fill="white" opacity="0.6" />
      </g>
      
      {/* Friendly Smile - 3D depth */}
      <path 
        d="M 38 72 Q 50 82 62 72" 
        stroke="#5D4037" 
        strokeWidth="3.5" 
        fill="none" 
        strokeLinecap="round" 
        opacity="0.8"
      />
    </svg>
  </div>
);

const InterestCard = ({ icon: Icon, text, delay }: { icon: any, text: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
  >
    <div className="w-12 h-12 bg-travel-blue rounded-2xl flex items-center justify-center text-stone-700">
      <Icon size={24} />
    </div>
    <p className="font-medium text-lg">{text}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-serif text-2xl font-bold tracking-tight"
          >
            Tonton Francky
          </motion.span>
          <a 
            href="https://instagram.com/tonton__francky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 glass-card hover:bg-white/60 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <EmojiAvatar />
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-travel-blue text-stone-600 text-sm font-semibold">
                  Bonjour le monde ! 👋
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                François le <br />
                <span className="italic text-stone-500 underline decoration-stone-300 underline-offset-8">Français 🥖</span>
              </h1>
              <div className="space-y-4 text-xl text-stone-600 max-w-lg mb-10">
                <p>J'aime voyager et me faire des amis partout dans le monde 🤗</p>
                <p>Geek du dimanche 👨🏻‍💻</p>
                <p>Coach en devenir 💪</p>
                <p className="italic">Schizo 🥴 mais toujours curieux de la vie</p>
              </div>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Viens me dire bonjour <ChevronRight size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000" 
                  alt="Traveler looking at mountains" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-travel-blue rounded-full -z-10 blur-2xl opacity-60" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-stone-200 rounded-full -z-10 blur-3xl opacity-40" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 bg-white/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold mb-8">Qui est Tonton Francky ?</h2>
              <div className="space-y-6 text-xl text-stone-600 leading-relaxed">
                <p>
                  François est un voyageur français curieux qui aime découvrir de nouvelles cultures et rencontrer des gens.
                </p>
                <p>
                  Entre geek du dimanche et aventurier, il croit beaucoup dans le partage, l’amitié et le développement personnel.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <InterestCard icon={Globe} text="Français à l’étranger" delay={0.1} />
              <InterestCard icon={MapPin} text="Voyageur et explorateur" delay={0.2} />
              <InterestCard icon={Users} text="J’aime rencontrer de nouvelles personnes" delay={0.3} />
              <InterestCard icon={Terminal} text="Geek du dimanche" delay={0.4} />
              <InterestCard icon={Zap} text="Coach en devenir" delay={0.5} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-stone-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Viens me dire bonjour !</h2>
                <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
                  Si tu aimes voyager, rencontrer des gens et discuter simplement de la vie, viens me rejoindre sur Instagram.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://instagram.com/tonton__francky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-stone-100 transition-colors"
                >
                  <Instagram size={24} />
                  Ajouter sur Instagram
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

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
        </div>
      </footer>
    </div>
  );
}
