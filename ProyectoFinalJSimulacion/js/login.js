const formularioLogin = document.querySelector('#formLogin');

formularioLogin.addEventListener('submit', validarLogin);

let usuarios = JSON.parse(localStorage.getItem('usuarios'));

function validarLogin(e) {
	e.preventDefault();

	const email = document.querySelector('#email').value;
	const password = document.querySelector('#contraseña').value;

	if (email === '' || password === '') {
		console.log('todo los campos son obligatorios');
	}

	//comprabar si el email ya esta registrado
	const existeEmail = usuarios.find((usuario) => {
		return usuario.email === email;
	});

	const existePassword = usuarios.find((usuario) => {
		return usuario.password === password;
	});

	if (existeEmail !== undefined && existePassword !== undefined) {
		usuario = {
			id: existeEmail.id,
			email: existeEmail.email,
		};

		localStorage.setItem('usuario', JSON.stringify(usuario));

		console.log(usuario);

		return;
	} else {
		console.log('usuario no valido');
	}
}
