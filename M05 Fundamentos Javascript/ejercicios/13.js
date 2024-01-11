function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  if (x == y) {
    return true;
  } 
  return false;
}
console.log(sonIguales(8, 8));

module.exports = sonIguales;