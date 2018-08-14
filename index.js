

const fs = require('fs');
fs.readFile('README.md','utf8',(err,buff)=>{
    console.log(buff.toString());
});
console.log('no se pudo leer el md');
