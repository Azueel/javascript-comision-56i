//setInterval va a ejecutarse en un bucle cada vez que pase el tiempo asignado 1000 = 1seg
// setInterval(() => {
// 	console.log('Hola cada un segundo');
// }, 1000);

//setTimeOut se ejecuta luego de pasar el tiempo asignado
setTimeout(() => {
	console.log('Hola');
}, 3000);

//clearInterval
let counter = 0;

const interval = setInterval(() => {
	console.log(`${counter}`);
	counter++;

	if (counter === 10) {
		clearInterval(interval);
	}
}, 1000);
