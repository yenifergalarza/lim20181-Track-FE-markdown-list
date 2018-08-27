#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const validate = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
const validateLink = /\[[\w\s]*\](\((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
let equalLink = 0;
const [, , ...args] = process.argv
const md = args[0];




const absolutePath =path.resolve(md)

console.log(absolutePath);


const linksMd = () => {
	fs.stat(absolutePath, function (err, stats) {

		if (stats.isFile()) {
			console.log('  file');
			func(absolutePath);
			

		}
		if (stats.isDirectory()) {
			console.log(' directory');
			readDir(absolutePath);
		}
	})

}

const func = (absolutePath) => {
	console.log(`Hola soy md`);
	const statsL = {};

	fs.readFile(absolutePath, 'utf8', (err, buff) => {

		if (path.extname(absolutePath) !== '.md') {
			console.log('no se pudo leer el archivo');
		}

		else {
			// console.log(buff.toString());
			console.log('entre a fs');
			let str = buff.toString();


			//console.log(Array.isArray(equal));
			let equalLink = str.match(validateLink);
			// console.log(equalLink);

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

				//console.log(data);
				fetch(links)
					.then(response => {
						if (response.status >= 200 && response.status < 400) {
							
								statsL.href = links;
								statsL.status = response.status;
								statsL.statusText =  'ok';
								statsL.file= absolutePath;
                              console.log(statsL);
							  return statsL;
							  					
							
						} 
						else if (response.status >400 && response.status<500){
							statsL.href = links;
								statsL.status = response.status;
								statsL.statusText =  'fail';
								statsL.file= absolutePath;
							console.log(statsL);
							return statsL;
							}

							
					

					})
				.catch(error =>
					{statsL.href = links;
						statsL.status = 'link sin status';
						statsL.statusText =  'fail';
						statsL.file= absolutePath;
						console.log(statsL);

						return statsL;
					})

						 
			})

       let stats =() =>{
		console.log(`Total: ${arrLinks.length}`);

	   }


stats();

		}
	});
}









const readDir = (absolutePath) => {
	fs.readdir(absolutePath, (err, data) => {
		console.log("estas aqui");
		console.log(data);

	})
}





linksMd();


// 

//console.log(process.argv)
module.exports=func;
module.exports=readDir;
module.exports=linksMd;
