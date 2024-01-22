function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  if (Number.isInteger(numero)){
    return true
  } else {
    return false
  }
}

console.log(esNumeroEntero(10)); 
console.log(esNumeroEntero(0)); 
console.log(esNumeroEntero(-1)); 
console.log(esNumeroEntero(15.6)); 
console.log(esNumeroEntero(-3.14)); 
console.log(esNumeroEntero("42")); 
console.log(esNumeroEntero(NaN)); 
console.log(esNumeroEntero({})); 
console.log(esNumeroEntero(undefined)); 
console.log(esNumeroEntero([])); 
console.log(esNumeroEntero(() => {})); 

module.exports = esNumeroEntero;