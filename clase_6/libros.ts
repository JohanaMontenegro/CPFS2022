export class Libro {
    private nombreLibro: string;
    private disponible: boolean;

    constructor(nombre: string) {
        this.nombreLibro = nombre;
        this.disponible = true;

    }
    getLibro() {
        return this.nombreLibro;

    }

    setLibro(newLibro: string) {
        this.nombreLibro = newLibro;
    }

    getEstado() {
        return this.disponible;
    }
    setEstado(estado: boolean) {
        this.disponible = estado;
    }
}