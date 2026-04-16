require('dotenv').config();
const express = require('express');
const path = require('path');
const crypto = require('crypto');
const db = require('./db');
const supabase = require('./supabase');

const app = express();
const PORT = process.env.PORT || 3002;

// Session token — regenerated on each server restart
const SESSION_TOKEN = crypto.randomBytes(32).toString('hex');

app.use(express.json());

// ── Auth ──────────────────────────────────────────────────────

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (!process.env.BACKOFFICE_PASSWORD)
    return res.status(500).json({ error: 'BACKOFFICE_PASSWORD not configured' });
  if (password !== process.env.BACKOFFICE_PASSWORD)
    return res.status(401).json({ error: 'Invalid password' });
  res.json({ token: SESSION_TOKEN });
});

app.use('/api', (req, res, next) => {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (token === SESSION_TOKEN) return next();
  res.status(401).json({ error: 'Unauthorized' });
});

app.use(express.static(path.join(__dirname, 'public')));

// ── Orders ────────────────────────────────────────────────────

app.get('/api/orders', (req, res) => {
  res.json(db.prepare('SELECT * FROM orders ORDER BY date DESC, id DESC').all());
});

app.get('/api/orders/:id', (req, res) => {
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.post('/api/orders', async (req, res) => {
  const { product, customer, date, price } = req.body;
  if (!customer || !date || price == null)
    return res.status(400).json({ error: 'customer, date and price are required' });

  const finalProduct = product || 'ebook';

  const result = db.prepare(
    'INSERT INTO orders (product, customer, date, price) VALUES (?, ?, ?, ?)'
  ).run(finalProduct, customer, date, price);
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(result.lastInsertRowid);

  const { error } = await supabase.from('orders').insert({
    product: finalProduct,
    customer,
    price,
    date,
  });
  if (error) console.error('[Supabase] insert error:', error.message);

  res.status(201).json(order);
});

app.put('/api/orders/:id', (req, res) => {
  const { product, customer, date, price } = req.body;
  const existing = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Order not found' });
  db.prepare('UPDATE orders SET product = ?, customer = ?, date = ?, price = ? WHERE id = ?').run(
    product ?? existing.product,
    customer ?? existing.customer,
    date ?? existing.date,
    price ?? existing.price,
    req.params.id
  );
  res.json(db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id));
});

app.delete('/api/orders/:id', (req, res) => {
  if (!db.prepare('SELECT id FROM orders WHERE id = ?').get(req.params.id))
    return res.status(404).json({ error: 'Order not found' });
  db.prepare('DELETE FROM orders WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

// ── Subscribers ───────────────────────────────────────────────

app.get('/api/subscribers', (req, res) => {
  res.json(db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC').all());
});

app.post('/api/subscribers', (req, res) => {
  const { email } = req.body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(400).json({ error: 'Valid email is required' });
  try {
    const result = db.prepare('INSERT INTO subscribers (email) VALUES (?)').run(email.toLowerCase().trim());
    res.status(201).json(db.prepare('SELECT * FROM subscribers WHERE id = ?').get(result.lastInsertRowid));
  } catch {
    res.status(409).json({ error: 'Email already subscribed' });
  }
});

app.delete('/api/subscribers/:id', (req, res) => {
  if (!db.prepare('SELECT id FROM subscribers WHERE id = ?').get(req.params.id))
    return res.status(404).json({ error: 'Subscriber not found' });
  db.prepare('DELETE FROM subscribers WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

// ── Config (exposes Supabase public credentials to the frontend) ──

app.get('/api/config', (_req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_SERVICE_KEY,
  });
});

// ── Stats ─────────────────────────────────────────────────────

app.get('/api/stats', (req, res) => {
  const { total } = db.prepare('SELECT COUNT(*) as total FROM orders').get();
  const { revenue } = db.prepare('SELECT COALESCE(SUM(price), 0) as revenue FROM orders').get();
  const { subscribers } = db.prepare('SELECT COUNT(*) as subscribers FROM subscribers').get();
  res.json({ total, revenue, subscribers });
});

app.listen(PORT, () => {
  console.log(`Backoffice running at http://localhost:${PORT}`);
});
