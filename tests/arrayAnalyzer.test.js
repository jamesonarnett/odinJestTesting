const { it, expect } = require("@jest/globals");
const arrayAnalyzer = require("../src/js/arrayAnalyzer");

it("arrAnalyzer", () => {
  expect(arrayAnalyzer([1, 2, 3])).toStrictEqual({
    average: 2,
    max: 3,
    min: 1,
    length: 3,
  });
});
