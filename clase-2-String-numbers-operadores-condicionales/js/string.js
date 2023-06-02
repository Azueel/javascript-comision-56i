//Formas de escribir String
const marca = 'adidas'; //es la forma recomendada
const marca2 = String('nike');
const marca3 = new String('puma');

console.log(marca);
console.log(marca2);
console.log(marca3);

//.lenght conoce la cantidad de caracteres que tiene la cadena de texto (prioridad para aprender)
const password = 'abc123';
console.log(password.length);

// includes nos va a retornar si el dato que esta en includes es igual a la variable me retorna true en el caso contrario me retorna false
const celular = 'samsung';

console.log(celular.includes('iphone'));

//concatenacion
const nombre = 'pepe';
const edad = 50;
const provincia = 'tucuman';

//primera forma
console.log(nombre.concat(edad));
console.log(nombre.concat('Moyano'));

//segunda Forma                                                de la provincia de tucuman
console.log(
	'Bienvenido ' + nombre + 'de ' + edad + ' años' + 'de la provincia de' + provincia
);

//tercera forma y la mas usada (prioridad para aprender)
console.log(`Bienvenido ${nombre} de ${edad} años de la provincia de ${provincia}`);

//Cortar espacios en blanco
const passwordUsuario = '         12345                   ';

//eliminar el espacio en blanco del inicio
console.log(passwordUsuario.trimStart());

//eliminar el espacio en blanco del final
console.log(passwordUsuario.trimEnd());

//eliminar el espacio en ambos lados (prioridad para aprender)
console.log(passwordUsuario.trim());

//cortar una letra o numero espesifico
console.log(nombre.charAt(0));

//Pasar un texto a mayuscula
const texto = 'Argentina';
console.log(texto.toUpperCase());

//pasar un texto a minuscula
const texto2 = 'COMIDA';
console.log(texto2.toLowerCase());
