const empleados = [
    {
        id: 1,
        nombre: 'david',
        lastname: 'cerchiaro'
    },
    {
        id: 2,
        nombre: 'Juan',
        lastname: 'Castro'
    },
    {
        id: 3,
        nombre: 'Mariana',
        lastname: 'Smit'
    }
]
const salarios = [
    {
        id: 1,
        salario: 2233
    },
    {
        id: 2,
        salario: 233
    }
]

/*
const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id);
    if (empleado) {
        return empleado;
    } else {
        return `El id: ${id} no del empleado no existe!!`;
    }
}

console.log(getEmpleado(11));
 */

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(true, `El id: ${id} no del empleado no existe!!`);
    }
}

/*
getEmpleado(3, (error, empleado) => {
    if (error) {
        console.log('Error!!');
    } 
        console.log(empleado)
});
 */



const getSalario = (id, callback) => {
    const salario = salarios.find(element => element.id === id);
    if (salario) {
        callback(null, salario);
    } else {
        callback(true, `El id => ${id} no se encuentra!!`)
    }
}

getSalario(222, (error, salario) => {
    if (error) {
        console.log('Error!!');
    }
    console.log(salario);
});