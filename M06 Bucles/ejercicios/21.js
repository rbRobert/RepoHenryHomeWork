function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  let n = 0;
  while (Math.pow(2, n) < numero) {
    n = n + 1;
    // console.log(Math.pow(2, n));
    if (Math.pow(2, n) === numero) {
      return true;
    }
  }
  return false;
}
console.log(esPotenciaDeDos(2));
console.log(esPotenciaDeDos(4));
console.log(esPotenciaDeDos(32));
console.log(esPotenciaDeDos(40));

module.exports = esPotenciaDeDos;
