function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  let numerosVistos = new Set();
  let arreglo = new Array();
  for (let i = 0; i < numeros.length; i++) {
    if (numerosVistos.has(numeros[i])) {
      return numeros[i];
    } else {
      numerosVistos.add(numeros[i]);
    }
  }
  //return null;
}
console.log(encontrarElementoRepetido([2, 9, 9]));
console.log(encontrarElementoRepetido([1, 2, 3, 3, 4, 5]));
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 5]));
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 1]));
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 6]));

module.exports = encontrarElementoRepetido;
