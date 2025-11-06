/*console.log("Hola JavaScript para Frontend");

let nombre="Cecilia";
console.log("Bienvenida " + nombre);

const edad = 50;
console.log("La edad es " + edad);

console.log("la usuaria "+ nombre + "tiene "+"edad" + "años")

console.log('La usuaria ${nombre} tiene ${edad} años.')

let nombres= "Marta, Lucía, Ana, Sofía"; 
console.log("Las usuarias son; " + nombres);


let numero = 10;
let texto = "Hola";
let numeroTexto = "10";
let booleano = true;
let arreglo = [1, 2, 3, 4, 5];
let objeto = {clave: "valor", edad:30};


let esMayorDeEdad = edad >=18;
console.log("Es mayor de edad? "+ esMayorDeEdad);

let esVerdadero = true && false;
console.log("El resultado de la operación lógica es: " + esVerdadero)

//Clase 2
//Condicionales
if (edad >=18) {
    console.log(nombre + " es mayor de edad. ");
} else {
    console.log(nombre + " es menor de edad.");
}

let a = 5;
let b = 10;

if (a>=b) {
    console.log("a es mayor o igual que b");
} else {("a es menor que b");
}

//Bucles
//tienen un formato especifico que hay que respetar, para que funcione
let diaDeLaSemana = 10;

switch (diaDeLaSemana) { //cuando son letras van con comillas (string) cuando son numeros no
    case 1:
        console.log ("Lunes"); break
    case 2:
        console.log ("Martes"); break
    case 1:
        console.log ("Miércoles"); break
    case 1:
        console.log ("Jueves"); break
    case 1:
        console.log ("Viernes"); break
    case 1:
        console.log ("Sábado"); break
    case 1:
        console.log ("Domingo"); break
    default:
        console.log ("Dia inválido")
}

/**witch (key) {
    case value:
        
        break;

    default:
        break;
}

//Bucle for

for (let i = 0; i <5;  i++) {
    console.log("Iteración número: " + i);    
}

//Bucle while
let contador = 0;
while (contador <5) {
    console.log("Contador vale: " + contador);
    contador++;
} 

//Actividad práctica: Calculadora
//Crear una calculadora que sume, reste, multiplique y divida números ingresados por el usuario.
/** Ejercicios:
**/

//1 - Escribe un programa que verifique si un número es positivo o negativo.
let num = -5;
if (num >=0) {
        console.log("El número es positivo");
    } else {
        console.log("El número es negativo");
    }   

//2- Usa switch para imprimir el día de la semana según un número del 1 al 7.
let diaSemana = 4;

switch (diaSemana) { 
    case 1:
        console.log ("Lunes"); break
    case 2:
        console.log ("Martes"); break
    case 3:
        console.log ("Miércoles"); break
    case 4:
        console.log ("Jueves"); break
    case 5:
        console.log ("Viernes"); break
    case 6:
        console.log ("Sábado"); break
    case 7:
        console.log ("Domingo"); break
    default:
        console.log ("Dia inválido")
}

//3- Haz un bucle for que imprima los números del 1 al 10.
for (let i = 1; i <=10;  i++) {
    console.log("Número: " + i);
    
}

//4- Crea un programa que calcule el factorial de un número usando while.
let numero = 2

let factorial = 1;
let contador = 1;

while (contador <= numero) {
  factorial *= contador;
  contador++;
}
console.log(`El factorial de ${numero} es: ${factorial}`);

// 5- Escribe un condicional que determine si una persona puede votar según su edad.
let edad = 20;
let nombre = "Juan";    
if (edad >=18) {
    console.log(nombre + " puede votar. ");
} else {
    console.log(nombre + " no puede votar.");
}   

// 6- Imprime los números pares entre 1 y 20 con un bucle for.
for (let i = 1; i <=20;  i++) {
    if (i % 2 === 0) {
        console.log("Número par: " + i);
    }
}

// 7- Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).
let calificacion = "F";

switch (calificacion) { 
    case "A":
        console.log ("La calificación es positiva"); break
    case "B":
        console.log ("La calificación es negativa"); break
    case "C":
        console.log ("La calificación es positiva"); break
    case "D":
        console.log ("La calificación es positiva"); break
    case "E":
        console.log ("La calificación es positiva"); break
    case "F":
        console.log ("La calificación es positiva"); break
    default:
        console.log ("Nota inválido")
}
//8- Haz un programa que pida dos números y los sume si ambos son positivos.

    alert("Ingrese dos números");
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    if (num1 > 0 && num2 > 0) {
        let suma = num1 + num2;
        console.log("La suma de los números es: " + suma);
    }

//9- Escribe un bucle while que cuente de 10 a 1 en orden descendente.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
//10- Crea una calculadora básica que permita sumar o restar según el operador ingresado.   
    alert("Ingrese dos números");
    let n1 = parseFloat(prompt("Ingrese el primer número: "));
    let n2 = parseFloat(prompt("Ingrese el segundo número: "));
    let operación = parseFloat(prompt("Ingrese la operacion deseada: "));
    if (operación === "+") {
        let suma = n1 + n2;
        console.log("La suma de los números es: " + suma);
    } else if (operación === "-") {
        let resta = n1 - n2;
        console.log("La resta de los números es: " + resta);
    } else if (operación === "*") {
        let multiplicaion = n1 * n2;
        console.log("La multiplicación de los números es: " + multiplicaion);
    } else (operación === "/") 
        let division = n1 / n2;
        console.log("La división los números es: " + division);
    ;

//Funciones

//1-Declaración
function saludar(){
    console.log("Hola!");
    }

function saludarConNombre(nombre) {
    console.log("Hola " + nombre + "!");
}
saludarConNombre("Ana");

function saludarAFranco(){
    return "Hola Franco!";
}

saludarAFranco(); //no muestra nada en consola
console.log(saludarAFranco()); //muestra el valor retornado en consola

function sumar(a, b){
    return a + b;
}
console.log(sumar(5, 10)); //15

function restar(a, b){
    return a - b;
}       
console.log(restar(10, 5)); //5

let resultadoSuma = sumar(20, 30); //50
console.log("El resultado de la suma es: " + resultadoSuma);

let resultadoResta = restar(50, 15);
console.log("El resultado de la resta es: " + resultadoResta);

//funcion Anónima

const sumas = function(a, b){
    return a + b;
};
console.log(sumas(3, 7)); //10

const restas = function(a, b){
    return a - b;
}   
let resultadoResta2 = restas(20, 8);
console.log(resultadoResta2);

const saludo = function(nombre){
    return "Hola " + nombre + "!";  
};
console.log(saludo("Lucía")); //Hola Lucía!

//Funciones Flecha

const resta1 = (a, b) => a - b;
console.log(resta1(15, 5)); //10

