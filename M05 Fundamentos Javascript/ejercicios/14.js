function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}
console.log(tienenMismaLongitud('cadena1', 'cadena2')); // true
console.log(tienenMismaLongitud('cadena10', 'cadena2')); // false

module.exports = tienenMismaLongitud;