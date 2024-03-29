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
  .map((arr, index) => {
    return arr[1]
      .map((val) => (arr[0].includes(val) ? 1 : 0))
      .reduce((val, prev) => val + prev);
  })
  .map((val) => (val > 0 ? Math.pow(2, val - 1) : 0))
  .reduce((val, prev) => val + prev);

console.log(data);
