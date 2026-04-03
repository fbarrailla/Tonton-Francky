const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET all orders
app.get('/api/orders', (req, res) => {
  const stmt = db.prepare('SELECT * FROM orders ORDER BY date DESC, id DESC');
  res.json(stmt.all());
});

// GET single order
app.get('/api/orders/:id', (req, res) => {
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// POST create order
app.post('/api/orders', (req, res) => {
  const { product, customer, date, price } = req.body;
  if (!customer || !date || price == null) {
    return res.status(400).json({ error: 'customer, date and price are required' });
  }
  const result = db.prepare(
    'INSERT INTO orders (product, customer, date, price) VALUES (?, ?, ?, ?)'
  ).run(product || 'ebook', customer, date, price);
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(order);
});

// PUT update order
app.put('/api/orders/:id', (req, res) => {
  const { product, customer, date, price } = req.body;
  const existing = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Order not found' });
  db.prepare(
    'UPDATE orders SET product = ?, customer = ?, date = ?, price = ? WHERE id = ?'
  ).run(
    product ?? existing.product,
    customer ?? existing.customer,
    date ?? existing.date,
    price ?? existing.price,
    req.params.id
  );
  res.json(db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id));
});

// DELETE order
app.delete('/api/orders/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Order not found' });
  db.prepare('DELETE FROM orders WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

// GET stats
app.get('/api/stats', (req, res) => {
  const { total } = db.prepare('SELECT COUNT(*) as total FROM orders').get();
  const { revenue } = db.prepare('SELECT COALESCE(SUM(price), 0) as revenue FROM orders').get();
  res.json({ total, revenue });
});

app.listen(PORT, () => {
  console.log(`Backoffice running at http://localhost:${PORT}`);
});
