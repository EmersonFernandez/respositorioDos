const os=require('./MODULOS/os');
const funciones=require('./MODULOS/funciones');
console.table(os.datosFrecuencia.slice(0,1).map((registro)=> registro.times));
console.log("Sistema Operativo: "+os.SO);
console.log("____________________________________")
console.log("RAM disponible",os.ramDisponible,"byte");
console.log("RAM en GB",funciones.disponibleRam(os.ramDisponible),"GB");
console.log("____________________________________");
console.log("RAM total ",os.ramTotal,"byte");
console.log("RAM total en GB",funciones.totalrRam(os.ramTotal),"GB");


