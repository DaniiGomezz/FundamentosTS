// 09-clase-electric-car.ts

// Importar la clase Car (opcional si están en el mismo archivo, se puede omitir)

// Definir la clase 'Car'
export class Car {
    // Propiedad privada de la clase
    private make: string;

    // Constructor de la clase que inicializa la propiedad make
    constructor(make: string) {
        this.make = make;
    }

    // Método para imprimir un mensaje al conducir
    drive(): void {
        console.log(`Driving a ${this.make}`);
    }

    // Método para obtener el valor de make
    getMake(): string {
        return this.make;
    }
}

// Crear una instancia de Car con una marca
const myCar = new Car("Toyota");
// Llamar al método drive
myCar.drive();  // Salida: Driving a Toyota

// Llamar al método getMake y mostrar el resultado
console.log(`Marca del coche: ${myCar.getMake()}`);
// Definir la clase 'ElectricCar' que extiende de 'Car'
class ElectricCar extends Car {
    // Propiedad adicional de la clase
    batteryLife: number;

    // Constructor de la clase
    constructor(make: string, batteryLife: number) {
        super(make); // Llamar al constructor de la clase base
        this.batteryLife = batteryLife; // Inicializar la propiedad batteryLife
    }

    // Método para cargar el coche
    charge(): void {
        console.log(`El coche ${this.getMake()} se está cargando.`);
    }
}

// Crear una instancia de ElectricCar con una marca y vida de batería
const myElectricCar = new ElectricCar("Tesla", 100);

// Llamar al método drive
myElectricCar.drive();  // Salida: Driving a Tesla

// Llamar al método charge
myElectricCar.charge(); // Salida: El coche Tesla se está cargando.

// Mostrar la vida de la batería
console.log(`Vida de la batería: ${myElectricCar.batteryLife}%`); // Salida: Vida de la batería: 100%
