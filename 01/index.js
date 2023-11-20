const resultDiv = document.getElementById('result');

function performOperations() {
  // Obtenemos el valor del input y convertirlo en un arreglo de números
  const inputElement = document.getElementById('numberArray');
  const inputValues = inputElement.value
    .split(',')
    // filtramos los valores que no están vacíos
    .filter(n => n.trim() !== '')
    // convertimos los elementos en valores numéricos
    .map(Number);

  // Verificamos si la entrada es válida
  if (inputValues.some(isNaN)) {
      alert('Ingresa números válidos.');
      return;
  }

  // Calculamos el máximo, mínimo y promedio
  const maxNumber = Math.max(...inputValues);
  const minNumber = Math.min(...inputValues);
  const average = inputValues.reduce((sum, num) => sum + num, 0) / inputValues.length;

  // Mostramos el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostramos los resultados en el área de resultados
  resultDiv.innerHTML = `
    Número mayor: ${maxNumber}<br>
    Numero menor: ${minNumber}<br>
    Promedio: ${average.toFixed(2)}
  `;
}
