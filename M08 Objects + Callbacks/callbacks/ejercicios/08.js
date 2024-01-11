const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  return callback(array);  
};

var callback = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].age === 30) {
      return array[i];
    }
  }
  if (array.includes(3)) {
    return 3;
  } else if (!array.includes(6)) {
    return "No se encontró el elemento";
  } 
}

console.log(buscarElemento([1, 2, 3, 4, 5], callback));
console.log(buscarElemento([], callback));
console.log(buscarElemento([
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
], callback));

module.exports = buscarElemento;
