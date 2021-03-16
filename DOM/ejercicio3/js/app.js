
const tamaño = prompt("Ingrese (de entre estas opciones) el tamaño que desea que tenga la imagen: chica/mediana/grande");

if(tamaño === "chica"){
    idRatas.classList.add('tamañoChica');    
}else if(tamaño === "mediana"){
    idRatas.classList.add('tamañoMediana');
}else{
    if(tamaño === "grande"){
        idRatas.classList.add('tamañoGrande');
    }else{
        alert('La opción elegida no es correcta');
    }
}

