const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  return Object.keys(objeto).length;
};

console.log(contarPropiedades({a: 1, b: 2, c: 3})); // 3
console.log(contarPropiedades({name: "John", age: 30, city: "New York"})); // 3
console.log(contarPropiedades({1: "one", 2: "two", 3: "three", 4: "four"})); // 4
console.log(contarPropiedades({ })); // 0

module.exports = contarPropiedades;
