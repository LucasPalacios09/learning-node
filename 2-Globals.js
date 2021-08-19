// GLOBALS - NO WINDOW!!

//__dirname  - camino al directorio actual
//__filename - nombre de archivo
// require   - funcion para usar modulos (CommonJS)
// module    - informacion sobre el modulo actual
// process   - informacion sobre el entorno en donde el programa esta siendo ejecutado

console.log(__dirname);

setInterval(() => {
    console.log('hello world');
}, 1000);