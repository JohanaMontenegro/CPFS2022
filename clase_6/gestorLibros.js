"use strict";
exports.__esModule = true;
var libros_1 = require("./libros");
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var libro = fs.readFileSync("Libros.txt", "utf-8");
var librosNombre = libro.split(",");
var gestorLibro = /** @class */ (function () {
    function gestorLibro() {
        this.libros = [];
    }
    gestorLibro.prototype.getLibros = function () {
        return this.libros;
    };
    gestorLibro.prototype.cargarLibros = function () {
        for (var i = 0; i < librosNombre.length; i++) {
            this.libros.push(new libros_1.Libro(librosNombre[i]));
        }
    };
    gestorLibro.prototype.eliminarLIbro = function (libro) {
        var i = this.libros.indexOf(libro);
        this.libros.splice(i, 1);
    };
    gestorLibro.prototype.modificarLibro = function (libro) {
        var i = this.libros.indexOf(libro);
        console.log(this.libros[i]);
        this.libros[i].setLibro(ReadlineSync.question("ingrese nombre del libro"));
    };
    gestorLibro.prototype.consultarLibro = function (libro) {
        var i = this.libros.indexOf(libro);
        console.log(this.libros[i]);
    };
    gestorLibro.prototype.agregarLibro = function (libro) {
        this.libros.push(libro);
    };
    return gestorLibro;
}());
var miLibro1 = new libros_1.Libro("caperucita Roja");
var miLibro2 = new libros_1.Libro("Patito Feo");
var miLibro3 = new libros_1.Libro("Los 3 Cerditos");
var gestorLibros = new gestorLibro();
gestorLibros.agregarLibro(miLibro1);
gestorLibros.agregarLibro(miLibro2);
gestorLibros.agregarLibro(miLibro3);
gestorLibros.cargarLibros();
console.log(gestorLibros.getLibros());
gestorLibros.consultarLibro(miLibro1);
gestorLibros.eliminarLIbro(miLibro1);
miLibro1.setLibro("Pulgarcito");
console.log(miLibro1.getLibro());
gestorLibros.modificarLibro(miLibro2);
