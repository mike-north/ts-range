const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const LOCALS = {
  rangeMin: 0,
  rangeMax: 14
};

/**
 * 
 * @param {string} filePath 
 */
function generateFile(filePath) {
  const outPath = path.join(__dirname, '..', 'src', filePath);
  const inPath = outPath + '.ejs';
  const output = ejs.render(fs.readFileSync(inPath).toString(), LOCALS);
  fs.writeFileSync(outPath, output);
}

['-private/maps.ts'].map(generateFile);
