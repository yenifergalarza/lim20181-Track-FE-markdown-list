#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const validate = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;

const [, , ...args] = process.argv
let md = `${args}`
const check = () => {

	if (path.extname(md) !== '.md') {
		console.log('no se pudo leer el archivo');
	}

	else {
		const func = () => {
			console.log(`Hola soy md`);

			fs.readFile(args[0], 'utf8', (err, buff) => {
				// console.log(buff.toString());
				console.log('entre a fs');
				let str = buff.toString();
				console.log(typeof str);
				let equal = str.match(validate)  ;
				console.log(equal); 

				//var result = validate.exec (str);
               //console.log(result);

			});
		}
		func();

	}
}


check();


// 

//console.log(process.argv)
