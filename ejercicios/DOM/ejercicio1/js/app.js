const nombre = prompt("Ingrese un nombre");

const titulo = document.querySelector('h1');

titulo.innerHTML = `Hola ${nombre}`;

const estilos = "color: red; background-color: blue;";

titulo.style = estilos;
// titulo.style = "color: red; background-color: blue;"
