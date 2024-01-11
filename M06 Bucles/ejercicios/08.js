function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  if (a >= 0 && a < 10) {
    return true;
  } else {
    return false;
  }
}
//Para ver el código en la consola
console.log(esPositivoOInferiorA10(-5)); // false
console.log(esPositivoOInferiorA10(9)); // true
console.log(esPositivoOInferiorA10(12)); // false
console.log(esPositivoOInferiorA10(0.1)); // true
console.log(esPositivoOInferiorA10(100)); // false
console.log(esPositivoOInferiorA10(-100)); // false

module.exports = esPositivoOInferiorA10;
