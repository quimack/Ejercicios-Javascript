const obtenerPrimeraOracion = (str) => {
    const punto = str.indexOf(".");
    if(punto>=0){
         return str.slice(0, punto+1);
    }else{
      return str;
    }

    console.log(obtenerPrimeraOracion("Tengo varias oraciones. Tengo varias oraciones, lo ves."))

    console.log(obtenerPrimeraOracion("tengo solo una oracion, asi es"));
