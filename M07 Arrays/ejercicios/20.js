function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  num = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      num = num + 1;
    }
  }
  return num;
}
console.log(contarParesConContinue([]));
console.log(contarParesConContinue([1, 3, 5]));
console.log(contarParesConContinue([1, 2, 3, 4, 5, 6]));
console.log(contarParesConContinue([2, 4, 6, 8]));

module.exports = contarParesConContinue;
