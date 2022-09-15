let data = `{"materias":[
{   "nombre":"Lengua",
    "dia": "lunes",
    "horario":"09-10",
    "cantidadHoras":1,
    "asistencia":"si"
},
{
    "nombre":"Matematicas",
    "dia": "martes",
    "horario":"08-09",
    "cantidadHoras":1,
    "asistencia":"no"
},
{
    "nombre":"Historia",
    "dia":"miércoles" ,
    "horario":"10-12",
    "cantidadHoras":2,
    "asistencia":"si"
},
{
    "nombre":"Química",
    "dia":"jueves" ,
    "horario":"09-11",
    "cantidadHoras":2,
    "asistencia":"si"
},
{
    "nombre":"Física",
    "dia":"viernes",
    "horario":"08-10",
    "cantidadHoras":2,
    "asistencia":"no"
}
]
}`;

let cambiar = JSON.parse(data);
let table = document.getElementById("tabla");
window.addEventListener("load", () => {
    createTable();
})
let tr;
function createTable() {
    cambiar.materias.forEach(materia => {
        tr = document.createElement("tr");
        createFila(materia);
        table.appendChild(tr);
    });
};
function createFila(materia) {
    let tdNombre = document.createElement("td");
    let tdDia = document.createElement("td");
    let tdHorario = document.createElement("td");
    let tdCantidadHoras = document.createElement("td");
    let tdAsistencia = document.createElement("td");
    tdNombre.innerHTML += materia.nombre;
    tdDia.innerHTML += materia.dia;
    tdHorario.innerHTML += materia.horario;
    tdCantidadHoras.innerHTML += materia.cantidadHoras;
    tdAsistencia.innerHTML += materia.asistencia;
    tr.appendChild(tdNombre)
    tr.appendChild(tdDia)
    tr.appendChild(tdHorario)
    tr.appendChild(tdCantidadHoras)
    tr.appendChild(tdAsistencia)
}
