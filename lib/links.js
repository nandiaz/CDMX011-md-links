const { text } = require('figlet');
const fs = require('fs');
const {readFileSync} = require ('fs')
const markdownLinkExtractor = require ('markdown-link-extractor');
const { title } = require('process');
//const files = require('./findFiles')


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

        //console.log(element.text)
    })

//    console.log(filtro)    
    return arrLinks
}

module.exports = {
    captureLinks,
};