import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Check, Sparkles, Tag, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import ebookAiCover from '../assets/ebook-ai.png';
import ebookVietnamCover from '../assets/ebook-vietnam.png';

export type EbookChoice = 'claude' | 'ai' | 'vietnam' | 'bundle';

interface Props {
  open: boolean;
  defaultChoice?: EbookChoice;
  promoValid?: boolean;
  onClose: () => void;
  onConfirm: (choice: EbookChoice) => void;
}

const PRICES: Record<EbookChoice, string> = {
  claude: '$9.99',
  ai: '$9.99',
  vietnam: '$9.99',
  bundle: '$7.99',
};

const PRICES_FR: Record<EbookChoice, string> = {
  claude: '9,99$',
  ai: '9,99$',
  vietnam: '9,99$',
  bundle: '7,99$',
};

const PROMO_PRICES: Record<EbookChoice, string> = {
  claude: '$4.99',
  ai: '$4.99',
  vietnam: '$4.99',
  bundle: '$7.99',
};

const PROMO_PRICES_FR: Record<EbookChoice, string> = {
  claude: '4,99$',
  ai: '4,99$',
  vietnam: '4,99$',
  bundle: '7,99$',
};

export default function EbookPickerModal({ open, defaultChoice = 'claude', promoValid = false, onClose, onConfirm }: Props) {
  const { t, lang } = useLanguage();
  const pk = t.home.ebookPicker;
  const [selected, setSelected] = useState<EbookChoice>(defaultChoice);
  const prices = promoValid
    ? (lang === 'fr' ? PROMO_PRICES_FR : PROMO_PRICES)
    : (lang === 'fr' ? PRICES_FR : PRICES);
  const originalPrices = lang === 'fr' ? PRICES_FR : PRICES;

  const options: { id: EbookChoice; title: string; cover: string; accent: string; ring: string }[] = [
    {
      id: 'claude',
      title: pk.ebook1Title,
      cover: '/ebook.png',
      accent: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
      ring: 'ring-amber-500',
    },
    {
      id: 'ai',
      title: pk.ebook2Title,
      cover: ebookAiCover,
      accent: 'from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30',
      ring: 'ring-violet-500',
    },
    {
      id: 'vietnam',
      title: pk.ebook3Title,
      cover: ebookVietnamCover,
      accent: 'from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30',
      ring: 'ring-teal-500',
    },
    {
      id: 'bundle',
      title: pk.bundleTitle,
      cover: '/ebook.png',
      accent: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
      ring: 'ring-emerald-500',
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.22 }}
            className="bg-white dark:bg-stone-900 rounded-3xl w-full max-w-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start p-7 pb-5">
              <div>
                <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">{pk.title}</h2>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">{pk.subtitle}</p>
                {promoValid && (
                  <div className="inline-flex items-center gap-1.5 mt-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <Tag size={11} />
                    -50% appliqué
                  </div>
                )}
              </div>
              <button onClick={onClose} className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors ml-4 mt-0.5">
                <X size={20} />
              </button>
            </div>

            {/* Options */}
            <div className="px-7 space-y-3">
              {options.map((opt) => {
                const isSelected = selected === opt.id;
                const isBundle = opt.id === 'bundle';
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left bg-gradient-to-r ${opt.accent} ${
                      isSelected ? `border-transparent ring-2 ${opt.ring}` : 'border-stone-100 dark:border-stone-800 hover:border-stone-200 dark:hover:border-stone-700'
                    }`}
                  >
                    {/* Cover(s) */}
                    <div className="relative flex-shrink-0 h-16">
                      {isBundle ? (
                        <div className="relative h-16 w-14">
                          <img src={ebookAiCover} alt="" className="absolute right-0 top-1 h-14 w-10 object-cover rounded-md shadow-md" />
                          <img src="/ebook.png" alt="" className="absolute left-0 bottom-0 h-14 w-10 object-cover rounded-md shadow-md" />
                        </div>
                      ) : (
                        <img src={opt.cover} alt={opt.title} className="h-16 w-12 object-cover rounded-md shadow-md" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm leading-tight">{opt.title}</span>
                        {isBundle && (
                          <span className="inline-flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full">
                            <Sparkles size={10} />
                            {pk.bundleBadge}
                          </span>
                        )}
                      </div>
                      {opt.id === 'ai' && (
                        <p className="text-[11px] text-stone-400 dark:text-stone-500 mt-0.5">🇫🇷 FR · 🇬🇧 EN</p>
                      )}
                      {isBundle && (
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{pk.bundleSaving}</p>
                      )}
                    </div>

                    {/* Price + check */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="text-right">
                        <span className={`font-black text-lg block leading-none ${isBundle ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-900 dark:text-stone-100'}`}>
                          {prices[opt.id]}
                        </span>
                        {promoValid && opt.id !== 'bundle' && (
                          <span className="text-xs text-stone-400 dark:text-stone-500 line-through">
                            {originalPrices[opt.id]}
                          </span>
                        )}
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? `${opt.ring} bg-current border-transparent` : 'border-stone-300 dark:border-stone-600'
                      }`}>
                        {isSelected && <Check size={13} className="text-white" strokeWidth={3} />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="p-7 pt-5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onConfirm(selected)}
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-base transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen size={18} />
                {pk.cta} — {prices[selected]}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
