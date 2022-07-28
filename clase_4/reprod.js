"use strict";
exports.__esModule = true;
var reproduc = /** @class */ (function () {
    function reproduc(controlTemas) {
        this.temas = 0;
        this.estado = false;
        this.temas = controlTemas;
    }
    reproduc.prototype.cambiarTema = function () {
        this.temas = 8;
    };
    reproduc.prototype.getcambiarTema = function () {
        return this.temas;
    };
    return reproduc;
}());
var myReproductor = new reproduc(6);
console.log(myReproductor.getcambiarTema());
