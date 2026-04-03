/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Check, Copy, ShieldCheck, Tag, X } from 'lucide-react';
import { useLanguage } from '../i18n';

const PROMO_CODE = 'TONTONFRANCKY50';
const PAYPAL_PROMO_URL = 'https://www.paypal.com/ncp/payment/R7ZQ2BSCC6ZEG';
const CRYPTO_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

export default function EbookPromo() {
  const { t } = useLanguage();
  const p = t.ebookPromo;
  const [searchParams] = useSearchParams();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [cryptoCopied, setCryptoCopied] = useState(false);

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
                {p.title}{' '}
                <span className="text-amber-700 dark:text-amber-400">{p.titleHighlight}</span>
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
                <motion.a
                  href={PAYPAL_PROMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-700 transition-colors"
                >
                  {promoValid ? p.buyNow : t.home.ebookBuy}
                </motion.a>
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

              {/* Crypto payment */}
              <div className="mt-6 p-4 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-2xl max-w-lg">
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

      {/* Features */}
      <section className="py-16 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif font-bold text-center mb-10 text-stone-900 dark:text-stone-100">{p.includes}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[p.feature1, p.feature2, p.feature3, p.feature4].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                  <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-amber-700 dark:text-amber-400" />
                  </div>
                  <span className="font-medium text-stone-800 dark:text-stone-200">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
            <iframe
              src="/ebook.pdf"
              className="w-full h-full rounded-xl"
              title="E-book preview"
            />
          </div>
        </div>
      )}
    </main>
  );
}
