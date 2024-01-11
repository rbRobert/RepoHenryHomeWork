function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma = suma + arrayOfNums[i];
  }
  return suma;
}
console.log(agregarNumeros([10, 10, 16]));
console.log(agregarNumeros([97, 100]));
console.log(agregarNumeros([0, 0, 0]));

module.exports = agregarNumeros;
