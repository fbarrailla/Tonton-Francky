/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import heroBg from '../assets/hero.png';
import heroMe from '../assets/hero-me.png';
import qrCode from '../assets/qr-code.png';
import ebookPdf from '../../public/ebook.pdf';
import ebookAiPdf from '../../public/ebook-ai.pdf';
import ebookVietnamPdf from '../../public/ebook-vietnam.pdf';
import ebookAiCover from '../assets/ebook-ai.png';
import ebookVietnamCover from '../assets/ebook-vietnam.png';
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
  Mail,
  CheckCircle,
  Copy,
  Sparkles,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../i18n';
import EbookPickerModal, { type EbookChoice } from './EbookPickerModal';

// ← Update this number when your follower count changes
const INSTAGRAM_FOLLOWERS = 373;

const CRYPTO_ADDRESS = '0x49089DA6cA4752469ADc1A7BDA8eDf19925a073d';

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

function useSalesCount() {
  const [count, setCount] = React.useState<number | null>(null);
  React.useEffect(() => {
    fetch('https://api.tontonfrancky.com/ebook-sales')
      .then(r => r.json())
      .then(({ count }) => { if (count !== null) setCount(count); })
      .catch(() => {});
  }, []);
  return count;
}

export default function Home() {
  const { t, lang } = useLanguage();
  const h = t.home;
  const salesCount = useSalesCount();
  const { count, ref: counterRef } = useCountUp(INSTAGRAM_FOLLOWERS);
  const [searchParams, setSearchParams] = useSearchParams();
  const ebookOpen = searchParams.has('ebook') && !searchParams.has('thankyou');
  const setEbookOpen = (open: boolean) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (open) next.set('ebook', '');
      else next.delete('ebook');
      return next;
    }, { replace: true });
  };
  const hasThankyou = searchParams.has('thankyou');
  const [paymentOpen, setPaymentOpen] = useState(hasThankyou);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [ebookChoice, setEbookChoice] = useState<EbookChoice>('claude');
  const [previewAIOpen, setPreviewAIOpen] = useState(false);
  const [previewVietnamOpen, setPreviewVietnamOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'duplicate'>('idle');
  const [paypalStep, setPaypalStep] = useState<'options' | 'confirm'>(hasThankyou ? 'confirm' : 'options');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paypalEmailStatus, setPaypalEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(hasThankyou ? 'sent' : 'idle');
  const [cryptoCopied, setCryptoCopied] = useState(false);

  function copyCryptoAddress() {
    navigator.clipboard.writeText(CRYPTO_ADDRESS);
    setCryptoCopied(true);
    setTimeout(() => setCryptoCopied(false), 2000);
  }

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('sending');
    try {
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            subject: 'Nouvel inscrit à la newsletter !',
            message: `Nouvel inscrit à la newsletter ! ${newsletterEmail}`,
            from_name: 'Newsletter',
            from_email: 'hello@tontonfrancky.com',
            email: newsletterEmail,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          'template_oj72mqh',
          {
            email: newsletterEmail,
            userName: 'Tonton Francky',
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
      ]);
      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch {
      setNewsletterStatus('error');
    }
  };

  const PAYPAL_URLS: Record<EbookChoice, string> = {
    claude: 'https://www.paypal.com/ncp/payment/6PA3DPBZBZS8A',
    ai: 'https://www.paypal.com/ncp/payment/JBKRH44BDQS3Q',
    vietnam: 'https://www.paypal.com/ncp/payment/A6LQKRNC6TXHW',
    bundle: 'https://www.paypal.com/ncp/payment/X2MVQVN7NEWPG',
  };

  const handlePickerConfirm = (choice: EbookChoice) => {
    setEbookChoice(choice);
    setPickerOpen(false);
    setPaymentOpen(true);
  };

  const closePayment = () => {
    setPaymentOpen(false);
    setPaypalStep('options');
    setPaypalEmail('');
    setPaypalEmailStatus('idle');
    setSearchParams(prev => { const next = new URLSearchParams(prev); next.delete('thankyou'); return next; }, { replace: true });
  };

  const handlePaypalConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaypalEmailStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        'template_3yov3hs',
        { from_email: paypalEmail, userName: 'Tonton Francky', subject: 'ebook', message: 'Merci pour votre achat. Vous recevrez votre ebook par e-mail, vérifiez vos SPAMs.' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setPaypalEmailStatus('sent');
      setSearchParams(prev => { const next = new URLSearchParams(prev); next.set('thankyou', ''); return next; }, { replace: true });
    } catch {
      setPaypalEmailStatus('error');
    }
  };

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
      <section className="relative w-full min-h-[580px] md:min-h-[660px] lg:min-h-[740px] overflow-hidden bg-[rgb(12_8_4)]">
        {/* Background photo */}
        <img
          src={heroBg}
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Sparkle layer */}
        {([
          { x: 6,  y: 14, size: 16, delay: 0,    dur: 2.5, star: true  },
          { x: 13, y: 68, size: 8,  delay: 0.8,  dur: 3.2, star: false },
          { x: 21, y: 28, size: 6,  delay: 1.5,  dur: 2.8, star: false },
          { x: 29, y: 52, size: 20, delay: 0.3,  dur: 3.5, star: true  },
          { x: 36, y: 9,  size: 10, delay: 1.1,  dur: 2.3, star: false },
          { x: 43, y: 77, size: 12, delay: 0.6,  dur: 3.0, star: true  },
          { x: 49, y: 22, size: 7,  delay: 1.8,  dur: 2.7, star: false },
          { x: 56, y: 58, size: 17, delay: 0.4,  dur: 3.3, star: true  },
          { x: 63, y: 16, size: 9,  delay: 1.3,  dur: 2.6, star: false },
          { x: 69, y: 43, size: 13, delay: 0.9,  dur: 3.1, star: true  },
          { x: 75, y: 72, size: 7,  delay: 2.0,  dur: 2.4, star: false },
          { x: 81, y: 33, size: 18, delay: 0.2,  dur: 3.6, star: true  },
          { x: 87, y: 62, size: 8,  delay: 1.4,  dur: 2.9, star: false },
          { x: 93, y: 19, size: 14, delay: 0.7,  dur: 3.2, star: true  },
          { x: 96, y: 48, size: 6,  delay: 1.6,  dur: 2.5, star: false },
          { x: 16, y: 38, size: 11, delay: 1.2,  dur: 3.0, star: true  },
          { x: 38, y: 63, size: 7,  delay: 0.5,  dur: 2.8, star: false },
          { x: 52, y: 83, size: 15, delay: 1.7,  dur: 3.4, star: true  },
          { x: 71, y: 86, size: 7,  delay: 0.1,  dur: 2.6, star: false },
          { x: 84, y: 80, size: 12, delay: 1.9,  dur: 3.1, star: true  },
          { x: 23, y: 84, size: 8,  delay: 0.35, dur: 2.9, star: false },
          { x: 58, y: 40, size: 5,  delay: 1.0,  dur: 2.3, star: false },
          { x: 77, y: 53, size: 15, delay: 0.85, dur: 3.5, star: true  },
          { x: 44, y: 46, size: 7,  delay: 2.2,  dur: 2.7, star: false },
          { x: 34, y: 20, size: 10, delay: 0.45, dur: 3.3, star: true  },
          { x: 9,  y: 55, size: 9,  delay: 1.65, dur: 2.8, star: false },
          { x: 90, y: 35, size: 11, delay: 0.55, dur: 3.0, star: true  },
          { x: 47, y: 6,  size: 8,  delay: 1.25, dur: 2.5, star: false },
        ] as const).map((s, i) => (
          <span
            key={i}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: `${s.size}px`,
              lineHeight: 1,
              color: s.star ? '#fcd28a' : '#fff9ee',
              animation: `${s.star ? 'sparkle-burst' : 'sparkle-dot'} ${s.dur}s ease-in-out ${s.delay}s infinite`,
              opacity: 0,
              textShadow: s.star ? '0 0 8px #f59e0b, 0 0 16px #f59e0b88' : '0 0 6px #fff',
            }}
          >
            {s.star ? '✦' : '●'}
          </span>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-14 md:pb-16 px-6 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-end md:items-center py-32 justify-between w-full gap-8">

            {/* Left: text */}
            <div className="max-w-xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-5"
              >
                <span className="flex items-center gap-2 bg-amber-400/15 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                  <BookOpen size={13} />
                  {h.ebookTitle}
                  <span className="ml-1 bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-full">-67%</span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4"
              >
                {h.title1}{' '}
                <span className="text-amber-300">{h.title2}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-stone-300 text-base md:text-lg leading-relaxed mb-7 max-w-md"
              >
                {h.ebookDesc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap items-center gap-3"
              >
                {/* Primary shiny CTA */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPickerOpen(true)}
                  className="relative inline-flex items-center gap-2 bg-amber-400 text-amber-950 px-7 py-3.5 rounded-full font-bold text-base shadow-lg overflow-hidden"
                  style={{ boxShadow: '0 0 24px #f59e0b55, 0 4px 16px rgba(0,0,0,0.3)' }}
                >
                  {/* Shimmer sweep */}
                  <span
                    className="absolute inset-0 w-1/3 bg-white/40 blur-sm"
                    style={{ animation: 'shimmer-sweep 2.8s ease-in-out 1.2s infinite' }}
                  />
                  <span className="relative flex items-center gap-2">
                    ✦ {h.ebookBuy}
                    <span className="text-amber-700 font-black">{h.ebookPrice}</span>
                  </span>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setEbookOpen(true)}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-6 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition-colors"
                >
                  <BookOpen size={16} />
                  {h.ebookCta}
                </motion.button>
              </motion.div>
            </div>

            {/* Right: François photo + floating book cover (desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="hidden md:flex flex-shrink-0 items-end absolute bottom-0 right-0"
            >
              {/* Portrait */}
              <div className="relative overflow-hidden">
                <img
                  src={heroMe}
                  alt="François"
                  className="block w-64 lg:w-80 xl:w-96 object-cover object-top"
                />
              </div>

              {/* Book cover floating over the portrait */}
              <motion.div
                className="absolute -bottom-2 -left-12 cursor-pointer animate-float-book"
                style={{ animationDelay: '0.5s' }}
                whileHover={{ scale: 1.07, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setEbookOpen(true)}
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-xl blur-xl opacity-60 bg-gradient-to-br from-amber-400 to-orange-500" />
                  <img
                    src="/ebook.png"
                    alt="E-book cover"
                    className="relative w-28 lg:w-32 rounded-xl shadow-2xl"
                  />
                  <div className="absolute top-0 left-3 right-3 h-px bg-white/50 rounded-full" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.8, duration: 0.6 }, y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 1.8 } }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">{h.aboutTitle}</h2>
            <div className="space-y-5 text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
              <p>{h.aboutP1}</p>
              <p>{h.aboutP2}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 md:pt-20 pb-16 px-6">
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
      <section className="py-20 md:py-28 px-6 bg-white dark:bg-stone-900 overflow-hidden">
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Instagram badge */}
          <div className="inline-flex items-center gap-2 bg-stone-100 dark:bg-stone-800 rounded-full px-4 py-2 mb-8 text-stone-500 dark:text-stone-400 text-sm font-medium">
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

          <p className="text-2xl md:text-3xl font-semibold text-stone-500 dark:text-stone-400 mt-2 tracking-wide">
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
      <section id="ebook" className="py-20 md:py-28 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <BookOpen size={15} />
              {h.ebookTitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
              {lang === 'fr' ? 'Mes e-books' : 'My e-books'}
            </h2>
          </motion.div>

          {/* Ebook cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Claude Code ebook */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-800 dark:to-stone-800 rounded-3xl p-7 border border-amber-100 dark:border-stone-700"
            >
              <div className="flex gap-6 mb-6">
                <motion.div
                  whileHover={{ y: -4, rotate: 1 }}
                  transition={{ duration: 0.25 }}
                  className="cursor-pointer shrink-0"
                  onClick={() => setEbookOpen(true)}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-amber-300 to-orange-400 rounded-xl blur-lg opacity-30" />
                    <img src="/ebook.png" alt="E-book cover" className="relative w-24 rounded-xl shadow-xl" />
                  </div>
                </motion.div>
                <div>
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">{h.ebookTitle}</p>
                  <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 leading-snug mb-2">{h.ebookDesc.split('—')[0].trim()}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-stone-900 dark:text-stone-100">{h.ebookPrice}</span>
                    <span className="text-sm text-stone-400 line-through">{h.ebookOriginalPrice}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">{h.ebookDesc}</p>
              {salesCount !== null && salesCount > 0 && (
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                  <strong className="text-stone-700 dark:text-stone-200">{salesCount}</strong> {lang === 'fr' ? 'achats' : 'purchases'} ✅
                </p>
              )}
              <div className="flex gap-2 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => { setPickerOpen(true); setEbookChoice('claude'); }}
                  className="flex-1 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-sm transition-colors"
                >
                  {h.ebookBuy}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setEbookOpen(true)}
                  className="px-4 py-3 bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full font-bold text-sm hover:bg-stone-100 dark:hover:bg-stone-600 transition-colors border border-stone-200 dark:border-stone-600"
                >
                  <BookOpen size={16} />
                </motion.button>
              </div>
            </motion.div>

            {/* AI ebook */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-stone-800 dark:to-stone-800 rounded-3xl p-7 border border-violet-100 dark:border-stone-700"
            >
              <div className="flex gap-6 mb-6">
                <motion.div
                  whileHover={{ y: -4, rotate: -1 }}
                  transition={{ duration: 0.25 }}
                  className="cursor-pointer shrink-0"
                  onClick={() => setPreviewAIOpen(true)}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-xl blur-lg opacity-30" />
                    <img src={ebookAiCover} alt="AI for Beginners cover" className="relative w-24 rounded-xl shadow-xl" />
                    <div className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                      {lang === 'fr' ? 'Nouveau' : 'New'}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                      🇫🇷 · 🇬🇧
                    </div>
                  </div>
                </motion.div>
                <div>
                  <p className="text-xs font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wider mb-1">{t.ebookAI.badge}</p>
                  <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 leading-snug mb-2">{t.ebookAI.title} {t.ebookAI.titleHighlight}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-stone-900 dark:text-stone-100">{t.ebookAI.originalPrice}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">{t.ebookAI.desc}</p>
              <div className="flex gap-2 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => { setPickerOpen(true); setEbookChoice('ai'); }}
                  className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold text-sm transition-colors"
                >
                  {t.ebookAI.buyNow}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setPreviewAIOpen(true)}
                  className="px-4 py-3 bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full font-bold text-sm hover:bg-stone-100 dark:hover:bg-stone-600 transition-colors border border-stone-200 dark:border-stone-600"
                >
                  <BookOpen size={16} />
                </motion.button>
              </div>
            </motion.div>
            {/* Vietnam Travel Guide */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col rounded-3xl p-7 border border-teal-100 dark:border-stone-700"
            >
              <div className="flex gap-6 mb-6">
                <motion.div
                  whileHover={{ y: -4, rotate: 1 }}
                  transition={{ duration: 0.25 }}
                  className="cursor-pointer shrink-0"
                  onClick={() => setPreviewVietnamOpen(true)}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-xl blur-lg opacity-30" />
                    <img src={ebookVietnamCover} alt="Travel Guide Vietnam cover" className="relative w-24 rounded-xl shadow-xl" />
                  </div>
                </motion.div>
                <div>
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-1">{t.ebookVietnam.badge}</p>
                  <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 leading-snug mb-2">{t.ebookVietnam.title} {t.ebookVietnam.titleHighlight}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-stone-900 dark:text-stone-100">{t.ebookVietnam.originalPrice}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">{t.ebookVietnam.desc}</p>
              <div className="flex gap-2 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => { setPickerOpen(true); setEbookChoice('vietnam'); }}
                  className="flex-1 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold text-sm transition-colors"
                >
                  {t.ebookVietnam.buyNow}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setPreviewVietnamOpen(true)}
                  className="px-4 py-3 bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full font-bold text-sm hover:bg-stone-100 dark:hover:bg-stone-600 transition-colors border border-stone-200 dark:border-stone-600"
                >
                  <BookOpen size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bundle offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-emerald-50 dark:bg-stone-800 rounded-3xl p-7 border-2 border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md">
                <Sparkles size={12} />
                {lang === 'fr' ? 'Meilleure offre' : 'Best deal'}
              </span>
            </div>
            {/* Stacked covers */}
            <div className="relative h-20 w-20 shrink-0">
              <img src={ebookAiCover} alt="" className="absolute right-0 top-1 h-16 w-12 object-cover rounded-lg shadow-md" />
              <img src="/ebook.png" alt="" className="absolute left-0 bottom-0 h-16 w-12 object-cover rounded-lg shadow-md" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                {lang === 'fr' ? 'Pack 2 e-books' : '2 e-books bundle'}
              </p>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-0.5">
                {lang === 'fr' ? 'Les deux e-books réunis' : 'Both e-books together'}
                {' · '}
                <span className="line-through text-stone-400">{lang === 'fr' ? '19,98$' : '$19.98'}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-emerald-700 dark:text-emerald-400">{lang === 'fr' ? '7,99$' : '$7.99'}</span>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => { setPickerOpen(true); setEbookChoice('bundle'); }}
                className="py-3 px-7 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-colors shadow-lg"
              >
                {lang === 'fr' ? 'Acheter le pack' : 'Buy the bundle'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI E-book preview modal */}
      {previewAIOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col" onClick={() => setPreviewAIOpen(false)}>
          <div className="flex justify-end p-4">
            <button onClick={() => setPreviewAIOpen(false)} className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <object data={ebookAiPdf} type="application/pdf" className="w-full h-full rounded-xl">
              <a href={ebookAiPdf} target="_blank" rel="noopener" className="flex items-center justify-center h-full text-white underline">Ouvrir le PDF</a>
            </object>
          </div>
        </div>
      )}

      {/* Vietnam E-book preview modal */}
      {previewVietnamOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col" onClick={() => setPreviewVietnamOpen(false)}>
          <div className="flex justify-end p-4">
            <button onClick={() => setPreviewVietnamOpen(false)} className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <object data={ebookVietnamPdf} type="application/pdf" className="w-full h-full rounded-xl">
              <a href={ebookVietnamPdf} target="_blank" rel="noopener" className="flex items-center justify-center h-full text-white underline">Ouvrir le PDF</a>
            </object>
          </div>
        </div>
      )}

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
            <object data={ebookPdf} type="application/pdf" className="w-full h-full rounded-xl">
              <a href={ebookPdf} target="_blank" rel="noopener" className="flex items-center justify-center h-full text-white underline">Ouvrir le PDF</a>
            </object>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      <EbookPickerModal
        open={pickerOpen}
        defaultChoice={ebookChoice}
        onClose={() => setPickerOpen(false)}
        onConfirm={handlePickerConfirm}
      />

      {paymentOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={closePayment}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full shadow-2xl flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start p-8 pb-6 flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {paypalStep === 'confirm' ? h.paypalConfirmTitle : h.paymentTitle}
                </h2>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
                  {paypalStep === 'confirm' ? h.paypalConfirmDesc : h.paymentSubtitle}
                </p>
              </div>
              <button onClick={closePayment} className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors ml-4">
                <X size={22} />
              </button>
            </div>
            <div className="overflow-y-auto px-8 pb-8 flex-1">

            {paypalStep === 'confirm' ? (
              <div>
                {paypalEmailStatus === 'sent' ? (
                  <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                    <CheckCircle size={22} />
                    {h.paypalConfirmSuccess}
                  </div>
                ) : (
                  <form onSubmit={handlePaypalConfirm} className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={paypalEmail}
                      onChange={e => setPaypalEmail(e.target.value)}
                      placeholder={h.paypalConfirmPlaceholder}
                      className="w-full px-5 py-4 rounded-full border border-stone-200 dark:border-stone-700 outline-none focus:ring-2 focus:ring-amber-400 text-stone-800 dark:text-stone-100 bg-white dark:bg-stone-800"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={paypalEmailStatus === 'sending'}
                      className="w-full py-4 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-colors disabled:opacity-60"
                    >
                      {paypalEmailStatus === 'sending' ? h.paypalConfirmSending : h.paypalConfirmBtn}
                    </motion.button>
                    {paypalEmailStatus === 'error' && (
                      <p className="text-rose-500 text-sm text-center">{h.paypalConfirmError}</p>
                    )}
                  </form>
                )}
              </div>
            ) : (
            <div className="space-y-4">
              {/* PayPal */}
              <a
                href={PAYPAL_URLS[ebookChoice]}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPaypalStep('confirm')}
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

              {/* Crypto */}
              <div className="p-4 border-2 border-stone-200 dark:border-stone-700 rounded-2xl">
                <p className="font-bold text-stone-900 dark:text-stone-100 mb-1">{h.paymentCrypto}</p>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-3">{h.paymentCryptoDesc}</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-2 text-stone-600 dark:text-stone-400 font-mono truncate">
                    {CRYPTO_ADDRESS}
                  </code>
                  <button
                    onClick={copyCryptoAddress}
                    className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors flex-shrink-0"
                  >
                    <Copy size={13} />
                    {cryptoCopied ? h.paymentCopied : h.paymentCopy}
                  </button>
                </div>
              </div>

              {/* QR Code */}
              <div className="p-4 border-2 border-stone-200 dark:border-stone-700 rounded-2xl">
                <p className="font-bold text-stone-900 dark:text-stone-100 mb-1">{h.paymentQr}</p>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-3">{h.paymentQrDesc}</p>
                <img src={qrCode} alt="QR Code HSBC Vietnam" className="w-40 h-40 rounded-xl mx-auto" />
              </div>

              {/* Bank transfer */}
              <div className="p-4 border-2 border-stone-200 dark:border-stone-700 rounded-2xl">
                <p className="font-bold text-stone-900 dark:text-stone-100 mb-1">{h.paymentTransfer}</p>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-3">{h.paymentTransferDesc}</p>
                <div className="space-y-2">
                  {[
                    { label: 'IBAN', value: 'FR76 1330 6001 2200 0435 3399 240' },
                    { label: 'BIC', value: 'AGRIFRPP833' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between bg-stone-50 dark:bg-stone-800 rounded-xl px-3 py-2 gap-2">
                      <div>
                        <span className="text-xs text-stone-400 dark:text-stone-500 font-medium">{label}</span>
                        <p className="font-mono text-sm text-stone-800 dark:text-stone-100 font-semibold">{value}</p>
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
            )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 px-6 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Mail size={16} />
              Newsletter
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{h.newsletterTitle}</h2>
            <p className="text-xl text-stone-500 dark:text-stone-400 mb-10">{h.newsletterDesc}</p>

            {newsletterStatus === 'success' ? (
              <div className="inline-flex items-center gap-3 text-emerald-600 text-lg font-semibold">
                <CheckCircle size={24} />
                {h.newsletterSuccess}
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={e => { setNewsletterEmail(e.target.value); setNewsletterStatus('idle'); }}
                  placeholder={h.newsletterPlaceholder}
                  className="flex-1 px-5 py-4 rounded-full border border-stone-200 dark:border-stone-700 outline-none focus:ring-2 focus:ring-amber-400 text-stone-800 dark:text-stone-100 bg-white dark:bg-stone-800"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={newsletterStatus === 'sending'}
                  className="px-8 py-4 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-colors disabled:opacity-60"
                >
                  {newsletterStatus === 'sending' ? h.newsletterSending : h.newsletterBtn}
                </motion.button>
              </form>
            )}

            {newsletterStatus === 'error' && (
              <p className="mt-4 text-rose-500 text-sm">{h.newsletterError}</p>
            )}
            {newsletterStatus === 'duplicate' && (
              <p className="mt-4 text-amber-600 text-sm">{h.newsletterDuplicate}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-800 dark:bg-stone-700 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full" />
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
