const capitalizar = (str) => {
   const primerLetra = str.slice(0,1);
   const primerMayuscula = primerLetra.toUpperCase();
   const palabraCapitalizada = str.replace(primerLetra, primerMayuscula);
   return palabraCapitalizada;
}

console.log(capitalizar('macarena'));

