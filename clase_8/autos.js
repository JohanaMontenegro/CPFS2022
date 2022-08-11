"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(velocidad, cambio) {
        this.estado = false;
        this.velocidadActual = velocidad;
        this.cambioActual = cambio;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estado == false) {
            console.log("el auto se encuentra Apagado");
        }
        else {
            this.estado = true;
            console.log("el auto esta Prendido");
        }
    };
    return Auto;
}());
exports.Auto = Auto;
var miAuto = new Auto(90, 3);
miAuto.encenderApagar();
