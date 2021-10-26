const fs = require('fs');
const path = require('path');
//const dir = require('route')

const arrayPath = [];
const files = (dir) =>{
  const absolute = path.resolve(dir);
  const fileNames = fs.readdirSync(absolute)
  //console.log(fileNames)
  
  
  fileNames.map(item => {
  const route = path.join(absolute, item);
  const stat = fs.statSync(route);
  const statObjt = stat.isDirectory();
  //console.log(route)
  if(statObjt === true){
    files(route)
    //console.log("Soy un directorio" + files(route))

  }else if (path.extname(route) === ".md" ||
   path.extname(route) === "markdown"){
    arrayPath.push(route);
  }
});
return arrayPath
//console.log(array)
};




module.exports = {
   files,
   };