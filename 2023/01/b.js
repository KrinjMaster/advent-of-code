const fs = require("fs");

let totalSum = 0;
const spelledLetters = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const data = fs.readFileSync("./text.txt", "utf-8").split("\n");

const formatSpelledLetters = (string) => {
  let formatedString = string;

  for (let i = 0; i < string.length; i++) {
    let slicedString = formatedString.slice(0, i + 1);

    for (let j = 0; j < spelledLetters.length; j++) {
      if (slicedString.includes(spelledLetters[j])) {
        formatedString = formatedString.replace(
          spelledLetters[j],
          `${j + 1}` + spelledLetters[j][spelledLetters[j].length - 1],
        );
      }
    }
  }

  return formatedString;
};

for (let i = 0; i < data.length; i++) {
  const numString = formatSpelledLetters(data[i]).replaceAll(/[a-z]/g, "");

  const trimmedNum = Number(
    numString.length > 1
      ? numString[0] + numString[numString.length - 1]
      : numString[0] + numString[0],
  );

  if (trimmedNum) {
    totalSum += trimmedNum;
  }
}

console.log(totalSum);
