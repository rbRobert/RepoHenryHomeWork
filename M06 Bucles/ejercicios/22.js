function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  if (mes >= 0 && mes <= 12) {
    return new Date(new Date().getFullYear(), mes, 0).getDate();
  } else {
    return 0;
  }
}
console.log(diasEnMes(1));
console.log(diasEnMes(2));
console.log(diasEnMes(4));
console.log(diasEnMes(13));
console.log(diasEnMes(-1));

module.exports = diasEnMes;
