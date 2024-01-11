function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  var arreglo = [];
  for (let i = 0; i < array.length; i++) {
    cb(array[i], arreglo);
  }
}

var func = (numero, arreglo) => {
  arreglo.push(numero);
  console.log(arreglo);
}

forEach([1, 2, 3, 4, 5], func);

module.exports = forEach;
