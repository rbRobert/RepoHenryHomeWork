function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  let cadena = '' + num;
  let tamano = cadena.length;
  let n = 0;
  while (n != tamano){
    n = n + 1;
    if (cadena.substring(n-1, n) === '.') return false;
  }
  return true;
}
console.log(esEntero(12.568));
console.log(esEntero(128));
console.log(esEntero(-10));
console.log(esEntero(0));

module.exports = esEntero;
