//Modules - Modulos
//CommonJS, cada archivo es un modulo (por defecto)
//Modules - Codigo encapsulado (comparte solo lo minimo)

//const names = require('./4-names') // importa el objeto completo
const {lucas, other, ile} = require('./4-names') //Destructuring - desestructurar
const saludar = require('./5-utils')
const data = require('./6-alternative-exports')
require('./7-exports-funcion') // al importar este modulo se ejecuta la funcion suma
//console.log(data);
//saludar(names.lucas)
//saludar(names.other)
saludar(lucas)
saludar(other)
saludar(ile)