function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // if (Date.parse(fecha)) { 
  //   return true
  // } else {
  //   return false
  // }
  var hoy = new Date();
  if (hoy >= fecha){
    console.log('hoy: ' + hoy);
    console.log('fecha: ' + fecha);
    return true
  } else {
    return false
  }
/*   if (fecha instanceof Date) {
    const tiempoEnMilisegundos = fecha.getTime();
    console.log("tiempoEnMilisegundos: " + tiempoEnMilisegundos);
    if (!isNaN(tiempoEnMilisegundos)) { // isNaN() metodo que valida que no sea numerico
      return true;
    }
  }
  return false; */
}

console.log(esFechaValida(new Date("2023-12-10"))); // true
console.log(esFechaValida("10/12/2023")); // false
console.log(esFechaValida(15)); // false
console.log(esFechaValida("Fecha")); // false

module.exports = esFechaValida;
