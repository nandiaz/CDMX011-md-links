const fs = require('fs');
const {readFileSync} = require ('fs')
const markdownLinkExtractor = require ('markdown-link-extractor');

const captureLinks = (file) => {
    let details
    let result
    let arrLinks = [];
    file.forEach(item => {
        let markdown = readFileSync(item,  'utf8');
        details = markdownLinkExtractor(markdown, true);
    });
    
     result = details.forEach(element =>{
        if(element.href.includes("https")){
            arrLinks.push({
                file: file,
                url: element.href,
                title: element.text
            })
        }

    })

    return arrLinks
}

module.exports = {
    captureLinks,
};