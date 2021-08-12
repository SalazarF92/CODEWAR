//Send string argument and returns the current word separated by each letter adding 1 for each position. Example: s = dbca returns d-bb-ccc-aaa

function accum(s) {
  if (typeof s == "number") {
    return console.log("Número não passa");
  }
  const sArray = s.split("");
  const newArray = new Array();
  const result = new Array();

  sArray.map((letter, i) => {
    for (let number = 0; number <= i; number++) {
      if (letter == letter.toUpperCase() && number == 0) {
        newArray.push(letter);
      } else if (letter == letter.toUpperCase() && number != 0) {
        newArray.push(letter.toLowerCase());
      }

      if (letter == letter.toLowerCase() && number == 0) {
        newArray.push(letter.toUpperCase());
      } else if (letter == letter.toLowerCase() && number != 0) {
        newArray.push(letter.toLowerCase());
      }
    }
    result.push(newArray.join(""));
    newArray.splice(0, newArray.length);
  });
  console.log(result.join("-"));
  return result.join("-");
}

accum('abcd')

// function accum2(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }
