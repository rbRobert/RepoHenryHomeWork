function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada
  if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === 'function') {
    objeto[metodo]();
  } else {
    console.log(`El objeto no tiene un método llamado ${metodo}`);
  }
}

const miObjeto = {
  x: 0,
  miFuncion: function () {
    this.x++;
  },
};

invocarMetodo(miObjeto, 'miFuncion');
console.log(miObjeto.x); 

module.exports = invocarMetodo;
