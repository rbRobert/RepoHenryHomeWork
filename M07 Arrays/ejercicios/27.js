function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // let cadena = '';
  // for (let i = 0; i < palabras.length; i++) {
  //   cadena = cadena + '-' + palabras[i];    
  // }
  return palabras.join(' ');
  // return cadena;
}
console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']));
console.log(dePalabrasAFrase(['Henry']));
console.log(dePalabrasAFrase(['Dias', 'De', 'La', 'Semana']));

module.exports = dePalabrasAFrase;
