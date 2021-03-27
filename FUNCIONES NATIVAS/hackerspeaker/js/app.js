
const aHackerSpeak = (str) => str.replaceAll(/i/gi, "1").replaceAll(/e/gi, "3").replaceAll(/o/gi, "0").replaceAll(/a/gi, "4").replaceAll(/s/gi,"5");

console.log(aHackerSpeak("macarenita"));


/*
const aHackerSpeak = (str) => {
    let string = str.replaceAll(/i/gi, "1");
    string = string.replaceAll(/e/gi, "3");
    string = string.replaceAll(/o/gi, "0");
    string = string.replaceAll(/s/gi, "5");
    string = string.replaceAll(/a/gi, "4");
    return string;
}
*/

console.log(aHackerSpeak("Hola señor de las cuatro decaditas del amor")); 