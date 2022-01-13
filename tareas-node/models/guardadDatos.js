const fs = require('fs');
const ruta = './database/data.json';


const guardadDatos = (data) => {
    //    JSON.stringify(dato)  => convierte el tipo de dato sea bool, array, etc a String.
    fs.writeFileSync(ruta, JSON.stringify(data));
}
const leerDatos = () => {
    if (!fs.existsSync(ruta)) {
        return null;
    }
    // El {enconding: 'type'} el readFileSync te devuelve los datos en bin
    // pero con el encoding te devuelve los datos en un formato eceptable.
    const datos = fs.readFileSync(ruta, { encoding: 'utf-8' });
    // JSON.parse(datos) trasforma los datos de String al formato inicial.
    return JSON.parse(datos);
}

module.exports = {
    guardadDatos, leerDatos
}