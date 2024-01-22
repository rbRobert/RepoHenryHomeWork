function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  return objetoMisterioso.numeroMisterioso * 5;
}

const mysteryBox = {
  numeroMisterioso: 999,
};

console.log(multiplicarNumeroDesconocidoPorCinco(mysteryBox));
mysteryBox.numeroMisterioso = -5;
console.log(multiplicarNumeroDesconocidoPorCinco(mysteryBox));

module.exports = multiplicarNumeroDesconocidoPorCinco;
