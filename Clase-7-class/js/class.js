// class Persona {
// 	constructor(nombre, apellido, edad) {
// 		(this.nombre = nombre), (this.apellido = apellido), (this.edad = edad);
// 	}

// 	mostrarInfo() {
// 		console.log(`tu nombre es ${this.nombre} ${this.apellido} de ${this.edad}`);
// 	}
// }

// const usuario = new Persona('alejo', 'calandra', 24);

// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
	constructor(nombre) {
		this.nombre = nombre;
		this.saldo = 0;
	}

	ingresar(monto) {
		this.saldo = this.saldo + monto;
	}

	extraer(monto) {
		if (this.saldo >= monto) {
			this.saldo = this.saldo - monto;
		} else {
			console.log('Saldo Insuficiente');
		}
	}

	informar() {
		console.log(`la cuenta de ${this.nombre} dispone de un saldo de ${this.saldo}`);
	}
}

const usuarioBanco = new Cuenta('pepe');

usuarioBanco.ingresar(500);
usuarioBanco.ingresar(300);

usuarioBanco.extraer(900);

usuarioBanco.informar();

console.log(usuarioBanco);
