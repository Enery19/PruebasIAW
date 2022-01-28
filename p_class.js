class Rectangulo {
    constructor (ancho, alto) {
        this.ancho=ancho;
        this.alto=alto;
    }
    area(){
        return this.ancho*this.alto;
    }
    perimetro(){
        return 2*(this.ancho*this.alto);
    }
}
let anchura=prompt("Ancho del rectángulo: ");
let altura=prompt("Alto del rectángulo: ");

const primerRectangulo=new Rectangulo(anchura, altura);

document.write("El ancho del rectángulo es: " + primerRectangulo.ancho + "</br>")
document.write("El alto del rectángulo es: " + primerRectangulo.alto + "</br>")


document.write("El área del rectángulo es: " + primerRectangulo.area() + "</br>");
document.write("El perimetro del rectángulo es: " + primerRectangulo.perimetro() + "</br>")