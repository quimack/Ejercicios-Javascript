const removerVocales = (str) => {
    return str.replace(/[aeiou]/gi, " ");
}

console.log(removerVocales("Hola que tal, mi nombre es Macarena, ¿y usted como se llama?"));