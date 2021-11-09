const { url } = require("inspector");
const fetch = require( "node-fetch");
//const { captureLinks }= require( "./links");
//const { files } = require("./findFiles");

//const dir = captureLinks(files(process.argv[2])); // Ruta
//console.log(dir)
//const links = captureLinks(dir);
//const links = captureLinks(file.files(ruta));
//console.log(dir)


const validate = (element) => {
    //console.log(link)
    
       
        return fetch(element.url)
        .then (function(res) {
            if (res.status >= 200 && res.status < 300) {
              element.status = res.status;
              element.message = 'ok';
              return element
            } else {
              element.status = res.status;
              element.message = 'fail'
              return element
            
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
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
            
        
    }

module.exports= {
    validateAll,
};