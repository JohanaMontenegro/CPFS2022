"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre) {
        this.nombre = nombre;
        this.autos = [];
    }
    RegistroAutomotor.prototype.borrarAuto = function (auto) {
        var indice = this.autos.indexOf(auto);
        if (indice == -1) {
            console.log("el auto no se encuentra en el sistema");
        }
        else {
            this.autos.splice(indice);
            console.log(this.autos);
        }
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.autos.push(auto);
        console.log(this.autos);
    };
    RegistroAutomotor.prototype.modificarAuto = function (autos) {
        for (var i = 0; i < autos.length; i++) {
            autos[i].setAuto(miAutoNuevo);
        }
    };
    RegistroAutomotor.prototype.setAuto = function (auto) {
        this.autos = auto;
    };
    return RegistroAutomotor;
}());
var miAuto = new auto_1.Auto(false, true);
miAuto.encenderAuto();
console.log(miAuto.getCambio());
miAuto.pasarCambio();
console.log(miAuto.getCambio());
var miAuto2 = new auto_1.Auto(false, false);
var miAutoNuevo = new auto_1.Auto(true, false);
var registro = new RegistroAutomotor("Benicio");
registro.agregarAuto(miAuto);
registro.agregarAuto(miAuto2);
registro.borrarAuto(miAuto2);
registro.modificarAuto(miAuto);
