function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  return (n * (n + 1)) / 2; 
}
console.log(sumarHastaN(3));
console.log(sumarHastaN(4));
console.log(sumarHastaN(5));

module.exports = sumarHastaN;
