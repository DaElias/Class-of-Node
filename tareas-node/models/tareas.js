const Tarea = require("./tarea");

class tareas {
    // _listado = {};
    constructor() {
        this._listado = {};
    }


    crearTarea(des = '') {
        const tarea = new Tarea(des);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = tareas;