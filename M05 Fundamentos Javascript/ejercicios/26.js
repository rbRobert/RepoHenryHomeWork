function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  return str+'!';
}
console.log(agregarSimboloExclamacion('Hola Mundo'));
console.log(agregarSimboloExclamacion('Funcion Cadena'));  

module.exports = agregarSimboloExclamacion;
