function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  if (arr instanceof Array) {
    if (arr.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(esArrayNoVacio([1, 2, 3]));
console.log(esArrayNoVacio([]));
console.log(esArrayNoVacio('No es un Arreglo'));

module.exports = esArrayNoVacio;