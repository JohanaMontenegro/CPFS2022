Vue.component("datos-persona",{
    data:function(){
        return{
            persona: [
                { nombre: "Pablo", edad: 19 },
                { nombre: "Clara", edad: 26 },
                { nombre: "Franco", edad: 33 },
                { nombre: "Micaela", edad: 16 },
            ]

        }
    },
    template:`
    <ul>
    <li  v-for="persona in persona">{{persona.nombre}} - {{persona.edad}} </li>
</ul>`
})
new Vue({
    el:"#personas"
})