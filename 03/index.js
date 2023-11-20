const resultDiv = document.getElementById('result');

function mergeAndSortArrays() {
  // Obtener los valores de los dos inputs y convertirlos en arreglos de números
  const array1Element = document.getElementById('array1');
  const array2Element = document.getElementById('array2');

  const array1 = array1Element.value
    .split(',')
    // filtramos los valores que no están vacíos
    .filter(n => n.trim() !== '')
    // convertimos los elementos en valores numéricos
    .map(Number);
  const array2 = array2Element.value
    .split(',')
    // filtramos los valores que no están vacíos
    .filter(n => n.trim() !== '')
    // convertimos los elementos en valores numéricos
    .map(Number);

  // Verificar si las entradas son válidas
  if (array1.some(isNaN) || array2.some(isNaN)) {
      alert('Ingresa números válidos.');
      return;
  }

  // Concatenar y ordenar los dos arreglos
  const mergedArray = [...array1, ...array2].sort((a, b) => a - b);

  // Mostramos el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostrar el resultado en la página
  resultDiv.innerHTML = `${mergedArray.join(', ')}`;
}