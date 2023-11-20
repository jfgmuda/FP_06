const resultDiv = document.getElementById('result');

function calculateMode() {
  // Obtener el valor del input y convertirlo en un arreglo de números
  const inputElement = document.getElementById('numberArray');
  const inputValues = inputElement.value
    .split(',')
    // filtramos los valores que no están vacíos
    .filter(n => n.trim() !== '')
    // convertimos los elementos en valores numéricos
    .map(Number);


  // Verificar si la entrada es válida
  if (inputValues.some(isNaN)) {
      alert('Ingresa números válidos.');
      return;
  }

  // Contar la frecuencia de cada número utilizando un objeto
  const frequencyCounter = {};
  inputValues.forEach(value => {
      frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
  });

  // Encontrar el número con mayor frecuencia (moda)
  let mode = null;
  let maxFrequency = 0;
  for (const key in frequencyCounter) {
      if (frequencyCounter[key] > maxFrequency) {
          mode = key;
          maxFrequency = frequencyCounter[key];
      }
  }

  // Mostramos el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostrar el resultado en la página
  resultDiv.innerHTML = mode !== null ? mode : 'No hay moda';
}
