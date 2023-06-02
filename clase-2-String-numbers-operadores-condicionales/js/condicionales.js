const edad = 20;

if (edad > 18) {
	console.log('Usuario Mayor de edad');
} else {
	console.log('Usuario es menor de edad');
}

const password = prompt('Ingrese una contraseña');

if (password.length < 6) {
	console.log('La contraseña debe ser mayor a 6 caracteres');
} else {
	console.log('Contraseña valida');
}
