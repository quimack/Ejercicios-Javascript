const stringA = prompt("Ingrese un competidor");
const stringB = prompt("Ingrese otro competidor");

const obtenerCompetencia = (a, b) => `${a} vs. ${b}`;

console.log(obtenerCompetencia(stringA, stringB));