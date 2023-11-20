const resultDiv = document.getElementById('result');

function extractMainDiagonal() {
  // Obtener el valor del input y convertirlo en un arreglo de números
  const matrix = document.getElementById('matrix').value
    .split(';')
    .map(row => row.split(',').map(Number));

  // Verificar si la entrada es válida
  let hasError = false;

  matrix.forEach(row => {
    if (row.some(isNaN)) {
        hasError = true;
    }
  })

  if (hasError) {
    alert('Ingresa números válidos.');
    return;
  }

  // Array para almacenar los valores de la diagonal principal.
  const diagonalValues = [];

  // Iterar sobre las filas de la matriz.
  for (let i = 0; i < matrix.length; i++) {
    diagonalValues.push(matrix[i][i]);
  }
  // Mostramos el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostrar el resultado en la página
  resultDiv.innerHTML = `${diagonalValues.join(', ')}`;
}
