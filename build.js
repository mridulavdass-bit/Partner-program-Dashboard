// Static site "build": copies the deployable files into dist/.
// No bundler needed — this app is plain HTML/CSS/JS with no compile step.
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

fs.cpSync(path.join(root, 'index.html'), path.join(dist, 'index.html'));
fs.cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

console.log('Built to dist/');
