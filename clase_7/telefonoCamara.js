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
exports.TelefonoCamara = void 0;
var telefono_1 = require("./telefono");
var TelefonoCamara = /** @class */ (function (_super) {
    __extends(TelefonoCamara, _super);
    function TelefonoCamara(camara, bateriaActual) {
        var _this = _super.call(this, bateriaActual) || this;
        _this.camara = false;
        _this.camara = camara;
        return _this;
    }
    TelefonoCamara.prototype.sacarFoto = function () {
        if (this.camara == false) {
            console.log("la camara se encuentra apagada");
        }
        else {
            console.log("tomar foto");
        }
    };
    return TelefonoCamara;
}(telefono_1.Telefono));
exports.TelefonoCamara = TelefonoCamara;
var miCelu = new TelefonoCamara(false, 65);
miCelu.sacarFoto();
console.log("La bateria actual es " + miCelu.getBateriaActual());
