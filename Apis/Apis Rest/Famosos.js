let cards = document.getElementById("card");

function traerDatosApis() {
    fetch("https://6323b4b15c1b43572799e3ee.mockapi.io/famosos ")
        .then((r) => {
            return r.json();
        })
        .then((r) => {
            console.log(r);
            cargarDatos(r)
        });
}

function cargarDatos(famosos){
tarjeta = document.createElement("div");
famosos.forEach(element => {

    crearTarjeta(element)

})};

function crearTarjeta(famosos) {
    tarjeta = document.createElement("div");
    tarjeta.classList.add("card")
    imagen = document.createElement("img");
    id = document.createElement("p");
    nombre = document.createElement("h2");
    ocupacion = document.createElement("p");


    imagen.src = famosos.image;
    nombre.innerHTML = "Nombre: " + famosos.name;
    id.innerHTML = " Id: " + famosos.id;
    ocupacion.innerHTML = "Ocupación: " + famosos.profesion;

    cards.appendChild(tarjeta);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(ocupacion);
};


traerDatosApis();
