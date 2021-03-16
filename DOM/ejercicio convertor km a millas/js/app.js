/* 
Conversor kilómetros a millas:
Crear una página que: Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. 
Tener en cuenta que kilómetro es 0.62 millas, y una milla es 1.61 kilómetros.
*/

const valorKilometros = document.getElementById('valorKilometros');
const valorMillas = document.getElementById('valorMillas');

valorKilometros.addEventListener('input', () => {
    valorMillas.value = Number(valorKilometros.value) * 0.62;
});

valorMillas.addEventListener('input', () => {
    valorKilometros.value = Number(valorMillas.value) * 1.61;
});

