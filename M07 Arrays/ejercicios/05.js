function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
  }
  //return 'undefined';
}
console.log(obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "tester"]));
console.log(obtenerPrimerStringLargo(["hi", "there", "how", "are", "you"]));
console.log(obtenerPrimerStringLargo(["this","is","a","test","with","a","long","string",]));
console.log(obtenerPrimerStringLargo(["this", "is", "a", "test"]));

module.exports = obtenerPrimerStringLargo;
