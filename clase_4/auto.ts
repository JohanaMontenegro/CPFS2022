export class Auto{
   encendido: boolean;
   cambios: number;
   alarma: boolean;
   vidrios: boolean;

   constructor(alarmaEncendida: boolean, subirBajar: boolean) {
      this.encendido = false;
      this.cambios = 0;
      this.alarma = alarmaEncendida;
      this.vidrios = subirBajar;
   }

   encenderAuto() {
      if (this.encendido) {
         this.encendido = false;
         console.log("el auto esta encendido");
      } else {
         this.encendido = true;
         console.log("el auto esta encendido");
      }
   }

   pasarCambio() {
      this.cambios += 1;

   }
   getCambio():number{
      return this.cambios;
   }

   setpasarCambio(cambiar: number) {
      this.cambios = cambiar;
   }
   
}


