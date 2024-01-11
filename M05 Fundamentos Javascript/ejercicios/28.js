function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  return 'Hola ' + nombre + '!';
}
console.log(obtenerSaludo('Jose'));

module.exports = obtenerSaludo;