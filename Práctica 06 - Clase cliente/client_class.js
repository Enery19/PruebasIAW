//Plantear una clase Cliente que permita almacenar el nombre de un cliente y el saldo actual.
//Definir además del constructor otros dos métodos que permitan depositar (le pasamos como parámetro el dinero que queremos depositar y 
//lo sumamos al saldo) y extraer dinero (lo restamos al saldo).
//Definir luego dos objetos de dicha clase.

class cliente{
    constructor(nombre, saldo){
        this.nombre=nombre;
        this.saldo=Number(saldo);
    }
    deposito(dinero){

        this.saldo = this.saldo + dinero;
    }
    extracto(dinero){

        this.saldo = this.saldo - dinero;
    }
}

const cliente1 = new cliente("Irene", 2500);
document.write("Nombre cliente: " + cliente1.nombre + "</br>");
document.write("Saldo actual: " + cliente1.saldo + "</br>");
cliente1.deposito(120);
document.write("Saldo después de depositar 120€: " + cliente1.saldo + "</br>");
cliente1.extracto(1000);
document.write("Saldo después de depositar 1000€: " + cliente1.saldo + "</br>");

const cliente2 = new cliente("Pilar", 200);
document.write("Nombre cliente: " + cliente2.nombre + "</br>");
document.write("Saldo actual: " + cliente2.saldo + "</br>");
cliente2.deposito(220);
document.write("Saldo después de depositar 120€: " + cliente2.saldo + "</br>");
cliente2.extracto(20);
document.write("Saldo después de depositar 1000€: " + cliente2.saldo + "</br>");