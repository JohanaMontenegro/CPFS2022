 export class Reproductor{
volumen:number=0;
estado:boolean=false;

constructor(controlVolumen:number){
    this.volumen=controlVolumen
}
cambiarVolumen(){
    this.volumen=18;
}

    getcambiarVolumen():number{
        return this.volumen;
    }
}

let miReprod=new Reproductor(12);
console.log(miReprod.getcambiarVolumen());