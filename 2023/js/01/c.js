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

console.log(formatSpelledLetters("eightwo"));
