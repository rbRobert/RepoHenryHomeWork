function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * i;
  }
  return array;
}
console.log(multiplicarElementosPorIndice([1, 2, 3, 4, 5]));
console.log(multiplicarElementosPorIndice([0, 0, 0, 0, 0]));
console.log(multiplicarElementosPorIndice([2, 4, 6, 8, 10]));
console.log(multiplicarElementosPorIndice([]));

module.exports = multiplicarElementosPorIndice;
