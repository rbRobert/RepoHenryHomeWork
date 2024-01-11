function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  let num = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != num) {
      return false;
    }
  }
  return true;
}
console.log(todosIguales([20, 20, 20, 20]));
console.log(todosIguales([230, 230, 230, 230]));
console.log(todosIguales([97, 100, 190, 9]));
console.log(todosIguales([100, 100, 100, 0]));

module.exports = todosIguales;
