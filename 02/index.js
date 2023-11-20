const resultDiv = document.getElementById('result');

function getUniqueValues() {
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

  const uniqueValues = [];
  
  // Encontrar valores únicos
  for (let i = 0; i < inputValues.length; i++) {
    const current = inputValues[i];

    // Si el valor actual no existe en nuestro arreglo, entonces lo agregamos
    if (!uniqueValues.includes(current)) {
      uniqueValues.push(current);
    }
  }

  // Mostramos el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostrar los valores únicos en la página
  resultDiv.innerHTML = `${uniqueValues.join(', ')}`;
}
