const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Orders ────────────────────────────────────────────────────

app.get('/orders', (req, res) => {
  res.json(db.prepare('SELECT * FROM orders ORDER BY date DESC, id DESC').all());
});

app.get('/orders/:id', (req, res) => {
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.post('/orders', (req, res) => {
  const { product, customer, date, price } = req.body;
  if (!customer || !date || price == null)
    return res.status(400).json({ error: 'customer, date and price are required' });
  const result = db.prepare(
    'INSERT INTO orders (product, customer, date, price) VALUES (?, ?, ?, ?)'
  ).run(product || 'ebook', customer, date, price);
  res.status(201).json(db.prepare('SELECT * FROM orders WHERE id = ?').get(result.lastInsertRowid));
});

app.put('/orders/:id', (req, res) => {
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

app.delete('/orders/:id', (req, res) => {
  if (!db.prepare('SELECT id FROM orders WHERE id = ?').get(req.params.id))
    return res.status(404).json({ error: 'Order not found' });
  db.prepare('DELETE FROM orders WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

// ── Subscribers ───────────────────────────────────────────────

app.get('/subscribers', (req, res) => {
  res.json(db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC').all());
});

app.post('/subscribers', (req, res) => {
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

app.delete('/subscribers/:id', (req, res) => {
  if (!db.prepare('SELECT id FROM subscribers WHERE id = ?').get(req.params.id))
    return res.status(404).json({ error: 'Subscriber not found' });
  db.prepare('DELETE FROM subscribers WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

// ── Stats ─────────────────────────────────────────────────────

app.get('/stats', (req, res) => {
  const { total } = db.prepare('SELECT COUNT(*) as total FROM orders').get();
  const { revenue } = db.prepare('SELECT COALESCE(SUM(price), 0) as revenue FROM orders').get();
  const { subscribers } = db.prepare('SELECT COUNT(*) as subscribers FROM subscribers').get();
  res.json({ total, revenue, subscribers });
});

app.listen(PORT, () => {
  console.log(`Backoffice running at http://localhost:${PORT}`);
});
