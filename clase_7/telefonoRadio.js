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
var telefono_1 = require("./telefono");
var TelefonoRadio = /** @class */ (function (_super) {
    __extends(TelefonoRadio, _super);
    function TelefonoRadio(frecuencia, bateriaActual) {
        var _this = _super.call(this, bateriaActual) || this;
        _this.frecuenciaActual = frecuencia;
        return _this;
    }
    TelefonoRadio.prototype.verFrecuenciaActual = function (frecuencia) {
        this.frecuenciaActual = frecuencia;
    };
    TelefonoRadio.prototype.getFrecuencia = function () {
        return this.frecuenciaActual;
    };
    return TelefonoRadio;
}(telefono_1.Telefono));
var miTelRadio = new TelefonoRadio(1458, 79);
console.log("La radio se encuentra en la frecuencia AM " + miTelRadio.getFrecuencia() + "y tiene un porcentaje de bateria del " + miTelRadio.getBateriaActual() + " % ");
