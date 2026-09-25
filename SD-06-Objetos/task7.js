

// Type your code below this line!
function Coche(marca, modelo, anio, color, puertas, kilometraje, tipoMotor){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.puertas = puertas;
    this.kilometraje = kilometraje;
    this.tipoMotor = tipoMotor;

    this.getDescription = function(){
        return `Coche: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Color: ${this.color}, Puertas: ${this.puertas}, Kilometraje: ${this.kilometraje}, Tipo de Motor: ${this.tipoMotor}`
    }
}

const myCar = new Coche("Toyota", "Corolla", 2020, "Rojo", 4, 15000, "Gasolina");
const carGirl = new Coche("Honda", "Civic", 2019, "Azul", 4, 20000, "Diesel");

console.log("Mi carro: " + myCar.getDescription());
console.log("Carro de mi chica: " + carGirl.getDescription());

// Type your code above this line!

