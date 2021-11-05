const fetch = require( "node-fetch");
//const { captureLinks }= require( "./links");
//const { files } = require("./findFiles");

//const dir = captureLinks(files(process.argv[2])); // Ruta
//console.log(dir)
//const links = captureLinks(dir);
//const links = captureLinks(file.files(ruta));
//console.log(dir)


const validate = (link) => {
    // const filtro = captureLinks(function(element){
    //     return element.includes("http");
    //   });
    //console.log("Hola"+link)
    //console.log(link)
     link.forEach((element) =>{
        element.url.forEach((url) =>{
            console.log(url)
        })
        
     })
    //     fetch(url)
    //     .then (function (response){
    //             if(response.status >= 200 && response.status <= 299){
    //                  console.log(
    //                          (`Ruta: ` + dir) +
    //                          (`Link: ` + link) + 
    //                          (`Status: ` + response.status)
    //                          `\n-----------------------------------`
    //                      )   
    //                     }
    //                     return url
    //                 })
                    
                    
    //             })
                    
    }

module.exports= {
    validate,
};