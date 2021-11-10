const fetch = require( "node-fetch");
const chalk = require('chalk');


const validate = (element) => {
    //console.log(link)
    
       
        return fetch(element.url)
        .then (function(res) {
            if (res.status >= 200 && res.status < 300) {
                return console.log(
                    chalk.ansi(93).bold(`Ruta: ` + element.file) +
                      chalk.hex('#00C6BC')(`\n╠ Link: `) + chalk.ansi(90)(element.url) +
                      chalk.hex('#00C6BC')(`\n╠ Title: `) + chalk.ansi(97)(element.title.slice(0, 30)) +
                      chalk.hex('#00C6BC')(`\n╠ `) + chalk.ansi(30).bgAnsi(92)(` Status: ` + res.status) +
                      chalk.hex('#00C6BC')(`\n╠ Output: `) + chalk.yellowBright(`OK`),

                      chalk.ansi(35)`\n  ▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░ \n`
                  );
            } else {
                return console.log(
                    chalk.ansi(93).bold(`Ruta: ` + element.file) +
                      chalk.hex('#00C6BC')(`\n╠ Link: `) + chalk.ansi(90)(element.url) +
                      chalk.hex('#00C6BC')(`\n╠ Title: `) + chalk.ansi(97)(element.title.slice(0, 30)) +
                      chalk.hex('#00C6BC')(`\n╠ `) + chalk.ansi(30).bgAnsi(91)(` Status: ` + res.status) +
                      chalk.hex('#00C6BC')(`\n╠ Output: `) + chalk.yellowBright(`FAIL`),
                      
                      chalk.ansi(35)`\n ▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░ \n`
                  );
            
            }
          })
          .catch((err) =>{
              if(err){
                  console.log("Error en la ejecución")
              }
          })        
                                  
}

    function validateAll(datalinks){
        //console.log(datalinks)
        
            const arrValidate = datalinks.map(item => validate(item))
            Promise.all(arrValidate)
            .then(res =>{
                //console.log(res)
            })
            .catch(err =>{
                //console.log(err)
            })
            
        
    }

module.exports= {
    validateAll,
};