function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento. 
  return array.reverse();
}
console.log(invertirArray(['refrigeradora','zodiaco', 'chile', 'leche']));
console.log(invertirArray([1, 2, 3]));
console.log(invertirArray([1, 'hola', true, null, undefined]));

module.exports = invertirArray;
