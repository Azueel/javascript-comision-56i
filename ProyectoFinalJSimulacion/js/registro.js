class Usuario {
	constructor(id, nombre, email, usuario, password) {
		(this.id = id),
			(this.nombre = nombre),
			(this.email = email),
			(this.usuario = usuario),
			(this.password = password);
	}
}

//traemos la etiqueta form
const formulario = document.querySelector('#formRegistro');

let usuarios = [];
//evento que se ejecuta apenas carga la pagina
document.addEventListener('DOMContentLoaded', () => {
	usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
});

//ejecutamos el evento submit al formulario
formulario.addEventListener('submit', validarUsuario);

//funcion para hacer toda la logica del registro
function validarUsuario(e) {
	e.preventDefault();

	//guardamos los datos de los input en variables
	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const email = document.querySelector('#email').value;
	const usuario = document.querySelector('#user').value;
	const password = document.querySelector('#contraseña').value;

	//validar
	if (nombre === '' || email === '' || usuario === '' || password === '') {
		console.log('todos los campos son obligatorios');
		return;
	}

	//comprabar si el email ya esta registrado
	const existeEmail = usuarios.find((usuario) => {
		return usuario.email === email;
	});

	if (existeEmail !== undefined) {
		Swal.fire({
			icon: 'error',
			title: 'Usuario Existente',
			text: 'Lo siento, el usuario ingresado ya está registrado.',
			footer: '<a href="">Why do I have this issue?</a>',
		});
		formulario.reset();
		return;
	}

	let newUser = new Usuario(id, nombre, email, usuario, password);

	usuarios.push(newUser);

	localStorage.setItem('usuarios', JSON.stringify(usuarios));

	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Usuario registrado correctamente',
		showConfirmButton: false,
		timer: 1500,
	});

	formulario.reset();
}
