console.log("welcome to hell");
console.log("i mean unit testing");

const caeserChiper = (string) => {
  let stringArr = string.split("");
  let codedArr = [];
  let finalArr = [];

  stringArr.forEach((letter) => {
    let charCode = letter.charCodeAt(0);
    charCode += 13;
    codedArr.push(charCode);
  });
  codedArr.forEach((code) => {
    console.log(code);
    let newChar = String.fromCharCode(code);
    finalArr.push(newChar);
  });
  return finalArr.join("");
};

const rot13 = (str) => {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[A-Z]/g)) {
      let charCode = str.charCodeAt(i);
      if (charCode + 13 <= 90) {
        charCode += 13;
      } else {
        charCode = charCode + 13 - 26;
      }
      arr[i] = String.fromCharCode(charCode);
    }
  }

  let result = arr.join("");
  return result;
};
