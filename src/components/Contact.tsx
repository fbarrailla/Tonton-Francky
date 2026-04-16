/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../i18n';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorDetail, setErrorDetail] = useState<string>('');
  const [shakeFields, setShakeFields] = useState<Set<string>>(new Set());
  const shakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = c.required;
    if (!form.email.trim()) errs.email = c.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = c.invalidEmail;
    if (!form.subject.trim()) errs.subject = c.required;
    if (!form.message.trim()) errs.message = c.required;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const invalid = (['name', 'email', 'subject', 'message'] as const).filter(f =>
        !form[f].trim() || (f === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      );
      if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
      setShakeFields(new Set(invalid));
      shakeTimerRef.current = setTimeout(() => setShakeFields(new Set()), 500);
      return;
    }
    if (!executeRecaptcha) return;

    setStatus('sending');
    try {
      await executeRecaptcha('contact_form');
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'hello@tontonfrancky.com',
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setErrorDetail(err?.message || '');
      setStatus('error');
    }
  }, [form, executeRecaptcha]);

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border transition-colors outline-none focus:ring-2 focus:ring-amber-400 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 ${
      errors[field] ? 'border-red-400' : 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
    }`;

  return (
    <main className="flex-grow pt-24">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-travel-blue to-stone-100 dark:from-stone-800 dark:to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">{c.title}</h1>
            <p className="text-xl text-stone-600 dark:text-stone-300">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-white dark:bg-stone-900 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col gap-7"
          >
            {/* Name */}
            <div className={shakeFields.has('name') ? 'shake' : ''}>
              <label htmlFor="field-name" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.name}</label>
              <input
                id="field-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="François B."
                aria-describedby={errors.name ? 'err-name' : undefined}
                aria-invalid={!!errors.name}
                className={inputClass('name')}
              />
              {errors.name && <p id="err-name" role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
            </div>

            {/* Email */}
            <div className={shakeFields.has('email') ? 'shake' : ''}>
              <label htmlFor="field-email" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.email}</label>
              <input
                id="field-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="toi@exemple.com"
                aria-describedby={errors.email ? 'err-email' : undefined}
                aria-invalid={!!errors.email}
                className={inputClass('email')}
              />
              {errors.email && <p id="err-email" role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
            </div>

            {/* Subject */}
            <div className={shakeFields.has('subject') ? 'shake' : ''}>
              <label htmlFor="field-subject" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.subject}</label>
              <input
                id="field-subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Voyage au Vietnam 🌏"
                aria-describedby={errors.subject ? 'err-subject' : undefined}
                aria-invalid={!!errors.subject}
                className={inputClass('subject')}
              />
              {errors.subject && <p id="err-subject" role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className={shakeFields.has('message') ? 'shake' : ''}>
              <label htmlFor="field-message" className="block text-sm font-semibold text-stone-700 dark:text-stone-200 mb-2">{c.message}</label>
              <textarea
                id="field-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="..."
                aria-describedby={errors.message ? 'err-message' : undefined}
                aria-invalid={!!errors.message}
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p id="err-message" role="alert" className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} />{errors.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {status === 'sending' ? c.sending : c.send}
            </motion.button>

            {/* Feedback */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', bounce: 0.45, duration: 0.6 }}
                className="flex flex-col items-center gap-3 py-2 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: 'spring', bounce: 0.6, duration: 0.5 }}
                >
                  <CheckCircle size={48} className="text-emerald-500" />
                </motion.div>
                <p className="text-emerald-700 font-semibold text-lg">{c.success}</p>
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
          </motion.form>
        </div>
      </section>
    </main>
  );
}

export default function WrappedContact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <Contact />
    </GoogleReCaptchaProvider>
  )
}