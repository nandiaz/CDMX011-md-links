const fs = require('fs');
const path = require('path');
//const dir = require('route')

let arrayFiles = [];
const files = (dir) =>{
  const absolute = path.resolve(dir);
  const fileNames = fs.readdirSync(absolute)

fileNames.forEach(item => {
  const route = path.join(absolute, item);
  if(fs.statSync(route).isDirectory()){
    files(route)

  }else if (path.extname(route) === ".md" ||
   path.extname(route) === "markdown"){
    arrayFiles.push(route);
  }
 });
  return arrayFiles
};


module.exports = {
   files,
   };