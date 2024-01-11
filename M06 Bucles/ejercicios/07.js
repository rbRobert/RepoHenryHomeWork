function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  if (a % 3 === 0 && a % 2 === 0) return true; 
  else return false;
}
console.log(esParYDivisiblePorTres(18));
console.log(esParYDivisiblePorTres(9));
console.log(esParYDivisiblePorTres(10));

module.exports = esParYDivisiblePorTres;