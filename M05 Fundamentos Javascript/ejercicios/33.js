function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // var m = 0;
  // var n = 1;
  // while (n != numero) {
  //   if ((numero % (n + 1)) == 0) {
  //     m = m + 1;
  //     n = n + 1;
  //   } else {
  //     n = n + 1;
  //   }
  // }
  // if (m == 1) {
  //   return true;
  // }
  // return false;
  if (numero  === 2){
    return true;
  } else if (numero < 2){
    return false;
  } 
  for(var contador = 2 ; contador < numero; contador++){
    if (numero % contador === 0){
      return false;
    }
  }
  return true;
}
console.log(esNumeroPrimo(2));
console.log(esNumeroPrimo(3));
console.log(esNumeroPrimo(7));
console.log(esNumeroPrimo(6));
console.log(esNumeroPrimo(8));
console.log(esNumeroPrimo(10));
console.log(esNumeroPrimo(50));
console.log(esNumeroPrimo(23));
console.log(esNumeroPrimo(127));

module.exports = esNumeroPrimo;
