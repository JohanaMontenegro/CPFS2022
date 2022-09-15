function traerDatos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resuelto")
        }, 1000);
    })
}
async function funcionAsincro() {
    console.log("entrando a la funcion");
    let resultado = await traerDatos();
    console.log(resultado);
}
funcionAsincro();

function traerDatosFetch() {
    fetch(` https://pokeapi.co/api/v2/pokemon/ditto `)
        .then(r => {
            return r.json()
        })
        .then(r => {
            console.log(JSON.stringify(r));
        })
        .catch(error => { console.log(error); });
}
traerDatosFetch();

let id = document.getElementById("mostrarDatos");
function mostrarHTMLFetch() {
    fetch("html1.html")
        .then(r => {
            return r.text()
        })
        .then(r => {
            id.innerHTML += r;
        })
}
mostrarHTMLFetch();