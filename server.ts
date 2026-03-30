import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import Database from 'better-sqlite3';

const app = express();
app.use(express.json());

const db = new Database('newsletter.db');
db.exec(`CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  created_at TEXT NOT NULL
)`);

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body as { email?: string };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  try {
    db.prepare('INSERT INTO subscribers (email, created_at) VALUES (?, ?)').run(email, new Date().toISOString());
    return res.json({ success: true });
  } catch (e: any) {
    if (e.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'Already subscribed' });
    }
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Verify reCAPTCHA + forward to EmailJS
app.post('/api/contact', async (req, res) => {
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
      publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY,
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

// Serve built frontend in production
if (process.env.NODE_ENV === 'production') {
  // Vite hashes asset filenames → safe to cache indefinitely
  app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
    maxAge: '1y',
    immutable: true,
  }));

  // Fonts are versioned by filename (from Google Fonts) → cache 1 year
  app.use('/fonts', express.static(path.join(__dirname, 'dist/fonts'), {
    maxAge: '1y',
    immutable: true,
  }));

  // Other static files (favicon, robots.txt, sitemap…) — cache 1 day
  app.use(express.static(path.join(__dirname, 'dist'), {
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
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
