class Producto{
    constructor(nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    mostrarInfo() {
        console.log("El Producto: " + this.nombre + ", tiene un precio de: " + this.precio + " y su disponibilidad es: " + this.disponible);
    }
    cambiarDisponibilidad(){
        this.disponible = !this.disponible;
    }
}

class Maquillaje extends Producto {
    constructor(nombre, precio, disponible, tono){
        super(nombre, precio, disponible);
        this.tono = tono;
    }
    mostrarInfo(){
        console.log(`El Maquillaje: ${this.nombre}, Tono: ${this.tono}, Precio: ${this.precio}, Disponible: ${this.disponible}`);
    }
}

const p1 = new Producto("Labial", 150, true);
const p2 = new Producto("Rimel", 180, false);
const p3 = new Producto("Base", 250, true);
const p4 = new Producto("Barniz", 369, false);

const makeup1 = new Maquillaje("Delineador", 258, true, "Azul de noche");

p1.mostrarInfo();
p2.cambiarDisponibilidad();
p2.mostrarInfo();
p3.mostrarInfo();
p4.mostrarInfo();

makeup1.mostrarInfo();
