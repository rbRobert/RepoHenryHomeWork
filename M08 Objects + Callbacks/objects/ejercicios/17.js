function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}

console.log(actualizarPassword({password: 'Me encanta JS!',}, 'Me encanta JS mucho más!'));

module.exports = actualizarPassword;
