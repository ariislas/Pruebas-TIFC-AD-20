const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 7 / 2 to equal 3.5', () => {
  expect(calculator.divide(7, 2)).toBe(3.5);
});

test('multiply 5 * 3 to equal 15', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('multiply -4 * 3 to equal -12', () => {
  expect(calculator.multiply(-4, 3)).toBe(-12);
});

test('debe mostrar un error al dividir entre cero', () => {
    expect(() => calculator.divide(10, 0)).toThrow();
});

//Calcular promedio
test('debe calcular el promedio de varios números', () => {
    expect(calculator.average([10, 5, 15])).toBeCloseTo(10);
});

//Calcular factorial 
test('debe calcular el factorial de un número', () => {
    expect(calculator.factorial(5)).toBe(120);
});

//Calcular la suma de los primeros n numeros naturales 
test('debe sumar los primeros 5 números naturales', () => {
    expect(calculator.sumNaturalNumbers(5)).toBe(15);
});

test('debe devolver cero cuando n es cero', () => {
    expect(calculator.sumNaturalNumbers(0)).toBe(0);
});