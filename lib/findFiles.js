const fs = require('fs');
const path = require('path');
//const dir = require('route')

let array = [];
const files = (dir) =>{
  const absolute = path.resolve(dir);
  const fileNames = fs.readdirSync(absolute)
 //console.log(fileNames)

fileNames.forEach(item => {
  const route = path.join(absolute, item);
  //console.log(route)
  if(fs.statSync(route).isDirectory()){
    files(route)
    //console.log("Soy un directorio" + files(route))

  }else if (path.extname(route) === ".md" ||
   path.extname(route) === "markdown"){
    array.push(route);
  }
 });
  return array
};


module.exports = {
   files,
   };