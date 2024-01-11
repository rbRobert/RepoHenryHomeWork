function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  if ((num % 2) == 0) {
    return true;
  }
  return false;
}
console.log(esPar(6)); // true
console.log(esPar(19)); // false

module.exports = esPar;
