function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  return nombre + ' ' + apellido;
}
console.log(combinarNombres('Jose', 'Perez'));

module.exports = combinarNombres;
