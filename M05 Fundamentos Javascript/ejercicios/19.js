function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  if (num > 0) {
    return "Es positivo";
  } else if (num < 0) {
    return "Es negativo";
  }
    return false;
}
console.log(esPositivo(21));  
console.log(esPositivo(-6));  
console.log(esPositivo(6,5));  
console.log(esPositivo(0));  

module.exports = esPositivo;