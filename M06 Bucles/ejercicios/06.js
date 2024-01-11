function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  let cad = '' + num;
  console.log(cad);
  console.log(cad.length);
  if (cad.length === 3) return true; 
  else return false;
}
console.log(tieneTresDigitos(10));
console.log(tieneTresDigitos(101));

module.exports = tieneTresDigitos;
