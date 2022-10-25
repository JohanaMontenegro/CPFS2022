new Vue({
    el: "#contador",
    data: {
        numero: 0,
        mensaje: " "
    },
    methods: {
        sumar() {
            this.numero += 1;
            if (this.chequearNumero(this.numero)) {
                this.mensaje = ""
            }
        },

        restar() {
            if (this.chequearNumero(this.numero)) {
                this.numero -= 1
                this.mensaje = " "
            }
            else {
                this.mensaje = "Numero no válido"
            }
        },
        chequearNumero(numero) {
            return numero > 0;

        }
    }
})
