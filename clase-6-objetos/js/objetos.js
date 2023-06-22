// //objeto literal

// const usuario = {
// 	nombre: 'alejo',
// 	edad: 24,
// 	direccion: 'calle falsa 123',
// 	pais: 'argentina',
// 	dni: 13123123,
// };

// console.log(usuario.nombre); //opcion optima y recomendada

// console.log(usuario['nombre']); //NO USAR

// //Objetos anidados
// const carrito = {
// 	nombre: 'Monitor',
// 	precio: 250,
// 	disponible: true,
// 	informacion: {
// 		peso: '10kg',
// 		tamaño: '30cm',
// 	},
// };

// //forma de acceder a objetos aninados
// console.log(carrito.informacion.peso);

// //agregar key y valor
// carrito.marca = 'Samsung';
// console.log(carrito);

// carrito.precio = 300;

// console.log(carrito);

// //eliminar

// delete carrito.disponible;
// console.log(carrito);

///////////////////////

const productos = [
	{ nombre: 'leche', precio: 300, marca: 'la serenisima' },
	{ nombre: 'alfajor', precio: 270, marca: 'Terrabusi' },
	{ nombre: 'arroz', precio: 450, marca: 'tia nona' },
];

productos.map(function (producto) {
	console.log(
		`El nombre del producto es ${producto.nombre} y su valor es de ${producto.precio} de la marca ${producto.marca} `
	);
});
