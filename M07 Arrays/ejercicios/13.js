function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];
  }
  return suma / resultadosTest.length;
}
console.log(promedioResultadosTest([10, 10, 16, 12]));
console.log(promedioResultadosTest([97, 100, 80, 55, 72, 94]));

module.exports = promedioResultadosTest;
