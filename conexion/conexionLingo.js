const child_process = require('child_process');

const { retrocederUnaCarpeta, generarDentroFichero } = require('../manageString/manageString');

const pathRaiz = retrocederUnaCarpeta(__dirname.toString());

const direccionLingoBaseNoEjecutable = `${pathRaiz}\\lingo\\patrones.ltf`;
const direccionLingoBaseEjecutable = `${pathRaiz}\\lingo\\patronesEjecutable.ltf`;
const direccionExcelEjecutar = `${pathRaiz}\\excel\\patrones.xlsx`;
const comnadoLingo = `runlingo "${direccionLingoBaseEjecutable}"`;


const fichero = generarDentroFichero('direccionExcel', direccionLingoBaseNoEjecutable, direccionExcelEjecutar, direccionLingoBaseEjecutable);

// const comando = child_process.execSync(comnadoLingo).toString();

// console.log(comando);