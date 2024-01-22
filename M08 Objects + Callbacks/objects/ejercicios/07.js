// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.
// una propiedad anidada es aquel objeto que tiene otro objeto como en este caso
const objetoAnidado = {
  propiedad1: "Juan",
  propiedad2: 30,
  propiedad3: {
    propiedad4: "Calle Principal",
    propiedad5: 123,
    propiedad6: {
      propiedad7: "valor5",
      propiedad8: "valor6",
      propiedad9: function() {
        return "valor7";
      },
    },
    obtenerDireccion: function() { 
      return "La propiedad1 es: " + this.propiedad1;
    }
  },
};

console.log(objetoAnidado);
console.log(objetoAnidado.propiedad1);
console.log(objetoAnidado.propiedad2);
console.log(objetoAnidado.propiedad3);
console.log(objetoAnidado.propiedad3.propiedad4);
console.log(objetoAnidado.propiedad3.propiedad5);
console.log(objetoAnidado.propiedad3.propiedad6);
console.log(objetoAnidado.propiedad3.propiedad6.propiedad9());

module.exports = objetoAnidado;
