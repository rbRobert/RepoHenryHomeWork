function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // var fechaNacimiento = new Date(fechaNacimiento).toISOString().getFullYear();
  console.log(new Date(fechaNacimiento));
  var fechaNacimiento = new Date(fechaNacimiento).getFullYear();
  console.log("fechaNacimiento: " + fechaNacimiento);
  let fechaActual = new Date();
  console.log(fechaActual);
  console.log("fechaActual: " + fechaActual.getFullYear());
  if ((fechaActual.getFullYear() - fechaNacimiento) >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(esMayorDeEdad("2005-10-12"));

module.exports = esMayorDeEdad;
