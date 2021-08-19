//comandos para utilizar npm y dependencias
// npm --version se utiliza para saber que version de npm tenemos

//local dependency - usalo solo en este proyecto en particular
// npm i <nombre del package>

//global dependency - utiliza la dependencia de manera global
//npm install -g <nombre del package>

//package.json - archivo manifiesto (almacena informacion importante sobre el projecto/paquetes)
//enfoque manual (crear el package.json en la raiz(root), crear propiedades, etc)
//npm init (paso a paso, presionar enter para omitir)
//npm init -y (todo por defecto)

const _ = require('lodash') // utilizando la dependencia lodash
const items = [1,[2,[3,[4]]]]
const newArray = _.flattenDeep(items)
console.log(newArray);