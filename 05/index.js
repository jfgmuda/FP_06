const resultDiv = document.getElementById('result');

function generateDescendingMinimums() {
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

  // Verificar si las entradas son válidas y tienen el mismo tamaño
  if (array1.some(isNaN) || array2.some(isNaN) || array1.length !== array2.length) {
      alert('Please enter valid numbers of the same length.');
      return;
  }

  // Encontrar el valor mínimo en cada posición de los dos arreglos
  const minimumArray1 = Math.min(...array1)
  const minimumArray2 = Math.min(...array2)

  const minimumsArray = [minimumArray1, minimumArray2]

  // Ordenar el arreglo de mínimos de manera descendente
  const descendingMinimums = minimumsArray.sort((a, b) => b - a);

  // Mostramos el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostrar el resultado en la página
  resultDiv.innerHTML = `${descendingMinimums.join(', ')}`;
}
