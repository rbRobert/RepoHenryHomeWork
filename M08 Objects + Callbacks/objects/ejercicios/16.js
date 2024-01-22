function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  return objetoUsuario.password === password;
}

console.log(verificarPassword({password: 'Me encanta JS!',}, 'Me encanta JS!'));
console.log(verificarPassword({password: 'Me encanta JS!',}, 'Hacker time!'));

module.exports = verificarPassword;
