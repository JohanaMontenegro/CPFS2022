import { Profesor } from "./profesor";

export class Alumno
{
    private nombre:string;
    private nota:number;
    private aprovado:boolean;

constructor(name:string,note:number){
    this.nombre=name;
    this.nota=note;
}
aprobar(){
    if(this.nota>=7){
        console.log("esta aprobado");
    }else
    this.aprovado=false;
    console.log("esta desaprobado");
}
}

