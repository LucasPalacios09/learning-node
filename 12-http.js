const http = require('http')

//creamos una constante para inicializar el servidor
//luego creamos el servidor con createServer()
//createServer recive como parametros un callback con un request y un resoponse
const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.end('Bienveidos a nuestra pagina principal / welcome to our home page')
    }
    else if (req.url == '/about') {
        res.end('Un poco de nuestra historia')
    }
    else {
        res.end(`
    <h1>Ooopss!!</h1>
    <p>La pagina que estas buscando no existe</p>
    <a href="/">Regresar a la pagina principal</a>`)}
});

server.listen(5000); //indicamos el puerto donde vamos a ejecutar nuestro servidor
