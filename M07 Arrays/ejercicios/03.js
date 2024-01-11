function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  let cont = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[0]) {
      cont = cont + 1;
      if (cont === array.length) {
        return 0;
      }
    }
  }
  if (array.includes(elemento)) { // includes busca si el elemento esta en el arreglo
    return 1;
  }
  return -1;
}
console.log(encontrarElemento(2, [1, 2, 3]));
console.log(encontrarElemento(4, [1, 2, 3]));
console.log(encontrarElemento(2, [2, 2, 2]));
console.log(encontrarElemento(1, [1]));
console.log(encontrarElemento(1, []));

module.exports = encontrarElemento;
