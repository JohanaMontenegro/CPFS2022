"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var autos_1 = require("./autos");
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(linea, modelo, velocidad, cambio) {
        var _this = _super.call(this, velocidad, cambio) || this;
        _this.linea = linea;
        _this.modelo = modelo;
        return _this;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 70;
    };
    AutoCarrera.prototype.getlinea = function () {
        return this.linea;
    };
    AutoCarrera.prototype.getmodelo = function () {
        return this.modelo;
    };
    return AutoCarrera;
}(autos_1.Auto));
var myCar = new AutoCarrera("Ford", "Taunus", 100, 4);
console.log(myCar.getlinea(), myCar.getmodelo());
myCar.acelerar();
