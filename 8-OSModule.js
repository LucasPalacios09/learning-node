const os = require('os')

//informacion sobre el usuario actual
const user = os.userInfo()
console.log(user);

//metodo que retorna el tiempo en actividad del sistema en segundos
console.log(`El tiempo activo del sistema es ${os.uptime()} segundos`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);