function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  var re = /[\W_]/g;
  var lowRegStr = string.toLowerCase().replace(re, '');
  console.log('lowRegStr: ' + lowRegStr);
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  if (reverseStr === lowRegStr) {
    return true;  // return reverseStr === lowRegStr;
  } else {
    return false;
  }
}
console.log(esPalindromo('reconocer'));
console.log(esPalindromo('salas'));
console.log(esPalindromo('acurruca'));
console.log(esPalindromo('A man, a plan, a canal. Panama'));
console.log(esPalindromo('A man a plan a canal Panama'));
console.log(esPalindromo('departamentos'));

module.exports = esPalindromo;
