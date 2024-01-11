function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  if (status === 1){
    return 'Online';
  } else if (status === 2) {
    return 'Away';
  } else {
    return 'Offline';
  }
}
console.log(conection(1));
console.log(conection(2));
console.log(conection(3));

module.exports = conection;
