/**
 * Prebuild script: auto-rotate JPEG images based on EXIF orientation.
 * sharp reads EXIF, rotates pixels to match, then strips the tag.
 * This prevents mozjpeg (vite-plugin-imagemin) from stripping EXIF
 * without applying the rotation — which would produce wrong orientations.
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
let skipped = 0;

for await (const filePath of walk(ASSETS_DIR)) {
  const ext = extname(filePath).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg') continue;

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();

    // orientation 1 = no rotation needed, undefined = no EXIF tag
    if (!meta.orientation || meta.orientation === 1) {
      skipped++;
      continue;
    }

    console.log(`Rotating ${filePath} (orientation: ${meta.orientation})`);

    // .rotate() with no args uses EXIF orientation and strips the tag
    const rotated = await image.rotate().toBuffer();
    await sharp(rotated).toFile(filePath);
    count++;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

console.log(`autorotate: ${count} image(s) rotated, ${skipped} already correct.`);
