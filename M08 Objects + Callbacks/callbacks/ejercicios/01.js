function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  cb();
}

// function llamar() {
//   console.log('Hola Mundo');
// }

var llamar = function () {
  console.log('Hola Mundo');
}

invocarCallback(llamar);

module.exports = invocarCallback;
