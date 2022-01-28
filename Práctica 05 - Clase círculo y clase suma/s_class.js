class suma{
    constructor(sum1, sum2){
        this.sum1=Number(sum1);
        this.sum2=Number(sum2);
    }
    suma(){
        return (this.sum1 + this.sum2)
    }
}
    let sumando1=prompt("Primer sumando: ");
    let sumando2=prompt("Segundo sumando: ");

    const suma1=new suma(sumando1,sumando2);
    
    document.write("El primer sumando es: " + suma1.sum1 + "</br>")
    document.write("El segundo sumando es: " + suma1.sum2 + "</br>")
    
    document.write("El resultado de la suma es: " + suma1.suma() + "</br>");