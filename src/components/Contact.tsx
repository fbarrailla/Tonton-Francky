/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLanguage } from '../i18n';

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
  captcha?: string;
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = c.required;
    if (!form.email.trim()) errs.email = c.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = c.invalidEmail;
    if (!form.subject.trim()) errs.subject = c.required;
    if (!form.message.trim()) errs.message = c.required;
    if (!recaptchaRef.current?.getValue()) errs.captcha = c.captchaRequired;
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

  const handleCaptcha = () => {
    setErrors((prev) => ({ ...prev, captcha: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const captchaToken = recaptchaRef.current?.getValue();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      recaptchaRef.current?.reset();
    } catch {
      setStatus('error');
      recaptchaRef.current?.reset();
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border transition-colors outline-none focus:ring-2 focus:ring-stone-400 bg-white ${
      errors[field] ? 'border-red-400' : 'border-stone-200 hover:border-stone-300'
    }`;

  return (
    <main className="flex-grow pt-28">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-travel-blue to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 mb-4">{c.title}</h1>
            <p className="text-xl text-stone-500">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">{c.name}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="François B."
                className={inputClass('name')}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">{c.email}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="toi@exemple.com"
                className={inputClass('email')}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">{c.subject}</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Voyage au Vietnam 🌏"
                className={inputClass('subject')}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">{c.message}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="..."
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            {/* reCAPTCHA */}
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
              />
              {errors.captcha && <p className="mt-1 text-sm text-red-500">{errors.captcha}</p>}
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-600 font-medium"
              >
                <CheckCircle size={20} />
                {c.success}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-500 font-medium"
              >
                <AlertCircle size={20} />
                {c.error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>
    </main>
  );
}
