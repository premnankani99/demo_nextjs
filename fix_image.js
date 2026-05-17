const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\premn\\.gemini\\antigravity\\brain\\fa66cec0-3dd0-41f7-a328-784f7ec6e928\\uploaded_media_1779025950369.img';
const publicImagesDir = 'C:\\js\\Next\\public\\images';
const heroFilePath = 'C:\\js\\Next\\src\\app\\components\\Hero.tsx';

if (!fs.existsSync(srcPath)) {
  console.log(`Source file does not exist at ${srcPath}`);
  process.exit(1);
}

// Read first 12 bytes to inspect magic bytes
const fd = fs.openSync(srcPath, 'r');
const buffer = Buffer.alloc(12);
fs.readSync(fd, buffer, 0, 12, 0);
fs.closeSync(fd);

const hex = buffer.toString('hex').toLowerCase();
console.log(`Uploaded file magic bytes: ${hex}`);

let extension = 'png';
if (hex.startsWith('89504e47')) {
  extension = 'png';
  console.log('Detected format: PNG');
} else if (hex.startsWith('ffd8ff')) {
  extension = 'jpg';
  console.log('Detected format: JPEG');
} else if (hex.startsWith('52494646') && hex.includes('57454250', 8)) { // RIFF ... WEBP
  extension = 'webp';
  console.log('Detected format: WEBP');
} else {
  // Fallback to check if it's a browser screenshot or standard JPEG/PNG
  console.log('Unknown format, defaulting to png');
}

const destFileName = `homepic.${extension}`;
const destPath = path.join(publicImagesDir, destFileName);

// Copy file to correct path
fs.copyFileSync(srcPath, destPath);
console.log(`Copied uploaded file to ${destPath}`);

// Update Hero.tsx to use the correct image filename
if (fs.existsSync(heroFilePath)) {
  let heroContent = fs.readFileSync(heroFilePath, 'utf8');
  const targetStr = '/images/homepic.png';
  const replacementStr = `/images/${destFileName}`;
  
  if (heroContent.includes(targetStr)) {
    heroContent = heroContent.replace(targetStr, replacementStr);
    fs.writeFileSync(heroFilePath, heroContent, 'utf8');
    console.log(`Successfully updated Hero.tsx image source to ${replacementStr}!`);
  } else {
    // If it's already updated or has another format, let's make sure it matches destFileName
    const regex = /\/images\/homepic\.(png|jpg|jpeg|webp)/g;
    if (regex.test(heroContent)) {
      heroContent = heroContent.replace(regex, replacementStr);
      fs.writeFileSync(heroFilePath, heroContent, 'utf8');
      console.log(`Successfully synced Hero.tsx image source to ${replacementStr}!`);
    } else {
      console.log('Could not find homepic reference in Hero.tsx.');
    }
  }
} else {
  console.log('Hero.tsx does not exist.');
}
