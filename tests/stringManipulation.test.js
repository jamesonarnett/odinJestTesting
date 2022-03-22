const { reverseString, capitalize } = require("../src/js/stringManipulation");

it("reverseString", () => {
  expect(reverseString("word")).toBe("drow");
});

it("capitalizeString", () => {
  expect(capitalize("word")).toBe("Word");
});
