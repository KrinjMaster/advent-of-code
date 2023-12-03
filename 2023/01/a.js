const fs = require("fs");

let totalSum = 0;

const data = fs.readFileSync("./text.txt", "utf-8").split("\n");

for (let i = 0; i < data.length - 1; i++) {
  const numString = data[i].replaceAll(/[a-z]/g, "");

  const trimmedNum = Number(
    numString.length > 1
      ? numString[0] + numString[numString.length - 1]
      : numString[0] + numString[0],
  );

  totalSum += trimmedNum;
}

console.log(totalSum);
