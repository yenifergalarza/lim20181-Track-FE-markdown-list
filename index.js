#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const validate = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
const validateLink = /\[[\w\s]*\](\((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;

const [, , ...args] = process.argv
let md = `${args}`;
const mdLinks = () => {
	fs.stat(md, function (err, stats) {

		if (stats.isFile()) {
			console.log('    file');
			func(md);
		}
		if (stats.isDirectory()) {
			console.log('    directory');
			leerCarpeta(md);
		}
	})

}

const func = (md) => {
	console.log(`Hola soy md`);

	fs.readFile(md, 'utf8', (err, buff) => {

		if (path.extname(md) !== '.md') {
			console.log('no se pudo leer el archivo');
		}
	
		else {
		// console.log(buff.toString());
		console.log('entre a fs');
		let str = buff.toString();
		console.log(typeof str);
		let equal = str.match(validate);
		console.log(equal);


		//console.log(Array.isArray(equal));
		let equalLink = str.match(validateLink);
		console.log(equalLink);

		//var result = validate.exec (str);
		//console.log(result);

		}
	});
}
	
const leerCarpeta = (md) => {
	fs.readdir(md, (err, data) => {
		console.log("estas aqui");
		console.log(data)
	})
}




const check = () => {

	if (path.extname(md) !== '.md') {
		leerCarpeta(md);
	} else {

		func(md);

	}

}


mdLinks();


// 

//console.log(process.argv)
