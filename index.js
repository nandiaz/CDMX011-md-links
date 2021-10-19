const fs = require('fs');
const ruta = process.argv[2];
const file = require('./lib/findFiles')
const {captureLinks} = require('./lib/links')

const dir = file.files(ruta); // Ruta
//console.log(dir)
const print = captureLinks(dir)
//const links = captureLinks(file.files(ruta));
console.log(print)



