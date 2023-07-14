//molde para almacenar los datos del formulario
class Producto {
	constructor(id, nombre, precio, imagen, stock) {
		(this.id = id),
			(this.nombre = nombre),
			(this.precio = precio),
			(this.imagen = imagen),
			(this.stock = stock);
	}
}

const tablaUsuarios = document.querySelector('#tableUser');
const tablaProductos = document.querySelector('#bodyTable');

const formModalProductos = document.querySelector('#formProductos');

//traemos del localStorage el arreglo de usuarios y productos
let usuarios = JSON.parse(localStorage.getItem('usuarios'));
let productos = JSON.parse(localStorage.getItem('productos')) || [];

//ejecutamos la funcion crearProducto una vez que se apreta submit en el modal
formModalProductos.addEventListener('submit', crearProducto);

//funcion que se encarga de mostrar todos los usuarios en el html
function cargarTablaUsuarios() {
	usuarios.map((user) => {
		let tr = document.createElement('tr');
		tr.innerHTML = ` 
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td>${user.email}</td>
        `;

		tablaUsuarios.appendChild(tr);
	});
}

cargarTablaUsuarios();

//funcion que se encarga de crear un producto
function crearProducto(e) {
	e.preventDefault();
	//leer los datos del formulario
	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const imagen = document.querySelector('#imagen').value;
	const precio = document.querySelector('#precio').value;
	const stock = document.querySelector('#stock').value;

	//aca van todas las validaciones
	// if (imagen === '') {
	// 	imagen =
	// 		'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
	// }

	let newProduct = new Producto(id, nombre, precio, imagen, stock);

	productos.push(newProduct);

	localStorage.setItem('productos', JSON.stringify(productos));

	formModalProductos.reset();

	cargarTablaProductos();
}

//funcion que se encarga de cargar los productos en la tabla
function cargarTablaProductos() {
	tablaProductos.innerHTML = '';

	productos.map((producto) => {
		let tr = document.createElement('tr');
		tr.innerHTML = `
		<td>${producto.id}</td>
		<td>${producto.nombre}</td>
		<td>${producto.precio}</td>
		<td>${producto.stock}</td>
		<td> 
			<a href="#" class="btn btn-warning"><i class="fa fa-pencil-square-o"></i> </a> 
			<a href="#" class="btn btn-danger" onclick="borrarProducto(${producto.id})"><i class="fa fa-trash-o"></i> </a> 
		</td>
		`;

		tablaProductos.appendChild(tr);
	});
}
cargarTablaProductos();

//funcion para eliminar los productos recibe un id y filtra todos los que son diferente al id que selecciono el adiministrador generando un nuevo arreglo donde no se encuentre el eliminado
function borrarProducto(id) {
	productos = productos.filter((producto) => producto.id !== id);

	localStorage.setItem('productos', JSON.stringify(productos));

	cargarTablaProductos();
}
