#!/usr/bin/env index
const fs = require('fs');
//const ruta = process.argv[2];
const {files} = require('./lib/findFiles');
const {captureLinks} = require('./lib/links');
const {validateAll} = require('./lib/validate')
const figlet = require('figlet'); //Mensaje banner
const chalk = require('chalk');  //colores
 const readlineSync = require('readline-sync');
//const route = process.argv[2];

//const dir = file.files(ruta); // Ruta
//console.log(dir)
//const print = captureLinks(dir)
//const links = captureLinks(files(route));
//console.log(links)
//const file = files(route);
//console.log(file)
//const validacion = validateAll(links);
//console.log(validacion)
 
//Mostrar un banner con un mensaje formado por caracteres.
const msn = () => {
figlet.text('MD-LINKS', {
      font:  'ANSI Shadow',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 110,
      whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bold.redBright(data));
});

}
msn() 

 const questions = () => {  

const route = readlineSync.question("Ingresa la ruta ");
//files(route);
//console.log(files(route))
console.log("estas son las opciones")
console.log("--links")
console.log("--files")
console.log("--validate")


let opc = readlineSync.question("Que operacion deseas realizar?");
switch (opc) {
    case "--files":
    process.stdout.write("\033c");
    console.log(files(route));
    return opc;
    break;
    case "--links":
    process.stdout.write("\033c");
    console.log(captureLinks(files(route)));
    return opc;
    break;
    case "--validate":
    process.stdout.write("\033c");
    console.log(validateAll(captureLinks(files(route))));
    case "":
    process.stdout.write("\033c");
    console.log("Escoge una opcion")
    return opc;
    break
    
};

}

return questions()
