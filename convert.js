const fs = require('fs');
const svg = fs.readFileSync('public/assets/images/Logo.svg', 'utf8');

// The original file starts with:
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 width="100%" viewBox="0 0 1536 1024" enable-background="new 0 0 1536 1024" xml:space="preserve">

// Replace everything up to the first <path> with our custom SVG opening tag
let startIndex = svg.indexOf('<path');
let pathsAndDown = svg.substring(startIndex);

let newSvg = `<svg {...props} xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1536 1024" fill="none" xmlns="http://www.w3.org/2000/svg">\n${pathsAndDown}`;

// Need to also fix "clip-path" -> "clipPath", "fill-rule" -> "fillRule" etc. if they exist
newSvg = newSvg.replace(/enable-background/g, 'enableBackground')
    .replace(/xml:space/g, 'xmlSpace')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-path/g, 'clipPath')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin');

const jsx = `const LogoSVG = (props) => (\n  ${newSvg}\n);\n\nexport default LogoSVG;\n`;

fs.writeFileSync('src/components/LogoSVG.jsx', jsx);
console.log('Conversion successful!');
