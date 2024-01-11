function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
    var separarCadena = texto.split("");
    console.log('separarCadena: ' + separarCadena);
    var invertirArreglo = separarCadena.reverse();
    console.log('invertirArreglo: ' + invertirArreglo);
    var unirArreglo = invertirArreglo.join("");
    console.log('unirArreglo: ' + unirArreglo);
    return unirArreglo;
}
console.log(invertirTexto('Alemania'));
console.log(invertirTexto('Estados Unidos'));
console.log(invertirTexto('Me gusta Arkansas'));

module.exports = invertirTexto;
