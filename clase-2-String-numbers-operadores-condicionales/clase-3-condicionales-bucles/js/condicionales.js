// const edad = 10;

// if (edad < 18) {
// 	console.log('Es menor de edad');
// } else {
// 	console.log('es mayor de edad');
// }

// const nota = 1;

// if (nota == 10) {
// 	console.log('excelente');
// } else if (nota == 8) {
// 	console.log('Muy Bien');
// } else if (nota == 6) {
// 	console.log('bien');
// } else if (nota <= 5) {
// 	console.log('desaprobado');
// }

// const nombreUsuario = 'rolling';
// const edad = 20;
// const contraseña = 'admin123';
// const confirmarContraseña = 'admin1234';

// console.log(contraseña.length);

// if (
// 	nombreUsuario === '' ||
// 	edad === '' ||
// 	contraseña === '' ||
// 	confirmarContraseña === ''
// ) {
// 	console.log('Todos los campos son obligatorios');
// } else if (edad < 18) {
// 	console.log('El usuario no cumple con las normas de la edad');
// } else if (contraseña.length < 5) {
// 	console.log('la contraseña debe ser mayor a 5 caracteres');
// } else if (contraseña != confirmarContraseña) {
// 	console.log('las contraseñas no son iguales');
// } else {
// 	console.log('usuario logueado');
// }

// const estacion = prompt('ingrese una estacion climatica');

// if (estacion === 'verano') {
// 	console.log('te gusta calor');
// } else if (estacion === 'invierno') {
// 	console.log('te gusta el frio');
// } else if (estacion === 'otoño') {
// 	console.log('te gusta los colores de otoño');
// } else if (estacion === 'primavera') {
// 	console.log('te gusta ver florecer ');
// } else {
// 	console.log('La estacion ingresada no es valida');
// }

//Tarea
// Tarea 3 - Números con condicionales
// ● Ingresan dos números
// ● Si el primero es mayor que el segundo mostrar en consola
// ● la suma de ambos
// ● Si el primero es menor que el segundo mostrar en consola
// ● la resta del segundo menos el primero.
// ● Si son iguales mostrar en consola la multiplicación de ambos.
// ● ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es
// igual a 3
// Solicitar al usuario que ingrese dos números

// const num1 = parseInt(prompt('Ingrese el primer valor'));
// const num2 = parseInt(prompt('Ingrese el segundo valor'));

// if (num1 > num2) {
// 	const suma = num1 + num2;
// 	console.log(suma);
// } else if (num1 < num2) {
// 	const resta = num2 - num1;
// 	console.log(resta);
// } else if (num1 == num2) {
// 	const suma = num1 * num2;
// 	console.log(suma);
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// const nota = parseInt(prompt('Ingrese la nota del 0 al 10'));

// if (nota >= 0 && nota <= 2) {
// 	console.log('Muy deficiente');
// } else if (nota >= 3 && nota <= 4) {
// 	console.log('insuficiente');
// } else if (nota >= 5 && nota <= 6) {
// 	console.log('suficiente');
// } else if (nota == 7) {
// 	console.log('bien');
// } else if (nota >= 8 && nota <= 9) {
// 	console.log('notable');
// } else if (nota == 10) {
// 	console.log('sobreSaliente');
// } else {
// 	console.log('numero erroneo');
// }

//pedir al usuario que ingrese su estacion favorita
const estacion = prompt('ingrese su estacion favorita');

//estructura condicional Switch
switch (estacion) {
	case 'verano':
		console.log('Te gusta el verano');
		break;

	case 'otoño':
		console.log('te gusta el otoño');
		break;

	case 'invierno':
		console.log('te gusta el invierno');
		break;

	case 'primavera':
		console.log('tegusta la primavera');
		break;

	default:
		console.log('Estacion ingresada es Incorrecta');
		break;
}
