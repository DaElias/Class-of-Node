const { v4: uuidv4 } = require('uuid'); // <== NOW DEPRECATED!

class Tarea {
    // id = '';
    // des = '';
    // completado = null;
    constructor(des) {
        this.id = uuidv4();
        this.des = des;
    }

}

module.exports = Tarea;