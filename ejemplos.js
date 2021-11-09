const fs = require("fs");
//console.log(fs);
const path = require("path");
const {readFileSync} = require ('fs')
const markdownLinkExtractor = require ('./node_modules/markdown-link-extractor');
const fetch = require("node-fetch");
// que ejecutes el comando node index.js rutadearchivo
// recibir la ruta del archivo e imprimes el archivo md en consola

// Calling the readFileSync() method
// to read 'README.md' file
const data = fs.readFileSync('README.md', { encoding: 'utf8' });
// Display the file data
//console.log(data);


// fs.readFile('./README.md', (err, data) => {
//     if (err) throw err;
//     //console.log(data.toString());
//   });

//-------Mostrar tipo de archivo de README-----------//

const pathName = path.extname('README.md');
//console.log('Este archivo tiene la extensión: ' + pathName)

//--------Listar contenido del directorio README----------//
const markdown = readFileSync('README.md', { encoding: 'utf8' });
// const links = markdownLinkExtractor(markdown);
// links.forEach((link) =>{
//     console.log(link);
// });

//--------¿Es archivo o carpeta?----------//
const statsObj = fs.statSync('../CDMX011-md-links');
// console.log(statsObj);
//  console.log('Path is File:', statsObj.isFile());
//  console.log('Path is Directory:' , statsObj.isDirectory());

//----------Mostrar si es un directorio----------//
const fileNames = fs.readdirSync("./node_modules");
// console.log(fileNames)
// console.log("\nCurrent directory filenames: ");
// fileNames.forEach(file => {
//   console.log(file);
// });
//-----Mostrar lista de archivos de directorio con tipo de archivo-----//
fileObjs = fs.readdirSync('../CDMX011-md-links', { withFileTypes: true });
// console.log("\nCurrent directory files: ");
// fileObjs.forEach((file) => {
//   console.log(file);
// });

//-----------Solo para devolver nombres de archivo con la extensión ".md"--------//

files = fs.readdirSync('../CDMX011-md-links');
// console.log('\Filenames with the .md extension: ')
//  files.forEach(file =>{
//      if(path.extname(file) == '.md')
//      console.log(file);
//  })

//----------Validate para un link------------------//
fetch('https://nodejs.org/es/')
  .then(function(response){
    if(response.status == 200){
        console.log("Ok " + response.status)
    }else{
        console.log("Fail " + response.status)
    }

  })
  

