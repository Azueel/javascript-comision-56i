function cambiarColor() {
	//guardamos la etiqueta que trajimos en una variable
	const fondoColor = document.querySelector('#cambiarColor');

	//classList se encarga de ver todas las clases que dispone nuestra etiqueta
	//contains es un metodo que nos pide que ingreses un nombre y va a evular si existe en nuestra etiqueta retornando true o false

	if (fondoColor.classList.contains('light')) {
		//agrega lo que escribamos en add a nuestra clase
		fondoColor.classList.add('dark');

		//remove quita de la clase lo que hayamos mandado en el argumento de "remove"
		fondoColor.classList.remove('light');
	} else {
		fondoColor.classList.add('light');
		fondoColor.classList.remove('dark');
	}
}

/////EJERCICIO 2//////
function agregarElemento() {
	const contenedorCarrito = document.querySelector('#elementosCarrito');

	const crearEtiqueta = document.createElement('p');

	crearEtiqueta.textContent = "Televisor 50'";

	contenedorCarrito.appendChild(crearEtiqueta);
}

//////ejercicio 3//////////

function publicar(e) {
	//preventDefault() es una funcion que nos va a evitar que los button submit nos refresquen la pagina
	e.preventDefault();

	const textoUsuario = document.querySelector('#textoUsuario').value;

	const publicaciones = document.querySelector('#publicaciones');

	const nuevaPublicaciones = document.createElement('p');

	nuevaPublicaciones.textContent = textoUsuario;

	publicaciones.appendChild(nuevaPublicaciones);

	document.querySelector('#resetForm').reset();
}
