//funcion declarativa

function sumar() {
	console.log(2 + 2);
}
//llamar a la funcion
sumar();

//funcion de expresion

const sumar2 = function () {
	console.log(3 + 3);
};
sumar2();

//parametros y argumentos
//parametros
function sumar3(num1, num2) {
	console.log(num1 + num2);
}
//argumentos
sumar3(5, 10);

//parametros por defecto
function usuario(nombre, apellido = '') {
	console.log(`Bienvenido ${nombre} ${apellido}`);
}

usuario('pepe');

//EJERCICIO DE PRACTICA
const user = prompt('Ingrese su nombre');
const password = prompt('ingrese su contraseña');
const confirmPassword = prompt('Ingrese nuevamente su contraseña');

const usuariosRegistrados = ['andrea', 'tiago', 'julian'];

function autenticar(user, password, confirmPassword) {
	//validar los datos del usuario
	if (user === '' || password === '' || confirmPassword === '') {
		console.log('todos los campos son obligatorios');
	} else if (user.length < 4) {
		console.log('El usuario debe tener mas de 4 caracteres');
	} else if (password.length < 6) {
		console.log('la contraseña debe ser mayor a 6 caracteres');
	} else if (password !== confirmPassword) {
		console.log('las constraseñas deben ser iguales');
	} else {
		guardarUsuario(user);
	}
}

autenticar(user, password, confirmPassword);

function guardarUsuario(user) {
	usuariosRegistrados.push(user);
	console.log(usuariosRegistrados);
}
