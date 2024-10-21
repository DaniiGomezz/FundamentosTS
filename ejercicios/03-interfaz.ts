interface Person {
    fistName: string;
    lastName: string;
}

let person: Person = {
    fistName: "jesus",
    lastName: "gomez"
}


// // 04-interfaz-opcional.ts

// // Definir una interfaz 'Person' con lastName como propiedad opcional
// interface Person {
//     firstName: string;
//     lastName?: string;  // lastName es opcional
// }

// // Declarar un objeto 'person' que solo incluye firstName
// let person: Person = {
//     firstName: "Jesús"  // Solo se incluye firstName
// };

// // Imprimir el nombre (firstName) y lastName (que es opcional)
// console.log(`Nombre: ${person.firstName}`);
// if (person.lastName) {
//     console.log(`Apellido: ${person.lastName}`);
// } else {
//     console.log("Apellido no proporcionado.");
// }
