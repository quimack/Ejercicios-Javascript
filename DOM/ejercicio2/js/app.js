// Pide al usuario un color de fondo
const colorDeFondo = prompt("Ingresá Color de Fondo");

// Seleccionando el elemento del DOM que quiero modificar
const cuerpo = document.querySelector("body");

// Concatena un atributo (background-color) al color ingresado
const estilos = `background-color: #${colorDeFondo}`;
// Le asigno a la etiqueta el estilo por medio del valor obtenido del usuario
cuerpo.style = estilos;









/*
const colorFondo = prompt("Ingrese un color en hexadecimal");

const bodyStyle = document.querySelector('body');

const estilos = `background-color: ${colorFondo}`;

bodyStyle.style = estilos; 
*/