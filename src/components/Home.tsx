/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  BookOpen,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';

// ← Update this number when your follower count changes
const INSTAGRAM_FOLLOWERS = 222;

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
  const [ebookOpen, setEbookOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const closeOnEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setEbookOpen(false);
  }, []);

  useEffect(() => {
    if (ebookOpen || paymentOpen) {
      document.addEventListener('keydown', closeOnEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', closeOnEsc);
      document.body.style.overflow = '';
    };
  }, [ebookOpen, paymentOpen, closeOnEsc]);

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

      {/* E-book Section */}
      <section id="ebook" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            {/* Cover */}
            <motion.div
              whileHover={{ y: -8, rotate: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setEbookOpen(true)}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 rounded-2xl blur-xl opacity-30" />
                <img
                  src="/ebook.png"
                  alt="E-book cover"
                  className="relative w-56 md:w-72 rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <BookOpen size={16} />
                {h.ebookTitle}
              </div>
              <p className="text-xl text-stone-600 leading-relaxed mb-6 max-w-md">
                {h.ebookDesc}
              </p>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl font-black text-stone-900">{h.ebookPrice}</span>
                <span className="text-lg text-stone-400 line-through">{h.ebookOriginalPrice}</span>
                <span className="bg-rose-100 text-rose-600 text-sm font-bold px-2 py-1 rounded-full">-67%</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPaymentOpen(true)}
                  className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-700 transition-colors"
                >
                  {h.ebookBuy}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setEbookOpen(true)}
                  className="inline-flex items-center gap-3 bg-stone-100 text-stone-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors"
                >
                  <BookOpen size={20} />
                  {h.ebookCta}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-book Fullscreen Modal */}
      {ebookOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={() => setEbookOpen(false)}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setEbookOpen(false)}
              className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <iframe
              src="/ebook.pdf"
              className="w-full h-full rounded-xl"
              title="E-book"
            />
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {paymentOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setPaymentOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-stone-900">{h.paymentTitle}</h2>
                <p className="text-stone-500 text-sm mt-1">{h.paymentSubtitle}</p>
              </div>
              <button onClick={() => setPaymentOpen(false)} className="text-stone-400 hover:text-stone-700 transition-colors ml-4">
                <X size={22} />
              </button>
            </div>

            <div className="space-y-4">
              {/* PayPal */}
              <a
                href="https://www.paypal.com/ncp/payment/6PA3DPBZBZS8A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-2 border-[#003087] rounded-2xl hover:bg-[#003087]/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#003087] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.813 4.643h-2.19c-.524 0-.968.382-1.05.9L10.4 19.47l-.359 2.28c-.048.302.18.574.485.574h3.41a.641.641 0 0 0 .633-.54l.026-.133.501-3.177.032-.175a.641.641 0 0 1 .633-.54h.399c2.578 0 4.597-1.047 5.188-4.076.247-1.268.12-2.327-.626-3.073z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#003087] group-hover:underline">{h.paymentPaypal}</p>
                  <p className="text-stone-500 text-sm">paypal.com</p>
                </div>
              </a>

              {/* Bank transfer */}
              <div className="p-4 border-2 border-stone-200 rounded-2xl">
                <p className="font-bold text-stone-900 mb-1">{h.paymentTransfer}</p>
                <p className="text-stone-500 text-sm mb-3">{h.paymentTransferDesc}</p>
                <div className="space-y-2">
                  {[
                    { label: 'IBAN', value: 'FR76 1330 6001 2200 0435 3399 240' },
                    { label: 'BIC', value: 'AGRIFRPP833' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between bg-stone-50 rounded-xl px-3 py-2 gap-2">
                      <div>
                        <span className="text-xs text-stone-400 font-medium">{label}</span>
                        <p className="font-mono text-sm text-stone-800 font-semibold">{value}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(value, label)}
                        className="text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors flex-shrink-0"
                      >
                        {copiedField === label ? h.paymentCopied : h.paymentCopy}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
