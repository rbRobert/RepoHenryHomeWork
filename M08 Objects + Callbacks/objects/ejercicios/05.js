const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Object.keys().length  devuelve el numero de llaves o propiedades
  return Object.keys(objeto); // devuelve un arreglo con las llaves o propiedades del objeto 
};

console.log(listarPropiedades({name: "John", age: 30, city: "New York", }));
console.log(listarPropiedades({ }));
console.log(listarPropiedades({
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
}));
console.log(listarPropiedades({
  name: "John",
  age: 30,
  hobbies: ["reading", "swimming", "traveling"],
}));

module.exports = listarPropiedades;
