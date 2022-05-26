var factorial = function(number) {
    var result = 1;
    var count;
    for (count = number; count > 1; count--) {
      result *= count;
    }
    return result;
  };

  factorialNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");

  console.log(`La factorielle de ${factorialNumber} est : ${factorial(factorialNumber)}`);