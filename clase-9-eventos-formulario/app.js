const validarUsuario = document.querySelector('#validarUsuario');
const formError = document.querySelector('#formError');

validarUsuario.addEventListener('submit', validarRegistro);

let nombre;
let email;
let password;
let confirmPassword;

function validarRegistro(e) {
	e.preventDefault();
	nombre = document.querySelector('#nombre').value;
	email = document.querySelector('#email').value;
	password = document.querySelector('#password').value;
	confirmPassword = document.querySelector('#confirmPassword').value;

	const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const resultadoValidacion = validarEmail.test(email);

	//validar los campos
	if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
		formError.textContent = 'todos los campos son obligatorios';
		formError.classList.add('text-white', 'bg-danger', 'w-25', 'p-3', 'text-center');

		setTimeout(() => {
			formError.textContent = '';
			formError.classList.remove(
				'text-white',
				'bg-danger',
				'w-25',
				'p-3',
				'text-center'
			);
		}, 4000);
		return;
	} else if (!resultadoValidacion) {
		formError.textContent = 'el email no es valido';
		formError.classList.add('text-white', 'bg-danger', 'w-25', 'p-3', 'text-center');

		setTimeout(() => {
			formError.textContent = '';
			formError.classList.remove(
				'text-white',
				'bg-danger',
				'w-25',
				'p-3',
				'text-center'
			);
		}, 4000);

		return;
	} else if (password !== confirmPassword) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Las contraseñas deben ser iguales',
		});

		return;
	}

	//si toda la validacion salio bien cae en enviar el formulario
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Usuario Registrado Correctamente',
		showConfirmButton: false,
		timer: 3500,
	});

	validarUsuario.reset();

	return;
}
