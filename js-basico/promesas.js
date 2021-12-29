empleados = [
    {
        id: 12,
        name: "david",
        salario: 399
    },
    {
        id: 3,
        name: "Juana",
        salario: 100
    }
]

/*
Old method 
const getSalario = (id, callback) => {
    const getSalario = empleados.find(Element => Element.id === id)?.salario;
    if (getSalario) {
        callback(true,getSalario);
    }else{
        callback(false,`Error!! id:${id} no encontrado `);
    }
}
getSalario(12, (valid, data) => {
    if (valid) {
        console.log(data);
    } else {
        console.log("Error!! ", data);
    }
}) 
*/
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(Element => Element.id === id)?.salario;
        empleado ?
            resolve(empleado)
            :
            reject("Error empleado id:" + id + " no existe!!");
    });
}
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(Empleado => Empleado.id === id)?.name;
        (empleado) ?
            resolve(empleado)
            :
            reject("Error!! empleado no encontrado");
    });
}

/*
getSalario(12).then(empleado => console.log(empleado)).catch(e => console.log(e));
getEmpleado(12).then(empleado => console.log(empleado)).catch(e => console.log(e));
 */
const id = 12;
let nombre;

getEmpleado(id)
.then(empleado => {
    nombre = empleado;
    return getSalario(id)
})
.then(salario => console.log(`El salario de ${nombre} es $ ${salario}`))
.catch(e => console.log(e));