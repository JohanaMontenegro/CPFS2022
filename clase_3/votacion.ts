import *as fs from "fs";

let persona: string = fs.readFileSync("votantes.txt", "utf8");
let lugar: string = fs.readFileSync("colegios.txt", "utf8");
let votante: string[] = persona.split(",");
console.log(votante);
let ubicacion: string[] = lugar.split(",");
console.log(ubicacion);

function dondeVotar(nombre: string): void {
    let i = votante.indexOf(nombre);
    if (i == -1) {
        console.log("La persona " + nombre + " no esta registrada en el padrón");
    }
    else if (i == 0) {
        console.log("La persona " + nombre + " le corresponde votar en el colegio " + ubicacion[0]);
    }
    else if (i == 1) {
        console.log("La persona " + nombre + " le corresponde votar en el colegio " + ubicacion[1]);
    }

    else if (i == 2) {
        console.log(" La ersona " + nombre + " le corresponde votar en el colegio " + ubicacion[2]);
    }

    else if (i == 3) {
        console.log("La persona " + nombre + " le corresponde votar en el colegio " + ubicacion[3]);
    }

}
dondeVotar("MariaPaz");
dondeVotar("Franco");
dondeVotar("Pilar");
dondeVotar("Marcelo");