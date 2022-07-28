
import{Reproductor} from"./reproductor";

class reproduc{
    temas:number=0;
    estado:boolean=false;

    constructor(controlTemas:number){
        this.temas=controlTemas;
    }
    cambiarTema(){
        this.temas=8;
    }
    
   getcambiarTema():number{
    return this.temas;
   }
}
let myReproductor=new reproduc(6);
console.log(myReproductor.getcambiarTema());
