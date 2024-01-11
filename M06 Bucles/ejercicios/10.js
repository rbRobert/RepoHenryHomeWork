function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  if (num === 5 || num === 10) return true;
  return false;
}
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(10));
console.log(esDiezOCinco(3));

module.exports = esDiezOCinco;
