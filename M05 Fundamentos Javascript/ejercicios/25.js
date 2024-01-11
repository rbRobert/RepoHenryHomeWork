function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  return x % y;
}
console.log(obtenerResto(10, 5));
console.log(obtenerResto(8, 3));  

module.exports = obtenerResto;