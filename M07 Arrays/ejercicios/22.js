function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  let i;
  for (i = 0; i < array.length; i++) {
    if (i == 0) {
      break;
    }
  }
  return array[i];
}
console.log(devolverPrimerElemento([10, 10, 16, 12]));
console.log(devolverPrimerElemento([97, 100, 80, 55, 72, 94]));
console.log(devolverPrimerElemento([25, 30, 80, 45]));

module.exports = devolverPrimerElemento;
