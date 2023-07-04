//getElementById
//solo trae por id si llamamos a una clase nos va a retornar NULL
const elemento = document.getElementById('titulo');
console.log(elemento);

//getElementByClassName
//solo trabaja con clases no reconoce ID (Nos trae todas las etiquetas que tengan subtitulo como class)
const elementoClase = document.getElementsByClassName('subtitulo');
console.log(elementoClase);

//getElementByTagName
const elementoTag = document.getElementsByTagName('h3');

console.log(elementoTag);

//querySelector
//Trabaja con ID y CLass solamente tenemos que declarar con "." o "#" a que atributo se refiere
const elementoQuery = document.querySelector('.subtitulo');
console.log(elementoQuery);

//querySelectorALL
const elementoQueryAll = document.querySelectorAll('.boxStyle');
console.log(elementoQueryAll);
