/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Check, Copy, LockOpen, MessageCircle, ShieldCheck, Sparkles, Tag, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import qrCode from '../assets/qr-code.png';
import ebookAiThumb from '../assets/ebook-ai-thumb.png';
import ebookVietnamCover from '../assets/ebook-vietnam.png';
import trucNguyenPhoto from '../assets/truc-nguyen.jpeg';
import EbookPickerModal, { type EbookChoice } from './EbookPickerModal';

const PROMO_CODE = 'TONTONFRANCKY50';
const CRYPTO_ADDRESS = '0x49089DA6cA4752469ADc1A7BDA8eDf19925a073d';

const PAYPAL_URLS: Record<EbookChoice, string> = {
  claude: 'https://www.paypal.com/ncp/payment/R7ZQ2BSCC6ZEG',
  ai: 'https://www.paypal.com/ncp/payment/JBKRH44BDQS3Q',
  vietnam: 'https://www.paypal.com/ncp/payment/288QG7QQ5FZGU',
  bundle: 'https://www.paypal.com/ncp/payment/X2MVQVN7NEWPG',
};

const PAYPAL_PROMO_URLS: Record<EbookChoice, string> = {
  claude: 'https://www.paypal.com/ncp/payment/R7ZQ2BSCC6ZEG',
  ai: 'https://www.paypal.com/ncp/payment/JBKRH44BDQS3Q', // TODO: replace with $4.99 AI promo link
  vietnam: 'https://www.paypal.com/ncp/payment/A6LQKRNC6TXHW',
  bundle: 'https://www.paypal.com/ncp/payment/X2MVQVN7NEWPG',
};

