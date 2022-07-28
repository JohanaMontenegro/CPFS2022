"use strict";
exports.__esModule = true;
exports.Reproductor = void 0;
var Reproductor = /** @class */ (function () {
    function Reproductor(controlVolumen) {
        this.volumen = 0;
        this.estado = false;
        this.volumen = controlVolumen;
    }
    Reproductor.prototype.cambiarVolumen = function () {
        this.volumen = 18;
    };
    Reproductor.prototype.getcambiarVolumen = function () {
        return this.volumen;
    };
    return Reproductor;
}());
exports.Reproductor = Reproductor;
var miReprod = new Reproductor(12);
console.log(miReprod.getcambiarVolumen());
