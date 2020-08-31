const { correrLingo } = require('./conexion/conexionLingo');
const { leerResultado, escribirParametros } = require('./conexion/conexionExcel');
const { retrocederUnaCarpeta } = require('./manageString/manageString');

const { Data } = require('./models/data');
const { Patron } = require('./models/patron');

const pathRaiz = __dirname.toString();
const direccionExcel = `${pathRaiz}\\excel\\patrones.xlsx`;


const procesoInicial = async() => {
    let datos = new Data(1000000, 247, 1000, [new Patron(123, 8840),
        new Patron(120, 8610), new Patron(120, 8610), new Patron(122, 8380)
    ]);

    console.log(direccionExcel, datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones);

    await escribirParametros(direccionExcel, datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones);


    console.log(await leerResultado(direccionExcel));

    await correrLingo();

    // datos = new Data(20000, 247, 3000, [new Patron(123, 8840),
    //     new Patron(120, 8610), new Patron(120, 8610), new Patron(122, 8380)
    // ]);

    // await escribirParametros(direccionExcel, datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones)


    // await leerResultado(direccionExcel);

    // await correrLingo();

    // datos = new Data(10000, 400, 1000, [new Patron(123, 8840),
    //     new Patron(120, 8610), new Patron(120, 8610), new Patron(122, 8380)
    // ]);

    // await escribirParametros(direccionExcel, datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones)


    // await leerResultado(direccionExcel);

    // await correrLingo();

};

procesoInicial();