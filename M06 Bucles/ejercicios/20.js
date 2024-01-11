function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  var suma = 0;
  for (let i = 1; i <= n; i++) {
    if (suma + i >= 100) {
      break;
    }
    suma = suma + i;
    // console.log('i = ' + i);
    // console.log('suma = ' + suma);
  }
  return suma;
}
console.log(sumarHastaNConBreak(5));
console.log(sumarHastaNConBreak(10));
console.log(sumarHastaNConBreak(15));
console.log(sumarHastaNConBreak(20));
console.log(sumarHastaNConBreak(50));
console.log(sumarHastaNConBreak(100));
console.log(sumarHastaNConBreak(200));

module.exports = sumarHastaNConBreak;
// (sumarHastaNConBreak(5)).toBe(15);
// (sumarHastaNConBreak(10)).toBe(55);
// (sumarHastaNConBreak(15)).toBe(120);
// (sumarHastaNConBreak(20)).toBe(120);
// (sumarHastaNConBreak(50)).toBe(1275);
// (sumarHastaNConBreak(100)).toBe(5050);
// (sumarHastaNConBreak(200)).toBe(5050);