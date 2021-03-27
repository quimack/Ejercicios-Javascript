const ingresoUsuario = prompt("Ingrese el usuario");
const ingresoDominio = prompt("Ingrese el dominio");

const generarEmail = (usuario, dominio) => `${usuario}@${dominio}`;

console.log(generarEmail(ingresoUsuario, ingresoDominio));
