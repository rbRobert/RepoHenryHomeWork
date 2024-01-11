function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador = contador + 1;
    } 
  }
  return contador;
}
console.log(contarElementosMayoresA10([1, 2, 3, 4, 5]));
console.log(contarElementosMayoresA10([10, 20, 30, 40, 50]));
console.log(contarElementosMayoresA10([11, 12, 13, 14, 15]));
console.log(contarElementosMayoresA10([-1, 0, 1, 2, 3]));
console.log(contarElementosMayoresA10([]));

module.exports = contarElementosMayoresA10;
