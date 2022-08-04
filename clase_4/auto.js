"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(alarmaEncendida, subirBajar) {
        this.encendido = false;
        this.cambios = 0;
        this.alarma = alarmaEncendida;
        this.vidrios = subirBajar;
    }
    Auto.prototype.encenderAuto = function () {
        if (this.encendido) {
            this.encendido = false;
            console.log("el auto esta encendido");
        }
        else {
            this.encendido = true;
            console.log("el auto esta encendido");
        }
    };
    Auto.prototype.pasarCambio = function () {
        this.cambios += 1;
    };
    Auto.prototype.getCambio = function () {
        return this.cambios;
    };
    Auto.prototype.setpasarCambio = function (cambiar) {
        this.cambios = cambiar;
    };
    return Auto;
}());
exports.Auto = Auto;
