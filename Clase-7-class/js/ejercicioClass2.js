// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.

class Persona {
	constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
		this.fechaNacimiento = fechaNacimiento;
	}

	mostrarGeneracion() {
		if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
			console.log('sos de generacion silent generation');
		} else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
			console.log('sos de la generacion Baby Boom');
		} else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento <= 1980) {
			console.log('sos de la generacion X');
		}
	}

	esMayorDeEdad() {
		if (this.edad >= 18) {
			console.log('sos mayor de edad');
		} else {
			console.log('sos menor de edad');
		}

		// console.log(`sos ${this.edad >= 18 ? 'mayor' : 'menor'} de edad`);
	}

	mostrarDatos() {
		console.log(
			`Nombre: ${this.nombre}, edad: ${this.edad}, dni: ${this.dni}, genero: ${
				this.sexo === 'H' ? 'hombre' : 'mujer'
			},peso: ${this.peso}, altura: ${this.altura}, fecha Nacimiento: ${
				this.fechaNacimiento
			} `
		);
	}
}

const usuario = new Persona('pepe', 26, 213123, 'H', 80, 1.8, 1979);

usuario.mostrarGeneracion();

usuario.esMayorDeEdad();

usuario.mostrarDatos();
