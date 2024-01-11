function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  let n = a;
  let productoDeTodos = a;
  if (a == b) {
    return a;
  }
  if ((a + b) == 0 && a < 0 && b > a) {
    return 0;
  }
  while (n != b) {
    n = n + 1;
    productoDeTodos = productoDeTodos * n;
  }
  return productoDeTodos;
}
console.log(productoEntreNúmeros(-2, 2));
console.log(productoEntreNúmeros(-5, 5));
console.log(productoEntreNúmeros(-1, 1));
console.log(productoEntreNúmeros(1, 5));
console.log(productoEntreNúmeros(2, 4));
console.log(productoEntreNúmeros(-2, -2));
console.log(productoEntreNúmeros(2, 2));
console.log(productoEntreNúmeros(2, 4));
console.log(productoEntreNúmeros(5, 5));
console.log(productoEntreNúmeros(0, 10));

module.exports = productoEntreNúmeros;
