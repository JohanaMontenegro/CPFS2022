import { Telefono } from "./telefono";

export class TelefonoCamara extends Telefono {
    camara: boolean = false;

    constructor(camara: boolean, bateriaActual: number) {
        super( bateriaActual)
        this.camara = camara

    }
    sacarFoto() {
        if (this.camara == false) {
            console.log("la camara se encuentra apagada");
        }

        else {
            console.log("tomar foto");
        }
    }
}

let miCelu = new TelefonoCamara(false, 65);

miCelu.sacarFoto();
console.log("La bateria actual es " + miCelu.getBateriaActual());