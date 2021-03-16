const temperatura = prompt('Ingrese el valor de la temperatura: por ej: 24');

const titulo = document.querySelector('h1'); 

const cambioTitulo = (temp, color) =>{
    titulo.textContent = `La temperatura actual es de:   ${temp}°`;
    titulo.classList.add(color);
}

if(temperatura < 0){
    titulo.innerHTML = `La temperatura actual es de:   ${temperatura}°`;
    titulo.classList.add('azul');
}else if(temperatura >= 0 && temperatura < 15){
    cambioTitulo(temperatura, 'celeste');
}else if(temperatura >= 15 && temperatura < 25){
    cambioTitulo(temperatura, 'verde');
}else if(temperatura >= 25 && temperatura < 30){
    cambioTitulo(temperatura, 'amarillo');
}else if(temperatura >= 30 && temperatura < 35){
    cambioTitulo(temperatura, 'naranja');
}else{
    cambioTitulo(temperatura, 'rojo');
}
