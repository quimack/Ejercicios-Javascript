const cantidadDeEjerciciosFacil = Number(prompt("Ingrese la cantidad de ejercicios \"facil\" resueltos"));
const cantidadDeEjerciciosMedio = Number(prompt("Ingrese la cantidad de ejercicios \"medio\" resueltos"));
const cantidadDeEjerciciosDificil = Number(prompt("Ingrese la cantidad de ejercicios \"dificil\" resueltos"));

const calcularPuntaje = (facil, medio, dificil) => {
    const puntajeFacil = facil * 3;
    const puntajeMedio = medio * 5;
    const puntajeDificil = dificil * 10;
    return puntajeFacil + puntajeMedio + puntajeDificil;
}


console.log(calcularPuntaje(cantidadDeEjerciciosFacil, cantidadDeEjerciciosMedio, cantidadDeEjerciciosDificil));