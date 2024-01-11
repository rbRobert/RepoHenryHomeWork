function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}
console.log(duplicarElementos([1, 2, 3]));
console.log(duplicarElementos([0, 4, 8]));
console.log(duplicarElementos([-1, -2, -3]));
console.log(duplicarElementos([]));

module.exports = duplicarElementos;
