"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombre) {
        this.nombreLibro = nombre;
        this.disponible = true;
    }
    Libro.prototype.getLibro = function () {
        return this.nombreLibro;
    };
    Libro.prototype.setLibro = function (newLibro) {
        this.nombreLibro = newLibro;
    };
    Libro.prototype.getEstado = function () {
        return this.disponible;
    };
    Libro.prototype.setEstado = function (estado) {
        this.disponible = estado;
    };
    return Libro;
}());
exports.Libro = Libro;
