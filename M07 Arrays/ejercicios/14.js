function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  let producto = 1;
  if (arguments.length === 0) {
    return 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    // if (arguments.length >= 1) {
      producto = producto * arguments[i];
    // }
  }
  return producto;
}
console.log(multiplicarArgumentos(5, 6, 9));
console.log(multiplicarArgumentos(3, 3, 3, 3));
console.log(multiplicarArgumentos(5, 5));
console.log(multiplicarArgumentos(5));
console.log(multiplicarArgumentos());
console.log(multiplicarArgumentos(10, 0, 10));

module.exports = multiplicarArgumentos;
