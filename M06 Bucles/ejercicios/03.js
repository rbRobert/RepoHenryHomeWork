function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  if (x === y) return x;
  else if (x > y) return x;
  else if (x < y )return y;
}
console.log(obtenerMayor(10, 12));
console.log(obtenerMayor(15, 12));
console.log(obtenerMayor(10, 10));

module.exports = obtenerMayor;
