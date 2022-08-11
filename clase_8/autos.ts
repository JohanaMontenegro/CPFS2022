export class Auto {
   protected estado: boolean;
   protected velocidadActual: number;
   protected cambioActual: number

    constructor (velocidad: number, cambio: number) {
        this.estado = false;
        this.velocidadActual = velocidad;
        this.cambioActual = cambio;

    }

    encenderApagar() {
        if (this.estado == false){
            console.log("el auto se encuentra Apagado")
        } 
        else {
            this.estado=true;
            console.log("el auto esta Prendido")
        }  
    }
}

let miAuto= new Auto(90,3);
miAuto.encenderApagar();