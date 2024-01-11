function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  if (edad >= 18) return 'Allowed';
  else return 'Not allowed';
}
console.log(mayoriaDeEdad(16));
console.log(mayoriaDeEdad(18));

module.exports = mayoriaDeEdad;
