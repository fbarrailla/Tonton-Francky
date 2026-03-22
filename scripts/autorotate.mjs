/**
 * Prebuild script: normalize all JPEG assets through sharp.
 * - Applies EXIF rotation so pixels match orientation, then strips the tag.
 * - Re-encodes every file to standard baseline JPEG so mozjpeg (imagemin)
 *   never chokes on unusual encodings from camera apps.
 */

import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import sharp from 'sharp';

const ASSETS_DIR = 'src/assets';

async function* walk(dir) {
  for (const entry of await readdir(dir)) {
    const fullPath = join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

let count = 0;

for await (const filePath of walk(ASSETS_DIR)) {
  const ext = extname(filePath).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg') continue;

  try {
    // .rotate() auto-applies EXIF orientation and strips the tag
    const buf = await sharp(filePath).rotate().jpeg({ quality: 92 }).toBuffer();
    await sharp(buf).toFile(filePath);
    count++;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

console.log(`autorotate: ${count} JPEG(s) normalized.`);
