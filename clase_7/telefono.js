"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(bateria) {
        this.encendido = false;
        this.bateriaActual = bateria;
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("mensaje");
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("llamando");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.encendido) {
            this.encendido = false;
            console.log("el telefono esta apagado");
        }
        else
            this.encendido = true;
        console.log("el telefono esta encendido");
    };
    Telefono.prototype.getEncendido = function () {
        return this.encendido;
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.setBateriaActual = function (bateria) {
        this.bateriaActual = bateria;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
var telefono1 = new Telefono(56);
var telefono2 = new Telefono(0);
console.log(" La bateria actual esta en " + telefono1.getBateriaActual() + " % ");
telefono2.setBateriaActual(55);
console.log(" La bateria actual esta en " + telefono2.getBateriaActual() + " % ");
telefono1.hacerLlamada();
telefono2.mandarMensaje();
