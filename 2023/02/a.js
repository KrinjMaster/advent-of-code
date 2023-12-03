const fs = require("fs");

let result = 0;

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

const data = fs.readFileSync("./text.txt", "utf-8").split("\n");

for (let i = 0; i < data.length - 1; i++) {
  const values = data[i]
    .slice(data[i].indexOf(":") + 2, data[i].length)
    .split("; ")
    .map((value) => {
      const blocks = value.split(", ");
      return blocks.every((value) => {
        const [count, color] = value.split(" ");
        return maxCount[color] >= Number(count);
      });
    })
    .every((p) => p);

  if (values) result += i + 1;
}

console.log(result);
