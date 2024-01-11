function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  if (booleano1 === true && booleano2 === true) return true;
  else return false;
}
console.log(esVerdaderoYFalso(true, true));
console.log(esVerdaderoYFalso(true, false));

module.exports = esVerdaderoYFalso;
