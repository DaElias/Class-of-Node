const inquire = require('inquirer');
require('colors');

const opt = [
    {
        value: '1',
        name: '1. '.red + 'Crear una tarea.'
    },
    {
        value: '2',
        name: '2. '.red + 'Listar tarea.'
    },
    {
        value: '3',
        name: '3. '.red + 'Lista tarea completada.'
    },
    {
        value: '4',
        name: '4. '.red + 'Lista tarea pendiente.'
    },
    {
        value: '5',
        name: '5. '.red + 'Completar tareas.'
    },
    {
        value: '6',
        name: '6. '.red + 'Borrar tareas.'
    },
    {
        value: 0,
        name: '0. '.red + 'Salir\n'.rainbow
    }
];
const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: opt
    }
];

const inquireMenu = async () => {
    console.clear();
    console.log('========================='.rainbow);
    console.log(' Selecione una opcion '.blue);
    console.log('=========================\n'.rainbow);
    return await inquire.prompt(preguntas);
}

const pausa = async () => {
    console.log('\n'); 
    return await inquire.prompt(
        [
            {
                type: 'list',
                name: 'option',
                message: `Precione ${'Enter'.rainbow} para continuar ${'...'.green}`,
                choices:[{
                    type: 'input',
                    name: 'Enter'.rainbow,
                    message: '...'.rainbow,
                    choices: [{}]
                }]

            }
        ]
    )
}


const leerInput = async (message)=>{
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate( value ){
                if (value.length==0) {
                    return 'Porfavor ingrese un valor!!';
                }
                return true;
            }
        }
    ];
    return inquire.prompt(question);
}

module.exports = {
    inquireMenu,
    pausa,
    leerInput
};