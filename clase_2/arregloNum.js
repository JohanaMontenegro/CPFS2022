var arreglo = [4, 6, 9, 3];
var sumar = 0;
function sumarArreglo() {
    for (var i = 0; i < arreglo.length; i++) {
        sumar = sumar + arreglo[i];
    }
    console.log("El resultado es: ", sumar);
}
sumarArreglo();
