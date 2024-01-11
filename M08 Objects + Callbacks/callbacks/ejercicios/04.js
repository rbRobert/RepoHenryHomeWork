function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  var suma = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    suma = suma + arrayOfNumbers[i];
  }
  cb(suma);
}

var sumarArreglo = (suma) => {
  console.log(suma);
}

sumarArray([1, 2, 3, 4, 5], sumarArreglo);

module.exports = sumarArray;
