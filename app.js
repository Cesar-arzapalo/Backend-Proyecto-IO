const { correrLingo } = require('./conexion/conexionLingo');

const { Data } = require('./models/data');
const { Patron } = require('./models/patron');


const procesoInicial = async() => {
    let datos = new Data(1000000, 147, 1000, [new Patron(123, 8840),
        new Patron(120, 8610), new Patron(120, 8610), new Patron(122, 8380)
    ]);

    await correrLingo(datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones);


    // datos = new Data(200000, 247, 30000, [new Patron(123, 8840),
    //     new Patron(120, 8610), new Patron(120, 8610), new Patron(122, 8380)
    // ]);

    // await correrLingo(datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones);

    // datos = new Data(100000, 400, 10000, [new Patron(123, 8840),
    //     new Patron(120, 8610), new Patron(120, 8610), new Patron(122, 8380)
    // ]);

    // await correrLingo(datos.presupuesto, datos.demandaInsatisfecha, datos.demandaTotal, datos.patrones);

};

procesoInicial();