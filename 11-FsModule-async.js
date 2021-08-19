const {readFile, writeFile} = require('fs');

//readFile y writeFile trabajan de manera asincronica, es por eso que recibe como parametros:
//1- El path o ruta donde se encuentra el archivo con el que estamos por trabajar
//2- El sistema de decodificacion para poder leer el contenido (utf8)
//3- Un callback que recibe como parametros un 'err' y 'result'

console.log('start');
readFile('content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile('content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err);
        }
        const second = result;

        writeFile('content/result-async.txt', `Este es el resultado: ${first}, ${second}`, (err, result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log('Fin de esta tarea');
            console.log(result);
        })
    })
})
console.log('Comenzando con la siguiente tarea');
