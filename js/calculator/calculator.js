const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }

    return a / b;
}

function multiply(a, b){
  return a * b;
}

    // Calcular promedio
function average(numbers) {
    const sum = numbers.reduce((total, number) => total + number, 0);
    return sum / numbers.length;
}


    // Calcular factorial
function factorial(number) {
    if (number < 0 || !Number.isInteger(number)) {
        throw new Error("El número debe ser un entero no negativo");
    }

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

    // Sumar los primeros n números naturales
function sumNaturalNumbers(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("El número debe ser un entero no negativo");
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

    // Resolver ecuación cuadrática


// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply, average: average, factorial: factorial, sumNaturalNumbers: sumNaturalNumbers}; 
