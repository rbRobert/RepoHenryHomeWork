function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  let min = array[0];
  let max = array[0];
  let indice = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } 
    if (array[i] > max) {
      indice = i;
      max = array[i];
    }
  }
  //return [min,max];
  return indice;
}
console.log(encontrarIndiceMayor([1, 2, 3, 4, 5]));
console.log(encontrarIndiceMayor([5, 4, 3, 2, 1]));
console.log(encontrarIndiceMayor([1, 3, 2, 5, 4]));
console.log(encontrarIndiceMayor([-1, -2, -3, -4, -5]));
console.log(encontrarIndiceMayor([-5, -4, -3, -2, -1]));
console.log(encontrarIndiceMayor([-1, -3, -2, -5, -4]));
console.log(encontrarIndiceMayor([8]));
console.log(encontrarIndiceMayor([]));

module.exports = encontrarIndiceMayor;
