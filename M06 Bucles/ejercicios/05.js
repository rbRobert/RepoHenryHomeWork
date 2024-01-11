function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  if (valor) return 'Soy verdadero';
  else return 'Soy falso';
}
console.log(esVerdadero(true));
console.log(esVerdadero(false));

module.exports = esVerdadero;
