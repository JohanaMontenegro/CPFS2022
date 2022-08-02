"use strict";
exports.__esModule = true;
var fs = require("fs");
var persona = fs.readFileSync("votantes.txt", "utf8");
var lugar = fs.readFileSync("colegios.txt", "utf8");
var votante = persona.split(",");
console.log(votante);
var ubicacion = lugar.split(",");
console.log(ubicacion);
function dondeVotar(nombre) {
    var i = votante.indexOf(nombre);
    if (i == -1) {
        console.log("la persona " + nombre + " no esta registrada en el padrón");
    }
    else if (i == 0) {
        console.log("la persona " + nombre + " le corresponde votar en el colegio " + ubicacion[0]);
    }
    else if (i == 1) {
        console.log("la persona " + nombre + " le corresponde votar en el colegio " + ubicacion[1]);
    }
}
dondeVotar("MariaPaz");
dondeVotar("Franco");
