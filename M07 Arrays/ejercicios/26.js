function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10));
console.log(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola'));
console.log(agregarItemAlComienzoDelArray([], true));

module.exports = agregarItemAlComienzoDelArray;
