function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  var arreglo = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].substring(0, 1) === "a") {
      arreglo.push(arrayOfStrings[i]);
    }
  }
  return arreglo;
}

console.log(
  filter([
    "abajo",
    "pera",
    "escalera",
    "alerta",
    "indice",
    "azteca",
    "arbol",
    "buzo",
  ])
);

module.exports = filter;
