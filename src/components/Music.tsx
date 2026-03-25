/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function Music() {
  const { t } = useLanguage();
  const m = t.music;

  return (
    <main className="flex-grow pt-10">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stone-800">{m.heroTitle}</h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">{m.heroDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Playlist */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{ width: '100%', overflow: 'hidden', borderRadius: '12px' }}
              src="https://embed.music.apple.com/fr/playlist/rap/pl.u-gxblgdGIW0xAeK"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
