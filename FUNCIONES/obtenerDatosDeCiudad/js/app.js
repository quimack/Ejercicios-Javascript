const nombre = prompt("Ingrese el nombre de la ciudad");
const poblacion = Number(prompt("Ingrese la cantidad de habitantes"));
const pais = prompt("Ingrese el país donde se encuentra la ciudad");

const obtenerDatosDeCiudad = (nombre, poblacion, pais) => `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;

console.log(obtenerDatosDeCiudad(nombre, poblacion, pais));