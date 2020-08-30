const child_process = require('child_process');

const { retrocederUnaCarpeta, generarDentroFichero } = require('../manageString/manageString');

const pathRaiz = retrocederUnaCarpeta(__dirname.toString());

const direccionLingoBase = `${pathRaiz}\\lingo\\patrones.ltf`;
const direccionLingoAEjecutar = `${pathRaiz}\\lingo\\patronesEjecutable.ltf`;

const comnadoLingo = `runlingo "${direccionLingoAEjecutar}"`;


const fichero = generarDentroFichero('direccionExcel', direccionLingoBase, direccionLingoAEjecutar);

// const comando = child_process.execSync(comnadoLingo).toString();

// console.log(comando);