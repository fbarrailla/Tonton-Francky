/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import heroBg from '../assets/hero.png';
import { motion } from 'motion/react';
import {
  Instagram,
  MapPin,
  Globe,
  Users,
  Terminal,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

const InterestCard = ({ icon: Icon, text, delay }: { icon: any, text: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
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
      {/* Hero Banner */}
      <section
        className="relative w-full h-[520px] md:h-[600px] lg:h-[680px] overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgb(7 8 25)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-10 text-center px-6">          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-stone-100 transition-colors"
            >
              {h.contactCta} <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">{h.aboutTitle}</h2>
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
