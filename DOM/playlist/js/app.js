const primerCancion = prompt('Ingrese una de sus canciones preferidas');
const segundaCancion = prompt('Ingrese otra de sus canciones preferidas');
const tercerCancion = prompt('Ingrese otra de sus canciones preferidas');
const cuartaCancion = prompt('Ingrese otra de sus canciones preferidas');
const quintaCancion = prompt('Ingrese otra de sus canciones preferidas');

const primerItem = document.querySelector('#primerItem');
const segundoItem = document.querySelector('#segundoItem');
const tercerItem = document.querySelector('#tercerItem');
const cuartoItem = document.querySelector('#cuartoItem');
const quintoItem = document.querySelector('#quintoItem');


primerItem.textContent = primerCancion; 
segundoItem.textContent = segundaCancion;
tercerItem.textContent = tercerCancion;
cuartoItem.textContent = cuartaCancion;
quintoItem.textContent = quintaCancion;

