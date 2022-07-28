var televisor = /** @class */ (function () {
    function televisor(reciboCanal) {
        this.canalActual = 0;
        this.estado = false;
        this.canalActual = reciboCanal;
    }
    televisor.prototype.cambiarCanal = function () {
        this.canalActual = 10;
    };
    televisor.prototype.getcanalActual = function () {
        return this.canalActual;
    };
    return televisor;
}());
var myTele = new televisor(15);
console.log(myTele.getcanalActual());
