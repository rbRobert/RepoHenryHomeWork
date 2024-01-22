function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  return {
    nombre: nombre,
    email: email,
    password: password
  };
}

const user = {
  nombre: 'Jhon',
  email: 'jhon@email.com', 
  password: 'correcthorsebatterystaple',
}; 

const user2 = {
  nombre: 'Samuel',
  email: 'samuel@email.com',
  password: 'password',
};

console.log(nuevoUsuario(user.nombre, user.email, user.password));
console.log(nuevoUsuario(user2.nombre, user2.email, user2.password));

module.exports = nuevoUsuario;
