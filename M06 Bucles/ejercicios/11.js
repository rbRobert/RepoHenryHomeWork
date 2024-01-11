function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  if (num > 20 && num < 50) return true;
  return false;
}
console.log(estaEnRango(50));
console.log(estaEnRango(30));
console.log(estaEnRango(40));

module.exports = estaEnRango;
