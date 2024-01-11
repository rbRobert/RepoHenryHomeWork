function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  if ((num % 2) == 0) {
    return false;
  }
  return true;
}
console.log(esImpar(21)); // true
console.log(esImpar(6)); // false

module.exports = esImpar;