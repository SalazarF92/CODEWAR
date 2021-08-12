// From argument weturn a pyramid that returns the sum of current line
//       1
//     3   5
//   7   9   11
// 13  15  17  19

// n = 4 returns 64

function rowSumOddNumbers(n) {
  const arrayPyr = new Array();
  let sum = 2;
  let toRow = 1;
  let number = 1;

  for (let row = 1; row < n + 1; row++) {
    for (let inRow = 0; inRow < toRow; inRow++) {
      arrayPyr.push(number);
      number = 1 + sum;
      sum = sum + 2;
    }
    toRow++;
  }
  const result = arrayPyr
    .slice(-n)
    .reduce((acc, currentValue) => acc + currentValue);

  console.log(result);

  return result;
}

rowSumOddNumbers(4);
