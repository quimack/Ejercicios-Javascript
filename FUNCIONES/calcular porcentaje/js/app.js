const calcularPorcentaje = (numero, porcentaje) => numero * porcentaje / 100; 

console.log(calcularPorcentaje(517,32));

const sumarPorcentaje = (numero, porcentaje) => {
    const porcentajeCalculado = calcularPorcentaje(numero, porcentaje);
    return numero + porcentajeCalculado;
}

console.log(sumarPorcentaje(100,10));

const restarPorcentaje = (numero, porcentaje) => {
    const porcentajeCalculado = calcularPorcentaje(numero, porcentaje);
    return numero - porcentajeCalculado;
}

console.log(restarPorcentaje(100,10));