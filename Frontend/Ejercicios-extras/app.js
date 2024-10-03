//Variables

let edad = 25;
console.log(edad);
edad = 30;
console.log(edad);

const nombre = "Paola";
console.log(nombre);


///* Calculadora simple

let numeroUno = 5;
let numeroDos = 2;

let suma = numeroUno + numeroDos;
console.log("La suma es " + suma);

let resta = numeroUno - numeroDos;
console.log("La resta es " + resta);

let multiplicacion = numeroUno * numeroDos;
console.log("La multplicacion es " + multiplicacion);

let division = numeroUno / numeroDos;
console.log("La division es " + division);



///*Conversor de Grados

let gradosCelsius = -15;
let gradosFarenheit = (gradosCelsius * (9/5)) + 32;

console.log(gradosCelsius + " grados Celsius son " + gradosFarenheit + " grados Farenheit");


///----> Tipos de Datos
//* Numeros, Cadenas(texto "" ''), Boolenos (True or False), Objetos{}, Arreglos

///--- Objetos
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    color: "rojo"
};

//Se puede acceder a las propiedades de un objeto de dos maneras: notacion de punto y notacion de corchetes.

//*Notacion de punto
console.log(coche.marca);
console.log(coche.year);

//*Notacion de corchete
console.log(coche["modelo"]);
console.log(coche["color"]);






