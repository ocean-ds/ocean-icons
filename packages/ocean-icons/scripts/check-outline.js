const fs = require('fs');
const path = require('path');

const ALLOW_WHITE = ['linkedin.svg'];
const ELEMENT_TAGS = [
  'path',
  'circle',
  'rect',
  'ellipse',
  'polygon',
  'polyline',
  'line',
  'g',
  'use',
];
const SKIP_TAGS = ['clipPath', 'mask', 'defs'];
const WHITE_FILLS = ['white', '#fff', '#ffffff'];

const dirs = process.argv.slice(2);
if (dirs.length === 0) dirs.push('dist/outline');

const stripSkipped = (content) => {
  for (const tag of SKIP_TAGS) {
    const re = new RegExp(`<${tag}(\\s[^>]*)?>[\\s\\S]*?<\\/${tag}>`, 'g');
    content = content.replace(re, '');
    const selfClosing = new RegExp(`<${tag}(\\s[^>]*)?\\/>`, 'g');
    content = content.replace(selfClosing, '');
  }
  return content;
};

const getAttr = (tag, name) => {
  const re = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i');
  const m = tag.match(re);
  return m ? m[1] : undefined;
};

const errors = [];
let count = 0;

for (const dir of dirs) {
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.svg'))
    .sort();
  for (const file of files) {
    count += 1;
    const filePath = path.join(dir, file);
    const content = stripSkipped(fs.readFileSync(filePath, 'utf8'));
    const tagRe =
      /<(path|circle|rect|ellipse|polygon|polyline|line|g|use)(\s[^>]*)?\/?>/g;
    let m;
    while ((m = tagRe.exec(content)) !== null) {
      const tag = m[0];
      const fill = getAttr(tag, 'fill');
      const stroke = getAttr(tag, 'stroke');
      if (fill && fill.toLowerCase() !== 'none' && stroke !== 'none') {
        errors.push(`${file}: <${m[1]}> preenchido sem stroke="none"`);
      }
      if (
        fill &&
        WHITE_FILLS.includes(fill.toLowerCase()) &&
        !ALLOW_WHITE.includes(file)
      ) {
        errors.push(`${file}: fill branco`);
      }
    }
  }
}

if (errors.length > 0) {
  errors.forEach((e) => console.error(e));
  process.exit(1);
}

console.log(`check-outline: ${count} arquivos OK`);
