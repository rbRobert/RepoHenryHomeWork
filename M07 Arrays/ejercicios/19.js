function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  array = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    num = num + 2;
    array.push(num);
  }
  return array;
}
console.log(continueStatement(50));  // [52, 54, 56, 58, 60, 62, 64, 66, 68]
console.log(continueStatement(-4)); // [-2, 0, 2, 4, 6, 8, 10, 12, 14]

module.exports = continueStatement;
