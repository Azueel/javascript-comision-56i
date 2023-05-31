//comentar una linea de codigo

/*
hola
soy 
varias lineas codigos
*/

//alert es un mensajito que me va a mostrar en el navegador
// alert('hola Comision 56i');

//console.log me va a  mostrar el mensaje en la consola
// console.log('hola comision 56i');

//prompt me genera un input el cual el usuario puede ingresar algun dato
// prompt('Como te llamas?');

/*****************             VARIABLES               *************** */

// let nombre = 'pepito';

// let edad = 45;

// let provincia = 'chubut' ;

// let pais = 'argentina';

// console.log(nombre);
// console.log(provincia);
// console.log(edad);
// console.log(pais);

//buena forma de llamar variables
// let nombreCompleto = 'alejo';
// let nombre_completo = 'alejo';
// let NombreCompleto = 'alejo';
// let _nombreCompleto = 'alejo';

//no se puede llamar de esta forma
// let !nombre = "alejo"
// let 2nombre = "alejo"
// let nombre completo = "alejo"

/* variable let */
//la variable let no es obligatorio que tenga un valor inicial y puede ser re-asignada
let nota;

nota = 10;

nota = 9;

// console.log(nota);

let edad = 55;
edad = 56;

/* CONST */
//es una variable la cual no puede ser re-asignada
const pi = 3.14;

console.log(pi);

// Ejercicio dinamico de variables

const nombre = prompt('Ingresa tu Nombre');

let edadAlumno = prompt('Ingrese su edad');

let saldoBancario = prompt('ingrese su saldo bancario');

let gastoSemanal = prompt('ingrese lo que gasto en la semana');

let saldoActual = saldoBancario - gastoSemanal;

console.log(nombre);
console.log(edadAlumno);
console.log(saldoBancario);
console.log(gastoSemanal);
console.log(saldoActual);
