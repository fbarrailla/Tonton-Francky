/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Check, Copy, ShieldCheck, Sparkles, Tag, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import qrCode from '../assets/qr-code.png';
import ebookAiThumb from '../assets/ebook-ai-thumb.png';
import ebookAiPdf from '../assets/ebook-ai.pdf';
import EbookPickerModal, { type EbookChoice } from './EbookPickerModal';

const PROMO_CODE = 'TONTONFRANCKY50';
const CRYPTO_ADDRESS = '0x49089DA6cA4752469ADc1A7BDA8eDf19925a073d';

const PAYPAL_URLS: Record<EbookChoice, string> = {
  claude: 'https://www.paypal.com/ncp/payment/R7ZQ2BSCC6ZEG',
  ai: 'https://www.paypal.com/ncp/payment/JBKRH44BDQS3Q',
  bundle: 'https://www.paypal.com/ncp/payment/X2MVQVN7NEWPG',
};

export default function EbookPromo() {
  const { t } = useLanguage();
  const p = t.ebookPromo;
  const ai = t.ebookAI;
  const [searchParams] = useSearchParams();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewAIOpen, setPreviewAIOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerDefault, setPickerDefault] = useState<EbookChoice>('claude');
  const [cryptoCopied, setCryptoCopied] = useState(false);

  function openPicker(defaultChoice: EbookChoice) {
    setPickerDefault(defaultChoice);
    setPickerOpen(true);
  }

  function handlePickerConfirm(choice: EbookChoice) {
    setPickerOpen(false);
    window.open(PAYPAL_URLS[choice], '_blank', 'noopener,noreferrer');
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

      {/* Features */}
      <section className="pt-20 pb-16 px-6 bg-white dark:bg-stone-900">
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

      <EbookPickerModal
        open={pickerOpen}
        defaultChoice={pickerDefault}
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
            <iframe
              src="/ebook.pdf"
              className="w-full h-full rounded-xl"
              title="E-book preview"
            />
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
            <iframe
              src={ebookAiPdf}
              className="w-full h-full rounded-xl"
              title="AI for Beginners preview"
            />
          </div>
        </div>
      )}
    </main>
  );
}
