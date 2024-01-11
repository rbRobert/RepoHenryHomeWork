function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  let num = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    num = num + 1;
    console.log('num: ' + num);
    if (numeros[i] != num) {
      return num;
    }
  }
  if (numeros[i - 1] == i) {
    return null;
  }
  return null;
}
// console.log(encontrarNumeroFaltante([2, 3, 4, , 6, 7, 8, 9]));
// console.log(encontrarNumeroFaltante([7, 8, 9, 11]));
// console.log(encontrarNumeroFaltante([1, 3, 4, 5, 6, 7, 8, 9]));
console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 10]));
// console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(encontrarNumeroFaltante([]));

module.exports = encontrarNumeroFaltante;
