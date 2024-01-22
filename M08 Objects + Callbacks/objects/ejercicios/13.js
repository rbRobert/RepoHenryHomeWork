function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  if ('z' in objeto){ // if(objeto.hasOwnProperty('z'))
    delete objeto[propiedad]; 
  }
  return objeto;
}

const object = {
  x: 1,
  y: 2,
  z: null,
};

console.log(eliminarPropiedad(object, 'z'));

module.exports = eliminarPropiedad;
