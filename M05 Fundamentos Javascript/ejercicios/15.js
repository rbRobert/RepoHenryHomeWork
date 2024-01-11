function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  if (num < 90) {
    return true;
  }
  return false;
}
console.log(menosQueNoventa(80)); // true
console.log(menosQueNoventa(90)); // false

module.exports = menosQueNoventa;