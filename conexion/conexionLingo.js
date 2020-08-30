const child_process = require('child_process');

const { retrocederUnaCarpeta, reemplazarRutaDentroFichero } = require('../manageString/manageString');

const pathRaiz = retrocederUnaCarpeta(__dirname.toString());

const comnadoLingo = `runlingo "${pathRaiz}\\lingo\\patrones.ltf"`;

console.log(pathRaiz);

const fichero = reemplazarRutaDentroFichero('direccionExcel', `${pathRaiz}\\lingo\\patrones.ltf`);

// const comando = child_process.execSync(comnadoLingo).toString();

// console.log(comando);