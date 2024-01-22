const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  if (objeto.hasOwnProperty(propiedad)) { // if (propiedad in objeto)
    objeto[propiedad] = valor;
    return objeto;
  } 
  objeto[propiedad] = valor;
  return objeto;
};

console.log(agregarNuevaPropiedad({name: "John", age: 30}, "city", "New York"));
console.log(agregarNuevaPropiedad({name: "John", age: 30}, "city", "Arkansas"));
console.log(agregarNuevaPropiedad({name: "John", age: 30}, "isMarried", true));
console.log(agregarNuevaPropiedad({name: "John", age: 30}, "job", null));

module.exports = agregarNuevaPropiedad;