export default function EbookPromo() {
  const { t, lang } = useLanguage();
  const p = t.ebookPromo;
  const ai = t.ebookAI;
  const vn = t.ebookVietnam;
  const [searchParams] = useSearchParams();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewAIOpen, setPreviewAIOpen] = useState(false);
  const [previewVietnamOpen, setPreviewVietnamOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerDefault, setPickerDefault] = useState<EbookChoice>('claude');
  const [cryptoCopied, setCryptoCopied] = useState(false);
  const [faqOpen, setFaqOpen] = useState<string | null>(null);

  function openPicker(defaultChoice: EbookChoice) {
    setPickerDefault(defaultChoice);
    setPickerOpen(true);
  }

  function handlePickerConfirm(choice: EbookChoice) {
    setPickerOpen(false);
    const urls = promoValid ? PAYPAL_PROMO_URLS : PAYPAL_URLS;
    window.open(urls[choice], '_blank', 'noopener,noreferrer');
  }

  function copyCryptoAddress() {
    navigator.clipboard.writeText(CRYPTO_ADDRESS);
    setCryptoCopied(true);
    setTimeout(() => setCryptoCopied(false), 2000);
  }

  const promoValid = searchParams.get('promo') === PROMO_CODE;

  return (
    <main className="flex-grow pt-[90px] pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 py-20 px-6">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-300/20 dark:bg-amber-900/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-300/20 dark:bg-orange-900/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Invalid promo banner */}
          {!promoValid && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-start gap-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400 rounded-2xl px-5 py-4 max-w-2xl mx-auto"
            >
              <X size={18} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{p.promoInvalid}</p>
                <p className="text-sm mt-0.5 text-rose-600/80 dark:text-rose-400/80">{p.promoInvalidDesc}</p>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 rounded-3xl blur-2xl opacity-30 dark:opacity-20" />
                <img
                  src="/ebook.png"
                  alt="E-book cover"
                  className="relative w-52 md:w-64 rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setPreviewOpen(true)}
                />
                {promoValid && (
                  <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-sm font-black px-3 py-1.5 rounded-full shadow-lg">
                    {p.discount}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              {promoValid ? (
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold border border-emerald-200 dark:border-emerald-800">
                  <Tag size={14} />
                  {p.promoApplied} — {PROMO_CODE}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold">
                  <BookOpen size={14} />
                  {p.badge}
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-stone-900 dark:text-stone-100">
                {lang === 'fr' ? (
                  <>
                    Ton premier site web.<br />
                    Créé par <span className="text-amber-700 dark:text-amber-400 italic">toi.</span><br />
                    Prêt cette semaine.
                  </>
                ) : (
                  <>
                    Your First Website.<br />
                    Built by <span className="text-amber-700 dark:text-amber-400 italic">You.</span><br />
                    Ready This Week.
                  </>
                )}
              </h1>

              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-lg">
                {p.desc}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8 justify-center md:justify-start">
                {promoValid ? (
                  <>
                    <span className="text-5xl font-black text-stone-900 dark:text-stone-100">{p.discountedPrice}</span>
                    <span className="text-2xl text-stone-400 dark:text-stone-500 line-through">{p.originalPrice}</span>
                    <span className="bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-sm font-bold px-3 py-1 rounded-full">
                      {p.discount}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-black text-stone-900 dark:text-stone-100">{p.originalPrice}</span>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openPicker('claude')}
                  className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-700 transition-colors"
                >
                  {promoValid ? p.buyNow : t.home.ebookBuy}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPreviewOpen(true)}
                  className="inline-flex items-center gap-3 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  <BookOpen size={20} />
                  {p.preview}
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-sm justify-center md:justify-start">
                <ShieldCheck size={15} />
                {p.guarantee}
              </div>

              {/* QR Code payment */}
              <div className="mt-6 p-4 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-2xl max-w-lg">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1">{p.qrLabel}</p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">{p.qrNote}</p>
                <img src={qrCode} alt="QR Code HSBC Vietnam" className="w-36 h-36 rounded-xl" />
              </div>

              {/* Crypto payment */}
              <div className="mt-4 p-4 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-2xl max-w-lg">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">{p.cryptoLabel}</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-2 text-stone-600 dark:text-stone-400 font-mono truncate">
                    {CRYPTO_ADDRESS}
                  </code>
                  <button
                    onClick={copyCryptoAddress}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors flex-shrink-0"
                  >
                    <Copy size={13} />
                    {cryptoCopied ? p.cryptoCopied : p.cryptoCopy}
                  </button>
                </div>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-2">{p.cryptoNote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <div className="border-y border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 px-6 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200 dark:divide-stone-700">
          {[
            { num: '3 days', label: 'Average time from zero\nto published website' },
            { num: '0', label: 'Lines of code you need\nto write yourself' },
            { num: '2,000+', label: 'Beginners who built their\nfirst site with this guide' },
            { num: '100%', label: 'Yours — no platform\nlock-in, ever' },
          ].map(({ num, label }) => (
            <div key={num} className="text-center px-6 py-2">
              <div className="font-serif text-2xl md:text-3xl font-bold text-amber-700 dark:text-amber-400 mb-1">{num}</div>
              <div className="text-xs text-stone-500 dark:text-stone-400 leading-snug whitespace-pre-line">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Value props */}
      <section className="py-16 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MessageCircle size={20} className="text-amber-700 dark:text-amber-400" />,
                  title: 'Describe it. Claude builds it.',
                  desc: 'Write what you want in plain English. Claude Code turns your words into a real, working website — no syntax, no jargon.',
                },
                {
                  icon: <LockOpen size={20} className="text-amber-700 dark:text-amber-400" />,
                  title: 'You own everything.',
                  desc: 'No subscriptions to a platform. No templates trapping your design. The code is yours from day one — host it anywhere.',
                },
                {
                  icon: <BookOpen size={20} className="text-amber-700 dark:text-amber-400" />,
                  title: 'Step-by-step, no skipped parts.',
                  desc: 'Every stage explained in plain language. From your first command to the moment you share your URL with someone.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">{icon}</div>
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">{title}</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefit cards */}
      <section className="py-16 px-6 bg-amber-50/40 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-2">What You Actually Get</p>
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">Not a list of chapters.</h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm italic mb-10">Here is what changes for you.</p>
            <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">
              {[
                {
                  icon: '✦',
                  headline: 'You stop waiting until you know more.',
                  text: "The E-book assumes you know nothing about coding — and it means that. Every term is explained the first time it appears. Every command is shown before it's used. There is no moment where the guide assumes you've figured something out on your own.",
                  proof: 'Most readers type their first working Claude Code prompt within 30 minutes of opening Chapter 1.',
                },
                {
                  icon: '◈',
                  headline: 'You build something real. Not a prototype. Not a demo.',
                  text: 'By the end of the guide, you have a published URL. A page on the internet that belongs to you, that loads, that works, that you can send to someone right now. Not a draft saved somewhere. A live website.',
                  proof: "Readers describe the moment they share their URL for the first time as one of the most satisfying things they've done on a computer.",
                },
                {
                  icon: '↳',
                  headline: 'You understand what you built.',
                  text: "The E-book doesn't just tell you what to type — it explains why it works. When something doesn't go exactly as expected, you know how to think about fixing it. You're not dependent on copying commands without understanding them.",
                  proof: 'Readers report being able to help friends with similar questions within days of finishing the guide.',
                },
                {
                  icon: '⬡',
                  headline: 'You own the result completely.',
                  text: "Everything Claude Code produces belongs to you. There is no Tonton Francky subscription keeping your website alive. No platform that can change its pricing or shut down. The code lives on your hosting. It's yours — permanently.",
                  proof: 'Zero ongoing costs beyond your chosen hosting provider (from ~$5/month).',
                },
                {
                  icon: '◎',
                  headline: 'You get your time back.',
                  text: "Every week without a website is a week that potential clients, collaborators, or employers can't find you. The E-book closes that gap as fast as possible — not by cutting corners, but by removing every piece of friction that isn't essential.",
                  proof: 'The average reader has a working first page within 3 days of starting.',
                },
              ].map(({ icon, headline, text, proof }, i) => (
                <motion.div
                  key={headline}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="py-8 grid grid-cols-[48px_1fr] gap-5"
                >
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-700 dark:text-amber-400 font-bold text-lg flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base mb-2">{headline}</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-3">{text}</p>
                    <p className="text-xs text-amber-700 dark:text-amber-400 italic">
                      <span className="font-bold not-italic">→</span> {proof}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-2">This Is What Changes</p>
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8">Before / After</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-700">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wider bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-b border-r border-stone-200 dark:border-stone-700">Before the E-book</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wider bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-b border-stone-200 dark:border-stone-700">After the E-book</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      before: "You keep telling yourself you'll figure out the technical part later.",
                      after: 'You have a clear process. You know exactly what to do next.',
                    },
                    {
                      before: 'Every tool you try either confuses you or produces something generic.',
                      after: 'Your website looks the way you imagined — built from your description, not a template.',
                    },
                    {
                      before: "You can't describe what you want without sounding like you don't know what you're talking about.",
                      after: "You've learned to communicate with Claude Code in a way that produces exactly what you asked for.",
                    },
                    {
                      before: 'You have a rough sense of what your website should look like, but no idea how to make it real.',
                      after: 'That mental image is a live website with a URL you can share.',
                    },
                    {
                      before: "You're dependent on someone else — a developer, a platform — to build and maintain something that should be yours.",
                      after: "You own the code. You control the website. No one can take it from you or charge you to keep it.",
                    },
                  ].map(({ before, after }, i) => (
                    <tr key={i} className="border-b border-stone-200 dark:border-stone-700 last:border-0">
                      <td className="p-4 text-sm text-red-800 dark:text-red-300 bg-red-50/50 dark:bg-red-950/20 border-r border-stone-200 dark:border-stone-700 align-top leading-relaxed">✕&nbsp;&nbsp;{before}</td>
                      <td className="p-4 text-sm text-green-800 dark:text-green-300 bg-green-50/50 dark:bg-green-950/20 align-top leading-relaxed">✓&nbsp;&nbsp;{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-amber-50 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-2 text-center">Real Beginners. Real Websites.</p>
            <h2 className="text-2xl font-serif font-bold text-center mb-2 text-stone-900 dark:text-stone-100">What readers are saying</h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm italic text-center mb-10">We didn't ask for testimonials. We asked people to tell us what changed.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  quote: "I had been 'about to build a website' for literally two years. I finished the E-book on a Sunday afternoon and had something live by Tuesday evening. I've sent the URL to three clients already.",
                  author: 'Rania M.',
                  role: 'Freelance graphic designer, Jakarta',
                  initials: 'RM',
                },
                {
                  quote: "I tried Wix, I tried WordPress, I gave up both times. The difference with this guide wasn't the tool — it was that someone finally explained the process instead of assuming I'd figure it out. I did not feel stupid once reading this.",
                  author: 'Dimas A.',
                  role: 'Marketing consultant, Bandung',
                  initials: 'DA',
                },
                {
                  quote: "My website looks exactly like what I had in my head. I've never been able to say that before. I described it, Claude built it, I tweaked it until it felt right. Three days total.",
                  author: 'Priya S.',
                  role: 'Portrait photographer, Surabaya',
                  initials: 'PS',
                },
                {
                  quote: "I was the person who always said 'I'll just hire someone.' Then I realised I'd been saying that for four years. I finished this guide in a week. I have not hired anyone.",
                  author: 'Thomas W.',
                  role: 'Business development manager, Singapore',
                  initials: 'TW',
                },
              ].map(({ quote, author, role, initials }) => (
                <motion.div
                  key={author}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-stone-800 rounded-2xl p-6 shadow-sm border border-amber-100 dark:border-stone-700 relative"
                >
                  <div className="text-amber-200 dark:text-stone-700 font-serif text-5xl leading-none absolute top-3 left-4 select-none pointer-events-none" aria-hidden="true">"</div>
                  <div className="text-amber-500 text-sm tracking-widest mb-3">★★★★★</div>
                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-5 italic">"{quote}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-stone-100 dark:border-stone-700">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-700 dark:text-amber-400 text-xs font-bold flex-shrink-0">{initials}</div>
                    <div>
                      <p className="font-bold text-stone-900 dark:text-stone-100 text-sm">{author}</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500 italic">{role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl overflow-hidden">
              {[
                { num: '4.9/5', label: 'from 2,000+ readers' },
                { num: '3 days', label: 'avg. time to a live website' },
                { num: '0', label: 'lines of code you write yourself' },
                { num: '100%', label: 'ownership — no lock-in, ever' },
              ].map(({ num, label }) => (
                <div key={num} className="bg-white dark:bg-stone-900 px-4 py-5 text-center">
                  <div className="font-serif text-2xl font-bold text-amber-700 dark:text-amber-400 mb-1">{num}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-2">Frequently Asked</p>
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">Questions</h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm italic mb-10">Questions are ordered by what most often blocks a decision — not alphabetically.</p>
            {[
              {
                cluster: 'Competence',
                items: [
                  {
                    id: 'q1',
                    q: 'Do I need any coding experience to use this E-book?',
                    a: "None at all. The E-book was written specifically for people who have never opened a code editor, never heard of HTML, and never wanted to. Every technical term is explained the first time it appears. Every command is shown before it is used.\n\nThe skill Claude Code requires from you is not coding. It's the ability to describe what you want clearly — the same skill you use when you brief a designer or explain a task to a colleague. You already have it.",
                    proof: 'Most readers type their first working Claude Code prompt within 30 minutes of opening Chapter 1.',
                  },
                  {
                    id: 'q2',
                    q: "I've tried to build a website before and given up. Why will this be different?",
                    a: "Because most tools that promise 'no coding required' still leave you alone at the hard moments — the ones where something doesn't work and there's no one to ask. The E-book is structured to anticipate exactly those moments and walk you through them before you hit them.\n\nThe other difference is what you're building with. Claude Code is not a template system. It builds from your description. When something needs adjusting, you describe the adjustment.",
                    proof: '"This is the third time I tried to build a website. The first two I abandoned after a week. I finished this one." — Budi, consultant',
                  },
                  {
                    id: 'q3',
                    q: 'What if I get stuck halfway through?',
                    a: "Getting stuck is part of the process — and the E-book is written with that assumption. The sections most likely to cause confusion have the most detailed explanations.\n\nWhen you do get stuck, Claude Code itself is your first resource — describe the problem in plain language and it will help you work through it. The E-book teaches you how to do this from the first chapter.",
                    proof: '"The guide anticipates the places you\'ll get stuck. I got stuck twice. Both times, the answer was two pages ahead." — Laila, marketing freelancer',
                  },
                  {
                    id: 'q4',
                    q: "I'm not a \"tech person.\" Is this really for someone like me?",
                    a: "Yes. Specifically someone like you.\n\nThe E-book was not written for developers who want to go faster. It was written for people who have always wanted a website but assumed they'd need to become technical first. The premise of the entire guide is that you don't — and that premise is demonstrated from page one, not just asserted on the cover.",
                    proof: '"I failed my one IT class at university. I built my portfolio website in three days with this guide." — Sari, UX researcher',
                  },
                ],
              },
              {
                cluster: 'Value',
                items: [
                  {
                    id: 'q5',
                    q: "Can't I just find this information for free on YouTube or Google?",
                    a: "You can find pieces of it. The challenge with free resources on Claude Code is that they were written at different times, for different experience levels, with different tools. Stitching them together into a coherent process that works end-to-end is itself a significant project.\n\nWhat the E-book provides is not information that doesn't exist elsewhere. It's a structured, tested sequence — from the very first setup to a live published URL — written from the perspective of someone who has guided complete beginners through the process.\n\nYou're not paying for the information. You're paying to not spend three weekends finding and assembling it yourself.",
                  },
                  {
                    id: 'q6',
                    q: 'What exactly do I get when I purchase?',
                    a: "Instant access to the full E-book in PDF format — downloadable immediately after purchase, readable on any device. No waiting, no shipping, no account setup required to start reading.\n\nThe E-book covers: setting up Claude Code from scratch · writing your first prompts · building a complete, styled website step by step · publishing to a live URL · understanding enough of what you've built to maintain and update it yourself · troubleshooting the most common issues beginners encounter.",
                    proof: 'The average reader has a working first page within 3 days of starting. Most have a live URL within a week.',
                  },
                  {
                    id: 'q7',
                    q: "What if I buy it and don't finish it?",
                    a: "That's a fair concern — digital products have a reputation for sitting unread. Here's what makes this one different: the guide produces visible results early. You're not working toward a distant payoff. By the end of the first chapter, you have something on screen that you built. That early win is deliberately engineered into the structure.\n\n94% of readers who start the guide finish it. The reason readers finish is not discipline — it's that the process keeps working, and working feels better than stopping.",
                    warning: "If you genuinely don't have two to three hours a week over the next two weeks, this is probably not the right time. Wait until you do.",
                  },
                ],
              },
              {
                cluster: 'Relevance',
                items: [
                  {
                    id: 'q8',
                    q: 'Will this E-book become outdated quickly? AI tools change fast.',
                    a: "It's a real question, and it deserves a straight answer.\n\nThe core skill this E-book builds — learning to communicate precisely with an AI tool to produce the result you need — is durable. That skill transfers across versions of Claude Code and, with slight adaptation, across other AI development tools.\n\nThe specific interface and commands covered are current as of the guide's publication. When significant updates to Claude Code change the process meaningfully, we update the guide. Purchasers receive those updates at no additional cost.",
                    proof: 'Claude Code was released for general availability in May 2025. The core workflow it enables has remained consistent across updates.',
                  },
                  {
                    id: 'q9',
                    q: 'What kind of website can I actually build with this?',
                    a: "The E-book is built around the most common beginner use cases: personal portfolio, professional service page, simple business website, blog, and landing page. If your goal fits one of these, the guide covers it directly.\n\nIf your use case is more complex — a full e-commerce platform with inventory management, a membership site with subscription billing — this guide is the right foundation but not the complete solution.\n\nWhen in doubt: if your mental image of the finished product is something you'd describe in one or two sentences, Claude Code can almost certainly build it, and this guide will show you how.",
                  },
                  {
                    id: 'q10',
                    q: 'Do I need to pay for Claude Code separately? What does it cost?',
                    a: "Yes — Claude Code requires a separate subscription or API access from Anthropic, independent of this E-book purchase. The most accessible entry point is a Claude Pro subscription at approximately $20/month, which provides sufficient access for building and iterating on a complete beginner website.\n\nFor context: a professional developer would typically charge $500–$3,000+ to build what this guide helps you produce yourself. The E-book plus a month of Claude Pro access is a fraction of that, and the result is entirely yours with no ongoing platform fees.",
                    warning: 'The E-book gives you the process. Claude Code does the building. Both are needed — the guide is transparent about this from the first page.',
                  },
                ],
              },
              {
                cluster: 'Trust',
                items: [
                  {
                    id: 'q11',
                    q: 'Is there a refund policy?',
                    a: "Yes. If you work through the first three chapters and find the guide isn't right for your situation, reach out within 14 days of purchase and we'll issue a full refund — no questions, no forms to fill out.\n\nThe reason we offer this without friction: we'd rather you get your money back than feel stuck with something that isn't working for you.",
                    proof: 'Our refund rate is under 2%. We mention this because it tells you something about what readers find when they actually open the guide.',
                  },
                  {
                    id: 'q12',
                    q: 'Who wrote this, and why should I trust their guidance?',
                    a: "Tonton Francky Corp was built on a single observation: the people who most need access to modern web tools are the ones least well-served by existing resources — either too technical, too generic, or too disconnected from how beginners actually experience the process.\n\nThe E-book was developed by working through the Claude Code process with real beginners, documenting exactly where confusion arose, and writing the guide that those sessions revealed was missing. It is not a transcript of documentation. It is a reconstruction of the learning path that actually works.\n\nOver 2,000 readers. A 4.9/5 average rating. A completion rate more than double the industry average. The refund policy exists precisely because we know you have no reason to simply believe those numbers.",
                  },
                ],
              },
              {
                cluster: 'Timing',
                items: [
                  {
                    id: 'q13',
                    q: "How long will this take? I don't have a lot of free time.",
                    a: "The honest estimate: two to three focused hours a week over two weeks is enough to get from zero to a live website. That's less than one episode of a long TV drama per session.\n\nThe guide is structured in chapters that each produce a visible result, so you're never working toward something you can't see yet. You can put it down after any chapter and pick it up later without losing context.",
                  },
                  {
                    id: 'q14',
                    q: "Why should I start now rather than wait until I'm \"more ready\"?",
                    a: "Because \"more ready\" is almost always a feeling that arrives after starting, not before it.\n\nThe people who get the most from this guide are not the ones who came in with the most preparation. They're the ones who came in with a specific thing they wanted to build and were willing to work through uncertainty to build it. Readiness is a by-product of the process, not a prerequisite for it.\n\nEvery week without a website is a week that someone looking for exactly what you offer can't find you.",
                    proof: '"I had been \'about to build a website\' for literally two years. I finished the E-book on a Sunday afternoon and had something live by Tuesday evening." — Rania M., freelance designer',
                  },
                ],
              },
            ].map(({ cluster, items }) => (
              <div key={cluster} className="mb-8">
                <div className="inline-flex items-center px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                  {cluster}
                </div>
                <div className="divide-y divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden">
                  {items.map(({ id, q, a, proof, warning }: { id: string; q: string; a: string; proof?: string; warning?: string }) => (
                    <div key={id}>
                      <button
                        onClick={() => setFaqOpen(faqOpen === id ? null : id)}
                        className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors"
                        aria-expanded={faqOpen === id}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 transition-colors ${faqOpen === id ? 'bg-amber-600 text-white' : 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400'}`}>
                          {faqOpen === id ? '×' : '+'}
                        </span>
                        <span className={`text-sm font-semibold leading-snug ${faqOpen === id ? 'text-amber-700 dark:text-amber-400' : 'text-stone-900 dark:text-stone-100'}`}>{q}</span>
                      </button>
                      {faqOpen === id && (
                        <div className="px-5 pb-5 pl-14">
                          {a.split('\n\n').map((para, pi) => (
                            <p key={pi} className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-3 last:mb-0">{para}</p>
                          ))}
                          {proof && (
                            <div className="mt-3 px-4 py-3 bg-green-50 dark:bg-green-950/20 border-l-2 border-green-500 rounded-r-lg text-xs text-green-800 dark:text-green-300 italic">
                              → {proof}
                            </div>
                          )}
                          {warning && (
                            <div className="mt-3 px-4 py-3 bg-amber-50 dark:bg-amber-950/20 border-l-2 border-amber-500 rounded-r-lg text-xs text-amber-800 dark:text-amber-300">
                              ⚠ {warning}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-6 bg-amber-50 dark:bg-stone-950">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-3">Still here? That's the answer.</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
              The question isn't whether you're ready.<br />
              It's whether you're willing to start.
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-base italic mb-8 max-w-lg mx-auto leading-relaxed">
              The E-book walks you through every step — from setting up Claude Code to sharing your first URL — in plain language, with nothing assumed and nothing skipped.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openPicker('claude')}
              className="inline-flex items-center gap-3 bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-700 transition-colors mb-4"
            >
              {promoValid ? p.buyNow : 'Get the E-book →'}
            </motion.button>
            <p className="text-sm text-stone-400 dark:text-stone-500">
              ★★★★★ &nbsp;4.9/5 from 2,000+ readers &nbsp;·&nbsp; 14-day refund guarantee &nbsp;·&nbsp; Instant download
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Ebook — Hero */}
      <section id="ebook-ai" className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 py-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-300/20 dark:bg-violet-900/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-300/20 dark:bg-indigo-900/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-400 via-indigo-400 to-blue-400 rounded-3xl blur-2xl opacity-30 dark:opacity-20" />
                <img
                  src={ebookAiThumb}
                  alt="AI for Beginners cover"
                  className="relative w-52 md:w-64 rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setPreviewAIOpen(true)}
                />
                {promoValid ? (
                  <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-sm font-black px-3 py-1.5 rounded-full shadow-lg">
                    {ai.discount}
                  </div>
                ) : (
                  <div className="absolute -top-3 -right-3 bg-violet-600 text-white text-sm font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles size={13} />
                    {ai.badge}
                  </div>
                )}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                  🇫🇷 FR · 🇬🇧 EN
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              {promoValid ? (
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold border border-emerald-200 dark:border-emerald-800">
                  <Tag size={14} />
                  {ai.promoApplied} — {PROMO_CODE}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold">
                  <BookOpen size={14} />
                  {ai.badge}
                </div>
              )}

              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-stone-900 dark:text-stone-100">
                {ai.title}{' '}
                <span className="text-violet-700 dark:text-violet-400">{ai.titleHighlight}</span>
              </h2>

              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-lg">
                {ai.desc}
              </p>

              <div className="flex items-baseline gap-3 mb-8 justify-center md:justify-start">
                {promoValid ? (
                  <>
                    <span className="text-5xl font-black text-stone-900 dark:text-stone-100">{ai.discountedPrice}</span>
                    <span className="text-2xl text-stone-400 dark:text-stone-500 line-through">{ai.originalPrice}</span>
                    <span className="bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-sm font-bold px-3 py-1 rounded-full">
                      {ai.discount}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-black text-stone-900 dark:text-stone-100">{ai.originalPrice}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openPicker('ai')}
                  className="inline-flex items-center gap-3 bg-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-violet-700 transition-colors"
                >
                  {promoValid ? ai.buyNowPromo : ai.buyNow}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPreviewAIOpen(true)}
                  className="inline-flex items-center gap-3 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  <BookOpen size={20} />
                  {ai.preview}
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-sm justify-center md:justify-start mb-6">
                <ShieldCheck size={15} />
                {ai.guarantee}
              </div>

              {/* QR Code payment */}
              <div className="p-4 bg-white/80 dark:bg-stone-800/60 border border-violet-100 dark:border-stone-700 rounded-2xl max-w-lg mb-4">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1">{p.qrLabel}</p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">{p.qrNote}</p>
                <img src={qrCode} alt="QR Code HSBC Vietnam" className="w-36 h-36 rounded-xl" />
              </div>

              {/* Crypto payment */}
              <div className="p-4 bg-white/80 dark:bg-stone-800/60 border border-violet-100 dark:border-stone-700 rounded-2xl max-w-lg">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">{p.cryptoLabel}</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-2 text-stone-600 dark:text-stone-400 font-mono truncate">
                    {CRYPTO_ADDRESS}
                  </code>
                  <button
                    onClick={copyCryptoAddress}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors flex-shrink-0"
                  >
                    <Copy size={13} />
                    {cryptoCopied ? p.cryptoCopied : p.cryptoCopy}
                  </button>
                </div>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-2">{p.cryptoNote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Ebook — Features */}
      <section className="pt-20 pb-16 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif font-bold text-center mb-10 text-stone-900 dark:text-stone-100">{ai.includes}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[ai.feature1, ai.feature2, ai.feature3, ai.feature4].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                  <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-violet-700 dark:text-violet-400" />
                  </div>
                  <span className="font-medium text-stone-800 dark:text-stone-200">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vietnam Ebook — Hero */}
      <section id="ebook-vietnam" className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 py-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-300/20 dark:bg-teal-900/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-300/20 dark:bg-emerald-900/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-400 via-emerald-400 to-green-400 rounded-3xl blur-2xl opacity-30 dark:opacity-20" />
                <img
                  src={ebookVietnamCover}
                  alt="Travel Guide Vietnam cover"
                  className="relative w-52 md:w-64 rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setPreviewVietnamOpen(true)}
                />
                {promoValid ? (
                  <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-sm font-black px-3 py-1.5 rounded-full shadow-lg">
                    {vn.discount}
                  </div>
                ) : (
                  <div className="absolute -top-3 -right-3 bg-teal-600 text-white text-sm font-black px-3 py-1.5 rounded-full shadow-lg">
                    {vn.badge}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              {promoValid ? (
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold border border-emerald-200 dark:border-emerald-800">
                  <Tag size={14} />
                  {vn.promoApplied} — {PROMO_CODE}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 rounded-full px-4 py-2 mb-5 text-sm font-semibold">
                  <BookOpen size={14} />
                  {vn.badge}
                </div>
              )}

              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-stone-900 dark:text-stone-100">
                {vn.title}{' '}
                <span className="text-teal-700 dark:text-teal-400">{vn.titleHighlight}</span>
              </h2>

              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-lg">
                {vn.desc}
              </p>

              <div className="flex items-baseline gap-3 mb-8 justify-center md:justify-start">
                {promoValid ? (
                  <>
                    <span className="text-5xl font-black text-stone-900 dark:text-stone-100">{vn.discountedPrice}</span>
                    <span className="text-2xl text-stone-400 dark:text-stone-500 line-through">{vn.originalPrice}</span>
                    <span className="bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-sm font-bold px-3 py-1 rounded-full">
                      {vn.discount}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-black text-stone-900 dark:text-stone-100">{vn.originalPrice}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openPicker('vietnam')}
                  className="inline-flex items-center gap-3 bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-teal-700 transition-colors"
                >
                  {promoValid ? vn.buyNowPromo : vn.buyNow}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPreviewVietnamOpen(true)}
                  className="inline-flex items-center gap-3 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  <BookOpen size={20} />
                  {vn.preview}
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-sm justify-center md:justify-start mb-6">
                <ShieldCheck size={15} />
                {vn.guarantee}
              </div>

              {/* QR Code payment */}
              <div className="p-4 bg-white/80 dark:bg-stone-800/60 border border-teal-100 dark:border-stone-700 rounded-2xl max-w-lg mb-4">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1">{p.qrLabel}</p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">{p.qrNote}</p>
                <img src={qrCode} alt="QR Code HSBC Vietnam" className="w-36 h-36 rounded-xl" />
              </div>

              {/* Crypto payment */}
              <div className="p-4 bg-white/80 dark:bg-stone-800/60 border border-teal-100 dark:border-stone-700 rounded-2xl max-w-lg">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">{p.cryptoLabel}</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-2 text-stone-600 dark:text-stone-400 font-mono truncate">
                    {CRYPTO_ADDRESS}
                  </code>
                  <button
                    onClick={copyCryptoAddress}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors flex-shrink-0"
                  >
                    <Copy size={13} />
                    {cryptoCopied ? p.cryptoCopied : p.cryptoCopy}
                  </button>
                </div>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-2">{p.cryptoNote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vietnam Ebook — Features */}
      <section className="pt-20 pb-16 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif font-bold text-center mb-10 text-stone-900 dark:text-stone-100">{vn.includes}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[vn.feature1, vn.feature2, vn.feature3, vn.feature4].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-teal-700 dark:text-teal-400" />
                  </div>
                  <span className="font-medium text-stone-800 dark:text-stone-200">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <EbookPickerModal
        open={pickerOpen}
        defaultChoice={pickerDefault}
        promoValid={promoValid}
        onClose={() => setPickerOpen(false)}
        onConfirm={handlePickerConfirm}
      />

      {/* PDF Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={() => setPreviewOpen(false)}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setPreviewOpen(false)}
              className="text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <object data="/ebook.pdf" type="application/pdf" className="w-full h-full rounded-xl">
              <a href="/ebook.pdf" target="_blank" rel="noopener" className="flex items-center justify-center h-full text-white underline">Ouvrir le PDF</a>
            </object>
          </div>
        </div>
      )}
      {/* Vietnam PDF Preview Modal */}
      {previewVietnamOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={() => setPreviewVietnamOpen(false)}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setPreviewVietnamOpen(false)}
              className="text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <object data="/ebook-vietnam.pdf" type="application/pdf" className="w-full h-full rounded-xl">
              <a href="/ebook-vietnam.pdf" target="_blank" rel="noopener" className="flex items-center justify-center h-full text-white underline">Ouvrir le PDF</a>
            </object>
          </div>
        </div>
      )}
      {/* AI PDF Preview Modal */}
      {previewAIOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={() => setPreviewAIOpen(false)}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setPreviewAIOpen(false)}
              className="text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 px-4 pb-4" onClick={e => e.stopPropagation()}>
            <object data="/ebook-ai.pdf" type="application/pdf" className="w-full h-full rounded-xl">
              <a href="/ebook-ai.pdf" target="_blank" rel="noopener" className="flex items-center justify-center h-full text-white underline">Ouvrir le PDF</a>
            </object>
          </div>
        </div>
      )}
    </main>
  );
}
