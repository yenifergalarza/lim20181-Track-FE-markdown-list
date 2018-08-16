#!/usr/bin/env node
const fs = require('fs');
const path = require('path');


const [, , ...args] = process.argv

const check = () => {

	if (path.extname(`${args}`) !== '.md') {
		console.log('no se pudo leer el archivo');
	} 
	
	else{
		const func = () => {
			console.log(`Hola soy Yenifer${args}`);

			fs.readFile(args[0], 'utf8', (err, buff) => {
				console.log(buff.toString());
				console.log('entre a fs');
			});
		}
			func();

	} 
}
check()




//console.log(process.argv)
console.log(args)