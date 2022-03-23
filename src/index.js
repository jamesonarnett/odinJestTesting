const caeserChiper = (string) => {
  let stringArr = string.split("");
  let codedArr = [];
  let finalArr = [];

  stringArr.forEach((letter) => {
    if (letter.match(/[A-Z]/g)) {
      let charCode = letter.charCodeAt(0);
      if (charCode + 13 <= 90) {
        charCode += 13;
        codedArr.push(charCode);
      } else {
        charCode = charCode + 13 - 26;
        codedArr.push(charCode);
      }
    }

    if (letter.match(/[a-z]/g)) {
      let charCode = letter.charCodeAt(0);
      if (charCode + 13 <= 122) {
        charCode += 13;
        codedArr.push(charCode);
      } else {
        charCode = charCode + 13 - 26;
        codedArr.push(charCode);
      }
    }
  });

  codedArr.forEach((code) => {
    let newChar = String.fromCharCode(code);
    finalArr.push(newChar);
  });
  return finalArr.join("");
};

//test test test test
//ONLY CAPS FOR ROT13, COPIED FROM PREVIOUS WORK IVE DONE ON FREECODECAMP
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

console.log(caeserChiper("JAMESON"));
console.log(caeserChiper("jameson"));
console.log(rot13(caeserChiper("JAMESON")));

module.export = caeserChiper;
