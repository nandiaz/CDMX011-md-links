#!/usr/bin/env index
const fs = require('fs');
const ruta = process.argv[2];
const {files} = require('./lib/findFiles')
//const {captureLinks} = require('./lib/links')
//const figlet = require('figlet'); //Mensaje banner
//const chalk = require('chalk');  //colores
 const readlineSync = require('readline-sync');

//const dir = file.files(ruta); // Ruta
//console.log(dir)
//const print = captureLinks(dir)
//const links = captureLinks(file.files(ruta));
//console.log(print)

 
//Mostrar un banner con un mensaje formado por caracteres.
// const msn = () => {
// figlet.text('MD-LINKS', {
//       font:  'ANSI Shadow',
//       horizontalLayout: 'default',
//       verticalLayout: 'default',
//       width: 110,
//       whitespaceBreak: true
// }, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(chalk.bold.redBright(data));
// });

// }
// msn()
 const questions = () => {  

const route = readlineSync.question("Ingresa la ruta ");
files(route);
//console.log(files(route))
console.log("estas son las opciones")
console.log("--links")
console.log("--files")


let opc = readlineSync.question("Que operacion deseas realizar?");
switch (opc) {
    case "--files":
    process.stdout.write("\033c");
    console.log(files(route));
    return opc;
    break;
    // case "--links":
    // process.stdout.write("\033c");
    // console.log(captureLinks(files(route)));
    // return opc;
    // break;
    case "":
    process.stdout.write("\033c");
    console.log("Escoge una opcion")
    return opc;
    break
    
};

}

return questions()
