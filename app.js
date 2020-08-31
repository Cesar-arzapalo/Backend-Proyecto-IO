const { correrLingo } = require('./conexion/conexionLingo');
const { leerResultado, escribirParametros } = require('./conexion/conexionExcel');

const presupuesto = 10000;
const demandaInsatisfecha = 247;
const demandaTotal = 1000;

const patrones = [
    { ocupantes: 123, costo: 8840 },
    { ocupantes: 120, costo: 8610 },
    { ocupantes: 120, costo: 8610 },
    { ocupantes: 112, costo: 8380 }
];

const procesoInicial = () => {

};