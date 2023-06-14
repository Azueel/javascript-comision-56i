// let i = 1;

// while (i < 30) {
// 	console.log('hola mundo');

// 	i++;
// }

// let x = 30;

// do {
// 	console.log('hola mundo');

// 	i++;
// } while (x < 30);

// for (let i = 0; i <= 10; i++) {
// 	console.log(`Numero: ${i}`);
// }

// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 === 0) {
// 		console.log(`${i} es Par`);
// 	} else {
// 		console.log(`${i} es impar`);
// 	}
// }

//si es multiplo de 3 mostrar FIZZ, si es multiplo de 5 mostrar buzz y si es multiplo de ambos mostrar FIZZBUZZ

for (let i = 1; i <= 150; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`${i} FizzBuzz`);
	} else if (i % 3 === 0) {
		console.log(`${i} FIZZ`);
	} else if (i % 5 === 0) {
		console.log(`${i} BUZZ`);
	}
}
