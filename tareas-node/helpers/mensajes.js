require('colors');


const mostrarMenu = () => {

    return new Promise((resolve) => {
        console.clear();
        console.log('========================='.rainbow);
        console.log(' Selecione una opcion '.blue);
        console.log('=========================\n'.rainbow);
        console.log('1. '.red + 'Crear una tarea.')
        console.log('2. '.red + 'Listar tarea.')
        console.log('3. '.red + 'Lista tarea completada.')
        console.log('4. '.red + 'Lista tarea pendiente.')
        console.log('5. '.red + 'Completar tareas.')
        console.log('6. '.red + 'Borrar tareas.')
        console.log('0. '.red + 'Salir\n'.rainbow)
        const readLinea = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLinea.question('Seleccione una  '.green + 'Opcion'.rainbow + ' para continuar: '.green, (opt) => {
            // console.log({ opt });
            resolve(opt);
            readLinea.close();
        });

    });

}

const pausa = () => {
    return new Promise((resolve) => {
        const readLinea = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLinea.question('Precione '.green + 'Enter'.rainbow + ' para continuar'.green, (opt) => {
            // console.log({ opt });
            readLinea.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu, pausa
}