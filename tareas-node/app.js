require('colors');
const { inquireMenu, pausa,
    leerInput } = require('./helpers/inquire');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardadDatos
    , leerDatos } = require('./models/guardadDatos');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');



console.clear();

const main = async () => {
    //instaciamos las variables
    let opt = '';
    const tareas = new Tareas();
    const newDatos = leerDatos();

    newDatos && tareas.cargarTareas(newDatos);
    // if (newDatos) {
    //     tareas.cargarTareas(newDatos);
    // }
    do {
        opt = await inquireMenu();

        switch (opt.option) {
            case '1':
                //clear tarea
                const { desc } = await leerInput('Descipcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.ListadosPeCom(true);
                break;
            case '4':
                tareas.ListadosPeCom(false);

                break;
            case '5':
            tareas.listarPendienteCompletadas();
                break;
            default:
                break;
        }
        guardadDatos(tareas.listarTarea());
        await pausa();
    } while (opt.option != '0');
}

main();


// const tareas = new Tareas();
// tareas
// tareas.crearTarea('caminar');
// tareas.crearTarea('correr');

// console.log(tareas)




