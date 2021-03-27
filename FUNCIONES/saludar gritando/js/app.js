const nombre = prompt("Ingrese el nombre");
const apellido = prompt("Ingrese el apellido");

const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log(obtenerNombreCompleto(nombre, apellido));


const saludar = (nombre) => `Hola ${nombre}, un gusto conocerte`;

console.log(saludar(obtenerNombreCompleto(nombre, apellido)));


const saludarGritando = (nombre, apellido) => {
    const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
    const saludo = saludar(nombreCompleto);
    const grito = `¡${saludo}!`;
    return grito;
}

console.log(saludarGritando(nombre, apellido));