function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  //console.log(`Hola ${nombre} tu tienes ${edad} años`);
  return {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return 'Meow!';
    }
  };
}

console.log(crearGato('Michu',3));
console.log(crearGato('Michu',3)['nombre']);
console.log(crearGato('Michu',3).nombre);
console.log(crearGato('Michu',3).edad);
console.log(crearGato('Michu',3).meow());

module.exports = crearGato;
