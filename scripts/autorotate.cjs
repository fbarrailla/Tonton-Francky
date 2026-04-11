/**
 * Prebuild script: normalize all JPEG assets through sharp.
 * - Applies EXIF rotation so pixels match orientation, then strips the tag.
 * - Re-encodes every file to standard baseline JPEG so mozjpeg (imagemin)
 *   never chokes on unusual encodings from camera apps.
 */

'use strict';

// Skip in production — images are already normalized before deploy.
if (process.env.SKIP_AUTOROTATE === 'true') {
  console.log('autorotate: skipping (SKIP_AUTOROTATE=true)');
  process.exit(0);
}

// sharp requires Node 14.18+ (node: protocol). Skip gracefully on older servers
// since CI (Node 22) already processes the images before deploying.
const nodeMajor = parseInt(process.versions.node.split('.')[0], 10);
if (nodeMajor < 14) {
  console.log('autorotate: skipping (Node.js ' + process.version + ' too old, requires 14+)');
  process.exit(0);
}

const { readdir, stat, rename } = require('fs').promises;
const { join, extname } = require('path');
const sharp = require('sharp');

sharp.cache(false);

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

async function main() {
  let count = 0;

  for await (const filePath of walk(ASSETS_DIR)) {
    const ext = extname(filePath).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg') continue;

    const tmpPath = filePath + '.tmp.jpg';
    try {
      await sharp(filePath).rotate().jpeg({ quality: 92 }).toFile(tmpPath);
      await rename(tmpPath, filePath);
      count++;
    } catch (err) {
      console.error('Error processing ' + filePath + ':', err.message);
      const { unlink } = require('fs').promises;
      await unlink(tmpPath).catch(() => {});
    }
  }

  console.log('autorotate: ' + count + ' JPEG(s) normalized.');
}

main().catch(function(err) {
  console.error(err);
  process.exit(1);
});
