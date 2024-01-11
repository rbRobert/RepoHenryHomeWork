function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  if (num % 3 === 0) {
    if (num % 15 === 0) return "fizzbuzz";
    return "fizz";
  } else if (num % 5 === 0) {
    if (num % 15 === 0) return "fizzbuzz";
    return "buzz";
  } else return false;
}
console.log(fizzBuzz(16));
console.log(fizzBuzz(9));
console.log(fizzBuzz(20));
console.log(fizzBuzz(15));
console.log(fizzBuzz(30));

module.exports = fizzBuzz;
