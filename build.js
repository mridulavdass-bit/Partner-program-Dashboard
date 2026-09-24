// Static site "build": copies the deployable files into dist/.
// No bundler needed — this app is plain HTML/CSS/JS with no compile step.
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const required of ['index.html', 'manifest.json', 'sw.js', 'assets']) {
  if (!fs.existsSync(path.join(root, required))) {
    console.error(`Build failed: required file/dir "${required}" not found at repo root.`);
    process.exit(1);
  }
}

fs.cpSync(path.join(root, 'index.html'), path.join(dist, 'index.html'));
fs.cpSync(path.join(root, 'manifest.json'), path.join(dist, 'manifest.json'));
fs.cpSync(path.join(root, 'sw.js'), path.join(dist, 'sw.js'));
fs.cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

console.log('Built to dist/');
