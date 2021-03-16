  /*
Hacer un programa que nos diga si queremos continuar a traves.
 Presionarás una letra (keypress) e inmediatamente nos saldrá: 
 En caso de ser "s" saldrá el cartel "Saliste del programa" 
 En caso de ser "n" saldrá el cartel "Te quedas en el programa" 
 En caso de ser otra saldrá el cartel "Pulsa 's' o 'n'" 
*/

const miInput = document.querySelector('#miInput');

miInput.addEventListener('keypress', (event) => {
    if (event.key == 's'){
        alert("Saliste del programa");
    }else if(event.key == 'n'){
        alert("Te quedas en el programa");
    }else{
        alert("Pulsa 's' o 'n'");
    }
});