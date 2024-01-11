function ordenarArray(array) {
  // Ordena los elementos del arreglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  return array.sort();
}
console.log(ordenarArray(['perro', 'gato', 'elefante', 'jirafa', 'mono']));
console.log(ordenarArray(["guindas", "manzanas", "bananas"]));
console.log(ordenarArray(['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus']));
console.log(ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

module.exports = ordenarArray;
