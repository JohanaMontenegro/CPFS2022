"use strict";
exports.__esModule = true;
var fs = require("fs");
var persona = fs.readFileSync("votantes.txt", "utf8");
var lugar = fs.readFileSync("colegios.txt", "utf8");
var votante = persona.split(" ");
console.log(votante);
var ubicacion = lugar.split(" ");
console.log(ubicacion);
function buscarVotante(votando) {
    if (votante.indexOf(votando) != -1)
        console.log('el votante${votando}$ corresponde votar en el lugar de ubicacion con indice ${votante.indexOf(votando)}$');
}
