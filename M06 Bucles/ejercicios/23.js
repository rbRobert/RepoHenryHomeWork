function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  let i = 0;
  do {
     i = i + 1;
     num = num + 5;
  } while (i < 8)
  return num;
}
console.log(doWhile(30));

module.exports = doWhile;