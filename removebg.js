const fs = require('fs');
let code = fs.readFileSync('src/components/LogoSVG.jsx', 'utf8');

// Find the first <path... and the corresponding z"/>
const startIdx = code.indexOf('<path fill="#FEFEFE"');
if (startIdx !== -1) {
    const endStr = 'z"/>\n';
    const endIdx = code.indexOf(endStr, startIdx);
    if (endIdx !== -1) {
        // remove the first path
        code = code.substring(0, startIdx) + code.substring(endIdx + endStr.length);
        fs.writeFileSync('src/components/LogoSVG.jsx', code);
        console.log('Background removed');
    } else {
        console.log('End of path not found');
    }
} else {
    console.log('Path start not found');
}
