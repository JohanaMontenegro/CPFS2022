export class Telefono {
    private encendido: boolean;
    private bateriaActual: number;

    constructor(bateria: number) {
        this.encendido = false;
        this.bateriaActual = bateria;
    }

    mandarMensaje() {
        console.log("mensaje");
    }

    hacerLlamada() {
        console.log("llamando");

    }
    prenderApagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log("el telefono esta apagado");
        }
        else
            this.encendido = true;
        console.log("el telefono esta encendido")
    }

    getEncendido(): boolean {
        return this.encendido;
    }

    getBateriaActual(): number {
        return this.bateriaActual;

    }

    setBateriaActual(bateria: number) {
        this.bateriaActual = bateria;
    }
}

let telefono1 = new Telefono(56);
let telefono2 = new Telefono(0);

console.log(" La bateria actual esta en " + telefono1.getBateriaActual() + " % ");
telefono2.setBateriaActual(55);
console.log(" La bateria actual esta en " + telefono2.getBateriaActual() + " % ");

telefono1.hacerLlamada();
telefono2.mandarMensaje();