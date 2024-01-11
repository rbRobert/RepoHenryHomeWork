function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  for (var i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n == 0) {
      break;
    }
  }
  return secuencia[i];
}
console.log(encontrarPrimerMultiploDeN(3,[1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(encontrarPrimerMultiploDeN(5,[1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(encontrarPrimerMultiploDeN(7,[1, 2, 3, 4, 5, 6, 8, 9]));
console.log(encontrarPrimerMultiploDeN(2,[2, 4, 6, 8, 10]));
console.log(encontrarPrimerMultiploDeN(7,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]));
// console.log(encontrarPrimerMultiploDeN(2,[1, 5, 6, 3, 10]));
// console.log(encontrarPrimerMultiploDeN(2,[1, 5, 7, 3]));

module.exports = encontrarPrimerMultiploDeN;