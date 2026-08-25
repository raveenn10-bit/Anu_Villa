import fs from 'fs';
import path from 'path';
import convert from 'heic-convert';
import sharp from 'sharp';

const sourceDir = 'I:\\Downloads Original\\New folder';
const targetBaseDir = 'f:\\Anu Villa\\public\\images\\villa';

const subfolders = [
  { source: 'Apartment 1', target: 'apartment-1' },
  { source: 'Apartment 2', target: 'apartment-2' },
  { source: 'Room 1', target: 'room-1' },
  { source: 'Room 2', target: 'room-2' },
];

if (!fs.existsSync(targetBaseDir)) {
  fs.mkdirSync(targetBaseDir, { recursive: true });
}

async function processAll() {
  const manifest = {};

  for (const { source, target } of subfolders) {
    const srcPath = path.join(sourceDir, source);
    const destPath = path.join(targetBaseDir, target);

    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    manifest[target] = [];

    if (!fs.existsSync(srcPath)) {
      console.warn(`Source folder not found: ${srcPath}`);
      continue;
    }

    const files = fs.readdirSync(srcPath);
    console.log(`Processing folder "${source}" (${files.length} files)...`);

    let index = 1;
    for (const file of files) {
      const filePath = path.join(srcPath, file);
      const ext = path.extname(file).toLowerCase();
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) continue;

      const baseName = `${target}-${String(index).padStart(2, '0')}`;
      const outJpg = path.join(destPath, `${baseName}.jpg`);
      const outWebp = path.join(destPath, `${baseName}.webp`);

      try {
        if (ext === '.heic') {
          console.log(`Converting HEIC: ${file} -> ${baseName}.jpg / .webp`);
          const inputBuffer = fs.readFileSync(filePath);
          const outputBuffer = await convert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 0.92,
          });

          // Save high quality WebP and JPEG
          await sharp(outputBuffer)
            .rotate() // auto-orient based on EXIF
            .resize({ width: 2000, withoutEnlargement: true })
            .jpeg({ quality: 85, mozjpeg: true })
            .toFile(outJpg);

          await sharp(outputBuffer)
            .rotate()
            .resize({ width: 2000, withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(outWebp);

          manifest[target].push({
            originalName: file,
            jpgPath: `/images/villa/${target}/${baseName}.jpg`,
            webpPath: `/images/villa/${target}/${baseName}.webp`,
          });
          index++;
        } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          console.log(`Optimizing image: ${file} -> ${baseName}.jpg / .webp`);
          const inputBuffer = fs.readFileSync(filePath);

          await sharp(inputBuffer)
            .rotate()
            .resize({ width: 2000, withoutEnlargement: true })
            .jpeg({ quality: 85, mozjpeg: true })
            .toFile(outJpg);

          await sharp(inputBuffer)
            .rotate()
            .resize({ width: 2000, withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(outWebp);

          manifest[target].push({
            originalName: file,
            jpgPath: `/images/villa/${target}/${baseName}.jpg`,
            webpPath: `/images/villa/${target}/${baseName}.webp`,
          });
          index++;
        } else {
          console.log(`Skipping non-image: ${file} (${ext})`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }

  fs.writeFileSync(
    path.join(targetBaseDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('All images processed successfully!');
  console.log(`Manifest created with ${Object.values(manifest).flat().length} converted images.`);
}

processAll();
