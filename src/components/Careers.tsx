/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Download, Send, CheckCircle, AlertCircle, ChevronDown, X, Sparkles, FileText, Upload } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useLanguage } from '../i18n';
import { positions, type Position } from '../data/careers';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const COUNTRY_CODES = [
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+1', flag: '🇺🇸', name: 'United States / Canada' },
  { code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: '+352', flag: '🇱🇺', name: 'Luxembourg' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: '+221', flag: '🇸🇳', name: 'Senegal' },
  { code: '+225', flag: '🇨🇮', name: "Côte d'Ivoire" },
  { code: '+237', flag: '🇨🇲', name: 'Cameroon' },
  { code: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function downloadPositionPdf(p: Position, lang: 'fr' | 'en') {
  const title = lang === 'fr' ? p.titleFr : p.titleEn;
  const mission = lang === 'fr' ? p.missionFr : p.missionEn;
  const resp = lang === 'fr' ? p.responsibilitiesFr : p.responsibilitiesEn;
  const skills = lang === 'fr' ? p.skillsFr : p.skillsEn;
  const labels = lang === 'fr'
    ? { mission: 'Mission', resp: 'Responsabilités', skills: 'Compétences', open: 'Tonton Francky — Postes ouverts', tip: 'Astuce : utilisez « Enregistrer en PDF » dans la boîte de dialogue d\'impression.' }
    : { mission: 'Mission', resp: 'Responsibilities', skills: 'Skills', open: 'Tonton Francky — Open Positions', tip: 'Tip: pick "Save as PDF" in the print dialog.' };

  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<title>${escapeHtml(title)} — Tonton Francky</title>
<style>
  @page { margin: 24mm 18mm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1c1917; margin: 0; padding: 32px; max-width: 760px; line-height: 1.55; }
  .brand { color: #78350f; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; }
  h1 { font-size: 32px; margin: 6px 0 4px; font-family: 'Lora', Georgia, serif; }
  .emoji { font-size: 36px; margin-right: 8px; vertical-align: -4px; }
  h2 { font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: #b45309; margin: 28px 0 10px; border-bottom: 1px solid #f5deb3; padding-bottom: 4px; }
  p { margin: 0 0 12px; }
  ul { margin: 0 0 12px 0; padding-left: 20px; }
  li { margin-bottom: 6px; }
  .tip { margin-top: 36px; padding: 10px 14px; background: #fffbeb; border-left: 3px solid #f59e0b; font-size: 12px; color: #78350f; }
  @media print { .tip { display: none; } body { padding: 0; } }
</style></head><body>
  <div class="brand">${escapeHtml(labels.open)}</div>
  <h1><span class="emoji">${p.emoji}</span>${escapeHtml(title)}</h1>
  <h2>${labels.mission}</h2>
  <p>${escapeHtml(mission)}</p>
  <h2>${labels.resp}</h2>
  <ul>${resp.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
  <h2>${labels.skills}</h2>
  <ul>${skills.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>
  <div class="tip">${escapeHtml(labels.tip)}</div>
  <script>window.onload = function () { setTimeout(function(){ window.print(); }, 200); };<\/script>
</body></html>`;

  const w = window.open('', '_blank', 'width=820,height=900');
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
}

interface ApplyState {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  motivation: string;
  cv: File | null;
}

interface ApplyErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  motivation?: string;
  cv?: string;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const result = reader.result as string;
      const idx = result.indexOf(',');
      resolve(idx >= 0 ? result.slice(idx + 1) : result);
    };
    reader.readAsDataURL(file);
  });
}

function ApplyModal({ position, onClose }: { position: Position; onClose: () => void }) {
  const { lang, t } = useLanguage();
  const c = t.careers;
  const title = lang === 'fr' ? position.titleFr : position.titleEn;
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState<ApplyState>({
    fullName: '',
    email: '',
    countryCode: '+62',
    phone: '',
    motivation: '',
    cv: null,
  });
  const [errors, setErrors] = useState<ApplyErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorDetail, setErrorDetail] = useState('');

  const cvRef = useRef<HTMLInputElement>(null);

  const handleField = (name: keyof ApplyState, value: string) => {
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof ApplyErrors]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleCv = (file: File | null) => {
    if (file && file.size > MAX_FILE_SIZE) {
      setErrors((p) => ({ ...p, cv: c.fileTooLarge }));
      setForm((p) => ({ ...p, cv: null }));
      return;
    }
    setForm((p) => ({ ...p, cv: file }));
    if (errors.cv) setErrors((p) => ({ ...p, cv: undefined }));
  };

  const validate = (): boolean => {
    const errs: ApplyErrors = {};
    if (!form.fullName.trim()) errs.fullName = c.required;
    if (!form.email.trim()) errs.email = c.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = c.invalidEmail;
    if (!form.phone.trim()) errs.phone = c.required;
    if (!form.motivation.trim()) errs.motivation = c.required;
    if (!form.cv) errs.cv = c.required;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      if (executeRecaptcha) await executeRecaptcha('careers_form').catch(() => {});

      const cvB64 = form.cv ? await fileToBase64(form.cv) : '';

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName,
          from_email: form.email,
          subject: `Application — ${title}`,
          message: [
            `Position: ${title}`,
            `Full name: ${form.fullName}`,
            `Email: ${form.email}`,
            `Phone: ${form.countryCode} ${form.phone}`,
            '',
            'Motivation letter:',
            form.motivation.trim(),
            '',
            `CV: ${form.cv?.name ?? '—'} (${form.cv ? Math.round(form.cv.size / 1024) + ' KB' : '—'})`,
            '',
            'CV attached as base64 (template variable: cv_b64; filename: cv_filename).',
          ].join('\n'),
          to_email: 'francois.barrailla@gmail.com',
          position: title,
          full_name: form.fullName,
          phone: `${form.countryCode} ${form.phone}`,
          motivation: form.motivation.trim(),
          cv_filename: form.cv?.name ?? '',
          cv_b64: cvB64,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
    } catch (err: any) {
      setErrorDetail(err?.text || err?.message || '');
      setStatus('error');
    }
  };

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-amber-400 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 transition-colors ${
      err ? 'border-red-400' : 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
    }`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.98 }}
        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
        className="relative w-full max-w-2xl my-8 bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors z-10"
          aria-label={c.cancel}
        >
          <X size={20} />
        </button>

        <div className="bg-gradient-to-br from-amber-500 to-amber-700 px-8 py-6 text-white">
          <p className="text-amber-100 text-xs font-bold tracking-widest uppercase mb-1">{c.applyFor}</p>
          <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
            <span className="text-3xl">{position.emoji}</span>
            <span>{title}</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-8 flex flex-col gap-5">
          <div>
            <label htmlFor="ap-name" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.formFullName}</label>
            <input
              id="ap-name"
              type="text"
              value={form.fullName}
              onChange={(e) => handleField('fullName', e.target.value)}
              placeholder="Jane Doe"
              className={inputClass(errors.fullName)}
            />
            {errors.fullName && <p role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="ap-email" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.formEmail}</label>
            <input
              id="ap-email"
              type="email"
              value={form.email}
              onChange={(e) => handleField('email', e.target.value)}
              placeholder="you@example.com"
              className={inputClass(errors.email)}
            />
            {errors.email && <p role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.formPhone}</label>
            <div className="flex gap-2">
              <select
                aria-label={c.formCountryCode}
                value={form.countryCode}
                onChange={(e) => handleField('countryCode', e.target.value)}
                className="px-3 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-400 hover:border-stone-300 dark:hover:border-stone-600 transition-colors min-w-[110px]"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={`${c.code}-${c.name}`} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleField('phone', e.target.value)}
                placeholder="6 12 34 56 78"
                className={inputClass(errors.phone) + ' flex-1'}
              />
            </div>
            {errors.phone && <p role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="ap-motivation" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.formMotivation}</label>
            <textarea
              id="ap-motivation"
              rows={6}
              value={form.motivation}
              onChange={(e) => handleField('motivation', e.target.value)}
              placeholder="…"
              className={`${inputClass(errors.motivation)} resize-y min-h-[140px]`}
            />
            {errors.motivation && <p role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.motivation}</p>}
          </div>

          <FilePicker
            id="ap-cv"
            label={c.formCv}
            file={form.cv}
            error={errors.cv}
            pickLabel={c.formFilePick}
            chosenLabel={c.formFileChosen}
            inputRef={cvRef}
            onPick={handleCv}
            accept=".pdf,.doc,.docx"
          />

          <motion.button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
            {status === 'sending' ? c.sending : c.send}
          </motion.button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-2 py-2"
            >
              <CheckCircle size={42} className="text-emerald-500" />
              <p className="text-emerald-700 dark:text-emerald-400 font-semibold">{c.success}</p>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-500 font-medium"
            >
              <AlertCircle size={20} />
              <span>{c.error}{errorDetail && <span className="block text-xs mt-1 opacity-70">{errorDetail}</span>}</span>
            </motion.div>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
}

function FilePicker({
  id, label, file, error, pickLabel, chosenLabel, inputRef, onPick, accept,
}: {
  id: string;
  label: string;
  file: File | null;
  error?: string;
  pickLabel: string;
  chosenLabel: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onPick: (f: File | null) => void;
  accept: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{label}</label>
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept={accept}
        onChange={(e) => onPick(e.target.files?.[0] ?? null)}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`w-full px-4 py-3 rounded-xl border-2 border-dashed flex items-center justify-between gap-3 transition-colors ${
          error
            ? 'border-red-400 bg-red-50/40 dark:bg-red-950/10'
            : file
              ? 'border-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/20'
              : 'border-stone-300 dark:border-stone-700 hover:border-amber-400 hover:bg-amber-50/30 dark:hover:bg-amber-950/10'
        }`}
      >
        <span className="flex items-center gap-2 min-w-0">
          {file ? <FileText size={18} className="text-emerald-600 shrink-0" /> : <Upload size={18} className="text-stone-500 shrink-0" />}
          <span className="truncate text-sm text-stone-700 dark:text-stone-200">{file ? file.name : pickLabel}</span>
        </span>
        {file && <span className="text-xs text-stone-500 shrink-0">{Math.round(file.size / 1024)} KB</span>}
      </button>
      {error && <p role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{error}</p>}
    </div>
  );
}

function PositionCard({ position, index, onApply }: { position: Position; index: number; onApply: (p: Position) => void }) {
  const { lang, t } = useLanguage();
  const c = t.careers;
  const [open, setOpen] = useState(false);
  const title = lang === 'fr' ? position.titleFr : position.titleEn;
  const mission = lang === 'fr' ? position.missionFr : position.missionEn;
  const resp = lang === 'fr' ? position.responsibilitiesFr : position.responsibilitiesEn;
  const skills = lang === 'fr' ? position.skillsFr : position.skillsEn;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.5 }}
      className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm hover:shadow-lg border border-stone-200/70 dark:border-stone-800 overflow-hidden transition-shadow"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left px-6 py-5 flex items-center gap-4 hover:bg-amber-50/40 dark:hover:bg-amber-950/10 transition-colors"
      >
        <span className="text-3xl select-none" aria-hidden="true">{position.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">{title}</h3>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 line-clamp-2">{mission}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-stone-400"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-stone-100 dark:border-stone-800">
              <Section title={c.missionLabel}>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{mission}</p>
              </Section>
              <Section title={c.responsibilitiesLabel}>
                <ul className="space-y-2">
                  {resp.map((r) => (
                    <li key={r} className="flex gap-2 text-stone-700 dark:text-stone-300">
                      <span className="text-amber-600 mt-1.5 shrink-0 inline-block w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title={c.skillsLabel}>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="text-sm bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-3 py-1.5 rounded-full"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Section>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => onApply(position)}
                  className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition-colors"
                >
                  <Send size={16} />
                  {c.apply}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => downloadPositionPdf(position, lang)}
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-700 px-5 py-2.5 rounded-xl font-semibold transition-colors"
                >
                  <Download size={16} />
                  {c.downloadPdf}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-2">{title}</h4>
      {children}
    </div>
  );
}

function CareersInner() {
  const { t } = useLanguage();
  const c = t.careers;
  const [applying, setApplying] = useState<Position | null>(null);

  return (
    <main className="flex-grow pt-24">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <Briefcase size={48} className="text-amber-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">{c.title}</h1>
            <p className="text-xl text-amber-100">{c.subtitle}</p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mt-6 text-sm text-amber-100">
              <Sparkles size={14} className="text-amber-300" />
              <span>{positions.length} {c.openPositions.toLowerCase()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Looking for + perks */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200/70 dark:border-stone-800"
          >
            <h2 className="text-lg font-serif font-bold mb-3 text-stone-800 dark:text-stone-100">{c.lookingFor}</h2>
            <ul className="space-y-2 text-stone-700 dark:text-stone-300">
              <li>{c.lookingFor1}</li>
              <li>{c.lookingFor2}</li>
              <li>{c.lookingFor3}</li>
              <li>{c.lookingFor4}</li>
            </ul>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-4">{c.portfolioNote}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-900/40"
          >
            <h2 className="text-lg font-serif font-bold mb-3 text-stone-800 dark:text-stone-100">{c.perksTitle}</h2>
            <ul className="space-y-2 text-stone-700 dark:text-stone-300">
              <li>{c.perk1}</li>
              <li>{c.perk2}</li>
              <li>{c.perk3}</li>
              <li>{c.perk4}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Missions */}
      <section className="py-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-stone-900 dark:bg-black/40 text-white rounded-2xl p-8"
        >
          <h2 className="text-2xl font-serif font-bold mb-5">{c.missionsTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-stone-200">
            <li>{c.mission1}</li>
            <li>{c.mission2}</li>
            <li>{c.mission3}</li>
            <li>{c.mission4}</li>
            <li>{c.mission5}</li>
            <li>{c.mission6}</li>
            <li>{c.mission7}</li>
          </ul>
        </motion.div>
      </section>

      {/* Positions */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-stone-800 dark:text-stone-100">{c.openPositions}</h2>
          <div className="flex flex-col gap-4">
            {positions.map((p, i) => (
              <PositionCard key={p.id} position={p} index={i} onApply={setApplying} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {applying && (
          <ApplyModal position={applying} onClose={() => setApplying(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default function Careers() {
  if (!RECAPTCHA_SITE_KEY) return <CareersInner />;
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <CareersInner />
    </GoogleReCaptchaProvider>
  );
}
