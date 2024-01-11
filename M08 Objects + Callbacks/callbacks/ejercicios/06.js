function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  var arreglo = [];
  for (let i = 0; i < array.length; i++) {
    cb(array[i], arreglo);
  }
  return arreglo;
}

var func = (numero, arreglo) => {
  arreglo.push(numero * numero);
  return arreglo;
}

console.log(map([1, 2, 3, 4, 5], func));

module.exports = map;
