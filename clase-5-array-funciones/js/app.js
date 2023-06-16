const alumno1 = 'pepito';
const alumno2 = 'juan';
const alumno3 = 'fede';

//podemos en una lista almacenar cualquier tipo de dato
const array = [1, 'texto', true, false, ['hola', 2], {}];
//forma de acceder a una lista dentro de otra lista
console.log(array[4][0]);

//lista string
//Cada valor de un arreglo se le asigna un indice que arranca de 0
const alumnos = ['pepito', 'juan', 'fede'];
//                 0          1       2

//forma de acceder a un valor espesifico
console.log(alumnos[2]);

const animal = ['gato', 'perro', 'leon'];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const boleean = [true, false];

//Agregar elemento a una lista
alumnos.push('andrea');
console.log(alumnos);

//agregar Elemento de un array dentro de otro array
array[4].push('3');
console.log(array);

//elimina el ultimo elemento de una lista
alumnos.pop();
console.log(alumnos);

//bucle lista
const meses = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre',
];

console.log(meses);

for (let i = 0; i < meses.length; i++) {
	console.log(meses[i]);
}

const alumnosDestacados = ['marcos', 'sabrina', 'rodrigo', 'ariana'];

for (let i = 0; i < alumnosDestacados.length; i++) {
	console.log(alumnosDestacados[i]);
}

//obntener la posicion de un elemento
console.log(meses.indexOf('octubre'));
console.log(meses.indexOf('jueves'));

//buscar elemento
console.log(meses.includes('enero'));
console.log(meses.includes('jueves'));

//ordenar a-z
console.log(alumnos.sort());

//z-a
console.log(alumnos.reverse());

//eliminar elementos
console.log(meses.splice(7, 5));
