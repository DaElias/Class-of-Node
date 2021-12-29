const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        description: 'base del la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Mostrar el resultado en pantalla'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        description:'mostrar el hasta x numero deseado'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Error: La base debe ser un Numero!!';
        }
        if (isNaN(argv.h)) {
            throw 'Error: La h debe ser un Numero!!';
        }
        //si no hay errores debemos retornar true
        return true;
    })
    .argv;

module.exports = argv;