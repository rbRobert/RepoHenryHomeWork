function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  return objetoUsuario.email !== undefined && objetoUsuario.email !== null;
}

console.log(tieneEmail({usernombre: 'Samuel', email: 'samuel@email.com'}));
console.log(tieneEmail({usernombre: 'Jhon', email: null}));
console.log(tieneEmail({usernombre: 'Antonio'}));

module.exports = tieneEmail;
