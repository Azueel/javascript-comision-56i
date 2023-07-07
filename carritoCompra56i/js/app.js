const listaTienda = document.querySelector('#lista-tienda');

const listaProductos = document.querySelector('#lista-producto tbody');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

listaTienda.addEventListener('click', agregarProducto);

vaciarCarritoBtn.addEventListener('click', () => {
	articulosCarrito = [];
	vaciarCarrito();
});

//funcion para seleccionar el elemento y agarrar sus datos
function agregarProducto(e) {
	e.preventDefault();

	//solo se ejecutara cuando se encuentra una etiqueta con la clase agregar-carrito
	if (e.target.classList.contains('agregar-carrito')) {
		//una vez el producto seleccionado recorro el dom y vuelvo a los padres del boton para extraer la informacion
		const productoSeleccionado = e.target.parentElement.parentElement;

		//enviamos el producto seleccionado para tomar sus datos
		leerDatosProducto(productoSeleccionado);
	}
}

//funcion para guardar los datos del producto seleccionado y almacenarlos en un objeto ademas de ese objeto guardarlo en el arreglo de articulosCarrito
function leerDatosProducto(productoSeleccionado) {
	const infoProducto = {
		imagen: productoSeleccionado.querySelector('img').src,
		titulo: productoSeleccionado.querySelector('h4').textContent,
		precio: productoSeleccionado.querySelector('span').textContent,
		cantidad: 1,
		id: productoSeleccionado.querySelector('a').getAttribute('data-id'),
	};

	const existeProducto = articulosCarrito.some(
		(producto) => producto.id === infoProducto.id
	);

	if (existeProducto) {
		const producto = articulosCarrito.map((productos) => {
			if (productos.id === infoProducto.id) {
				productos.cantidad++;
				return productos;
			} else {
				return productos;
			}
		});

		articulosCarrito = [...producto];
	} else {
		//otra forma de agregar un elemento a un arreglo spread operator
		articulosCarrito = [...articulosCarrito, infoProducto];
	}

	//forma de agregar un elento a un arreglo con un push
	// articulosCarrito.push(infoProducto);

	carritoHTML();
}

//funcion para agarrar el arreglo de articulosCarrito y imprimir en el html todos los elementos que se encuentran en el
function carritoHTML() {
	vaciarCarrito();

	articulosCarrito.map((articuloCarrito) => {
		const tr = document.createElement('tr');

		tr.innerHTML = ` 
            <td>
                <img src="${articuloCarrito.imagen}" width="100"/>
            </td>
            <td>${articuloCarrito.titulo}</td>

            <td>${articuloCarrito.precio}</td>

            <td>${articuloCarrito.cantidad}</td>
        `;

		listaProductos.appendChild(tr);
	});
}

//esta funcion lo que hace es limpiar el HTML borrando todo lo que se encuentra en el tbody
function vaciarCarrito() {
	listaProductos.innerHTML = '';
}
