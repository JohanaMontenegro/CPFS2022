import { Telefono } from "./telefono";

class TelefonoRadio extends Telefono{
    frecuenciaActual: number;

    constructor(frecuencia: number, bateriaActual: number) {
        super( bateriaActual);
        this.frecuenciaActual = frecuencia;
   }
verFrecuenciaActual(frecuencia:number){
   this.frecuenciaActual=frecuencia;
}
getFrecuencia(){
    return this.frecuenciaActual;
}

}

let miTelRadio= new TelefonoRadio(1458,79);
console.log("La radio se encuentra en la frecuencia AM "+miTelRadio.getFrecuencia(
)+" y tiene un porcentaje de bateria del " +miTelRadio.getBateriaActual() + " % ");
