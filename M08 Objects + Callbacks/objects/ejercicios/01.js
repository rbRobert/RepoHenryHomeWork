const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  if (propiedad.includes(".")) {
    var array = propiedad.split("."); 
    var prop = objeto[array[0]];
    return prop[array[1]];
  } else if (propiedad.includes("[")) { // direccion["numero"]
    var prop = objeto[propiedad.split('["')[0]]; 
    return prop[propiedad.split('["')[1].split('"]')[0]];
 }
  return objeto[propiedad];
};

var persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  },
}

console.log(obtenerValorPropiedad(persona, 'nombre'));
console.log(obtenerValorPropiedad(persona, 'edad'));
console.log(obtenerValorPropiedad(persona, 'direccion.calle'));
console.log(obtenerValorPropiedad(persona, 'direccion["numero"]'));
console.log(obtenerValorPropiedad(persona, 'apellido'));
console.log(obtenerValorPropiedad(persona, 'direccion.codigoPostal'));

module.exports = obtenerValorPropiedad;
