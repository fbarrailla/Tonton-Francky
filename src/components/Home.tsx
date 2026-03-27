/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import heroBg from '../assets/hero.png';
import { motion, useInView } from 'motion/react';
import {
  Instagram,
  MapPin,
  Globe,
  Users,
  Terminal,
  Zap,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

// ← Update this number when your follower count changes
const INSTAGRAM_FOLLOWERS = 178;

function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return { count, ref };
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -6, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } },
};
const iconVariants = {
  visible: { rotate: 0, scale: 1 },
  hover: { rotate: 12, scale: 1.15, transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] } },
};

const InterestCard = ({ icon: Icon, text, delay, color = 'bg-travel-blue text-stone-700' }: { icon: any, text: string, delay: number, color?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    variants={cardVariants}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
  >
    <motion.div
      variants={iconVariants}
      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}
    >
      <Icon size={24} />
    </motion.div>
    <p className="font-medium text-lg">{text}</p>
  </motion.div>
);

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const { count, ref: counterRef } = useCountUp(INSTAGRAM_FOLLOWERS);

  return (
    <main className="flex-grow">
      {/* Hero Banner */}
      <section className="relative w-full h-[520px] md:h-[600px] lg:h-[680px] overflow-hidden bg-[rgb(7_8_25)]">
        {/* img tag (not CSS background) so the browser discovers it during HTML parsing → LCP */}
        <img
          src={heroBg}
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover"
        />
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.5, duration: 0.6 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 1.5 } }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">{h.aboutTitle}</h2>
            <div className="space-y-5 text-xl text-stone-600 leading-relaxed">
              <p>{h.aboutP1}</p>
              <p>{h.aboutP2}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <InterestCard icon={Globe} text={h.interest1} delay={0.1} color="bg-sky-100 text-sky-700" />
            <InterestCard icon={MapPin} text={h.interest2} delay={0.2} color="bg-amber-100 text-amber-700" />
            <InterestCard icon={Users} text={h.interest3} delay={0.3} color="bg-emerald-100 text-emerald-700" />
            <InterestCard icon={Terminal} text={h.interest4} delay={0.4} color="bg-indigo-100 text-indigo-700" />
            <InterestCard icon={Zap} text={h.interest5} delay={0.5} color="bg-orange-100 text-orange-700" />
          </div>
        </div>
      </section>

      {/* Instagram Followers Counter */}
      <section className="py-20 md:py-28 px-6 bg-white overflow-hidden">
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Instagram badge */}
          <div className="inline-flex items-center gap-2 bg-stone-100 rounded-full px-4 py-2 mb-8 text-stone-500 text-sm font-medium">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center">
              <Instagram size={12} className="text-white" />
            </div>
            @tonton__francky
          </div>

          {/* Big number */}
          <div className="relative">
            <span className="text-[9rem] md:text-[13rem] font-black leading-none tabular-nums bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent select-none">
              {count.toLocaleString('fr-FR')}
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 -z-10 scale-75" />
          </div>

          <p className="text-2xl md:text-3xl font-semibold text-stone-500 mt-2 tracking-wide">
            {h.followersLabel}
          </p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://instagram.com/tonton__francky"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-pink-200 transition-shadow"
          >
            <Instagram size={22} />
            {h.ctaBtn}
          </motion.a>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-800 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent" />
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
