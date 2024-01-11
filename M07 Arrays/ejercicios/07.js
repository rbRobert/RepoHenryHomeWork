function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase(); 
  }
  return array;
}
console.log(convertirStringAMayusculas(["hello"]));
console.log(convertirStringAMayusculas(["hello", "world"]));
console.log(convertirStringAMayusculas([]));

module.exports = convertirStringAMayusculas;
