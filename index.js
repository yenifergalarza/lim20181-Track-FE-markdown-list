#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const validate = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
const validateLink = /\[[\w\s]*\](\((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
let equalLink = 0;
const [, , ...args] = process.argv
let md = `${args}`;
const mdLinks = () => {
	fs.stat(md, function (err, stats) {

		if (stats.isFile()) {
			console.log('    file');
			check(md);

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


			//console.log(Array.isArray(equal));
			let equalLink = str.match(validateLink);
			console.log(equalLink);

			const arrLinks = [];

			//var result = validate.exec (str);
			//console.log(result);
			equalLink.forEach(function (element) {
				const init = "(";
				const end = ")";
				let initS = element.indexOf(init);
				let endS = element.indexOf(end);
				subString = element.substring(initS + 1, endS);
				arrLinks.push(subString);
			})

			// console.log(arrLinks);
			arrLinks.forEach(links => {
				// console.log(data);
				fetch(links)
					.then(response => {
						if (response.status >= 200 && response.status < 400) {
							//  arrLinks.status=response.status,
							// arrLinks.statusText='ok'
							console.log(`${links}  ${response.status} ok`);
							
						}else{
							// arrLinks.status=response.status,
							// arrLinks.statusText='fail'
							console.log(`${links} ${response.status} fail`);

						}
						// response.status >=200 && response.status< 400;
						// {
						// 	status:response.status,
						// 	status.text:ok
						// }
						//  }
					})

		
						.catch(error =>console.log(`${links}  fail`))
			})

       let stats =() =>{
		console.log(`Total: ${arrLinks.length}`);

	   }


stats();

		}
	});
}









const leerCarpeta = (md) => {
	fs.readdir(md, (err, data) => {
		console.log("estas aqui");
		console.log(data);

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
