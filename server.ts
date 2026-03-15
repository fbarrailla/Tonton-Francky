import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const app = express();
app.use(express.json());

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
      user_id: process.env.VITE_EMAILJS_PUBLIC_KEY,
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
    return res.status(500).json({ error: 'Failed to send email' });
  }

  return res.json({ success: true });
});

// Serve built frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
