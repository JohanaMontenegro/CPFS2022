import { Libro } from "./libros";
import *as fs from "fs";
import *as ReadlineSync from "readline-sync";

let libro: string = fs.readFileSync("Libros.txt", "utf-8");
let librosNombre: string[] = libro.split(",")

class gestorLibro {
    libros: Libro[];
    constructor() {
        this.libros = [];
    }
    getLibros() {
        return this.libros;
    }

    cargarLibros() {
        for (let i = 0; i < librosNombre.length; i++) {
            this.libros.push(new Libro(librosNombre[i]));

        }

    }

    eliminarLIbro(libro: Libro) {
        let i: number = this.libros.indexOf(libro);
        this.libros.splice(i,1);
    }

    modificarLibro(libro: Libro){
        let i: number = this.libros.indexOf(libro);
        console.log(this.libros[i]);
        this.libros[i].setLibro(ReadlineSync.question("ingrese nombre del libro"));
        
    }

consultarLibro(libro: Libro) {
    let i = this.libros.indexOf(libro);
    console.log(this.libros[i]);
}

agregarLibro(libro: Libro) {
    this.libros.push(libro);
}
}

let miLibro1 = new Libro("caperucita Roja");

let miLibro2 = new Libro("Patito Feo");

let miLibro3 = new Libro("Los 3 Cerditos");

let gestorLibros = new gestorLibro();
gestorLibros.agregarLibro(miLibro1);
gestorLibros.agregarLibro(miLibro2);
gestorLibros.agregarLibro(miLibro3);
gestorLibros.cargarLibros();
console.log(gestorLibros.getLibros());
gestorLibros.consultarLibro(miLibro1);
gestorLibros.eliminarLIbro(miLibro1);
miLibro1.setLibro("Pulgarcito");
console.log(miLibro1.getLibro());
gestorLibros.modificarLibro(miLibro2);