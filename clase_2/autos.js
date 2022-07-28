let vueltas= 4;
let tiempoTotal=0;
for (let i= 0; i <vueltas;i++){
tiempoDvueltas="ingresar tiempo ";
let readlineSync=require("readline-sync");
let tiempo=Number(readlineSync.question(tiempoDvueltas));
tiempoTotal+=tiempo
console.log(tiempoTotal);
}
let promedio = tiempoTotal /4;
console.log(promedio);
