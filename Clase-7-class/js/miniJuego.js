const opcionJugador = prompt('escriba su seleccion: piedra papel o tijera');
let resultadoMaquina;
let resultado;

function OpcionMaquina() {
	const seleccionMaquina = Math.floor(Math.random() * 3);

	switch (seleccionMaquina) {
		case 0:
			resultadoMaquina = 'piedra';
			break;

		case 1:
			resultadoMaquina = 'papel';
			break;

		case 2:
			resultadoMaquina = 'tijera';
			break;
	}

	calcularResultado(opcionJugador, resultadoMaquina);
}

function calcularResultado(opcionJugador, OpcionMaquina) {
	if (opcionJugador === OpcionMaquina) {
		resultado = 'empate';
	} else if (opcionJugador === 'piedra') {
		if (OpcionMaquina === 'papel') {
			resultado = 'perdiste';
		} else {
			resultado = 'ganaste';
		}
	} else if (opcionJugador === 'papel') {
		if (OpcionMaquina === 'tijera') {
			resultado = 'perdiste';
		} else {
			resultado = 'ganaste';
		}
	} else if (opcionJugador === 'tijera') {
		if (OpcionMaquina === 'papel') {
			resultado = 'ganaste';
		} else {
			resultado = 'perdiste';
		}
	}
}

OpcionMaquina();

console.log(
	`La opcion del jugador Fue: ${opcionJugador} y la opcion de la maquina fue: ${resultadoMaquina} y el resultado fue: ${resultado} `
);
