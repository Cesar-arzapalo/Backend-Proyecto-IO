const fs = require('fs');

const aumentarBarraInvertida = (direccion) => {
    let dir = direccion.split('');
    dir = dir.map(letra => (letra === '\\') ? letra += '\\' : letra);
    return dir.join('');
};

const retrocederUnaCarpeta = (direccion) => {
    let dir = direccion.split('\\');

    return dir.slice(0, dir.length - 1).join('\\');
};


const escribirArchivo = (dir, data) => new Promise((resolve, reject) => {
    fs.writeFile(dir, data, (err) => {
        if (err) reject(err);
        resolve('data.json');
    });
});

const leerArchivo = (dir) => new Promise((resolve, reject) => {
    fs.readFile(dir, (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

const reemplazarRutaDentroFichero = async(nombreVariable, direccion) => {
    let archivoString = await leerArchivo(direccion);
    console.log(archivoString.toString());
};

module.exports = {
    retrocederUnaCarpeta,
    reemplazarRutaDentroFichero
};