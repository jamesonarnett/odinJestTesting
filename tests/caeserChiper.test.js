const caeserChiper = require("../src/index");

//test proper reponse with known correct answer
it("tests Chiper operation", () => {
  expect(caeserChiper("word")).toBe("jbeq");
});

//test array is all of proper values/case
//this does not work....

const lowerCase = /[a-z]/g;
const upperCase = /[A-Z]/g;

//but this does... but i dont like it. I mean, this surely cant be it?
//whats the point of testing if i know all the answers..
it("Has ALL letters of same case", () => {
  expect(caeserChiper("word")).toContain("jbeq");
  expect(caeserChiper("WORD")).toContain("JBEQ");
});

it("Should include NO puncuation", () => {
  expect(caeserChiper("word")).not.toContain("!.,'");
});
