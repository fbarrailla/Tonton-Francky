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

// ── Followers history ─────────────────────────────────────────

app.get('/api/followers-history', (_req, res) => {
  res.json(db.prepare('SELECT * FROM followers_history ORDER BY date ASC').all());
});

app.post('/api/followers-history', (req, res) => {
  const { date, count } = req.body;
  if (!date || count == null || isNaN(Number(count)))
    return res.status(400).json({ error: 'date and count are required' });

  const finalCount = parseInt(count, 10);
  if (finalCount < 0) return res.status(400).json({ error: 'count must be positive' });

  // Upsert: if entry for this date exists, update it; otherwise insert
  const existing = db.prepare('SELECT id FROM followers_history WHERE date = ?').get(date);
  if (existing) {
    db.prepare('UPDATE followers_history SET count = ? WHERE date = ?').run(finalCount, date);
  } else {
    db.prepare('INSERT INTO followers_history (date, count) VALUES (?, ?)').run(date, finalCount);
  }
  const entry = db.prepare('SELECT * FROM followers_history WHERE date = ?').get(date);
  res.status(201).json(entry);
});

app.delete('/api/followers-history/:id', (req, res) => {
  if (!db.prepare('SELECT id FROM followers_history WHERE id = ?').get(req.params.id))
    return res.status(404).json({ error: 'Entry not found' });
  db.prepare('DELETE FROM followers_history WHERE id = ?').run(req.params.id);
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

// ── Instagram comment scraper ─────────────────────────────────

const IG_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function shortcodeToMediaId(shortcode) {
  let id = 0n;
  for (const ch of shortcode) {
    const idx = IG_ALPHABET.indexOf(ch);
    if (idx === -1) throw new Error(`invalid shortcode char: ${ch}`);
    id = id * 64n + BigInt(idx);
  }
  return id.toString();
}

function extractShortcode(input) {
  if (!input) return null;
  const m = String(input).match(/instagram\.com\/(?:p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{6,15}$/.test(input)) return input;
  return null;
}

app.post('/api/comments/scrape', async (req, res) => {
  const { url, shortcode: scIn, sessionid, csrftoken, dsUserId } = req.body || {};
  const shortcode = extractShortcode(url || scIn);
  if (!shortcode) return res.status(400).json({ error: 'Invalid Instagram URL or shortcode' });
  if (!sessionid) return res.status(400).json({ error: 'sessionid cookie required' });

  let mediaId;
  try { mediaId = shortcodeToMediaId(shortcode); }
  catch (e) { return res.status(400).json({ error: e.message }); }

  const cookieParts = [`sessionid=${sessionid}`];
  if (csrftoken) cookieParts.push(`csrftoken=${csrftoken}`);
  if (dsUserId) cookieParts.push(`ds_user_id=${dsUserId}`);

  const headers = {
    'Cookie': cookieParts.join('; '),
    'X-IG-App-ID': '936619743392459',
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'Referer': `https://www.instagram.com/p/${shortcode}/`,
    ...(csrftoken ? { 'X-CSRFToken': csrftoken } : {}),
  };

  const usernames = new Set();
  let nextMinId = null;
  let pages = 0;
  const MAX_PAGES = 600;

  try {
    while (pages < MAX_PAGES) {
      const apiUrl = nextMinId
        ? `https://www.instagram.com/api/v1/media/${mediaId}/comments/?can_support_threading=true&permalink_enabled=false&min_id=${encodeURIComponent(nextMinId)}`
        : `https://www.instagram.com/api/v1/media/${mediaId}/comments/?can_support_threading=true&permalink_enabled=false`;

      const r = await fetch(apiUrl, { headers, redirect: 'manual' });
      if (r.status >= 300 && r.status < 400)
        return res.status(401).json({ error: `IG redirected (${r.status}) — sessionid likely invalid/expired`, usernames: [...usernames], pages });
      if (r.status === 401 || r.status === 403)
        return res.status(401).json({ error: 'IG auth failed — sessionid invalid or expired', usernames: [...usernames], pages });
      if (r.status === 429)
        return res.status(429).json({ error: 'IG rate-limited — try again later', usernames: [...usernames], pages });
      if (!r.ok) {
        const text = await r.text();
        return res.status(502).json({ error: `IG returned ${r.status}: ${text.slice(0, 200)}`, usernames: [...usernames], pages });
      }

      const data = await r.json();
      for (const c of (data.comments || [])) {
        if (c?.user?.username) usernames.add(c.user.username);
      }
      pages++;
      nextMinId = data.next_min_id || null;
      if (!nextMinId) break;
      await new Promise(r => setTimeout(r, 350));
    }
    res.json({ shortcode, mediaId, total: usernames.size, pages, usernames: [...usernames] });
  } catch (e) {
    res.status(500).json({ error: e.message, usernames: [...usernames], pages });
  }
});

// ── Followers list scraper ────────────────────────────────────

app.post('/api/followers/scrape', async (req, res) => {
  const { username, sessionid, csrftoken, dsUserId } = req.body || {};
  if (!username) return res.status(400).json({ error: 'username required' });
  if (!sessionid) return res.status(400).json({ error: 'sessionid cookie required' });

  const cookieParts = [`sessionid=${sessionid}`];
  if (csrftoken) cookieParts.push(`csrftoken=${csrftoken}`);
  if (dsUserId) cookieParts.push(`ds_user_id=${dsUserId}`);

  const headers = {
    'Cookie': cookieParts.join('; '),
    'X-IG-App-ID': '936619743392459',
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    'Referer': `https://www.instagram.com/${username}/`,
    ...(csrftoken ? { 'X-CSRFToken': csrftoken } : {}),
  };

  // 1. Resolve username → user id + total follower count
  let userId, totalCount;
  try {
    const profileUrl = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`;
    const r = await fetch(profileUrl, { headers, redirect: 'manual' });
    if (r.status === 401 || r.status === 403)
      return res.status(401).json({ error: 'IG auth failed on profile lookup — sessionid invalid or expired' });
    if (!r.ok)
      return res.status(502).json({ error: `Profile lookup failed: HTTP ${r.status}` });
    const data = await r.json();
    const user = data?.data?.user;
    if (!user) return res.status(404).json({ error: 'User not found' });
    userId = user.id;
    totalCount = user.edge_followed_by?.count ?? 0;
  } catch (e) {
    return res.status(500).json({ error: `Profile lookup error: ${e.message}` });
  }

  // 2. Paginate followers
  const followers = [];
  const seen = new Set();
  let maxId = null;
  let pages = 0;
  const MAX_PAGES = 1000;

  try {
    while (pages < MAX_PAGES) {
      const apiUrl = maxId
        ? `https://www.instagram.com/api/v1/friendships/${userId}/followers/?count=100&max_id=${encodeURIComponent(maxId)}`
        : `https://www.instagram.com/api/v1/friendships/${userId}/followers/?count=100`;

      const r = await fetch(apiUrl, { headers, redirect: 'manual' });
      if (r.status >= 300 && r.status < 400)
        return res.status(401).json({ error: `IG redirected (${r.status}) — sessionid likely invalid/expired`, followers, pages, totalCount, userId });
      if (r.status === 401 || r.status === 403)
        return res.status(401).json({ error: 'IG auth failed — sessionid invalid or expired', followers, pages, totalCount, userId });
      if (r.status === 429)
        return res.status(429).json({ error: 'IG rate-limited — try again later', followers, pages, totalCount, userId });
      if (!r.ok) {
        const text = await r.text();
        return res.status(502).json({ error: `IG returned ${r.status}: ${text.slice(0, 200)}`, followers, pages, totalCount, userId });
      }

      const data = await r.json();
      for (const u of (data.users || [])) {
        if (u?.username && !seen.has(u.username)) {
          seen.add(u.username);
          followers.push({
            username: u.username,
            full_name: u.full_name || '',
            is_verified: !!u.is_verified,
            is_private: !!u.is_private,
            pk: u.pk || u.id || null,
          });
        }
      }
      pages++;
      maxId = data.next_max_id || null;
      if (!maxId) break;
      await new Promise(r => setTimeout(r, 500));
    }
    res.json({ userId, username, totalCount, total: followers.length, pages, followers });
  } catch (e) {
    res.status(500).json({ error: e.message, followers, pages, totalCount, userId });
  }
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
