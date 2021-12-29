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
];


const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(Element => Element.id === id)?.salario;
        empleado ?
            resolve(empleado)
            :
            reject(`Error empleado id:${id} no existe!!`);
    });
}
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(Empleado => Empleado.id === id)?.name;
        (empleado) ?
            resolve(empleado)
            :
            reject(`Error empleado id:${id} no existe!!`);
    });
}

const id = 122;

const getInfoUsar = async(id) =>{
    try{
        const nombre = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${nombre} tiene un salario de $ ${salario}!!`;
    }catch(e){
        throw e;
    }
}

getInfoUsar(id).then(msg => console.log(msg,"\nTODO BIEN")).catch(e => console.log(e,"\nTODO MAL"));

