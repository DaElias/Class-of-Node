require('colors');
const { inquireMenu, pausa,
    leerInput } = require('./helpers/inquire');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');



console.clear();

const main = async () => {
    //instaciamos las variables
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquireMenu();

        switch (opt.option) {
            case '1':
                //clear tarea
                const { desc } = await leerInput('Descipcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas);
                break;
            case '3':

                break;
            case '4':

                break;
            case '5':

                break;
            default:
                break;
        }

        await pausa();
    } while (opt.option != '0');

}

main();


// const tareas = new Tareas();
// tareas
// tareas.crearTarea('caminar');
// tareas.crearTarea('correr');

// console.log(tareas)




