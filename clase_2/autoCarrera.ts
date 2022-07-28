import * as readlineSync from "readline-Sync";
let vueltas:number = 4;
let tiempoTotal:number=0;
for (let i= 0; i <vueltas;i++){
let tiempoDvueltas="ingresar tiempo ";
let readlineSync=require("readline-sync");
let tiempo=Number(readlineSync.question(tiempoDvueltas));
tiempoTotal+=tiempo
console.log(tiempoTotal);
}
let promedio = tiempoTotal /4;
console.log(promedio)