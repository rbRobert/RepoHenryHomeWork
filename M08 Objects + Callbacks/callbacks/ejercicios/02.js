function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  if (arguments[1] === undefined) {
    return string;
  }
  return callback(string);
}

var callback = function (string) {
  return string.toUpperCase();
}

console.log(cambiarCadena('Hola', callback));
console.log(cambiarCadena('Hola', ));
console.log(cambiarCadena('Hola'));

module.exports = cambiarCadena;
