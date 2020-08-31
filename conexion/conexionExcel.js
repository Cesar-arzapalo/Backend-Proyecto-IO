const Excel = require('exceljs');

const { retrocederUnaCarpeta } = require('../manageString/manageString');

const pathRaiz = retrocederUnaCarpeta(__dirname.toString());

const direccionExcel = `${pathRaiz}\\excel\\patrones.xlsx`;

const workbook = new Excel.Workbook();




// const datos = {
//     presupuesto,
//     demandaInsatisfecha,
//     demandaTotal,
//     patrones
// };

const presupuesto = 10000;
const demandaInsatisfecha = 247;
const demandaTotal = 1000;

const patrones = [
    { ocupantes: 123, costo: 8840 },
    { ocupantes: 120, costo: 8610 },
    { ocupantes: 120, costo: 8610 },
    { ocupantes: 112, costo: 8380 }
];



const cargarDatos = (presupuesto, demandaInsatisfecha, demandaTotal, patrones) => {
    datos.presupuesto = presupuesto;
    datos.demandaInsatisfecha = demandaInsatisfecha;
    datos.demandaTotal = demandaTotal;

    let idx = 0;

    for (let patron of patrones) {
        datos.patrones[idx].ocupantes = patron.ocupantes;
        datos.patrones[idx].costo = patron.costo;
        idx += 1;
    }

}

const leerResultado = async(direccion) => {

    await workbook.xlsx.readFile(direccion);

    const woorksheets = workbook.worksheets[0];

    const cantidadPatrones = {
        CnP1: woorksheets.getCell('A23').value,
        CnP2: woorksheets.getCell('B23').value,
        CnP3: woorksheets.getCell('C23').value,
        CnP4: woorksheets.getCell('D23').value
    };

    return cantidadPatrones;
};

const escribirParametros = async(direccion) => {
    await workbook.xlsx.readFile(direccion);

    const woorksheets = workbook.worksheets[0];
    //Presupuesto
    woorksheets.getCell('A7').value = presupuesto;

    //Demanda Inzatisfecha de estudiantes
    woorksheets.getCell('C7').value = demandaInsatisfecha;

    //Demanda Total de estudiantes
    woorksheets.getCell('E7').value = demandaTotal;

    //cantidad de ocupantes de los patrones
    woorksheets.getCell('A13').value = patrones[0].ocupantes;
    woorksheets.getCell('B13').value = patrones[1].ocupantes;
    woorksheets.getCell('C13').value = patrones[2].ocupantes;
    woorksheets.getCell('D13').value = patrones[3].ocupantes;

    //Costo de cada patron
    woorksheets.getCell('A17').value = patrones[0].costo;
    woorksheets.getCell('B17').value = patrones[1].costo;
    woorksheets.getCell('C17').value = patrones[2].costo;
    woorksheets.getCell('D17').value = patrones[3].costo;

    return await workbook.xlsx.writeFile(direccion);


};

leerResultado(direccionExcel)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));

escribirParametros(direccionExcel, patrones, presupuesto, demandaInsatisfecha, demandaTotal)
    .then(resp => console.log('Se escribio de manera correcta los datos'))
    .catch(err => console.log(err));

module.exports = {
    leerResultado,
    escribirParametros
};