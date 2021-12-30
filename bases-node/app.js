const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs-config');
console.clear();
// console.log(argv);
//console.log(salida);
// c onsole.log(process.argv)

const base = argv.b;
const mostrar = argv.l;
const hasta = argv.h;


crearArchivo(base, mostrar, hasta)
    .then(msg => console.log(msg))
    .catch(e => console.log(e));



/*
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
*/