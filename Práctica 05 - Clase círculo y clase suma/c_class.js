class circulo{
    constructor(radio){
        this.radio=radio;
    }
    area(){
        return (this.radio*this.radio)+3.1416
    }
    diametro(){
        return (this.radio*2*3.1416)
    }
}
    let radio=prompt("Alto del círculo: ");

    const primerCirculo=new circulo(radio);
    
    document.write("El rádio del círculo es: " + primerCirculo.radio + "</br>")
    
    document.write("El área del rectángulo es: " + primerCirculo.area() + "</br>");
    document.write("El diametro de la circunferencia del círculo es: " + primerCirculo.diametro() + "</br>")
