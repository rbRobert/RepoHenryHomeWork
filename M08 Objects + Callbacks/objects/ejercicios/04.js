function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  if (objeto.hasOwnProperty(propiedad)) { // if (propiedad in objeto)
    return true;
  } else if (Object.keys(objeto).length === 0 || objeto === null){
    return 'vacio';
  }
  return false;
}

console.log(verificarPropiedad({name: "John", age: 30}, "name"));
console.log(verificarPropiedad({name: "John", age: 30}, "address"));
console.log(verificarPropiedad(john, "address"));  // falta terminar para este
console.log(verificarPropiedad(obj, "name")); // falta terminar para este

module.exports = verificarPropiedad;
