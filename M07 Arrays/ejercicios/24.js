function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido.
  return array.length;
}
console.log(obtenerLargoDelArray([10, 10, 16, 12]));
console.log(obtenerLargoDelArray([97, 100, 80, 55, 72, 94]));
console.log(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?']));

module.exports = obtenerLargoDelArray;
