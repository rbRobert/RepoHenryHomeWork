function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // console.log('numero no enero: ' + Math.random() * array.length);
  // console.log('numero enero: ' + Math.floor(Math.random() * array.length));
  return array[Math.floor(Math.random() * array.length)];
}
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5]));
console.log(obtenerElementoAleatorio([1]));
console.log(obtenerElementoAleatorio([]));

module.exports = obtenerElementoAleatorio;
