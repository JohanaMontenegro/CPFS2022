class Televisor{
 canalActual:number=0;
 estado:boolean=false;
constructor(reciboCanal:number){
    this.canalActual=reciboCanal

}

cambiarCanal(){
    this.canalActual=10;   
} 
getcanalActual():number{
return this.canalActual;
}

}

let myTele=new televisor(15);
console.log(myTele.getcanalActual());