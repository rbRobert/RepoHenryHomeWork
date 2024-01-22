function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  objeto[propiedad] = null;
  return objeto;
}

console.log(agregarPropiedad({x: 1, y: 2}, 'z'));

module.exports = agregarPropiedad;
