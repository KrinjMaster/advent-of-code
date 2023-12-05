const fs = require("fs");

const data = fs
  .readFileSync("./text.txt", "utf-8")
  .split("\n")
  .filter((str) => str !== "")
  .map((str) => str.split(": ")[1])
  .map((str) =>
    str.split(" | ").map((str) =>
      str
        .split(" ")
        .filter((str) => str !== "")
        .map((str) => Number(str)),
    ),
  )
  .map((arr) => {
    return arr[1]
      .map((val) => (arr[0].includes(val) ? 1 : 0))
      .reduce((val, prev) => val + prev);
  })
  .map((el) => [el, 1])
  .map((val, index, arr) => {
    const newArr = arr;

    for (let j = 0; j < val[1]; j++) {
      for (let i = 0; i < val[0]; i++) {
        newArr[i + index + 1][1] += 1;
      }
    }

    return newArr[index];
  })
  .map((el) => el[1])
  .reduce((val, prev) => val + prev);

console.log(data);
