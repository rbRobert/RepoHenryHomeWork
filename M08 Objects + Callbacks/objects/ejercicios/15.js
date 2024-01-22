function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  if (propiedad in objeto) {
    return true;
  }
  return false;
}

console.log(tienePropiedad({x: true,}, 'x'));
console.log(tienePropiedad({x: true,}, 'y'));

module.exports = tienePropiedad;
