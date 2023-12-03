const fs = require("fs");

let final = 0;

const data = fs
  .readFileSync("./text.txt", "utf-8")
  .split("\n")
  .filter((value) => value !== "")
  .map((value) => value.split(": ")[1].replaceAll(";", ",").split(", "));

for (let i = 0; i < data.length; i++) {
  const result = {
    red: 0,
    green: 0,
    blue: 0,
  };

  data[i].forEach((element) => {
    const [count, color] = element.split(" ");

    result[color] < Number(count) ? (result[color] = Number(count)) : null;
  });

  final += result.red * result.blue * result.green;
}

console.log(final);
