function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  let array1 = [];
  let cont = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre') {
      cont = cont + 1;
      array1[cont] = array[i];
    }
  }
  if (cont == 2) {
    return array1;
  }
  return 'No se encontraron los meses pedidos';
}
console.log(mesesDelAño(['Marzo','Diciembre','Abril','Junio','Julio','Noviembre','Enero','Mayo','Febrero',]));
console.log(mesesDelAño(['Marzo', 'Diciembre', 'Julio', 'Noviembre']));
console.log(mesesDelAño(['Diciembre', 'Julio', 'Junio', 'Marzo']));

module.exports = mesesDelAño;
