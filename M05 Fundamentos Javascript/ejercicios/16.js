function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
  if (num > 50) {
    return true;
  }
  return false;
}
console.log(mayorQueCincuenta(80)); // true
console.log(mayorQueCincuenta(50)); // false

module.exports = mayorQueCincuenta;
