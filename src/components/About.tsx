/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MapPin, Globe, Terminal, Zap } from 'lucide-react';
import { useLanguage } from '../i18n';
import myFace from '../assets/me.png';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const topics = [
    { icon: MapPin, label: a.topic1 },
    { icon: Globe, label: a.topic2 },
    { icon: Terminal, label: a.topic3 },
    { icon: Zap, label: a.topic4 },
  ];

  return (
    <main className="flex-grow pt-10">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-travel-blue to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto mb-6">
              <img src={myFace} alt="François B." className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-4">
              {a.title}
            </h1>
            <p className="text-xl text-stone-600">{a.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-stone-700 leading-relaxed text-center">
              {a.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-center mb-10"
          >
            {a.topics}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topics.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-travel-blue rounded-2xl flex items-center justify-center text-stone-700">
                  <Icon size={22} />
                </div>
                <p className="font-medium text-stone-700">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{a.ctaTitle}</h2>
            <p className="text-xl text-stone-300 mb-8 max-w-xl mx-auto">{a.ctaDesc}</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/tonton__francky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-stone-100 transition-colors"
            >
              <Instagram size={20} />
              {a.ctaBtn}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
