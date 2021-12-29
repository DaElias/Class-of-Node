console.log("Inicio del programa!!") //1

setTimeout(()=>{console.log("Timeout #1")},3000); //5
setTimeout(()=>{console.log("Timeout #2")},0); //3
setTimeout(()=>{console.log("Timeout #3")},0); //4

console.log("Fin del programa!!") //2

