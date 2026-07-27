const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('e:/Hala/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Replace font-poppins, font-inter, font-sans with font-jakarta
    if (content.includes('font-poppins') || content.includes('font-inter') || content.includes('font-sans')) {
      content = content.replace(/font-poppins/g, 'font-jakarta');
      content = content.replace(/font-inter/g, 'font-jakarta');
      content = content.replace(/font-sans/g, 'font-jakarta');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});

console.log('Font replacement script completed.');
