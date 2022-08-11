import { Auto } from "./autos";

class AutoCarrera extends Auto{
    linea:string;
    modelo:string;

    constructor(linea:string,modelo:string,velocidad:number,cambio:number){
        super(velocidad,cambio)
        this.linea=linea;
        this.modelo=modelo;

    }

    acelerar(){
        this.velocidadActual +=70;
    }
    getlinea():string{
        return this.linea;
    }
    getmodelo():string{
        return this.modelo;
    }
}

let myCar=new AutoCarrera("Ford","Taunus",100,4);
console.log(myCar.getlinea(), myCar.getmodelo());
myCar.acelerar();
