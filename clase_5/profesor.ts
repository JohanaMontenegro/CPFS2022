import {Alumno} from "./alumno";

export class Profesor{
    nombreProfe:string;

    alumnos:Alumno[]=[new Alumno("Pablo",6),new Alumno("Nicolas",9),new Alumno("Fernanda",5)];
     
    constructor(nameProfe:string){
        this.nombreProfe=nameProfe;
    }
}