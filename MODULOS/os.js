const os=require('os');

const variablesOs={
    ramDisponible:os.freemem(),
    ramTotal:os.totalmem(),
    SO:os.type(),
    datosFrecuencia:os.cpus()
}
// console.log(variablesOs.datosFrecuencia.slice(0,1).map((registro)=> registro.times));
module.exports=variablesOs;