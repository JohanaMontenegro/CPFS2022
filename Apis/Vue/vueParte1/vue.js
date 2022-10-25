new Vue({
    el: "#seccion",
    data: {
        Titulo: "Titulo 1",
        Titulo2: "Titulo 2"
    },
    methods: {
        changeTitle() {
            this.Titulo = "Titulo cambiado"
        },
        changeTitle2() {
            this.Titulo2 = "Titulo 2 cambiado"
        }
    }

})