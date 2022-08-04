import { Auto } from "./auto";

class RegistroAutomotor {
    nombre: string;

    autos: Auto[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.autos = [];

    }

    borrarAuto(auto: Auto) {
        let indice = this.autos.indexOf(auto);
        if (indice == -1) {
            console.log("el auto no se encuentra en el sistema");
        } else {
            this.autos.splice(indice);
            console.log(this.autos);

        }
    }
    agregarAuto(auto: Auto) {
        this.autos.push(auto);
        console.log(this.autos);

    }

    modificarAuto(autos) {
        for (let i = 0; i < autos.length; i++) {
            autos[i].setAuto(miAutoNuevo);
        }
    }
    setAuto(auto:any){
        this.autos=auto;
    }
}

let miAuto = new Auto(false, true);
miAuto.encenderAuto();
console.log(miAuto.getCambio());
miAuto.pasarCambio();
console.log(miAuto.getCambio());

let miAuto2 = new Auto(false, false);
let miAutoNuevo =new Auto(true,false);

let registro = new RegistroAutomotor("Benicio");

registro.agregarAuto(miAuto);
registro.agregarAuto(miAuto2);
registro.borrarAuto(miAuto2);
registro.modificarAuto(miAuto);