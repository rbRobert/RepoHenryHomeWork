function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  if (objeto.hasOwnProperty(propiedad)) { // if (propiedad in objeto)
    objeto[propiedad] = valor;
    return objeto;
  } 
  objeto[propiedad] = valor;
  return objeto;
}

console.log(actualizarValorPropiedad({foo: 'bar'}, 'foo', 'baz')); // {foo: 'baz'}
console.log(actualizarValorPropiedad({foo: 'bar'}, 'baz', 42)); // {foo: 'bar', baz: 42}
console.log(actualizarValorPropiedad({foo: 'bar'}, 'foo', 'bar')); // {foo: 'bar'}

module.exports = actualizarValorPropiedad;
