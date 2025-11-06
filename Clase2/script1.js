/*Actividad práctica
Crear funciones para sumar, restar, multiplicar y dividir.
Crear funciones para convertir cadenas a mayúsculas o invertirlas.
Ejercicios: */

//1 - Declara una función que calcule el área de un triángulo.
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo(5, 10));

//2-Crea una función anónima que determine si un número es par o impar.
function esParImpar(num) {
    if (num % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}
console.log(esParImpar(7));

//3- Usa una función de flecha para multiplicar dos números.
const multiplicar = (a, b) => a * b;
console.log("El resultado de la multiplicación es: " + multiplicar(4, 6));


//4- Escribe una función que convierta una palabra a mayúsculas.
function convertirMayusculas(palabra) {
    return palabra.toUpperCase();
}
console.log(convertirMayusculas("palabra en mayúsculas"));

//5-Haz una función que reciba dos números y retorne el mayor de ellos.
function cualEsMayor(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log("El número mayor es: " + cualEsMayor(10, 20));

//6- Crea una función que invierta una cadena.
    function invertirCadena(cadena) {
        return cadena.split("").reverse().join("");
    }
    console.log(invertirCadena("Hola Mundo"));

//7-Declara una función que convierta grados Celsius a Fahrenheit.
//	(1 °C × 9/5) + 32 = 33.8 °F

function celsiusAFahrenheit(celsius) {
   return (celsius *9/5) + 32;
}
console.log(celsiusAFahrenheit(100));

//8-Escribe una función que verifique si una palabra es un palíndromo.
//cuando se lee igual de izquierda a derecha que de derecha a izquierda

function esPalindromo(palabra) {
    let palabraInvertida = palabra.split("").reverse().join("");
    if (palabra === palabraInvertida) {
     return "Es un palíndromo";
    } else { return "No es un palíndromo";
}
}
console.log(esPalindromo("radar"));

//9-Haz una función que calcule la suma de los números de un arreglo.
/*Un arreglo es una estructura de datos que almacena una colección de elementos del mismo tipo bajo un solo nombre de variablePermite agrupar y gestionar múltiples valores de forma eficiente, y cada elemento se accede mediante un índice numérico único, que generalmente comienza en cero. Son fundamentales en programación para manejar conjuntos de datos, como listas de nombres o valores numérico
Colección de elementos: Un arreglo puede contener varios valores (números, cadenas de texto, objetos, etc.).
Un solo nombre: Todos los elementos están asociados a una única variable llamada arreglo.
Índice numérico: Cada elemento tiene una posición o índice que permite acceder a él directamente. El primer elemento suele tener el índice 0.
Tipos de datos: Los elementos de un arreglo suelen ser del mismo tipo de dato, aunque algunos lenguajes de programación permiten arreglos de tipos mixtos.
Uso eficiente: Son muy útiles para trabajar con grandes volúmenes de información de manera organizada y eficiente.
*/
suma = 0
function sumarArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
return suma;
}
let numeros = [1, 2, 3, 4, 5];
console.log("La suma del arreglo es: " + sumarArreglo(numeros));

//10-Usa funciones para simular una calculadora básica.
    alert("Ingrese dos números");
    let n1 = parseFloat(prompt("Ingrese el primer número: "));
    let n2 = parseFloat(prompt("Ingrese el segundo número: "));
    let operación = prompt("Ingrese la operacion deseada: ");


    function calculadora(n1, n2, operación) {
        if (operación === "+") {
            let suma = n1 + n2;
            return ("La suma de los números es: " + suma);
        } else if (operación === "-") {
            let resta = n1 - n2;
            return("La resta de los números es: " + resta);
        } else if (operación === "*") {
            let multiplicacion = n1 * n2;
            return("La multiplicación de los números es: " + multiplicacion);
        } else if (operación === "/") {
            let division = n1 / n2;
            return("La división de los números es: " + division);
        }
    }
    console.log(calculadora(3, 4, "+"));
