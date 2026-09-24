// One-off generator: rasterizes assets/icons/*.svg into the PNG sizes
// the manifest and iOS home-screen icon need. Re-run with `npm run icons`
// whenever the source SVGs change; the output PNGs are committed so this
// doesn't need to run as part of every build.
const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, '..', 'assets', 'icons');
const icon = path.join(dir, 'icon.svg');
const maskable = path.join(dir, 'icon-maskable.svg');

async function main() {
  await sharp(icon).resize(192, 192).png().toFile(path.join(dir, 'icon-192.png'));
  await sharp(icon).resize(512, 512).png().toFile(path.join(dir, 'icon-512.png'));
  await sharp(maskable).resize(512, 512).png().toFile(path.join(dir, 'icon-512-maskable.png'));
  await sharp(icon).resize(180, 180).flatten({ background: '#0061e3' }).png().toFile(path.join(dir, 'apple-touch-icon.png'));
  await sharp(icon).resize(32, 32).png().toFile(path.join(dir, 'favicon-32.png'));
  console.log('Generated icon PNGs in assets/icons/');
}

main().catch(err => { console.error(err); process.exit(1); });
