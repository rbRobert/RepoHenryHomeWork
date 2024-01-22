function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  objetoUsuario['amigos'][objetoUsuario['amigos'].length] = nuevoAmigo;  // objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
}

console.log(agregarAmigo({amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],}, 'Shay'));

module.exports = agregarAmigo;
