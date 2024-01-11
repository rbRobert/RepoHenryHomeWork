function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  let array = [];
  for (let i = 0; i < 11; i++) {
    array.push(i * 6); 
  }
  return array;
}
console.log(tablaDelSeis());

module.exports = tablaDelSeis;
