import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd(), 'public', 'images');
const VALID_EXTS = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (VALID_EXTS.has(path.extname(entry.name).toLowerCase())) {
      yield full;
    }
  }
}

async function optimizeImage(filePath) {
  const rel = path.relative(ROOT, filePath);
  const ext = path.extname(filePath).toLowerCase();
  const base = filePath.slice(0, -ext.length);

  const input = sharp(filePath, { failOn: 'none' });
  const metadata = await input.metadata();

  // 基本画質の再圧縮（JPG/PNG 上書き）
  if (ext === '.png') {
    await input.png({ quality: 70, compressionLevel: 9 }).toFile(`${base}.tmp`);
  } else {
    await input.jpeg({ quality: 70, mozjpeg: true }).toFile(`${base}.tmp`);
  }
  await fs.rename(`${base}.tmp`, filePath);

  // WebP 生成
  await sharp(filePath).webp({ quality: 65 }).toFile(`${base}.webp`);

  // AVIF 生成（小さな画像はスキップ）
  if ((metadata.width ?? 0) >= 400) {
    await sharp(filePath).avif({ quality: 50 }).toFile(`${base}.avif`);
  }

  return rel;
}

async function main() {
  const optimized = [];
  for await (const file of walk(ROOT)) {
    try {
      const rel = await optimizeImage(file);
      optimized.push(rel);
      // eslint-disable-next-line no-console
      console.log(`optimized: ${rel}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(`skip: ${file}`, err.message);
    }
  }

  // eslint-disable-next-line no-console
  console.log(
    `\nDone. Optimized ${optimized.length} images under public/images`
  );
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
