function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // const indice = objetoMuchosUsuarios.findIndex(objetoMuchosUsuario => objetoMuchosUsuario.esPremium === false);
  // if (indice !== -1) {
  //   objetoMuchosUsuarios[indice].esPremium = true;
  // }
  objetoMuchosUsuarios.forEach(objetoUsuario => {
    if (objetoUsuario.esPremium === false) {
      objetoUsuario.esPremium = true;
    }
  });
  return objetoMuchosUsuarios;
}

const usuarios = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
];

console.log(pasarUsuarioAPremium(usuarios));

module.exports = pasarUsuarioAPremium;
