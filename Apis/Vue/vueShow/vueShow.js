new Vue({
    el: "#app",
    data: {
        imprimir:false
    },
    methods: {
        cambiarOpcion() {
            if (this.imprimir == true) {
                this.imprimir = false
            }
            else {

                this.imprimir = true
            }

        }
    }

})