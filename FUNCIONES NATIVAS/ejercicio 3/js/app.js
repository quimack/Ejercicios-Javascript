
const esUltimoCaracter = (palabra, caracter) =>{
    return palabra.slice(-1) == caracter;
}

console.log(esUltimoCaracter('lovelace', 'e'));
console.log(esUltimoCaracter('lovelace', 'f'));