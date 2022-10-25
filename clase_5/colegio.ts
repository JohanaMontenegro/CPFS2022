import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
import *as ReadlineSync from "readline-sync";


class Colegio {
    nombre: string;

    alumnos: Alumno[] = [new Alumno("Pablo", 6), new Alumno("Nicolas", 9), new Alumno("Fernanda", 5)];
    profesores: Profesor[] = [new Profesor("Mariela"), new Profesor("Silvia"), new Profesor("Marcelo")];

    constructor(nombreColegio: string) {
        this.nombre = nombreColegio;
    }
    setAlumno(alumno: Alumno[]) {
        this.alumnos = alumno;
    }
    setProfesor(profesor: Profesor[]) {
        this.profesores=profesor;
    }

    agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    quitarAlumno(alumno: Alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    }
    modificarAlumno(alumno = Alumno) {
        for (let i = 0; i < alumno.length; i++) {
            alumno[i].setAlumno.ReadlineSync.question('ingrese los datos del nuevo alumno');
        }
    }

    agregarprofesor(profesor: Profesor) {
        this.profesores.push(profesor);
    }

    quitarProfesor(profesor: Profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor));
    }

    modificarProfesor(profesor = Profesor) {
        for (let i = 0; i < profesor.length; i++) {
            profesor[i].setProfesor.ReadlineSync.question('ingrese los datos del nuevo profesor');

        }

    }
}
