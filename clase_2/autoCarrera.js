"use strict";
exports.__esModule = true;
var vueltas = 4;
var tiempoTotal = 0;
for (var i = 0; i < vueltas; i++) {
    var tiempoDvueltas = "ingresar tiempo ";
    var readlineSync_1 = require("readline-sync");
    var tiempo = Number(readlineSync_1.question(tiempoDvueltas));
    tiempoTotal += tiempo;
    console.log(tiempoTotal);
}
var promedio = tiempoTotal / 4;
console.log(promedio);
