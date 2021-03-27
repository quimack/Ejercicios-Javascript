const ocultarContrasenia = (contrasenia) => {
    return contrasenia.toString().replaceAll(/[0123456789]/g, "*");
}

console.log(ocultarContrasenia("3495872394"));