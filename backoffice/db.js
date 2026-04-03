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
  )
`);

module.exports = db;
