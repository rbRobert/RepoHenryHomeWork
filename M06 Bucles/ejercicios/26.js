function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  if (str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(esAnagrama('hola','halo'));
console.log(esAnagrama('hola','holaa'));
console.log(esAnagrama('Retener','enterre'));
console.log(esAnagrama('Castor','castro'));
console.log(esAnagrama('Lobo','bolo'));
console.log(esAnagrama('leche','chela'));

module.exports = esAnagrama;
