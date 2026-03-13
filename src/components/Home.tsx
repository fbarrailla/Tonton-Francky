/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import myFace from '../assets/me.png';
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
import { useLanguage } from '../i18n';

const EmojiAvatar = () => (
  <div className="w-full h-full bg-white flex items-center justify-center">
    <img src={myFace} alt="Mon avatar" />
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

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
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
                {h.greeting}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              {h.title1} <br />
              <span className="italic text-stone-500 underline decoration-stone-300 underline-offset-8">{h.title2}</span>
            </h1>
            <div className="space-y-4 text-xl text-stone-600 max-w-lg mb-10">
              <p>{h.desc1}</p>
              <p>{h.desc2}</p>
              <p>{h.desc3}</p>
              <p className="italic">{h.desc4}</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              {h.cta} <ChevronRight size={20} />
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
            <h2 className="text-4xl font-serif font-bold mb-8">{h.aboutTitle}</h2>
            <div className="space-y-6 text-xl text-stone-600 leading-relaxed">
              <p>{h.aboutP1}</p>
              <p>{h.aboutP2}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <InterestCard icon={Globe} text={h.interest1} delay={0.1} />
            <InterestCard icon={MapPin} text={h.interest2} delay={0.2} />
            <InterestCard icon={Users} text={h.interest3} delay={0.3} />
            <InterestCard icon={Terminal} text={h.interest4} delay={0.4} />
            <InterestCard icon={Zap} text={h.interest5} delay={0.5} />
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
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">{h.ctaTitle}</h2>
              <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">{h.ctaDesc}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/tonton__francky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-stone-100 transition-colors"
              >
                <Instagram size={24} />
                {h.ctaBtn}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
