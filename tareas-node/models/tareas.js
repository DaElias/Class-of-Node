const Tarea = require("./tarea");
require('colors');

class tareas {
    // _listado = {};
    constructor() {
        this._listado = {};
    }

    listarTarea() {
        const tareas = [];
        Object.keys(this._listado).forEach(key => {
            let tarea = this._listado[key];
            tareas.push(tarea);
        });
        return tareas;
    }
    listadoCompleto() {
        console.log('++Lista de Tareas Completo++\n'.red);
        Object.keys(this._listado).forEach((key, i) => {
            const idx = `${(i + 1)} .`.red;
            const mensaje = this._listado[key].des;
            const estado = this._listado[key].compltetada ?
                'Completada'.green :
                'Pendiente'.red
                ;
            console.log(`${idx} ${mensaje} :~: ${estado}`)
        });
    }
    // listaod pendientes o completos
    ListadosPeCom(completada = false) {
        console.log(`++Lista de Tareas ${completada ? 'Completadas'.green : 'Pendientes'.red} ++\n`)
        Object.keys(this._listado).forEach(key => {
            if (this._listado[key].compltetada == completada) {
                const mensaje = this._listado[key].des;
                completada && console.log(`- ${mensaje}  :: Completada en ${this._listado[key].compltetadaEn}`);
                !completada && console.log(`- ${mensaje} `);
            }
        });
    }

    listarPendienteCompletadas() {
        Object.keys(this._listado).forEach(key => {
            if (this._listado[key].compltetada == false) {
                this._listado[key].compltetada = true;
            }
        });
    }
    cargarTareas(array = []) {
        array.forEach(elemento => {
            this._listado[elemento.id] = elemento;
        });
    }


    crearTarea(des = '') {
        const tarea = new Tarea(des);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = tareas;