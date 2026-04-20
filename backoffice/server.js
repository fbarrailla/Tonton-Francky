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

  let order;
  try {
    const result = db.prepare(
      'INSERT INTO orders (product, customer, date, price) VALUES (?, ?, ?, ?)'
    ).run(finalProduct, customer, date, price);
    order = db.prepare('SELECT * FROM orders WHERE id = ?').get(result.lastInsertRowid);
  } catch (e) {
    console.error('[SQLite] insert error:', e.message);
    return res.status(500).json({ error: 'Database error: ' + e.message });
  }

  const { error } = await supabase.from('orders').insert({
    product: finalProduct,
    customer,
    price,
    date,
  });
  if (error) console.error('[Supabase] insert error:', error.message);

  res.status(201).json(order);
});

app.put('/api/orders/:id', async (req, res) => {
  const { product, customer, date, price } = req.body;
  const { data, error } = await supabase
    .from('orders')
    .update({ product, customer, date, price })
    .eq('id', req.params.id)
    .select()
    .single();
  if (error) {
    console.error('[Supabase] update error:', error.message);
    return res.status(500).json({ error: error.message });
  }
  // Best-effort SQLite update
  try {
    db.prepare('UPDATE orders SET product = ?, customer = ?, date = ?, price = ? WHERE id = ?')
      .run(product, customer, date, price, req.params.id);
  } catch {}
  res.json(data);
});

app.delete('/api/orders/:id', async (req, res) => {
  const { error } = await supabase.from('orders').delete().eq('id', req.params.id);
  if (error) console.error('[Supabase] delete error:', error.message);
  // Best-effort SQLite delete (IDs may differ)
  try { db.prepare('DELETE FROM orders WHERE id = ?').run(req.params.id); } catch {}
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
    supabaseUrl: 'https://dufftgmvjjtlyfqwdsyp.supabase.co',
    supabaseKey: 'sb_publishable_1hywiIeUxTa6_5IuZK0l-w_WwOy7rCD',
  });
});

// ── Settings ──────────────────────────────────────────────────

app.put('/api/settings/:key', async (req, res) => {
  const { value } = req.body;
  const { error } = await supabase
    .from('settings')
    .upsert({ key: req.params.key, value: String(value) });
  if (error) return res.status(500).json({ error: error.message });
  res.json({ key: req.params.key, value });
});

app.get('/api/settings/:key', async (req, res) => {
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', req.params.key)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json({ key: req.params.key, value: data.value });
});

// ── Stats ─────────────────────────────────────────────────────

app.get('/api/stats', async (_req, res) => {
  const { data: orders } = await supabase.from('orders').select('price');
  const total = orders?.length ?? 0;
  const revenue = orders?.reduce((sum, o) => sum + (Number(o.price) || 0), 0) ?? 0;
  const { subscribers } = db.prepare('SELECT COUNT(*) as subscribers FROM subscribers').get();
  res.json({ total, revenue, subscribers });
});

app.listen(PORT, () => {
  console.log(`Backoffice running at http://localhost:${PORT}`);
});
