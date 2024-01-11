function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  let tamanio = -1;
  let array1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      tamanio = tamanio + 1;
      array1[tamanio] = array[i];
    } 
  }
  return array1;
}
console.log(filtrarNumerosPares([1, 3, 5]));
console.log(filtrarNumerosPares([2, 4, 6]));
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));
console.log(filtrarNumerosPares([]));

module.exports = filtrarNumerosPares;
