const fs = require('fs');
const {readFileSync} = require ('fs')
const markdownLinkExtractor = require ('markdown-link-extractor');
//const files = require('./findFiles')

let arrayLinks = [];

const captureLinks = (file) => {
    file.forEach(item => {
        let markdown = readFileSync(item,  'utf8');
        const links = markdownLinkExtractor(markdown);
       const filtro = links.filter((name) => name.includes("http"));
        arrayLinks.push({
            Ruta: item,
            href : filtro})
    });
        
    return arrayLinks
}

module.exports = {
    captureLinks,
};