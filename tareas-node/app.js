require('colors');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const {inquireMenu, pausa} = require('./helpers/inquire');
console.clear();

let opt = '';

const main = async () => {
    do {
        opt = await inquireMenu();
        console.log(opt)
        await pausa();
    } while (opt.option != '0');

}

main();