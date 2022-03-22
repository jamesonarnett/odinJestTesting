const calculator = require("../src/js/calculator");

it("CalcAddition", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

it("CalcAddition", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

it("CalcAddition", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

it("CalcDivision", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

//yes this works
// it("CalcAllOperators", () => {
//   expect(calculator.divide(5, 5)).toBe(1);
//   expect(calculator.multiply(5, 3)).toBe(15);
//   expect(calculator.subtract(1, 1)).toBe(0);
//   expect(calculator.add(1, 1)).toBe(2);
// });
