import *as fs from "fs";

let persona: string = fs.readFileSync("votantes.txt", "utf8");
let lugar: string = fs.readFileSync("colegios.txt", "utf8");
let votante: string[] = persona.split(" ");
console.log(votante);
let ubicacion: string[] = lugar.split(" ");
console.log(ubicacion);

function dondeVotar(){
    
}