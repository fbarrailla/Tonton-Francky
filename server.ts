import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { DatabaseSync } from 'node:sqlite';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const app = express();
app.use(express.json());
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (_req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Verify reCAPTCHA + forward to EmailJS
app.post('/contact', async (req, res) => {
  const { captchaToken, name, email, subject, message } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ error: 'Missing reCAPTCHA token' });
  }

  // Verify reCAPTCHA with Google
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET!,
      response: captchaToken,
    }),
  });

  const verifyData = await verifyRes.json() as { success: boolean; score: number };

  if (!verifyData.success || verifyData.score < 0.5) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }

  // Send email via EmailJS REST API
  const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: process.env.VITE_EMAILJS_SERVICE_ID,
      template_id: process.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: process.env.VITE_EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        subject,
        message,
        to_email: 'hello@tontonfrancky.com',
      },
    }),
  });

  if (!emailRes.ok) {
    const emailErr = await emailRes.text();
    console.error('EmailJS error:', emailRes.status, emailErr);
    return res.status(500).json({ error: 'Failed to send email', detail: emailErr });
  }

  return res.json({ success: true });
});

// Instagram followers count (from Supabase settings table)
app.get('/instagram-followers', async (_req, res) => {
  const { data } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'instagram_followers')
    .single();
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.json({ count: data ? Number(data.value) : 414 });
});

// Public ebook sales count (reads directly from backoffice SQLite DB)
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'backoffice/orders.db');

app.get('/ebook-sales', (_req, res) => {
  try {
    if (!existsSync(DB_PATH)) throw new Error('DB not found');
    const db = new DatabaseSync(DB_PATH, { open: true });
    const row = db.prepare('SELECT COUNT(*) as total FROM orders').get() as { total: number };
    db.close();
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.json({ count: row.total });
  } catch {
    res.json({ count: null });
  }
});

// Serve built frontend when dist/ is available
const distPath = path.join(__dirname, 'dist');
if (existsSync(distPath)) {
  // Vite hashes asset filenames → safe to cache indefinitely
  app.use('/assets', express.static(path.join(distPath, 'assets'), {
    maxAge: '1y',
    immutable: true,
  }));

  // Fonts are versioned by filename (from Google Fonts) → cache 1 year
  app.use('/fonts', express.static(path.join(distPath, 'fonts'), {
    maxAge: '1y',
    immutable: true,
  }));

  // Other static files (favicon, robots.txt, sitemap…) — cache 1 day
  app.use(express.static(distPath, {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        // index.html must never be cached so deploys propagate immediately
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    },
  }));

  app.get('*', (_req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
