const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar, hasta = 10) => {
    try {
        let salida = '';
        for (let index = 0; index < hasta; index++) {
            salida += `${base} x ${index + 1} = ${base * (index + 1)}\n`;
        }
        if (listar) {
            console.log('====================\n'.rainbow);
            console.log(` Tabla del ${base}:`.green + ` hasta ${hasta} \n`.red);
            console.log('====================\n'.rainbow);
            console.log(salida.blue);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        //muetra el resultado de la tabla de multiplicar!!
        return `tabla-${base}.txt\nCreada exitosamente!!`.green;
    } catch (error) {
        throw error;
    }
    
}

//exportamos la funcion!!
module.exports = {
    crearArchivo
};
/*
const crearArchivo = (base = 1) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        salida += '====================\n';
        salida += ` Tabla del ${base} \n`;
        salida += '====================\n';
        for (let index = 0; index < 10; index++) {
            salida += `${base} x ${index + 1} = ${base * (index + 1)}\n`;
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt Guardado!!`);
    });
    
}
*/