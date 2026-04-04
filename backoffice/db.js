const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const db = new DatabaseSync(path.join(__dirname, 'orders.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    product    TEXT    NOT NULL DEFAULT 'ebook',
    customer   TEXT    NOT NULL,
    date       TEXT    NOT NULL,
    price      REAL    NOT NULL,
    created_at TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS subscribers (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    email      TEXT    NOT NULL UNIQUE,
    created_at TEXT    NOT NULL DEFAULT (datetime('now'))
  );
`);

// Seed initial subscribers (skips duplicates via INSERT OR IGNORE)
const seed = [
  'francois.barrailla@gmail.com',
  'Guillemaud.thomas@gmail.com',
  'vunguyen.xbt@gmail.com',
  'osama.m.akbar@gmail.com',
  'paul.barrailla@gmail.com',
  'nicolasfleurie1@gmail.com',
  'quoctrungdh@gmail.com',
  'nguyengiaphat5781@gmail.com',
  'hanru.nguyen@gmail.com',
  'nmquan137@gmail.com',
  'congluc19297@gmail.com',
];

const insert = db.prepare('INSERT OR IGNORE INTO subscribers (email) VALUES (?)');
for (const email of seed) insert.run(email);

module.exports = db;
